import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'wouter';
import { XIcon, PlayIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

// Configure o elemento raiz para o modal
if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

interface VideoLightboxProps {
  thumbnailUrl?: string;
  videoUrl: string;
  title?: string;
}

export const VideoLightbox: React.FC<VideoLightboxProps> = ({
  thumbnailUrl = 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
  videoUrl,
  title
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  // Função para abrir o modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Estilo personalizado para o modal
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      position: 'relative' as 'relative',
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
      border: 'none',
      background: 'transparent',
      overflow: 'auto',
      borderRadius: '0',
      padding: '0',
      width: isMobile ? '90%' : '80%',
      maxWidth: '1200px',
      maxHeight: '80vh',
    },
  };

  return (
    <>
      {/* Thumbnail com botão de play */}
      <div 
        className="relative cursor-pointer gradient-border bg-card rounded-lg shadow-xl overflow-hidden parallax-card"
        onClick={openModal}
      >
        <img 
          src={thumbnailUrl} 
          alt={title || "Vídeo Institucional"} 
          className="w-full h-auto rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-center justify-center">
          <div className="rounded-full bg-primary/90 h-16 w-16 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 hover:scale-110">
            <PlayIcon className="h-8 w-8 text-white" />
          </div>
          
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/freelancer">
                <button className="clipup-btn flex items-center justify-center w-full">
                  {t('hero.freelancer.button')}
                </button>
              </Link>
              <Link href="/empresa">
                <button className="clipup-btn-outline w-full">
                  {t('hero.business.button')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal com vídeo */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Vídeo Institucional"
      >
        <div className="relative bg-background rounded-lg overflow-hidden">
          <button 
            onClick={closeModal}
            className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-primary flex items-center justify-center"
          >
            <XIcon className="h-5 w-5 text-white" />
          </button>
          
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`${videoUrl}${videoUrl.includes('?') ? '&' : '?'}autoplay=1`}
              title={title || "Vídeo Institucional"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="p-4 bg-background flex flex-col sm:flex-row gap-4">
            <Link href="/freelancer" className="flex-1">
              <button className="clipup-btn w-full">
                {t('hero.freelancer.button')}
              </button>
            </Link>
            <Link href="/empresa" className="flex-1">
              <button className="clipup-btn-outline w-full">
                {t('hero.business.button')}
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default VideoLightbox;