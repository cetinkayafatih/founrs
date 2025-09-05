import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Logo({ className, variant = 'default', size = 'md', href }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
  };

  const logoSvg = (
    <div
      className={cn(
        "flex items-center",
        size === 'sm' && "text-xl",
        size === 'md' && "text-2xl", 
        size === 'lg' && "text-3xl"
      )}
      style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: '900',
        letterSpacing: '-0.05em',
        color: variant === 'white' ? 'white' : undefined,
        background: variant === 'white' ? undefined : 'linear-gradient(45deg, #6AA8FF, #9E7CFF, #FF7CCB)',
        WebkitBackgroundClip: variant === 'white' ? undefined : 'text',
        WebkitTextFillColor: variant === 'white' ? undefined : 'transparent',
        backgroundClip: variant === 'white' ? undefined : 'text',
        textShadow: variant === 'white' ? '0 2px 8px rgba(0, 0, 0, 0.3)' : undefined,
        filter: variant === 'white' ? undefined : 'drop-shadow(0 2px 8px rgba(106, 168, 255, 0.2))',
      }}
    >
FOUNRS
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {logoSvg}
      </Link>
    );
  }

  return logoSvg;
}

export function LogoIcon({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
  };

  return (
    <svg
      className={cn(sizeClasses[size], className)}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="url(#iconGradient)" />
      <circle cx="16" cy="16" r="4" fill="white" />
      <circle cx="8" cy="16" r="2" fill="white" opacity="0.7" />
      <circle cx="24" cy="16" r="2" fill="white" opacity="0.7" />
      <line x1="10" y1="16" x2="14" y2="16" stroke="white" strokeWidth="1" opacity="0.5" />
      <line x1="18" y1="16" x2="22" y2="16" stroke="white" strokeWidth="1" opacity="0.5" />
      
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F8CFF" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}
