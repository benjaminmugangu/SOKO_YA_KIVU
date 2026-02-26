'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { ShieldCheck, Lock, Phone, CreditCard, ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'info' | 'payment' | 'success';

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>('info');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Progress Steps */}
        {step !== 'success' && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/cart" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1E293B] transition-colors group text-sm font-medium">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Retour au panier
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${step === 'info' ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">1</span>
                Livraison
              </div>
              <div className="w-8 h-px bg-gray-200" />
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${step === 'payment' ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</span>
                Paiement
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 'info' && (
            <motion.div 
              key="info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-8"
            >
              <h1 className="text-3xl font-black text-[#1E293B]">Informations de Livraison</h1>
              <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-6 shadow-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Nom Complet</label>
                    <input type="text" placeholder="Jean-Baptiste Kalume" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Ville</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all appearance-none">
                      <option>Goma (Nord-Kivu)</option>
                      <option>Bukavu (Sud-Kivu)</option>
                      <option>Butembo</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Adresse à Goma (Quartier, Avenue)</label>
                  <input type="text" placeholder="Quartier Himbi, Avenue du Lac" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Téléphone Mobile Money</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                    <input type="tel" placeholder="+243 990 000 000" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all" />
                  </div>
                </div>

                <button 
                  onClick={() => setStep('payment')}
                  className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-brand-primary/20 hover:bg-brand-primary-dark transition-all flex items-center justify-center gap-2"
                >
                  Continuer vers le Paiement
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 'payment' && (
            <motion.div 
              key="payment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-8"
            >
              <h1 className="text-3xl font-black text-[#1E293B]">Paiement Mobile Money</h1>
              
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: 'mpesa', name: 'M-Pesa', color: 'border-brand-secondary bg-green-50', emoji: '💚' },
                  { id: 'airtel', name: 'Airtel Money', color: 'border-red-500 bg-red-50', emoji: '❤️' },
                  { id: 'orange', name: 'Orange Money', color: 'border-orange-500 bg-orange-50', emoji: '🧡' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPaymentMethod(m.id)}
                    className={`bg-white rounded-2xl p-6 flex flex-col items-center gap-3 transition-all border-2 shadow-sm hover:shadow-md ${
                      paymentMethod === m.id ? m.color : 'border-gray-200'
                    }`}
                  >
                    <span className="text-2xl">{m.emoji}</span>
                    <span className="font-bold text-[#1E293B] text-sm">{m.name}</span>
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 mb-8">
                  <ShieldCheck className="w-7 h-7 text-brand-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1E293B] mb-1">Paiement en Séquestre</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Vos fonds ne seront débloqués au vendeur qu&apos;après votre confirmation de réception via l&apos;application.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Sous-total</span>
                    <span className="font-bold text-[#1E293B]">$2,150</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Livraison</span>
                    <span className="font-bold text-[#1E293B]">$5</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between">
                    <span className="font-black text-[#1E293B]">Total</span>
                    <span className="font-black text-brand-primary text-2xl">$2,155</span>
                  </div>
                </div>

                <button 
                  onClick={() => setStep('success')}
                  className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 group hover:bg-brand-primary-dark transition-all"
                >
                  <Lock className="w-5 h-5" />
                  Payer en toute sécurité
                </button>
              </div>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-24 h-24 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 className="w-12 h-12 text-brand-secondary" />
              </div>
              <h1 className="text-4xl font-black text-[#1E293B] mb-4">Commande Confirmée !</h1>
              <p className="text-gray-500 max-w-md mb-10 leading-relaxed">
                Votre paiement a été placé en séquestre. Le vendeur a été notifié et prépare votre commande pour livraison à Goma.
              </p>
              <div className="flex gap-4">
                <Link href="/" className="bg-white border border-gray-200 px-8 py-3 rounded-xl font-bold text-[#1E293B] hover:bg-gray-50 transition-all shadow-sm">
                  Retour à l&apos;accueil
                </Link>
                <Link href="/seller/orders" className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-primary-dark transition-all shadow-xl shadow-brand-primary/20">
                  Suivre la commande
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
