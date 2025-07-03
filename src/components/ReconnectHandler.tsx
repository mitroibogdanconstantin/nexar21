import React, { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { supabaseReconnect, forceReconnect } from '../lib/supabase-reconnect';

/**
 * Componentă care gestionează reconectarea la Supabase când utilizatorul schimbă tab-urile
 * și oferă un buton de reconectare manuală în caz de probleme
 */
const ReconnectHandler: React.FC = () => {
  const [showReconnectButton, setShowReconnectButton] = useState(false);
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [reconnectCount, setReconnectCount] = useState(0);

  useEffect(() => {
    // Inițializăm managerul de reconectare (deși este deja inițializat în fișierul său)
    // Acest cod este doar pentru siguranță
    if (typeof window !== 'undefined') {
      // Asigurăm-ne că supabaseReconnect este inițializat
      console.log('🔄 ReconnectHandler montat și activ');
    }

    // Ascultăm pentru erori de rețea care ar putea indica probleme de conectivitate
    const handleNetworkError = () => {
      setShowReconnectButton(true);
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

    // Ascultăm pentru erori de rețea
    window.addEventListener('error', handleNetworkError);
    window.addEventListener('supabase-reconnected', handleReconnected);

    return () => {
      window.removeEventListener('error', handleNetworkError);
      window.removeEventListener('supabase-reconnected', handleReconnected);
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
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleManualReconnect}
        disabled={isReconnecting}
        className="flex items-center space-x-2 bg-nexar-accent text-white px-4 py-2 rounded-lg shadow-lg hover:bg-nexar-gold transition-colors disabled:opacity-70"
      >
        {isReconnecting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Reconectare...</span>
          </>
        ) : (
          <>
            <RefreshCw className="h-4 w-4" />
            <span>Reconectează</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ReconnectHandler;