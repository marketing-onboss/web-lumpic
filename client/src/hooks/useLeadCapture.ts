import { useLeadCaptureContext } from '@/contexts/LeadCaptureContext';

/**
 * Hook personalizado para interceptar CTAs e acionar o modal de captura
 * 
 * Uso:
 * const handleCTA = useLeadCapture(() => {
 *   // Ação original que será executada após a captura
 *   window.location.href = '/cadastro';
 * });
 * 
 * <button onClick={handleCTA}>Começar Agora</button>
 */
export function useLeadCapture(action?: () => void) {
  const { openModal } = useLeadCaptureContext();

  return () => {
    openModal(action);
  };
}
