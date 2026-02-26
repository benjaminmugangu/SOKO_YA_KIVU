'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, LogIn, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-black text-[#1E293B] mb-2">Bon retour !</h2>
        <p className="text-gray-400 text-sm font-medium">Connectez-vous pour accéder à votre soko.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Adresse email</label>
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

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary" />
            <span className="text-xs text-gray-500 font-medium">Se souvenir de moi</span>
          </label>
          <Link href="/auth/forgot-password" className="text-xs text-brand-primary hover:underline font-bold">
            Mot de passe oublié ?
          </Link>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white font-black py-4 rounded-2xl shadow-2xl shadow-brand-primary/20 flex items-center justify-center gap-3 transition-all text-sm"
        >
          Se connecter
          <LogIn className="w-5 h-5" />
        </motion.button>
      </form>

      {/* Escrow trust badge */}
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
        <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
          Toutes les transactions sont protégées par notre système d&apos;Escrow. Vos fonds restent sécurisés jusqu&apos;à confirmation de livraison.
        </p>
      </div>

      <p className="text-center text-sm text-gray-400 font-medium mt-8">
        Pas encore de compte ?{' '}
        <Link href="/auth/signup" className="text-brand-primary hover:underline font-bold">
          S&apos;inscrire
        </Link>
      </p>
    </motion.div>
  );
}
