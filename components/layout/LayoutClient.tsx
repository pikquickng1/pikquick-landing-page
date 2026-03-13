'use client';

import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WaitlistModal } from '@/components/modals/WaitlistModal';
import { WaitlistProvider, useWaitlist } from '@/components/providers/WaitlistProvider';

function LayoutContent({ children }: { children: ReactNode }) {
  const { isOpen, openWaitlist, closeWaitlist } = useWaitlist();

  return (
    <>
      <Header onOpenWaitlist={openWaitlist} />
      {children}
      <Footer />
      <WaitlistModal isOpen={isOpen} onCloseAction={closeWaitlist} />
    </>
  );
}

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <WaitlistProvider>
      <LayoutContent>{children}</LayoutContent>
    </WaitlistProvider>
  );
}
