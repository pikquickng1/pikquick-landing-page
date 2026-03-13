'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {FaInstagram } from 'react-icons/fa';
import { FiLinkedin } from "react-icons/fi";
import { LuTwitter, LuMail ,LuPhone} from "react-icons/lu";

import { Modal } from '@/components/ui/Modal';

export function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="bg-white py-12 sm:py-16 md:py-20" style={{ fontFamily: 'var(--font-inter)' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-1">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo1.svg"
                    alt="PikQuick"
                    width={60}
                    height={36}
                    className="h-9 w-auto"
                  />
                </Link>
                <Image
                  src="/logo2.svg"
                  alt=""
                  width={12}
                  height={20}
                  className="h-5 w-auto"
                />
              </div>
              <p className="mt-4 font-inter text-base leading-relaxed text-[#4A5565] sm:text-base">
                Connecting people who need errands done with trusted local runners. Fast, safe, and stress-free.
              </p>
            </div>

            {/* Support Contact */}
            <div>
              <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-[#101828] sm:text-base">
                Support
              </h4>
              <div className="mt-4 space-y-3 sm:mt-5">
                <a
                  href="mailto:hello@pikquick.co"
                  className="flex items-center gap-2 font-inter text-sm text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                >
                  <LuMail className="h-5 w-5" />
                  hello@pikquick.co
                </a>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-2 font-inter text-sm text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                >
                  <LuPhone className="h-5 w-5" />
                  +234 800 PIKQUICK
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-5 flex gap-4 sm:mt-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F9FAFB] border-[0.75px] border-[#F3F4F6] text-[#6B7280] transition-all hover:bg-[#4A85E4] hover:text-white"
                >
                  <LuTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F9FAFB] border-[0.75px] border-[#F3F4F6] text-[#99A1AF] transition-all hover:bg-[#4A85E4] hover:text-white"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F9FAFB] border-[0.75px] border-[#F3F4F6] text-[#99A1AF] transition-all hover:bg-[#4A85E4] hover:text-white"
                >
                  <FiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-[#101828] sm:text-base">
                Platform
              </h4>
              <ul className="mt-4 space-y-3 sm:mt-5">
                <li>
                  <button
                    onClick={() => setShowTerms(true)}
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowPrivacy(true)}
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <a
                    href="#about"
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="font-inter text-sm font-medium text-[#4A5565] transition-colors hover:text-[#4A85E4] sm:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h4 className="font-inter text-sm font-bold uppercase tracking-wider text-[#1F2937] sm:text-base">
                Download Our App
              </h4>
              <div className="mt-4 space-y-3 sm:mt-5">
                <a
                  href="#"
                  className="block w-full max-w-[180px] transition-transform hover:scale-105"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    className="h-auto w-full"
                  />
                </a>
                <a
                  href="#"
                  className="block w-full max-w-[180px] transition-transform hover:scale-105"
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    width={180}
                    height={54}
                    className="h-auto w-full"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
            <p className="font-inter text-sm text-[#6B7280]">
              © 2026 Pikquick. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setShowPrivacy(true)}
                className="font-inter text-sm uppercase tracking-wider text-[#9CA3AF] transition-colors hover:text-[#4A85E4]"
              >
                Privacy
              </button>
              <button
                onClick={() => setShowTerms(true)}
                className="font-inter text-sm uppercase tracking-wider text-[#9CA3AF] transition-colors hover:text-[#4A85E4]"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <Modal
        isOpen={showTerms}
        onCloseAction={() => setShowTerms(false)}
        title="Terms Policy"
      >
        <div className="space-y-4 font-inter text-sm leading-relaxed text-[#6B7280] sm:text-base">
          <p>
            Welcome to Pikquick. This is placeholder text for our terms policy. In a real application, this would contain detailed legal information regarding your rights and responsibilities.
          </p>
          <p>
            We take your data and privacy seriously. All interactions on our platform are designed to be safe, secure, and transparent for both requesters and runners.
          </p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>

      {/* Privacy Modal */}
      <Modal
        isOpen={showPrivacy}
        onCloseAction={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4 font-inter text-sm leading-relaxed text-[#6B7280] sm:text-base">
          <p>
            Welcome to Pikquick. This is placeholder text for our privacy policy. In a real application, this would contain detailed legal information regarding your rights and responsibilities.
          </p>
          <p>
            We take your data and privacy seriously. All interactions on our platform are designed to be safe, secure, and transparent for both requesters and runners.
          </p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Modal>
    </>
  );
}
