'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Bell, Search, ChevronDown, ShieldCheck, Store, LayoutGrid, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close dropdown on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="bg-brand-dark py-2 text-white text-[10px] font-black text-center flex items-center justify-center gap-6 overflow-hidden letter-spacing-widest">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3 h-3 text-brand-secondary" />
          SECURE ESCROW : FONDS SÉCURISÉS JUSQU'À VOTRE CONFIRMATION
        </div>
        <div className="hidden md:flex items-center gap-4 border-l border-white/20 pl-6 uppercase tracking-widest">
          <span>Logistique Vérifiée</span>
          <span>Mobile Money Intégré</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 py-3 transition-all duration-300">
        <div className="container mx-auto px-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 bg-brand-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 group-hover:scale-105 transition-transform">
               <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xl font-display font-black text-brand-dark tracking-tight">SOKO YA KIVU</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl hidden md:flex items-center group">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Rechercher des produits, artisanat local, mode..." 
                className="w-full bg-gray-50/50 border border-gray-200 border-r-0 rounded-l-2xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary/20 transition-all font-medium"
              />
            </div>
            <button className="bg-brand-primary text-white px-8 py-2.5 rounded-r-2xl font-bold text-sm hover:bg-brand-primary-dark shadow-lg shadow-brand-primary/10 active:scale-95 transition-all">
              Rechercher
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <Link href="/seller" className="relative text-gray-500 hover:text-brand-primary transition-colors hidden sm:block">
              <Store className="w-5 h-5" />
            </Link>
            <button className="relative text-gray-500 hover:text-brand-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
            </button>
            <Link href="/cart" className="relative group flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
                <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-white">
                  2
                </span>
              </div>
            </Link>

            {/* Account Dropdown */}
            <div className="relative" ref={menuRef}>
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 bg-gray-50/80 border border-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:bg-white hover:shadow-md transition-all active:scale-95"
              >
                <div className="w-7 h-7 bg-brand-primary rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-[10px] text-white font-bold">JD</span>
                </div>
                <span className="hidden sm:inline font-bold">Mon Compte</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-gray-200/50 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-black text-brand-dark">Jean Dupont</p>
                    <p className="text-[10px] text-gray-400 font-medium">jean@email.com</p>
                  </div>
                  <Link href="/seller" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                    <Store className="w-4 h-4 text-gray-400" />
                    Dashboard Vendeur
                  </Link>
                  <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                    <LayoutGrid className="w-4 h-4 text-gray-400" />
                    Panneau Admin
                  </Link>
                  <Link href="/auth/kyc" className="flex items-center gap-3 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                    <ShieldCheck className="w-4 h-4 text-gray-400" />
                    Vérification KYC
                  </Link>
                  <div className="border-t border-gray-100 mt-1" />
                  <Link href="/auth/login" className="flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 font-medium transition-colors">
                    <LogOut className="w-4 h-4" />
                    Se déconnecter
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
