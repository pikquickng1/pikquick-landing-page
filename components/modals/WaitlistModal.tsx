'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { WaitlistForm } from '@/components/forms/WaitlistForm';

interface WaitlistModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export function WaitlistModal({ isOpen, onCloseAction }: WaitlistModalProps) {
  const [showSuccessState, setShowSuccessState] = useState(false);

  const handleSuccess = () => {
    setShowSuccessState(true);
    // Auto-close modal after 3 seconds on success
    setTimeout(() => {
      onCloseAction();
      // Reset success state after modal closes
      setTimeout(() => setShowSuccessState(false), 300);
    }, 3000);
  };

  const handleClose = () => {
    onCloseAction();
    // Reset success state when manually closing
    setTimeout(() => setShowSuccessState(false), 300);
  };

  return (
    <Modal
      isOpen={isOpen}
      onCloseAction={handleClose}
      title={showSuccessState ? 'Welcome to the Waitlist!' : 'Be the first to experience it'}
      centerTitle={true}
    >
      {showSuccessState ? (
        <div className="py-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="mb-3 text-2xl font-bold text-gray-900">
            You're on the list!
          </h3>
          <p className="text-base text-gray-600 max-w-md mx-auto">
            We'll notify you as soon as we launch. Get ready for something amazing!
          </p>
        </div>
      ) : (
        <WaitlistForm onSuccess={handleSuccess} />
      )}
    </Modal>
  );
}
