'use client';

import React, { useEffect, useState } from 'react';
import MentorCard from '@/components/MentorCard';
import EmailForm from '@/components/EmailForm';
import { usePageViewTracking, trackCTAClick } from '@/components/AnalyticsProvider';

const HERO_MENTOR = {
  name: 'Dhriti Kadam',
  photoUrl: '/images/mentor-dhriti-photo.png',
  flag: '🇮🇳',
  degree: 'MBA General Management, 2027',
  college: 'SPJIMR',
  tags: [
    { label: '2nd year student', bgColor: '#f0ebe3', textColor: '#7a6e5d' },
    { label: 'CAT 94 percentile', bgColor: '#e8f4fd', textColor: '#4a90c4' },
  ],
  ugDegree: 'BBA, 2025',
  ugCollege: 'SCMS, Pune',
  sessions: 17,
  reviews: 12,
  quote: "Chose SPJIMR for its abhyudaya rural immersion and true general management focus",
  blurName: true,
};

const SECTION_MENTORS = [
  {
    name: 'Priya Sharma',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    flag: '🇮🇳',
    degree: 'M.S. Interaction Design, 2026',
    college: 'Georgia Tech',
    tags: [
      { label: 'UG from KIIT', bgColor: '#f0f6ff', textColor: '#27409e' },
      { label: 'Portfolio tips', bgColor: '#fef2f2', textColor: '#dc2626' },
      { label: 'UX research', bgColor: '#f0f6ff', textColor: '#27409e' },
    ],
    role: 'UX Design Intern',
    sessions: 34,
    reviews: 22,
    quote: "Georgia Tech's interdisciplinary culture let me blend design with tech — something no Indian college offered me",
  },
  {
    name: 'Arjun Mehta',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    flag: '🇮🇳',
    degree: 'M.S. Machine Learning, 2025',
    college: 'University of Texas at Austin',
    tags: [
      { label: 'UG from IIIT Bh', bgColor: '#f0f6ff', textColor: '#27409e' },
      { label: 'RA positions', bgColor: '#fef2f2', textColor: '#dc2626' },
      { label: 'GRE prep', bgColor: '#f0f6ff', textColor: '#27409e' },
    ],
    role: 'Research Assistant',
    sessions: 28,
    reviews: 18,
    quote: "UT Austin's ML lab network is unmatched — I picked it over higher-ranked schools for the research fit",
  },
  {
    name: 'Fatima Al-Rashid',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    flag: '🇯🇴',
    degree: '3rd Year, transferred',
    college: 'University of Melbourne',
    tags: [
      { label: 'Transfer process', bgColor: '#f0f6ff', textColor: '#27409e' },
      { label: 'Adaptation', bgColor: '#fef2f2', textColor: '#dc2626' },
      { label: 'Mental health', bgColor: '#f0f6ff', textColor: '#27409e' },
    ],
    role: 'Campus Tour Guide',
    sessions: 19,
    reviews: 14,
    quote: "Melbourne's support system for international transfers made the transition smoother than I expected",
  },
];

function scrollToSignup() {
  const el = document.getElementById('signup');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    trackCTAClick('hero', 'cta_click');
  }
}

export default function LandingPage() {
  usePageViewTracking();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-warm-50">
      {/* Navigation — transparent over hero */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md' : ''}`}>
        <div className="w-full flex items-center justify-between py-4 px-4 sm:px-8">
          <span className="text-xl font-bold">
            <span className="text-white">Campus</span>
            <span className="text-brand-500">Bridge</span>
          </span>
          <button
            onClick={scrollToSignup}
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-xs sm:text-sm font-bold rounded-full shadow-sm inline-flex items-center gap-2"
          >
            Join the Waitlist
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ========== 1. HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl xl:max-w-5xl mx-auto text-center px-0">
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[68px] font-bold text-white leading-[1.1] mb-6 font-display hero-animate hero-animate-delay-1">
            Stop best guessing your <span className="text-brand-500">college decisions.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-10 max-w-xl mx-auto hero-animate hero-animate-delay-2">
            Talk to real students and alumni, free video calls,<br />get honest answers.
          </p>
          <div className="hero-animate hero-animate-delay-3">
            <EmailForm variant="hero-inline" />
          </div>
        </div>
      </section>

      {/* ========== 2. THE PROBLEM SECTION ========== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">The problem</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
              Most sources of college advice have a blind spot — the truth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center px-4">
              <div className="w-14 h-14 bg-warm-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">YouTube videos are polished</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Campus tours and day-in-the-life vlogs show the highlight reel. They can&apos;t answer your specific question about visa delays or dorm food.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-14 h-14 bg-warm-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Agents may have hidden incentives</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Many consultants earn commissions from specific colleges. The &quot;best fit&quot; they recommend might be the one that pays them the most.
              </p>
            </div>

            <div className="text-center px-4">
              <div className="w-14 h-14 bg-warm-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Forums go stale fast</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                That Reddit post from 2021 about visa rules? Outdated. That Quora answer about rent prices? Half wrong. Real life changes faster than forums update.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 3. HOW IT WORKS SECTION ========== */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">How it works</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
              Three steps to honest college advice
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Find a student or alum</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Browse mentors at colleges you&apos;re considering — filter by program, country, or their story.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Book a free video call</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Pick a time that works for both of you. The call is one-on-one, private, and always free.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Get real answers</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Ask anything — visa timelines, scholarship chances, what the food is actually like, whether the degree is worth it.
              </p>
            </div>
          </div>

          {/* Mentor card images */}
          <div className="text-center mt-16 mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Real mentors, real profiles</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
              Talk to someone who actually studied there
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
            <img src="/images/card-1.png" alt="Mentor profile card" className="w-full max-w-[340px] rounded-2xl shadow-md" />
            <img src="/images/card-2.png" alt="Mentor profile card" className="w-full max-w-[340px] rounded-2xl shadow-md" />
            <img src="/images/card-3.png" alt="Mentor profile card" className="w-full max-w-[340px] rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* ========== 4. WHY THIS IS DIFFERENT SECTION ========== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Why CampusBridge</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
              The only option that&apos;s live, personal, and free of sales incentive
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Not a YouTube video</h3>
                <p className="text-sm text-gray-500 mt-0.5">You can&apos;t ask follow-up questions. The creator might be sponsored. And you&apos;re watching someone else&apos;s experience, not yours.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Not an education agent</h3>
                <p className="text-sm text-gray-500 mt-0.5">Agents often earn commissions from specific colleges. Their &quot;advice&quot; might be driven by who&apos;s paying them, not what&apos;s best for you.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-red-50/50 border border-red-100">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Not a forum post</h3>
                <p className="text-sm text-gray-500 mt-0.5">Reddit answers go stale. You can&apos;t verify who wrote them. And nobody&apos;s coming back to update their post when the visa rules change.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl bg-brand-50 border border-brand-200 mt-8">
              <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">CampusBridge: Live, personal, no strings attached</h3>
                <p className="text-sm text-gray-500 mt-0.5">Talk to someone who&apos;s lived it. Ask follow-ups. Get specifics about safety, part-time work, actual costs, and whether the program was worth it. No commissions, no gatekeeping.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 5. SOCIAL PROOF / FOUNDER&apos;S NOTE ========== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-warm-100 rounded-2xl p-8 sm:p-10 border border-warm-200">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-4">Why we&apos;re building this</p>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                I spent months figuring out where to study abroad. I watched every YouTube video, read every Reddit thread, and talked to two consultants. Everyone had an opinion, but nobody could tell me what it actually felt like to be a student there — what the food was like, whether I could afford rent, how hard the first semester really was.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When I finally talked to a current student on a random Discord call, it changed everything. She told me things no brochure would: that the career services were basically useless, that the international student office was overwhelmed, and that the campus was beautiful but isolating if you didn&apos;t speak the language well.
              </p>
              <p className="text-gray-700 leading-relaxed">
                That conversation took 30 minutes and was worth more than months of research. CampusBridge is us trying to make that conversation available to everyone — not just people who happen to know someone abroad.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-warm-200">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-800">— The CampusBridge team</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 6. EMAIL CAPTURE SECTION ========== */}
      <section id="signup" className="py-16 sm:py-24 px-4 sm:px-6 bg-white scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 font-display">
            Be the first to know when we launch
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We&apos;re building CampusBridge right now. Leave your email and we&apos;ll let you know the moment you can start booking mentor calls.
          </p>
          <EmailForm variant="default" />
        </div>
      </section>

      {/* ========== 7. FOOTER ========== */}
      <footer className="py-8 px-4 sm:px-6 border-t border-warm-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-800 text-sm">
              <span className="text-gray-900">Campus</span>
              <span className="text-brand-500">Bridge</span>
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Honest college advice, from people who&apos;ve lived it.
          </p>
          <a
            href="mailto:hello@campusbridge.com"
            className="text-xs text-gray-400 hover:text-brand-600 transition-colors"
          >
            hello@campusbridge.com
          </a>
        </div>
      </footer>
    </div>
  );
}
