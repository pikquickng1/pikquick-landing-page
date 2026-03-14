'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'How it Works', href: '#how-it-works', id: 'how-it-works' },
  { name: 'Errands', href: '#errands', id: 'errands' },
  { name: 'Earn', href: '#earn', id: 'earn' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
];

interface HeaderProps {
  onOpenWaitlist?: () => void;
}

export function Header({ onOpenWaitlist }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 10;
      setScrolled((prev) => (prev === next ? prev : next));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navigation.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300 border-[#D4E1FA] border-b',
        scrolled ? 'bg-[#F1F7FF]/95 backdrop-blur-sm' : 'bg-[#F1F7FF]',
      ].join(' ')}
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-12" aria-label="Main navigation">
        <div className="relative h-14 sm:h-16 lg:h-[72px] xl:h-20">
          <div className="flex h-full items-center justify-between lg:hidden">
            <div className="shrink-0">
              <Link href="/" className="flex items-center" aria-label="PikQuick home">
                <Image
                  src="/logo1.svg"
                  alt="PikQuick"
                  width={66}
                  height={36}
                  className="h-7 w-auto sm:h-8 md:h-9"
                  priority
                />
              </Link>
            </div>
            <div>
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-button text-white hover:opacity-90 px-4 py-2 text-sm"
                style={{ backgroundColor: '#4A85E4', fontFamily: 'var(--font-inter)' }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="hidden h-full lg:grid lg:grid-cols-3 lg:items-center lg:gap-4 xl:gap-6">
            <div className="flex items-center gap-1">
              <Link href="/" className="flex items-center" aria-label="PikQuick home">
                <Image
                  src="/logo1.svg"
                  alt="PikQuick Logo"
                  width={66}
                  height={36}
                  className="h-9 w-auto xl:h-10 2xl:h-11"
                  priority
                />
              </Link>
              <Image
                src="/logo2.svg"
                alt=""
                width={20}
                height={20}
                className="h-6 w-auto xl:h-7"
                priority
              />
            </div>
            <div className="flex items-center justify-center space-x-5 xl:space-x-7 2xl:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#4A85E4] ${
                    activeSection === item.id ? 'text-[#4A85E4]' : 'text-[#4A5565]'
                  }`}
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-button text-white hover:opacity-90 px-4 py-2 text-sm"
                style={{ backgroundColor: '#4A85E4', fontFamily: 'var(--font-inter)' }}
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
