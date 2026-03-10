'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">❤️</span>
          </div>
          <span className="font-bold text-lg text-gray-800">Santé Maternelle</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-700 hover:text-primary transition text-sm font-medium">
            Ici enseye
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition text-sm font-medium">
            Le contact
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition text-sm font-medium">
            Formations
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition text-sm font-medium">
            L'impact
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition text-sm font-medium">
            Centre
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
          Rejoindre l'engagement
        </Button>
      </nav>
    </header>
  );
}
