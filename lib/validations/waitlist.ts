import { z } from 'zod';

// Validation schema for waitlist form submission
export const waitlistSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .toLowerCase()
    .trim(),
  phoneNumber: z
    .string()
    .optional()
    .transform((val) => val?.trim() || undefined),
  interest: z
    .string()
    .min(1, 'Please select an option')
    .max(100, 'Interest must be less than 100 characters'),
  website: z.string().max(0, 'Invalid submission'), // Honeypot field - must be empty
  source: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
