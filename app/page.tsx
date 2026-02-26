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
    <main className="min-h-screen bg-brand-surface">
      <Navbar />
      
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-premium">
              <h3 className="text-[11px] font-black text-brand-dark/30 uppercase tracking-[0.2em] mb-8">Catégories</h3>
              <nav className="space-y-5">
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    className={`w-full flex items-center justify-between text-[13px] font-bold py-1 transition-all group ${cat === 'Artisanat Local RDC' ? 'text-brand-primary' : 'text-gray-500 hover:text-brand-primary'}`}
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{cat}</span>
                    <ChevronRight className={`w-4 h-4 transition-all ${cat === 'Artisanat Local RDC' ? 'text-brand-primary opacity-100' : 'text-gray-200 opacity-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </nav>
            </div>

            <div className="mt-8 p-8 rounded-[32px] bg-green-50/50 border border-green-100 border-l-4 border-l-brand-secondary shadow-sm">
               <p className="text-[10px] font-black text-green-700 uppercase tracking-widest mb-3">Programme de Confiance</p>
               <p className="text-xs text-green-800 leading-relaxed font-semibold">
                 Achetez en toute confiance. Garantie de remboursement via notre partenaire de confiance.
               </p>
               <button className="text-green-700 text-[10px] font-black mt-5 hover:underline tracking-widest">EN SAVOIR PLUS →</button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Banner */}
            <section className="relative h-[520px] rounded-[48px] overflow-hidden group shadow-premium ring-1 ring-black/5">
              <Image 
                src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2000&auto=format&fit=crop" 
                alt="Artisan Congolais" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/40 to-transparent flex items-center p-14">
                <div className="max-w-xl">
                  <p className="text-brand-primary font-black text-[10px] uppercase tracking-[0.4em] mb-5">Promouvoir l&apos;Excellence Locale</p>
                  <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-8 text-balance">
                    Soutenez Directement les Artisans de la RDC.
                  </h2>
                  <p className="text-gray-300 mb-10 text-base leading-relaxed max-w-lg opacity-90 font-medium">
                    Découvrez l&apos;artisanat local de haute qualité, sécurisé par notre système de paiement escrow exclusif.
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <button className="bg-brand-primary text-white ml-0 px-12 py-4.5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-brand-primary-dark shadow-2xl shadow-brand-primary/40 transition-all hover:scale-105 active:scale-95">
                      Découvrir
                    </button>
                    <Link href="/auth/signup" className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-12 py-4.5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white/20 transition-all flex items-center hover:scale-105 active:scale-95">
                      Vendre vos Produits
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* New Arrivals Grid */}
            <section className="mt-16">
              <div className="flex items-center justify-between mb-10 px-2">
                <h3 className="text-3xl font-display font-black text-brand-dark tracking-tight">Nouveautés</h3>
                <button className="text-brand-primary text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Voir Tout <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Trust Metrics Bar */}
            <section className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { label: 'Vendeurs Vérifiés', value: '5,000+' },
                 { label: 'Expédition Rapide', value: '24h' },
                 { label: 'Séquestre Sécurisé', value: '100%' },
                 { label: 'Présence Locale', value: 'Kin/Gom' }
               ].map((stat) => (
                 <div key={stat.label} className="bg-white border border-gray-100 rounded-[32px] p-10 text-center shadow-premium hover:shadow-premium-hover transition-all group">
                   <p className="text-4xl font-display font-black text-brand-primary mb-3 group-hover:scale-110 transition-transform">{stat.value}</p>
                   <p className="text-[10px] font-black text-brand-dark/30 uppercase tracking-[0.2em]">{stat.label}</p>
                 </div>
               ))}
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-32 py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xl font-display font-black text-brand-dark tracking-tight">SOKO YA KIVU</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-medium max-w-xs">
              La plateforme de confiance en République Démocratique du Congo. Connectez-vous en toute sécurité.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-brand-dark uppercase tracking-[0.2em] mb-8">Boutique & Exploration</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Offres Vedettes</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Nouveautés</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Boutiques Vérifiées</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Artisans Locaux</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-brand-dark uppercase tracking-[0.2em] mb-8">Sécurité & Escrow</h4>
            <ul className="space-y-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Comment ça Marche</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Protection Acheteur</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Remboursement</Link></li>
              <li><Link href="#" className="hover:text-brand-primary transition-colors">Signaler un Vendeur</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-brand-dark uppercase tracking-[0.2em] mb-8">Partenaires de Paiement</h4>
            <div className="grid grid-cols-2 gap-4">
               {['Orange Money', 'M-Pesa', 'Airtel Money', 'Mobile Cash'].map((partner) => {
                 const getPartnerColor = (name: string) => {
                   if (name.includes('Orange')) return 'bg-orange-500';
                   if (name.includes('M-Pesa')) return 'bg-red-600';
                   return 'bg-blue-500';
                 };
                 return (
                   <div key={partner} className="bg-brand-surface border border-gray-100 p-4 rounded-2xl flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-pointer group hover:bg-white hover:shadow-premium">
                     <div className={`w-7 h-7 rounded-full shadow-inner ${getPartnerColor(partner)}`} />
                     <span className="text-[10px] font-black text-gray-400 group-hover:text-brand-dark transition-colors">{partner}</span>
                   </div>
                 );
               })}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
           <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
             © {new Date().getFullYear()} SOKO YA KIVU. Sécurisé par notre système Escrow Propriétaire.
           </p>
           <div className="flex gap-8">
             <div className="w-6 h-6 bg-brand-surface border border-gray-100 rounded-full hover:bg-brand-primary/10 transition-colors cursor-pointer" />
             <div className="w-6 h-6 bg-brand-surface border border-gray-100 rounded-full hover:bg-brand-primary/10 transition-colors cursor-pointer" />
             <div className="w-6 h-6 bg-brand-surface border border-gray-100 rounded-full hover:bg-brand-primary/10 transition-colors cursor-pointer" />
           </div>
        </div>
      </footer>
    </main>
  );
}
