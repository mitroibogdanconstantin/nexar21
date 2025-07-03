import React, { useEffect, useState } from 'react';
import { RefreshCw, Wifi, WifiOff } from 'lucide-react';
import { forceReconnect, isTabVisible } from '../lib/tab-visibility-handler';

/**
 * Componentă care gestionează vizibilitatea tab-urilor și oferă un buton de reconectare
 * în caz de probleme de conectivitate
 */
const TabVisibilityHandler: React.FC = () => {
  const [showReconnectButton, setShowReconnectButton] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [stuckLoadingDetected, setStuckLoadingDetected] = useState(false);

  useEffect(() => {
    // Verificăm starea conexiunii la internet
    const handleOnline = () => {
      setIsOnline(true);
      // Când revenim online, forțăm o reconectare
      setTimeout(() => {
        handleManualReconnect();
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

    // Ascultăm pentru evenimentul de schimbare a vizibilității tab-ului
    const handleTabVisibilityChange = (event: CustomEvent) => {
      if (event.detail?.visible) {
        // Verificăm dacă există elemente de loading blocate
        setTimeout(() => {
          checkStuckLoadingElements();
        }, 5000);
      }
    };

    // Verificăm periodic elementele de loading blocate
    const checkStuckLoadingElements = () => {
      const loadingElements = document.querySelectorAll('.loading-indicator');
      if (loadingElements.length > 0 && isTabVisible()) {
        setStuckLoadingDetected(true);
        setShowReconnectButton(true);
      } else {
        setStuckLoadingDetected(false);
      }
    };

    // Verificăm periodic elementele de loading
    const loadingCheckInterval = setInterval(checkStuckLoadingElements, 10000);

    // Înregistrăm toți listenerii
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('error', handleNetworkError as EventListener);
    window.addEventListener('tab-visibility-change', handleTabVisibilityChange as EventListener);

    // Curățăm listenerii la demontare
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('error', handleNetworkError as EventListener);
      window.removeEventListener('tab-visibility-change', handleTabVisibilityChange as EventListener);
      clearInterval(loadingCheckInterval);
    };
  }, []);

  const handleManualReconnect = () => {
    setIsReconnecting(true);
    forceReconnect();
    
    // Ascundem butonul după o perioadă
    setTimeout(() => {
      setIsReconnecting(false);
      setShowReconnectButton(false);
      setStuckLoadingDetected(false);
      
      // Reîncărcăm pagina dacă am detectat elemente blocate
      if (stuckLoadingDetected) {
        window.location.reload();
      }
    }, 3000);
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
              <RefreshCw className="h-5 w-5 text-nexar-accent" />
            ) : (
              <WifiOff className="h-5 w-5 text-red-500" />
            )}
            <span className="font-medium">
              {stuckLoadingDetected ? 'Reîncarcă datele' : 
               isOnline ? 'Reconectează' : 'Fără conexiune'}
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default TabVisibilityHandler;