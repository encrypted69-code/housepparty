'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/main-experience-page" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/50 group-hover:shadow-violet-500/70 transition-shadow">
                <span className="text-xl">🎵</span>
              </div>
            </div>
            <span className="font-display text-xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 text-transparent bg-clip-text">
              Moonlight Fiesta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/main-experience-page" 
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              ✨ Experience
            </Link>
            <Link 
              href="/booking-confirmation-portal" 
              className="ml-2 px-6 py-2 text-sm font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all"
            >
              📋 Booking
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/10">
            <Link 
              href="/main-experience-page" 
              className="block px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              ✨ Experience
            </Link>
            <Link 
              href="/booking-confirmation-portal" 
              className="block px-4 py-2 text-sm font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:from-violet-600 hover:to-fuchsia-600 text-center shadow-lg shadow-violet-500/30 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              📋 Booking
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}