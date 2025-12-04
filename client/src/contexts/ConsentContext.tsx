import React, { createContext, useContext, useEffect, useState } from 'react';

type Consent = {
  analytics: boolean;
};

const STORAGE_KEY = 'lumpic-consent';

type ConsentContextType = {
  consent: Consent | null;
  setConsent: (c: Consent) => void;
  acceptAll: () => void;
  rejectAll: () => void;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<Consent | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setConsentState(JSON.parse(raw));
    } catch (e) {
      // ignore
    }
  }, []);

  const setConsent = (c: Consent) => {
    setConsentState(c);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch (e) {
      // ignore
    }
  };

  const acceptAll = () => setConsent({ analytics: true });
  const rejectAll = () => setConsent({ analytics: false });

  return (
    <ConsentContext.Provider value={{ consent, setConsent, acceptAll, rejectAll }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider');
  return ctx;
}
