'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between gap-12">
        {/* Logo Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center border-3 border-white shadow-sm">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <span className="font-bold text-lg text-primary">MaternalAI</span>
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex-1 flex items-center justify-center gap-12">
          <Link href="#histoire" className="text-gray-800 hover:text-primary transition text-sm font-medium whitespace-nowrap">
            L'Histoire
          </Link>
          <Link href="#solution" className="text-gray-800 hover:text-primary transition text-sm font-medium whitespace-nowrap">
            La Solution
          </Link>
          <Link href="#partenaires" className="text-gray-800 hover:text-primary transition text-sm font-medium whitespace-nowrap">
            Partenariats
          </Link>
          <Link href="#impact" className="text-gray-800 hover:text-primary transition text-sm font-medium whitespace-nowrap">
            L'Impact
          </Link>
          <Link href="#galerie" className="text-gray-800 hover:text-primary transition text-sm font-medium whitespace-nowrap">
            Galerie
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-2 text-sm font-medium flex-shrink-0">
          Rejoignez le mouvement
        </Button>
      </nav>
    </header>
  );
}
