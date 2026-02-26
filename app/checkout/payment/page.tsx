'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Bell, 
  ChevronRight, 
  Smartphone, 
  CreditCard, 
  Truck, 
  Lock, 
  CheckCircle2,
  Info
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const paymentMethods = [
  {
    id: 'mobile',
    title: 'Mobile Money',
    subtitle: 'Orange, Airtel, M-Pesa',
    desc: 'You will receive a USSD prompt on your phone to authorize the transaction.',
    icon: Smartphone,
    recommended: true,
    color: 'border-brand-primary bg-brand-primary/5',
  },
  {
    id: 'card',
    title: 'Credit or Debit Card',
    subtitle: 'Visa, Mastercard, Maestro',
    desc: '',
    icon: CreditCard,
    recommended: false,
    color: 'border-gray-200 bg-white',
  },
  {
    id: 'cod',
    title: 'Cash on Delivery',
    subtitle: 'Pay when your order arrives',
    desc: 'Please note: Delivery agent will verify your identity upon arrival. An escrow fee of $1.50 applies to all COD orders to ensure courier safety.',
    icon: Truck,
    recommended: false,
    color: 'border-gray-200 bg-white',
  },
];

export default function PaymentMethodPage() {
  const [selected, setSelected] = useState('mobile');

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-5 px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-[#003B5C] tracking-tight">SecurePay DRC</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['Shop', 'Orders', 'Support'].map((link, i) => (
            <button key={link} className={`text-xs font-black uppercase tracking-widest ${i === 0 ? 'text-brand-primary' : 'text-gray-400 hover:text-gray-600'}`}>
              {link}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input type="text" placeholder="Search..." className="w-full bg-gray-50 border border-gray-100 rounded-full pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary" />
          </div>
          <button className="relative p-1 text-gray-400">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden p-0.5">
            <div className="w-full h-full bg-[#E5A186] rounded-full" />
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-6xl mx-auto px-12 pt-10">
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10">
          <span>Cart</span> <ChevronRight className="w-3 h-3" />
          <span>Shipping</span> <ChevronRight className="w-3 h-3" />
          <span className="text-gray-900 border-b border-gray-900 pb-0.5">Payment</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Payment Methods */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-black text-[#1E293B] mb-3">How would you like to pay?</h1>
              <p className="text-gray-500 text-sm font-medium">
                Transactions are secured with end-to-end encryption and held in escrow for your protection.
              </p>
            </div>

            <div className="space-y-5">
              {paymentMethods.map((method) => (
                <motion.button
                  key={method.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelected(method.id)}
                  className={`w-full text-left p-8 rounded-[32px] border-2 transition-all relative overflow-hidden ${
                    selected === method.id 
                      ? 'border-brand-primary bg-brand-primary/5 shadow-xl shadow-blue-100' 
                      : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      selected === method.id 
                        ? 'bg-brand-primary text-white shadow-lg shadow-blue-200' 
                        : 'bg-gray-50 text-gray-400'
                    }`}>
                      <method.icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-black text-[#1E293B]">{method.title}</h3>
                        {method.recommended && (
                          <span className="bg-green-100 text-green-700 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 font-bold mb-2">{method.subtitle}</p>
                      {method.desc && (
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">{method.desc}</p>
                      )}
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                      selected === method.id 
                        ? 'border-brand-primary bg-brand-primary' 
                        : 'border-gray-200'
                    }`}>
                      {selected === method.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Escrow Protection Banner */}
            <div className="bg-[#EBF5FF] border border-blue-100 rounded-[32px] p-8 flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-200">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#003B5C] mb-2">Escrow Protection Enabled</h4>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  Your funds are held safely in our secure escrow account and only released to the seller after you confirm delivery. 256-bit SSL encrypted.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Order Summary</h3>
              
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-50">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 shrink-0">
                  <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" alt="Product" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#1E293B] mb-1">Air Max 270 React</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Qty: 1 • Red/White</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-xs font-medium text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">$120.00</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-500">
                  <span>Escrow Fee</span>
                  <span className="font-bold text-gray-900">$1.50</span>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs font-black text-gray-900 uppercase">Total Amount</span>
                  <span className="text-2xl font-black text-brand-primary">$121.50</span>
                </div>
                <p className="text-[9px] text-gray-400 font-bold text-right">VAT Included</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all shadow-2xl shadow-brand-primary/30"
            >
              <Lock className="w-5 h-5" />
              Complete Payment
            </motion.button>

            <p className="text-[9px] text-gray-400 font-bold text-center leading-relaxed">
              By clicking &quot;Complete Payment&quot;, you agree to SecurePay DRC&apos;s Terms of Service and Escrow Agreement.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-8 px-12 text-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
        © 2024 SecurePay DRC. Licensed by the BCC.
      </footer>
    </div>
  );
}
