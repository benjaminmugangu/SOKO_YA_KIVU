'use client';

import React, { useState } from 'react';
import { ShieldCheck, Upload, FileText, Camera, CheckCircle2, ChevronRight, Lock, AlertTriangle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type Step = 'intro' | 'documents' | 'photo' | 'review';

export default function KYCPage() {
  const [step, setStep] = useState<Step>('intro');
  const [docType, setDocType] = useState('id_card');

  const steps = [
    { label: 'Identité', id: 'intro' },
    { label: 'Documents', id: 'documents' },
    { label: 'Validation', id: 'photo' },
    { label: 'Examen', id: 'review' }
  ];

  const currentStepIndex = steps.findIndex(s => s.id === step);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-5 px-12 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-[#003B5C] tracking-tight">SOKO YA KIVU</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {['How it works', 'Security', 'Support'].map((link) => (
            <button key={link} className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-600">
              {link}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-14 px-4">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex flex-col items-center gap-2 relative z-10">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black transition-all duration-500 ${
                idx <= currentStepIndex 
                  ? 'bg-brand-primary text-white shadow-lg shadow-blue-200' 
                  : 'bg-gray-100 text-gray-300 border border-gray-200'
              }`}>
                {idx < currentStepIndex ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
              </div>
              <span className={`text-[9px] uppercase font-black tracking-widest ${
                idx <= currentStepIndex ? 'text-brand-primary' : 'text-gray-300'
              }`}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-[48px] p-14 shadow-xl shadow-gray-200/50 border border-gray-50 text-center">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShieldCheck className="w-10 h-10 text-brand-primary" />
                </div>
                <h1 className="text-3xl font-black text-[#1E293B] mb-4">Identity Verification</h1>
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-md mx-auto">
                  To ensure secure escrow transactions and prevent fraud, please verify your identity.
                </p>
              </div>

              <div className="bg-white rounded-[32px] p-8 border border-gray-100 space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <Lock className="w-6 h-6 text-brand-primary shrink-0" />
                  <div>
                    <h4 className="font-black text-sm text-[#1E293B]">Données Chiffrées</h4>
                    <p className="text-xs text-gray-500 mt-1 font-medium">Vos documents sont stockés en toute sécurité et ne seront jamais partagés avec des tiers.</p>
                  </div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep('documents')}
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-2xl shadow-brand-primary/20 transition-all text-sm"
              >
                Commencer la vérification
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}

          {step === 'documents' && (
            <motion.div
              key="documents"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-[48px] p-12 shadow-xl shadow-gray-200/50 border border-gray-50">
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Select Document Type</h2>
                <div className="grid gap-4">
                  {[
                    { id: 'id_card', name: 'Carte d\'Electeur / ID', icon: FileText },
                    { id: 'passport', name: 'Passeport National', icon: FileText },
                    { id: 'driver', name: 'Permis de Conduire', icon: FileText }
                  ].map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => setDocType(doc.id)}
                      className={`flex items-center justify-between p-6 rounded-[28px] border-2 transition-all ${
                        docType === doc.id ? 'bg-brand-primary/5 border-brand-primary' : 'bg-gray-50 border-gray-100 hover:border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          docType === doc.id ? 'bg-brand-primary text-white' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <doc.icon className="w-5 h-5" />
                        </div>
                        <span className="font-black text-sm text-[#1E293B]">{doc.name}</span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        docType === doc.id ? 'border-brand-primary bg-brand-primary' : 'border-gray-200'
                      }`}>
                        {docType === doc.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Area */}
              <div className="bg-white rounded-[48px] p-12 shadow-xl shadow-gray-200/50 border border-gray-50">
                <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Upload Document</h2>
                <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-14 text-center group hover:border-brand-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-300 mx-auto mb-4 group-hover:text-brand-primary transition-colors" />
                  <p className="font-black text-sm text-[#1E293B] mb-2">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 font-medium">Front side of your ID card</p>
                  <p className="text-[10px] text-gray-300 font-bold mt-2">Supported: JPG, PNG, PDF (Max 5MB)</p>
                </div>

                {/* Error state example */}
                <div className="mt-4 flex items-start gap-3 bg-red-50 border border-red-100 rounded-2xl p-4">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <p className="text-xs font-black text-red-600">Invalid file format</p>
                    <p className="text-[10px] text-red-400 font-medium mt-0.5">Please upload a high-quality JPG, PNG, or PDF file.</p>
                  </div>
                </div>
              </div>

              {/* Why required */}
              <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <Info className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <p className="text-[10px] text-gray-500 font-medium leading-relaxed">
                  <span className="font-black text-gray-700">Why is this required?</span> As a secure escrow platform in the DRC, we are legally required to verify the identity of our users to prevent money laundering and ensure the safety of all mobile money transactions (M-Pesa, Airtel Money, Orange Money).
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep('photo')}
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black transition-all shadow-2xl shadow-brand-primary/20 text-sm"
              >
                Continuer
              </motion.button>
            </motion.div>
          )}

          {step === 'photo' && (
            <motion.div
              key="photo"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-[48px] p-14 shadow-xl shadow-gray-200/50 border border-gray-50 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Camera className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-black text-[#1E293B] mb-3">Vérification Faciale</h2>
                <p className="text-sm text-gray-500 font-medium">Prenez une photo claire de vous-même pour confirmer votre identité.</p>
                
                <div className="aspect-square max-w-[240px] mx-auto bg-gray-50 rounded-full border-4 border-brand-primary/20 relative overflow-hidden flex items-center justify-center mt-10">
                  <p className="text-[10px] text-gray-400 font-bold">L&apos;accès à la caméra sera demandé</p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep('review')}
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black transition-all shadow-2xl shadow-brand-primary/20 text-sm"
              >
                Prendre la photo
              </motion.button>
            </motion.div>
          )}

          {step === 'review' && (
            <motion.div
              key="review"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="bg-white rounded-[48px] p-14 shadow-xl shadow-gray-200/50 border border-gray-50">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-600" />
                </motion.div>
                <h2 className="text-3xl font-black text-[#1E293B] mb-4">Vérification en cours</h2>
                <p className="text-sm text-gray-500 font-medium max-w-sm mx-auto mb-10 leading-relaxed">
                  Vos documents ont été envoyés avec succès. Notre équipe à Goma va les examiner sous <strong>24 heures</strong>.
                </p>
                <div className="space-y-4">
                  <Link href="/" className="block w-full bg-brand-primary text-white py-4 rounded-2xl font-black shadow-2xl shadow-brand-primary/20 text-sm">
                    Retour au Marketplace
                  </Link>
                  <Link href="/seller" className="block w-full text-brand-primary font-black text-sm py-3 hover:underline">
                    Voir mon Dashboard provisoire →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-16 text-center text-[10px] font-black text-gray-300 uppercase tracking-widest">
          © {new Date().getFullYear()} DRC Escrow Market. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
