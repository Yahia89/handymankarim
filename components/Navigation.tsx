'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-200">
              Handyman Karim
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-900">Home</Link>
            <Link href="/gallery" className="text-gray-700 hover:text-blue-900">My Work</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900">Let&apos;s Talk</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" 
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/gallery"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}>
              My Work
            </Link>
            <Link href="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}>
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}