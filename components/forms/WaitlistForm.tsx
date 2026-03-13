'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from '@/components/ui/Button';

interface WaitlistFormProps {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export function WaitlistForm({ onSuccess, onError }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    interest: 'hire-runner', // Default to "Hire errand runner"
    website: '', // Honeypot field
  });
  
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsSelectOpen(false);
      }
    };

    if (isSelectOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSelectOpen]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: null, text: '' });

    try {
      // Capture UTM parameters from URL if available
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source') || undefined;
      const utmMedium = urlParams.get('utm_medium') || undefined;
      const utmCampaign = urlParams.get('utm_campaign') || undefined;

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          utmSource,
          utmMedium,
          utmCampaign,
          source: document.referrer || 'direct',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: data.message || 'Successfully joined the waitlist!',
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          interest: 'hire-runner',
          website: '',
        });
        onSuccess?.();
      } else {
        const errorMessage = data.message || 'Something went wrong. Please try again.';
        setMessage({
          type: 'error',
          text: errorMessage,
        });
        onError?.(errorMessage);
      }
    } catch (error) {
      const errorMessage = 'Network error. Please check your connection and try again.';
      setMessage({
        type: 'error',
        text: errorMessage,
      });
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-center text-gray-600">
        Our launch is just around the corner. Join the waitlist today for early
        access and exclusive launch rewards.
      </p>

      {/* Success/Error Message */}
      {message.type && (
        <div
          className={`rounded-lg p-4 ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
          role="alert"
        >
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      {/* Form Container with Background */}
      <div className="rounded-2xl bg-gray-50 p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#4A85E4] focus:outline-none focus:ring-2 focus:ring-[#4A85E4]/20"
            placeholder="Jane Doe"
            disabled={isSubmitting}
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#4A85E4] focus:outline-none focus:ring-2 focus:ring-[#4A85E4]/20"
            placeholder="jane@example.com"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Phone Number */}
        <div>
          <label
            htmlFor="phoneNumber"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#4A85E4] focus:outline-none focus:ring-2 focus:ring-[#4A85E4]/20"
            placeholder="0800 123 4567"
            disabled={isSubmitting}
          />
        </div>

        {/* Interest Custom Select */}
        <div ref={selectRef}>
          <label
            htmlFor="interest"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            I want to...
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => !isSubmitting && setIsSelectOpen(!isSelectOpen)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-left text-gray-900 focus:border-[#4A85E4] focus:outline-none focus:ring-2 focus:ring-[#4A85E4]/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-between"
              disabled={isSubmitting}
            >
              <span>
                {formData.interest === 'hire-runner' ? 'Hire errand runner' : 'Be an errand runner'}
              </span>
              <svg
                className={`h-5 w-5 text-gray-400 transition-transform ${isSelectOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isSelectOpen && !isSubmitting && (
              <div className="absolute z-10 mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, interest: 'hire-runner' });
                    setIsSelectOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                    formData.interest === 'hire-runner' ? 'bg-blue-50 text-[#4A85E4] font-medium' : 'text-gray-900'
                  }`}
                >
                  Hire errand runner
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, interest: 'be-runner' });
                    setIsSelectOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors rounded-b-lg ${
                    formData.interest === 'be-runner' ? 'bg-blue-50 text-[#4A85E4] font-medium' : 'text-gray-900'
                  }`}
                >
                  Be an errand runner
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={(e) =>
          setFormData({ ...formData, website: e.target.value })
        }
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
        }}
        aria-hidden="true"
      />

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Joining...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Join the Waitlist
            <IoPaperPlaneOutline className="h-5 w-5" />
          </span>
        )}
      </Button>

      <p className="text-center text-xs text-gray-500">
        By joining, you agree to receive updates about our launch. No spam, ever.
      </p>
      </div>
    </form>
  );
}
