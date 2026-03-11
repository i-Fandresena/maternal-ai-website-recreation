'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-12">
        {/* Logo Section */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="MaternalAI Logo"
            width={48}
            height={48}
            className="w-12 h-12"
            priority
          />
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
