import React from 'react';
import { useConsent } from '@/contexts/ConsentContext';

export default function CookieBanner() {
  const { consent, acceptAll, rejectAll, setConsent } = useConsent();

  if (consent !== null) return null; // already chosen

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:bottom-8 z-50">
      <div className="max-w-4xl mx-auto bg-card/95 backdrop-blur-md border border-border rounded-lg p-4 flex flex-col md:flex-row items-center gap-3">
        <div className="flex-1 text-sm text-foreground">
          Usamos cookies para melhorar sua experiência e oferecer recursos úteis. Aceite para continuar navegando com todas as funcionalidades.
        </div>
        <div className="flex items-center gap-2">
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm"
            onClick={acceptAll}
          >
            Aceitar e continuar
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm border border-muted hover:bg-muted/40"
            onClick={() => rejectAll()}
          >
            Recusar
          </button>
          <button
            className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:underline"
            onClick={() => setConsent({ analytics: false })}
            title="Configurar"
          >
            Configurar
          </button>
        </div>
      </div>
    </div>
  );
}
