import { useState } from 'react';

interface WaitlistSubmission {
  fullName: string;
  email: string;
  phoneNumber?: string;
  interest: string;
  website?: string;
}

interface UseWaitlistReturn {
  submit: (data: WaitlistSubmission) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
  reset: () => void;
}

/**
 * Custom hook for waitlist form submission
 * Handles API communication, loading states, and error handling
 */
export function useWaitlist(): UseWaitlistReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = async (data: WaitlistSubmission) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Capture UTM parameters from URL
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
          ...data,
          utmSource,
          utmMedium,
          utmCampaign,
          source: document.referrer || 'direct',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to join waitlist');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setIsLoading(false);
  };

  return {
    submit,
    isLoading,
    error,
    success,
    reset,
  };
}
