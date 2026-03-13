'use client';

import { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

interface ModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
  title: string;
  children: React.ReactNode;
  centerTitle?: boolean;
}

export function Modal({ isOpen, onCloseAction, title, children, centerTitle = false }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onCloseAction}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Close Button - Absolute positioned */}
        <button
          onClick={onCloseAction}
          className="absolute right-6 top-6 z-20 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <HiX className="h-6 w-6" />
        </button>

        {/* Content with Title */}
        <div className="overflow-y-auto px-6 py-8 sm:px-12 sm:py-12" style={{ maxHeight: '90vh' }}>
          {title && (
            <h2 className={`mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl ${centerTitle ? 'text-center' : ''}`}>
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
