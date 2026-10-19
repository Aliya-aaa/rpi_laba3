import React from 'react';

export default function Logo({ size = 40, withText = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        {/* Основа — скруглённый квадрат */}
        <rect width="48" height="48" rx="12" fill="url(#logoGradient)" />
        {/* Академическая шапочка (mortarboard) */}
        <path
          d="M8 20 L24 12 L40 20 L24 28 Z"
          fill="white"
          opacity="0.95"
        />
        <path
          d="M14 22 L14 32 Q14 36 24 36 Q34 36 34 32 L34 22 L24 28 Z"
          fill="white"
          opacity="0.75"
        />
        {/* Кисточка */}
        <line x1="40" y1="20" x2="40" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="36" r="2" fill="white" />
      </svg>
      {withText && (
        <span style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>
          Знание<span style={{ color: '#f59e0b' }}>.</span>
        </span>
      )}
    </div>
  );
}