'use client';

import React, { useState } from 'react';

interface EmailFormProps {
  variant?: 'default' | 'compact' | 'hero-inline';
}

export default function EmailForm({ variant = 'default' }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('student');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Track conversion
        fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event_type: 'cta_click',
            event_data: { action: 'signup_complete', role, section: variant },
          }),
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 text-center">
        <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          You&apos;re on the list!
        </h3>
        <p className="text-sm text-gray-600">
          Thanks! We&apos;ll email you the moment mentor booking opens.
        </p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 rounded-xl border border-brand-300 bg-white text-sm text-gray-900 placeholder-gray-400"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl shadow-sm disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'submitting' ? 'Joining...' : 'Get early access'}
        </button>
      </form>
    );
  }

  if (variant === 'hero-inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-5 py-3 rounded-xl border border-brand-300 bg-white text-sm text-gray-900 placeholder-gray-400"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl shadow-sm disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'submitting' ? 'Joining...' : 'Get early access'}
          {status !== 'submitting' && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 rounded-xl border border-brand-300 bg-white text-sm text-gray-900 placeholder-gray-400"
        />
      </div>
      <div>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-brand-300 bg-white text-sm text-gray-700 appearance-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b6560'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 12px center',
            backgroundSize: '16px',
          }}
        >
          <option value="student">I am a student</option>
          <option value="parent">I am a parent</option>
          <option value="mentor">I want to be a mentor</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Joining...' : 'Get early access'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-red-600 text-center">{errorMessage}</p>
      )}
      <p className="text-xs text-gray-400 text-center">
        No spam, ever. Just updates on when we launch.
      </p>
    </form>
  );
}
