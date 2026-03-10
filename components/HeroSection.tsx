'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Et si on vous disait que vous pouvez, vous aussi, <span className="text-primary">sauver deux vies</span> ?
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chaque année, des milliers de mères africaines et leurs bébés meurent de causes complètement évitables. Ensemble, nous créons une solution accessible qui sauve des vies à travers une information juste et un accompagnement humain.
              </p>
            </div>

            {/* Statistics */}
            <div className="flex gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
                <p className="text-gray-600 text-sm mt-2">Volontaires actifs</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">5</div>
                <p className="text-gray-600 text-sm mt-2">Régions couvertes</p>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
                <p className="text-gray-600 text-sm mt-2">Familles aidées</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base">
              Découvrir notre impact
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="relative h-96 md:h-full">
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-12 h-full flex items-center justify-center relative overflow-hidden">
              {/* Illustration placeholder - in production would be an actual image */}
              <div className="relative w-48 h-64 flex items-center justify-center">
                {/* Woman silhouette */}
                <div className="w-32 h-40 bg-gradient-to-b from-pink-300 to-pink-200 rounded-t-3xl mx-auto relative">
                  {/* Head */}
                  <div className="w-12 h-12 bg-pink-300 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2"></div>
                  
                  {/* Icons around */}
                  <div className="absolute -right-8 top-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ⚕️
                  </div>
                  <div className="absolute -right-12 top-20 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <div className="absolute -left-8 top-24 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    💛
                  </div>
                  <div className="absolute -right-16 bottom-8 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    👶
                  </div>
                </div>
              </div>

              {/* Decorative shapes */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary opacity-10 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-orange-400 opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
