import React, { useEffect, useState } from 'react';
import { RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { supabaseReconnect, forceReconnect } from '../lib/supabase-reconnect';

/**
 * Componentă care gestionează reconectarea la Supabase când utilizatorul schimbă tab-urile
 * și oferă un buton de reconectare manuală în caz de probleme
 */
const ReconnectHandler: React.FC = () => {
  const [showReconnectButton, setShowReconnectButton] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [reconnectCount, setReconnectCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Verificăm starea conexiunii la internet
    const handleOnline = () => {
      setIsOnline(true);
      // Când revenim online, forțăm o reconectare
      setTimeout(() => {
        forceReconnect();
      }, 1000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowReconnectButton(true);
    };

    // Ascultăm pentru erori de rețea care ar putea indica probleme de conectivitate
    const handleNetworkError = (event: ErrorEvent) => {
      if (event.message && (
        event.message.includes('network') || 
        event.message.includes('fetch') || 
        event.message.includes('connection')
      )) {
        setShowReconnectButton(true);
      }
    };

    // Ascultăm pentru evenimentul de reconectare reușită
    const handleReconnected = () => {
      setIsReconnecting(false);
      setReconnectCount(prev => prev + 1);
      
      // Ascundem butonul după o reconectare reușită
      setTimeout(() => {
        setShowReconnectButton(false);
      }, 3000);
    };

    // Ascultăm pentru evenimentul de vizibilitate a documentului
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Când tab-ul devine vizibil, verificăm dacă trebuie să afișăm butonul de reconectare
        setTimeout(() => {
          const loadingElements = document.querySelectorAll('.loading-indicator');
          if (loadingElements.length > 0) {
            setShowReconnectButton(true);
          }
        }, 2000); // Așteptăm 2 secunde pentru a vedea dacă datele se încarcă normal
      }
    };

    // Înregistrăm toți listenerii
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('error', handleNetworkError as EventListener);
    window.addEventListener('supabase-reconnected', handleReconnected);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Curățăm listenerii la demontare
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('error', handleNetworkError as EventListener);
      window.removeEventListener('supabase-reconnected', handleReconnected);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleManualReconnect = () => {
    setIsReconnecting(true);
    forceReconnect();
    
    // Dacă nu primim evenimentul de reconectare în 5 secunde, resetăm starea
    setTimeout(() => {
      if (isReconnecting) {
        setIsReconnecting(false);
      }
    }, 5000);
  };

  // Nu afișăm nimic dacă nu este necesar butonul de reconectare
  if (!showReconnectButton) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <button
        onClick={handleManualReconnect}
        disabled={isReconnecting}
        className="flex items-center space-x-2 bg-white border border-gray-200 shadow-lg px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-70"
      >
        {isReconnecting ? (
          <>
            <div className="w-5 h-5 border-2 border-nexar-accent border-t-transparent rounded-full animate-spin"></div>
            <span className="font-medium">Reconectare...</span>
          </>
        ) : (
          <>
            {isOnline ? (
              <Wifi className="h-5 w-5 text-nexar-accent" />
            ) : (
              <WifiOff className="h-5 w-5 text-red-500" />
            )}
            <span className="font-medium">
              {isOnline ? 'Reconectează' : 'Fără conexiune'}
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default ReconnectHandler;