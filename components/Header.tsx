'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-[#EEEBE8] px-4 sm:px-6 lg:px-8 py-6 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto bg-[#F7F5F3] border-2 border-[#E05A5A] rounded-full px-6 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Left - Logo with circular icon */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-12 h-12 rounded-full border-2 border-[#E05A5A] flex items-center justify-center bg-white flex-shrink-0">
            <svg className="w-6 h-6 text-[#E05A5A]" fill="currentColor" viewBox="0 0 24 24">
              {/* Mother and child silhouette */}
              <circle cx="8" cy="6" r="2.5" />
              <path d="M5 9c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5v3c0 1.5-1.5 2-3 2s-3-.5-3-2v-3z" fillOpacity="0.8"/>
              <circle cx="16" cy="8" r="2" />
              <path d="M13 11c0-1 1-2 3-2s3 1 3 2v1.5c0 1-1.5 1.5-3 1.5s-3-.5-3-1.5v-1.5z" fillOpacity="0.8"/>
            </svg>
          </div>
          <span className="text-[#E05A5A] font-medium text-sm hidden sm:inline">MaternalAI</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex-1 flex items-center justify-center gap-6 sm:gap-8 mx-4 hidden md:flex">
          <Link 
            href="#histoire" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            L'Histoire
          </Link>
          <Link 
            href="#solution" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            La Solution
          </Link>
          <Link 
            href="#partenaires" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            Partenariats
          </Link>
          <Link 
            href="#impact" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            L'Impact
          </Link>
          <Link 
            href="#galerie" 
            className="text-[#1A1A1A] text-sm font-normal hover:text-[#E05A5A] transition-colors whitespace-nowrap"
          >
            Galerie
          </Link>
        </div>

        {/* Right - CTA Button */}
        <Button 
          className="bg-[#E05A5A] hover:bg-[#d94949] text-white rounded-full px-6 sm:px-8 py-2 text-sm font-medium whitespace-nowrap flex-shrink-0 border-0 h-auto"
        >
          Rejoignez le mouvement
        </Button>
      </nav>
    </div>
  );
}
