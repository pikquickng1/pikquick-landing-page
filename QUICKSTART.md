# Waitlist Integration - Quick Start

Get your waitlist up and running in 5 minutes.

## Step 1: Install Dependencies (1 min)

```bash
npm install @supabase/supabase-js zod
```

## Step 2: Set Up Supabase (2 min)

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Open SQL Editor
3. Copy and paste the contents of `supabase-setup.sql`
4. Click "Run"

## Step 3: Configure Environment (1 min)

1. Create `.env.local` in your project root:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

2. Get these values from: Project Settings > API in Supabase

## Step 4: Add to Your Page (1 min)

```tsx
'use client';

import { useState } from 'react';
import { WaitlistModal } from '@/components/modals/WaitlistModal';

export default function YourPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Join Waitlist
      </button>
      
      <WaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
```

## Step 5: Test It

```bash
npm run dev
```

Open http://localhost:3000, click "Join Waitlist", and submit the form.

Check your Supabase dashboard to see the entry!

## That's It! 🎉

Your waitlist is now live and production-ready.

## Next Steps

- View entries: Supabase Dashboard > Table Editor > waitlist
- Export data: `npx tsx scripts/export-waitlist.ts`
- Customize: Edit `components/forms/WaitlistForm.tsx`
- Analytics: See `WAITLIST_SETUP.md` for SQL queries

## Troubleshooting

**"Missing Supabase environment variables"**
- Restart your dev server after adding `.env.local`

**Form not submitting**
- Check browser console for errors
- Verify environment variables are set correctly

**Need help?**
- See `WAITLIST_SETUP.md` for detailed documentation
- Check `examples/waitlist-usage.tsx` for more examples
