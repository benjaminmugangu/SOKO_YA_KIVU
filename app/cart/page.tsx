'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { products } from '@/lib/mockData';
import { Trash2, Plus, Minus, ShieldCheck, ArrowRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CartPage() {
  const [cartItems, setCartItems] = useState(
    products.slice(0, 2).map(p => ({ ...p, quantity: 1 }))
  );

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1E293B] transition-colors mb-6 group text-sm font-medium">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Continuer mes achats
        </Link>

        <h1 className="text-3xl font-black text-[#1E293B] mb-8">Votre Panier</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-sm">
                <p className="text-gray-400 mb-6 font-medium">Votre panier est vide.</p>
                <Link href="/" className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-primary-dark transition-colors">
                  Explorer le Marketplace
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-[#1E293B] text-base">{item.name}</h3>
                    <p className="text-xs text-gray-400 font-medium mb-2">Vendu par {item.seller}</p>
                    <div className="inline-flex items-center gap-1.5 text-brand-secondary text-[10px] font-bold px-2 py-0.5 bg-green-50 border border-green-100 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      SÉQUESTRE GARANTI
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-gray-400 hover:text-brand-primary transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-[#1E293B] w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-gray-400 hover:text-brand-primary transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right sm:min-w-[100px]">
                    <div className="text-brand-primary font-black text-xl">${(item.price * item.quantity).toLocaleString()}</div>
                    <span className="text-[10px] text-gray-400 font-bold">≈ {(item.price * item.quantity * 2500).toLocaleString()} CDF</span>
                    <button onClick={() => removeItem(item.id)} className="block mt-2 text-gray-300 hover:text-red-500 transition-colors mx-auto sm:mx-0 sm:ml-auto">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24 shadow-sm">
              <h2 className="text-lg font-black text-[#1E293B] mb-6">Résumé Sécurisé</h2>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span className="font-medium">Sous-total</span>
                  <span className="text-[#1E293B] font-bold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span className="font-medium">Livraison (Goma)</span>
                  <span className="text-[#1E293B] font-bold">${shipping}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span className="font-medium">Frais de service Escrow</span>
                  <span className="text-brand-secondary font-bold">Gratuit</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-black">
                  <span className="text-[#1E293B]">Total</span>
                  <span className="text-brand-primary">${total.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                    Vos fonds seront conservés en toute sécurité par SOKO YA KIVU jusqu&apos;à ce que vous confirmiez la réception de votre commande.
                  </p>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group shadow-xl shadow-brand-primary/20"
              >
                Passer à la caisse
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {['M-Pesa', 'Airtel Money', 'Orange Money'].map(p => (
                  <span key={p} className="text-[9px] font-bold text-gray-400 uppercase border border-gray-200 px-2 py-1 rounded">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
