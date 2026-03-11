'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Et si on vous disait que vous pouvez, vous aussi, <span className="text-primary">sauver deux vies</span> ?
              </h1>
              <p className="text-gray-700 text-base leading-relaxed">
                Bienvenu dans le mouvement ! Un geste, une donnée, une réponse au bon moment. Parfois, c'est tout ce qu'il faut pour sauver deux vies. <span className="font-bold">MaternalAI</span> réinvente la grossesse en Afrique en transformant les données de santé maternelle en une prise de décision éclairée, avec une technologie attentive, une approche humaine et la force des communautés.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 items-center">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-2 text-sm font-medium">
                Rejoindre le mouvement
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-2 text-sm font-medium">
                Découvrir la solution
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex gap-12 pt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">15+</div>
                <p className="text-gray-600 text-sm mt-2">Volontaires actifs</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">5</div>
                <p className="text-gray-600 text-sm mt-2">Régions couvertes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">1000+</div>
                <p className="text-gray-600 text-sm mt-2">Femmes sensibilisées</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex items-center justify-center h-96 md:h-full">
            <div className="relative w-full max-w-md h-full flex items-center justify-center">
              {/* Pregnant Woman Figure */}
              <div className="relative w-48 h-96 flex items-center justify-center">
                {/* Head */}
                <div className="absolute top-0 w-10 h-10 bg-orange-200 rounded-full"></div>
                
                {/* Hair bun */}
                <div className="absolute top-2 w-12 h-8 bg-orange-900 rounded-full"></div>
                
                {/* Body and belly */}
                <div className="absolute top-12 left-8 w-32 h-32 bg-red-500 rounded-2xl opacity-90"></div>
                
                {/* Arm */}
                <div className="absolute top-16 -right-6 w-6 h-20 bg-orange-200 rounded-full"></div>
                
                {/* Icons around with connecting lines */}
                
                {/* Icon 1: Eye (Blue) */}
                <div className="absolute top-16 right-0 w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                </div>
                
                {/* Icon 2: Health/Document (Green) */}
                <div className="absolute top-28 right-16 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-8-6zm-1 16H7v-2h6v2zm3-4H7v-2h9v2zm0-4H7V8h9v2z"/>
                  </svg>
                </div>
                
                {/* Icon 3: Person (Orange) */}
                <div className="absolute bottom-16 right-4 w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                
                {/* Icon 4: Community (Blue) */}
                <div className="absolute bottom-8 right-32 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{width: '100%', height: '100%'}}>
                  {/* Line from body to eye */}
                  <line x1="160" y1="80" x2="195" y2="70" stroke="#ccc" strokeWidth="2" strokeDasharray="4"/>
                  {/* Line from body to green */}
                  <line x1="165" y1="110" x2="190" y2="115" stroke="#ccc" strokeWidth="2" strokeDasharray="4"/>
                  {/* Line from body to orange */}
                  <line x1="160" y1="150" x2="150" y2="190" stroke="#ccc" strokeWidth="2" strokeDasharray="4"/>
                  {/* Line from body to blue */}
                  <line x1="140" y1="140" x2="100" y2="160" stroke="#ccc" strokeWidth="2" strokeDasharray="4"/>
                </svg>

                {/* Health info box */}
                <div className="absolute bottom-2 right-2 bg-white rounded-lg shadow-md p-2 text-xs">
                  <div className="font-bold text-gray-800">Semaine 24</div>
                  <div className="text-gray-600 flex gap-1 items-center">
                    <span>🎉</span> Bébé: 600g
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
