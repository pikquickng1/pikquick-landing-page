/**
 * Test suite for waitlist API endpoint
 * 
 * To run these tests, install jest and testing dependencies:
 * npm install -D jest @testing-library/react @testing-library/jest-dom
 * 
 * This is a reference implementation showing how to test the API
 */

import { NextRequest } from 'next/server';
import { POST } from '@/app/api/waitlist/route';

// Mock Supabase
jest.mock('@/lib/supabase', () => ({
  getSupabaseAdmin: jest.fn(() => ({
    from: jest.fn(() => ({
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(() => ({
            data: {
              id: 'test-uuid',
              email: 'test@example.com',
            },
            error: null,
          })),
        })),
      })),
    })),
  })),
}));

describe('POST /api/waitlist', () => {
  it('should successfully add a valid submission', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '1234567890',
        interest: 'hire-runner',
        website: '',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.message).toBe('Successfully joined the waitlist');
  });

  it('should reject submission with invalid email', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'John Doe',
        email: 'invalid-email',
        interest: 'hire-runner',
        website: '',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.message).toContain('email');
  });

  it('should silently accept bot submissions (honeypot)', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'Bot',
        email: 'bot@example.com',
        interest: 'hire-runner',
        website: 'http://spam.com', // Honeypot filled
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    // Should return success but not actually save
    expect(response.status).toBe(200);
    expect(data.message).toBe('Successfully joined the waitlist');
  });

  it('should reject submission without required fields', async () => {
    const request = new NextRequest('http://localhost:3000/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        // Missing fullName and interest
        website: '',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});
