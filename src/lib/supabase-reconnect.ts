import { supabase } from './supabase';

/**
 * Utilitar pentru gestionarea reconectării la Supabase când utilizatorul schimbă tab-urile
 */
class SupabaseReconnectManager {
  private isVisible: boolean = true;
  private reconnectTimeout: number | null = null;

  constructor() {
    this.init();
  }

  /**
   * Inițializează managerul de reconectare
   */
  init() {
    // Adăugăm event listeners pentru vizibilitatea paginii
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    window.addEventListener('focus', this.handleWindowFocus.bind(this));
    window.addEventListener('blur', this.handleWindowBlur.bind(this));
    
    console.log('🔄 Supabase Reconnect Manager inițializat');
  }

  /**
   * Gestionează schimbarea stării de vizibilitate a documentului
   */
  private handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
      this.handlePageBecameVisible();
    } else {
      this.handlePageBecameHidden();
    }
  }

  /**
   * Gestionează evenimentul când fereastra primește focus
   */
  private handleWindowFocus() {
    this.handlePageBecameVisible();
  }

  /**
   * Gestionează evenimentul când fereastra pierde focus
   */
  private handleWindowBlur() {
    this.handlePageBecameHidden();
  }

  /**
   * Acțiuni de efectuat când pagina devine vizibilă
   */
  private handlePageBecameVisible() {
    if (!this.isVisible) {
      console.log('📱 Tab-ul a devenit vizibil, verificăm conexiunea Supabase...');
      this.isVisible = true;
      this.reconnectToSupabase();
    }
  }

  /**
   * Acțiuni de efectuat când pagina devine ascunsă
   */
  private handlePageBecameHidden() {
    this.isVisible = false;
    console.log('🔌 Tab-ul a devenit invizibil, marcăm pentru reconectare la revenire');
    
    // Anulăm orice timeout de reconectare existent
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }
  }

  /**
   * Reconectează la Supabase și reîmprospătează datele
   */
  private async reconnectToSupabase() {
    try {
      console.log('🔄 Încercăm reconectarea la Supabase...');
      
      // Verificăm dacă avem o sesiune validă
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('❌ Eroare la obținerea sesiunii:', sessionError);
        return;
      }
      
      if (session) {
        // Reîmprospătăm sesiunea pentru a asigura că token-ul este valid
        const { error: refreshError } = await supabase.auth.refreshSession();
        
        if (refreshError) {
          console.error('❌ Eroare la reîmprospătarea sesiunii:', refreshError);
          return;
        }
        
        console.log('✅ Sesiunea a fost reîmprospătată cu succes');
        
        // Declanșăm un eveniment custom pentru a notifica componentele că trebuie să reîncarce datele
        window.dispatchEvent(new CustomEvent('supabase-reconnected'));
      } else {
        console.log('ℹ️ Nu există o sesiune activă, nu este necesară reconectarea');
      }
    } catch (error) {
      console.error('💥 Eroare neașteptată la reconectare:', error);
    }
  }
}

// Exportăm o instanță singleton
export const supabaseReconnect = new SupabaseReconnectManager();

// Funcție pentru a forța o reconectare manuală
export const forceReconnect = () => {
  console.log('🔄 Forțăm reconectarea la Supabase...');
  supabase.auth.refreshSession();
  window.dispatchEvent(new CustomEvent('supabase-reconnected'));
};