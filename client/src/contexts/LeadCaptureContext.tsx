import { createContext, useContext, useState, ReactNode } from 'react';

interface LeadCaptureContextType {
  isModalOpen: boolean;
  pendingAction: (() => void) | null;
  openModal: (action?: () => void) => void;
  closeModal: () => void;
  executePendingAction: () => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | undefined>(undefined);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

  const openModal = (action?: () => void) => {
    if (action) {
      setPendingAction(() => action);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPendingAction(null);
  };

  const executePendingAction = () => {
    if (pendingAction) {
      pendingAction();
      setPendingAction(null);
    }
  };

  return (
    <LeadCaptureContext.Provider value={{ isModalOpen, pendingAction, openModal, closeModal, executePendingAction }}>
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCaptureContext() {
  const context = useContext(LeadCaptureContext);
  if (context === undefined) {
    throw new Error('useLeadCaptureContext must be used within a LeadCaptureProvider');
  }
  return context;
}
