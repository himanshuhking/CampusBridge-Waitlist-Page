'use client';

import React from 'react';

interface MentorCardProps {
  name: string;
  photoUrl: string;
  flag: string;
  degree: string;
  college: string;
  tags: { label: string; bgColor: string; textColor: string }[];
  ugDegree?: string;
  ugCollege?: string;
  role?: string;
  company?: string;
  sessions: number;
  reviews: number;
  quote: string;
  width?: string;
  blurName?: boolean;
}

export default function MentorCard({
  name,
  photoUrl,
  flag,
  degree,
  college,
  tags,
  ugDegree,
  ugCollege,
  role,
  company,
  sessions,
  reviews,
  quote,
  width = 'w-full max-w-[340px]',
  blurName = false,
}: MentorCardProps) {
  return (
    <div className={`${width} bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.08)]`}>
      {/* Photo */}
      <div className="w-full h-[240px] overflow-hidden rounded-t-2xl">
        <img
          src={photoUrl}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="px-5 pt-4 pb-0">
        {/* Name + Flag + Verified */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg leading-none">{flag}</span>
            <h4 className={`text-[17px] font-semibold text-gray-900 tracking-tight ${blurName ? 'blur-[4px] select-none' : ''}`}>{name}</h4>
          </div>
          {/* Green verified badge */}
          <svg className="w-6 h-6 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        {/* Degree */}
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          <span className="text-[13px] text-gray-500">{degree}</span>
        </div>

        {/* College */}
        <p className="text-[15px] font-bold text-gray-900 mb-2.5 ml-6">{college}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 ml-6">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium"
              style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* UG Education */}
        {ugDegree && (
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span className="text-[13px] text-gray-500">{ugDegree}</span>
            </div>
            {ugCollege && (
              <p className="text-[15px] font-bold text-gray-900 ml-6">{ugCollege}</p>
            )}
          </div>
        )}
      </div>

      {/* Divider + Stats */}
      <div className="px-5 mt-4">
        <div className="flex items-center justify-center gap-6 py-3 border-t border-gray-100">
          <span className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {sessions} sessions
          </span>
          <span className="w-px h-4 bg-gray-200" />
          <span className="flex items-center gap-1.5 text-[13px] text-gray-500">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            {reviews} reviews
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="bg-gray-50 px-5 py-4">
        <p className="text-[12px] text-gray-400 italic leading-relaxed text-center">
          &ldquo;{quote}&rdquo; – <span className={blurName ? 'blur-[4px] select-none' : ''}>{name}</span>
        </p>
      </div>
    </div>
  );
}
