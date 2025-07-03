import { supabase } from './supabase';

/**
 * Manager pentru gestionarea vizibilității tab-urilor și reconectarea automată
 * Această clasă rezolvă problema cu blocarea la "Se încarcă..." când utilizatorul schimbă tab-urile
 */
class TabVisibilityHandler {
  private isVisible: boolean = true;
  private lastActiveTime: number = Date.now();
  private reconnectTimeouts: Map<string, number> = new Map();
  private loadingTimers: Map<string, number> = new Map();
  private readonly INACTIVITY_THRESHOLD = 3000; // 3 secunde
  private readonly MAX_LOADING_TIME = 8000; // 8 secunde maxim pentru încărcare

  constructor() {
    this.init();
  }

  /**
   * Inițializează managerul de vizibilitate
   */
  init() {
    console.log('🔍 Inițializare Tab Visibility Handler');
    
    // Adăugăm event listeners pentru vizibilitatea paginii
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    window.addEventListener('focus', this.handleWindowFocus.bind(this));
    window.addEventListener('blur', this.handleWindowBlur.bind(this));
    
    // Verificăm periodic elementele de loading blocate
    setInterval(() => {
      if (this.isVisible) {
        this.checkStuckLoadingElements();
      }
    }, 2000);
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
      console.log('👁️ Tab-ul a devenit vizibil');
      this.isVisible = true;
      
      // Verificăm dacă a trecut suficient timp pentru a necesita o reconectare
      const currentTime = Date.now();
      const timeSinceLastActive = currentTime - this.lastActiveTime;
      
      if (timeSinceLastActive > this.INACTIVITY_THRESHOLD) {
        console.log(`⏱️ Au trecut ${Math.round(timeSinceLastActive / 1000)} secunde de inactivitate`);
        this.triggerReconnect('visibility');
      }
      
      // Verificăm elementele de loading blocate
      this.checkStuckLoadingElements();
    }
    
    // Actualizăm timpul de activitate
    this.lastActiveTime = Date.now();
  }

  /**
   * Acțiuni de efectuat când pagina devine ascunsă
   */
  private handlePageBecameHidden() {
    this.isVisible = false;
    console.log('🔌 Tab-ul a devenit invizibil');
    
    // Anulăm orice timeout de reconectare existent
    this.reconnectTimeouts.forEach((timeoutId, key) => {
      window.clearTimeout(timeoutId);
      this.reconnectTimeouts.delete(key);
    });
    
    // Salvăm timpul când utilizatorul a părăsit tab-ul
    this.lastActiveTime = Date.now();
  }

  /**
   * Verifică dacă există elemente de loading blocate și le rezolvă
   */
  private checkStuckLoadingElements() {
    const loadingElements = document.querySelectorAll('.loading-indicator');
    
    loadingElements.forEach((element, index) => {
      const elementId = `loading-${index}`;
      
      // Dacă nu avem deja un timer pentru acest element, îl creăm
      if (!this.loadingTimers.has(elementId)) {
        this.loadingTimers.set(elementId, window.setTimeout(() => {
          // Dacă elementul încă există după timpul maxim, declanșăm o reconectare
          if (document.contains(element)) {
            console.log('⚠️ Element de loading blocat detectat, forțăm reîncărcarea');
            this.triggerReconnect('stuck-loading');
            
            // Adăugăm un buton de reîncărcare manuală lângă elementul blocat
            const reconnectButton = document.createElement('button');
            reconnectButton.innerText = 'Reîncarcă datele';
            reconnectButton.className = 'mt-4 bg-nexar-accent text-white px-4 py-2 rounded-lg text-sm hover:bg-nexar-gold transition-colors';
            reconnectButton.onclick = () => this.triggerReconnect('manual');
            
            element.appendChild(reconnectButton);
          }
          
          // Ștergem timer-ul
          this.loadingTimers.delete(elementId);
        }, this.MAX_LOADING_TIME));
      }
    });
    
    // Curățăm timer-ele pentru elementele care nu mai există
    this.loadingTimers.forEach((timerId, elementId) => {
      const index = parseInt(elementId.split('-')[1]);
      if (index >= loadingElements.length || !document.contains(loadingElements[index])) {
        window.clearTimeout(timerId);
        this.loadingTimers.delete(elementId);
      }
    });
  }

  /**
   * Declanșează o reconectare și reîncărcare a datelor
   */
  private triggerReconnect(reason: string) {
    // Evităm reconectări multiple în același timp
    if (this.reconnectTimeouts.has(reason)) {
      return;
    }
    
    console.log(`🔄 Declanșăm reconectare (motiv: ${reason})...`);
    
    // Setăm un timeout pentru a evita reconectări multiple
    this.reconnectTimeouts.set(reason, window.setTimeout(async () => {
      try {
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
        }
        
        // Verificăm conexiunea cu o cerere simplă
        const { error: testError } = await supabase
          .from('profiles')
          .select('count', { count: 'exact', head: true });
        
        if (testError) {
          console.error('❌ Eroare la testarea conexiunii:', testError);
          return;
        }
        
        console.log('✅ Conexiunea la Supabase este funcțională');
        
        // Declanșăm un eveniment custom pentru a notifica componentele că trebuie să reîncarce datele
        window.dispatchEvent(new CustomEvent('tab-visibility-change', {
          detail: { visible: true, reason }
        }));
        
        // Reîncărcăm pagina doar dacă avem elemente de loading blocate
        if (reason === 'stuck-loading') {
          console.log('🔄 Reîncărcăm pagina pentru a rezolva elementele blocate');
          window.location.reload();
        }
      } catch (error) {
        console.error('💥 Eroare neașteptată la reconectare:', error);
      } finally {
        // Ștergem timeout-ul
        this.reconnectTimeouts.delete(reason);
      }
    }, 500));
  }

  /**
   * Forțează o reconectare manuală
   */
  forceReconnect() {
    this.triggerReconnect('manual');
  }

  /**
   * Verifică dacă tab-ul este vizibil
   */
  isTabVisible() {
    return this.isVisible;
  }
}

// Exportăm o instanță singleton
export const tabVisibilityHandler = new TabVisibilityHandler();

// Funcție pentru a forța o reconectare manuală
export const forceReconnect = () => {
  tabVisibilityHandler.forceReconnect();
};

// Funcție pentru a verifica dacă tab-ul este vizibil
export const isTabVisible = () => {
  return tabVisibilityHandler.isTabVisible();
};