# Waitlist Integration Setup Guide

This guide will help you set up the production-ready waitlist integration with Supabase.

## Prerequisites

- A Supabase account and project
- Node.js 18+ installed
- Access to your project's environment variables

## Installation Steps

### 1. Install Required Dependencies

```bash
npm install @supabase/supabase-js zod
```

### 2. Set Up Supabase Database

1. Log in to your [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to the SQL Editor
4. Copy the contents of `supabase-setup.sql` and run it
5. Verify the `waitlist` table was created successfully

### 3. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Get your Supabase credentials:
   - Go to Project Settings > API
   - Copy the Project URL
   - Copy the `service_role` key (NOT the anon key)

3. Update `.env.local`:
   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

⚠️ **IMPORTANT**: Never commit `.env.local` to version control. The service role key must remain secret.

### 4. Integrate the Waitlist Modal

Update your components to use the new `WaitlistModal`:

```tsx
'use client';

import { useState } from 'react';
import { WaitlistModal } from '@/components/modals/WaitlistModal';

export function YourComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        Join Waitlist
      </button>
      
      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
```

### 5. Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open the waitlist modal and submit a test entry

3. Verify in Supabase:
   - Go to Table Editor > waitlist
   - Check that your entry appears

4. Test duplicate email handling by submitting the same email again

## Architecture Overview

### Security Features

✅ **Server-side only database access**: Supabase credentials never exposed to client
✅ **Input validation**: Zod schema validates all inputs
✅ **Honeypot spam protection**: Hidden field catches bots
✅ **Row Level Security**: Enabled on Supabase table
✅ **Unique email constraint**: Prevents duplicate signups

### Performance Features

✅ **Zero client-side bundle impact**: No Supabase client in frontend
✅ **Static page rendering**: Landing page remains fully SEO-friendly
✅ **Optimized API route**: Fast response times
✅ **Indexed database queries**: Email and date indexes for performance

### Data Captured

- Full name
- Email address (unique)
- Phone number (optional)
- Interest selection
- User agent
- Referral source
- UTM parameters (source, medium, campaign)
- Timestamp

## API Endpoints

### POST /api/waitlist

Submit a new waitlist entry.

**Request Body:**
```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "phoneNumber": "0800 123 4567",
  "interest": "hire-runner",
  "website": "",
  "source": "direct",
  "utmSource": "google",
  "utmMedium": "cpc",
  "utmCampaign": "launch"
}
```

**Success Response (201):**
```json
{
  "message": "Successfully joined the waitlist",
  "data": {
    "id": "uuid",
    "email": "jane@example.com"
  }
}
```

**Duplicate Email (409):**
```json
{
  "message": "You are already on the waitlist"
}
```

**Validation Error (400):**
```json
{
  "message": "Please enter a valid email address"
}
```

### GET /api/waitlist

Health check endpoint.

**Response (200):**
```json
{
  "status": "ok",
  "message": "Waitlist API is running"
}
```

## Analytics & Monitoring

### View Waitlist Entries

```sql
SELECT * FROM waitlist ORDER BY created_at DESC;
```

### Analytics Dashboard Query

```sql
SELECT * FROM waitlist_analytics ORDER BY date DESC;
```

### Count by Interest

```sql
SELECT interest, COUNT(*) as count
FROM waitlist
GROUP BY interest
ORDER BY count DESC;
```

### UTM Campaign Performance

```sql
SELECT 
  utm_source,
  utm_medium,
  utm_campaign,
  COUNT(*) as signups
FROM waitlist
WHERE utm_source IS NOT NULL
GROUP BY utm_source, utm_medium, utm_campaign
ORDER BY signups DESC;
```

## Future Enhancements

### Email Confirmation

Add email verification using services like:
- Resend
- SendGrid
- AWS SES

### Rate Limiting

Implement rate limiting with:
- Upstash Redis
- Vercel KV
- Custom middleware

### Admin Dashboard

Build an admin panel to:
- View all waitlist entries
- Export to CSV
- Send bulk emails
- Track conversion metrics

### A/B Testing

Track form variations:
- Different CTAs
- Form field variations
- Modal designs

## Troubleshooting

### "Missing Supabase environment variables"

- Verify `.env.local` exists and contains both variables
- Restart your development server after adding variables
- Check for typos in variable names

### "Failed to join waitlist"

- Check Supabase project is active
- Verify service role key has correct permissions
- Check Supabase logs in Dashboard > Logs

### Duplicate email not detected

- Verify unique constraint exists on email column
- Check RLS policies are configured correctly

### Form not submitting

- Check browser console for errors
- Verify API route is accessible at `/api/waitlist`
- Test with `curl` or Postman

## Production Checklist

Before deploying to production:

- [ ] Environment variables set in hosting platform
- [ ] Supabase table created with correct schema
- [ ] RLS policies enabled and tested
- [ ] Honeypot field working correctly
- [ ] Error messages are user-friendly
- [ ] Success state displays correctly
- [ ] Email uniqueness constraint working
- [ ] Analytics queries tested
- [ ] Form validation working on all fields
- [ ] Mobile responsive design verified

## Support

For issues or questions:
1. Check Supabase logs in your dashboard
2. Review Next.js server logs
3. Test API endpoint directly with curl/Postman
4. Verify environment variables are set correctly

## License

This implementation follows security and privacy best practices for handling user data.
