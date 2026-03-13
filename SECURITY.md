# Security Best Practices

This document outlines the security measures implemented in the waitlist integration and best practices for maintaining security.

## Implemented Security Features

### ✅ Server-Side Only Database Access

- Supabase credentials are NEVER exposed to the client
- All database operations happen in API routes
- Service role key stored in environment variables only
- No Supabase client in frontend bundle

### ✅ Input Validation

- Zod schema validates all inputs server-side
- Email format validation
- String length limits enforced
- Type safety with TypeScript
- Sanitization of user inputs

### ✅ Spam Protection

- Honeypot field catches automated bots
- Hidden field that humans won't fill
- Bots that fill it are silently rejected
- No indication given to bot that submission failed

### ✅ Database Security

- Row Level Security (RLS) enabled
- Unique constraint on email prevents duplicates
- Indexed queries for performance
- Service role policies restrict access
- No direct client access to database

### ✅ Rate Limiting Ready

The architecture supports adding rate limiting:

```typescript
// Example with Upstash Redis
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'),
});

// In API route
const identifier = request.ip ?? 'anonymous';
const { success } = await ratelimit.limit(identifier);

if (!success) {
  return NextResponse.json(
    { message: 'Too many requests' },
    { status: 429 }
  );
}
```

## Environment Variables Security

### DO ✅

- Store in `.env.local` (already in .gitignore)
- Use different keys for dev/staging/production
- Rotate keys periodically
- Use service role key only on server
- Set environment variables in hosting platform

### DON'T ❌

- Never use `NEXT_PUBLIC_` prefix for secrets
- Never commit `.env.local` to git
- Never share keys in Slack/email
- Never use anon key for server operations
- Never log environment variables

## API Security Checklist

- [x] Input validation with Zod
- [x] Error messages don't leak sensitive info
- [x] Honeypot spam protection
- [x] Server-side only database access
- [x] Proper HTTP status codes
- [x] CORS handled by Next.js
- [ ] Rate limiting (optional, recommended for production)
- [ ] CAPTCHA (optional, for high-traffic sites)

## Database Security Checklist

- [x] Row Level Security enabled
- [x] Service role policies configured
- [x] Unique constraints on email
- [x] No sensitive data in logs
- [x] Indexes for performance
- [ ] Regular backups configured
- [ ] Audit logging (optional)

## Production Deployment Checklist

### Before Deploying

1. **Environment Variables**
   - [ ] Set `SUPABASE_URL` in production
   - [ ] Set `SUPABASE_SERVICE_ROLE_KEY` in production
   - [ ] Verify keys are different from development
   - [ ] Test environment variables are loaded

2. **Supabase Configuration**
   - [ ] RLS policies enabled and tested
   - [ ] Service role key has minimum required permissions
   - [ ] Database backups configured
   - [ ] Connection pooling configured if needed

3. **API Security**
   - [ ] Rate limiting implemented (recommended)
   - [ ] Error logging configured
   - [ ] Monitoring alerts set up
   - [ ] HTTPS enforced

4. **Testing**
   - [ ] Test successful submission
   - [ ] Test duplicate email handling
   - [ ] Test validation errors
   - [ ] Test honeypot catches bots
   - [ ] Load test API endpoint

### After Deploying

1. **Monitoring**
   - [ ] Set up error tracking (Sentry, etc.)
   - [ ] Monitor API response times
   - [ ] Track submission success rate
   - [ ] Monitor database performance

2. **Maintenance**
   - [ ] Regular security updates
   - [ ] Review access logs
   - [ ] Rotate keys quarterly
   - [ ] Backup verification

## Common Security Mistakes to Avoid

### ❌ Exposing Secrets

```typescript
// WRONG - Never do this!
const supabase = createClient(
  'https://project.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_KEY // ❌ Exposed to client!
);
```

```typescript
// CORRECT
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ✅ Server-side only
);
```

### ❌ Client-Side Database Access

```typescript
// WRONG - Never do this!
'use client';
import { createClient } from '@supabase/supabase-js';

// ❌ Database access from client component
const supabase = createClient(url, key);
await supabase.from('waitlist').insert(data);
```

```typescript
// CORRECT
'use client';

// ✅ Call API route instead
await fetch('/api/waitlist', {
  method: 'POST',
  body: JSON.stringify(data),
});
```

### ❌ Trusting Client Input

```typescript
// WRONG - Never do this!
export async function POST(request: NextRequest) {
  const body = await request.json();
  // ❌ No validation!
  await supabase.from('waitlist').insert(body);
}
```

```typescript
// CORRECT
export async function POST(request: NextRequest) {
  const body = await request.json();
  // ✅ Validate with Zod
  const validated = waitlistSchema.parse(body);
  await supabase.from('waitlist').insert(validated);
}
```

## Incident Response

If you suspect a security breach:

1. **Immediate Actions**
   - Rotate all API keys immediately
   - Review recent database changes
   - Check access logs for suspicious activity
   - Disable affected endpoints if necessary

2. **Investigation**
   - Review Supabase logs
   - Check API route logs
   - Analyze traffic patterns
   - Identify attack vector

3. **Recovery**
   - Patch vulnerability
   - Update security measures
   - Notify affected users if required
   - Document incident and response

## Security Resources

- [Supabase Security Best Practices](https://supabase.com/docs/guides/platform/security)
- [Next.js Security Headers](https://nextjs.org/docs/app/api-reference/next-config-js/headers)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Zod Validation](https://zod.dev/)

## Reporting Security Issues

If you discover a security vulnerability:

1. Do NOT open a public issue
2. Email security concerns to your team lead
3. Include detailed description and reproduction steps
4. Allow time for patch before public disclosure

## Regular Security Audits

Schedule regular reviews:

- Monthly: Review access logs and error rates
- Quarterly: Rotate API keys and review permissions
- Annually: Full security audit and penetration testing

## Compliance Considerations

Depending on your jurisdiction and user base:

- **GDPR**: Right to deletion, data portability
- **CCPA**: Privacy policy, opt-out mechanisms
- **COPPA**: Age verification if targeting children
- **HIPAA**: Additional security if handling health data

Consult with legal counsel for compliance requirements.
