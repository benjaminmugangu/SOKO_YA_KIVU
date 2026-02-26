'use client';

import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/mockData';
import { ShieldCheck, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const categories = [
    'Électronique', 'Mode & Vêtements', 'Artisanat Local RDC', 'Maison & Décoration', 'Santé & Beauté', 'Agro-Alimentaire'
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Catégories</h3>
              <nav className="space-y-4">
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    className={`w-full flex items-center justify-between text-sm font-bold py-2 transition-colors ${cat === 'Local DRC Crafts' ? 'text-brand-primary' : 'text-gray-600 hover:text-brand-primary'}`}
                  >
                    <span>{cat}</span>
                    <ChevronRight className={`w-4 h-4 ${cat === 'Artisanat Local RDC' ? 'text-brand-primary' : 'text-gray-300'}`} />
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-6 p-6 rounded-3xl bg-green-50 border border-green-100 border-l-4 border-l-green-500">
               <p className="text-[10px] font-black text-green-700 uppercase mb-2">Programme de Confiance</p>
               <p className="text-xs text-green-800 leading-relaxed font-medium">
                 Achetez en toute confiance. Garantie de remboursement via notre partenaire de confiance.
               </p>
               <button className="text-green-700 text-[10px] font-black mt-3 hover:underline">EN SAVOIR PLUS →</button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Banner */}
            <section className="relative h-[420px] rounded-[40px] overflow-hidden group shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2000&auto=format&fit=crop" 
                alt="Craftsman" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003B5C]/90 to-transparent flex items-center p-12">
                <div className="max-w-md">
                  <p className="text-brand-primary font-black text-xs uppercase tracking-widest mb-4">Promouvoir l'Excellence Locale</p>
                  <h2 className="text-4xl md:text-5xl font-display font-black text-white leading-tight mb-6">
                    Soutenez Directement <br /> les Artisans de la RDC.
                  </h2>
                  <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                    Découvrez l'artisanat local de haute qualité, sécurisé par notre système de paiement escrow.
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-brand-primary text-white px-8 py-3.5 rounded-xl font-black text-sm hover:bg-brand-primary-dark transition-all">
                      Découvrir
                    </button>
                    <Link href="/auth/signup" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-xl font-black text-sm hover:bg-white/20 transition-all flex items-center">
                      Vendre vos Produits
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* New Arrivals Grid */}
            <section className="mt-12">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-display font-black text-[#003B5C]">Nouveautés</h3>
                <button className="text-brand-primary text-sm font-black flex items-center gap-1 hover:underline">
                  Voir Tout <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Trust Metrics Bar */}
            <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: 'Vendeurs Vérifiés', value: '5,000+' },
                 { label: 'Expédition Rapide', value: '24h' },
                 { label: 'Séquestre Sécurisé', value: '100%' },
                 { label: 'Présence Locale', value: 'Kin/Gom' }
               ].map((stat) => (
                 <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm">
                   <p className="text-3xl font-display font-black text-brand-primary mb-1">{stat.value}</p>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20 py-20 font-sans">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-display font-black text-[#003B5C]">SOKO YA KIVU</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              The Democratic Republic of Congo&apos;s most trusted marketplace. Connecting buyers and sellers with secure, mobile-friendly payments.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Boutique & Exploration</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-bold">
              <li><Link href="#" className="hover:text-brand-primary">Offres Vedettes</Link></li>
              <li><Link href="#" className="hover:text-brand-primary">Nouveautés</Link></li>
              <li><Link href="#" className="hover:text-brand-primary">Boutiques Vérifiées</Link></li>
              <li><Link href="#" className="hover:text-brand-primary">Artisans Locaux</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Sécurité & Escrow</h4>
            <ul className="space-y-3 text-xs text-gray-500 font-bold">
              <li><Link href="#" className="hover:text-brand-primary">Comment ça Marche</Link></li>
              <li><Link href="#" className="hover:text-brand-primary">Protection Acheteur</Link></li>
              <li><Link href="#" className="hover:text-brand-primary">Remboursement</Link></li>
              <li><Link href="#" className="hover:text-brand-primary">Signaler un Vendeur</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Partenaires de Paiement</h4>
            <div className="grid grid-cols-2 gap-3">
               {['Orange Money', 'M-Pesa', 'Airtel Money', 'Mobile Cash'].map((m) => (
                 <div key={m} className="bg-gray-50 border border-gray-100 p-3 rounded-xl flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-crosshair shadow-sm">
                   <div className={`w-6 h-6 rounded-full ${m.includes('Orange') ? 'bg-orange-500' : m.includes('M-Pesa') ? 'bg-red-600' : 'bg-blue-500'}`} />
                   <span className="text-[9px] font-black text-gray-400 uppercase">{m}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-20 pt-8 border-t border-gray-100 flex items-center justify-between">
           <p className="text-[10px] text-gray-400 font-bold">© {new Date().getFullYear()} SOKO YA KIVU. Tous droits réservés. Sécurisé par notre système Escrow.</p>
           <div className="flex gap-6 text-gray-400">
             <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded-full" />
             <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded-full" />
             <div className="w-5 h-5 bg-gray-50 border border-gray-200 rounded-full" />
           </div>
        </div>
      </footer>
    </main>
  );
}
