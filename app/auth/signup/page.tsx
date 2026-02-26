'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    password: '',
    role: 'buyer',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup data:', formData);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#1E293B] mb-2">Créer un compte</h2>
        <p className="text-gray-400 text-sm font-medium">Rejoignez la soko pour des achats sécurisés.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Nom complet</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="text"
              placeholder="Jean-Baptiste Kalume"
              required
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-[#1E293B] text-sm font-medium placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all"
              value={formData.full_name}
              onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="email"
              placeholder="votre@email.com"
              required
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-[#1E293B] text-sm font-medium placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Téléphone</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="tel"
              placeholder="+243 990 000 000"
              required
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-[#1E293B] text-sm font-medium placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all"
              value={formData.phone_number}
              onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
            />
          </div>
        </div>

        {/* Role Selection */}
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Je suis</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'buyer' })}
              className={`py-3 px-4 rounded-2xl text-sm font-black transition-all border-2 ${
                formData.role === 'buyer' 
                  ? 'bg-brand-primary/10 border-brand-primary text-brand-primary' 
                  : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300'
              }`}
            >
              🛒 Acheteur
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: 'seller' })}
              className={`py-3 px-4 rounded-2xl text-sm font-black transition-all border-2 ${
                formData.role === 'seller' 
                  ? 'bg-green-50 border-green-500 text-green-600' 
                  : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300'
              }`}
            >
              🏪 Vendeur
            </button>
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Mot de passe</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-[#1E293B] text-sm font-medium placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-black py-4 rounded-2xl shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-3 transition-all text-sm mt-2"
        >
          S&apos;inscrire
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </form>

      {/* Escrow trust badge */}
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
        <ShieldCheck className="w-8 h-8 text-brand-primary shrink-0" />
        <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
          En vous inscrivant, vous acceptez l&apos;utilisation du système de séquestre (escrow) pour chaque transaction. Vos fonds sont sécurisés jusqu&apos;à confirmation de livraison.
        </p>
      </div>

      <p className="text-center text-sm text-gray-400 font-medium mt-6">
        Déjà un compte ?{' '}
        <Link href="/auth/login" className="text-brand-primary hover:underline font-bold">
          Se connecter
        </Link>
      </p>
    </motion.div>
  );
}
