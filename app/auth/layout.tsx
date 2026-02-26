import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#F8FAFC] font-sans">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex w-[45%] bg-[#0F172A] flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-15%] right-[-20%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[100px]" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 mb-16">
            <div className="w-11 h-11 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">SOKO YA KIVU</span>
          </Link>

          <h2 className="text-4xl font-black text-white leading-tight mb-6">
            Commerce sécurisé<br />pour la <span className="text-brand-primary">RDC.</span>
          </h2>
          <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-md">
            Achetez et vendez en toute confiance avec notre système d&apos;Escrow intégré. 
            Vos fonds sont protégés jusqu&apos;à la confirmation de livraison.
          </p>
        </div>

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            <span>M-Pesa</span>
            <span>Orange Money</span>
            <span>Airtel Money</span>
          </div>
          <p className="text-gray-600 text-[10px] font-bold">
            &copy; {new Date().getFullYear()} SOKO YA KIVU · Soko letu, usalama wetu.
          </p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10 justify-center">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-[#003B5C] tracking-tight">SOKO YA KIVU</span>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}
