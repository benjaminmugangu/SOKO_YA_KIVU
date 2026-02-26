'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Search, 
  Bell, 
  CheckCircle2, 
  Clock, 
  Truck, 
  Lock,
  Wallet,
  Info,
  ArrowRight,
  FileText,
  HelpCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const timelineSteps = [
  { label: 'Payment Received', desc: 'Oct 24, 2023 • 14:20 via M-Pesa', completed: true, icon: CheckCircle2 },
  { label: 'In Escrow (Awaiting Shipping)', desc: 'Seller has been notified to prepare your items.', completed: true, icon: Lock, active: true },
  { label: 'Item in Transit', desc: 'Estimated delivery: Oct 27, 2023', completed: false, icon: Truck },
  { label: 'Funds Released', desc: 'Pending your confirmation', completed: false, icon: Wallet },
];

export default function EscrowStatusPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-5 px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0F172A] rounded-xl flex items-center justify-center text-white shadow-lg">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-[#003B5C] tracking-tight">SecureTrade DRC</span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {['Dashboard', 'Transactions', 'Wallet', 'Support', 'Payments'].map((link, i) => (
            <button key={link} className={`text-xs font-black uppercase tracking-widest ${i === 1 ? 'text-brand-primary border-b-2 border-brand-primary pb-1' : 'text-gray-400 hover:text-gray-600'}`}>
              {link}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input type="text" placeholder="Search transactions..." className="w-full bg-gray-50 border border-gray-100 rounded-full pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary" />
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

      <main className="max-w-5xl mx-auto p-12">
        {/* Escrow Status Header */}
        <div className="text-center mb-12">
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Escrow Status</h2>
          <div className="inline-block bg-[#0F172A] text-white px-6 py-2.5 rounded-xl text-sm font-mono font-bold tracking-wider">
            TRX-98234-DRC
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Main Card */}
          <div className="lg:col-span-2 space-y-10">
            {/* Status Card */}
            <div className="bg-white rounded-[48px] p-12 shadow-xl shadow-gray-200/50 border border-gray-50">
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"
                >
                  <Lock className="w-8 h-8" />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-black text-[#1E293B]">Your payment is being held in escrow</h1>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 font-medium leading-relaxed mb-10">
                To protect your purchase, we have safely secured your funds. The seller will only receive the payment once you confirm that the items have been received in the expected condition.
              </p>

              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-10">
                <p className="text-xs text-blue-700 font-medium italic leading-relaxed">
                  &quot;Funds will be released to the seller only after you confirm delivery via the button below or if no dispute is raised within the protection period.&quot;
                </p>
              </div>

              {/* Transaction Journey */}
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Transaction Journey</h3>
              
              <div className="space-y-8 relative">
                <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gray-100" />
                
                {timelineSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-14 flex items-start gap-4">
                    <div className={`absolute left-0 w-10 h-10 rounded-2xl flex items-center justify-center z-10 ${
                      step.completed 
                        ? step.active ? 'bg-blue-500 text-white shadow-lg shadow-blue-200' : 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-300'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-sm font-black mb-1 ${step.completed ? 'text-[#1E293B]' : 'text-gray-300'}`}>{step.label}</p>
                      <p className="text-[11px] text-gray-400 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-5 rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all shadow-2xl shadow-brand-primary/30"
            >
              <CheckCircle2 className="w-5 h-5" />
              Confirm Delivery & Release Funds
            </motion.button>

            <button className="w-full bg-white border border-gray-200 text-gray-600 py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
              <HelpCircle className="w-5 h-5" />
              Open a Dispute
            </button>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Amount Held */}
            <div className="bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm text-center">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Total Amount Held</h3>
              <p className="text-4xl font-black text-brand-primary mb-2">$150.00</p>
              <p className="text-sm font-bold text-gray-400">≈ FC 375,000</p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-[#0F172A] rounded-[40px] p-10 text-white text-center">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Automatic Release In</h3>
              <div className="flex items-center justify-center gap-4">
                <div className="bg-white/10 rounded-2xl px-5 py-4">
                  <p className="text-3xl font-black">02</p>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Days</p>
                </div>
                <div className="bg-white/10 rounded-2xl px-5 py-4">
                  <p className="text-3xl font-black">04</p>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Hours</p>
                </div>
                <div className="bg-white/10 rounded-2xl px-5 py-4">
                  <p className="text-3xl font-black">48</p>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Mins</p>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-2">
                <Info className="w-3 h-3 text-gray-500 shrink-0 mt-0.5" />
                <p className="text-[9px] text-gray-500 font-medium leading-relaxed text-left">
                  Funds release automatically if no dispute is opened before this timer ends.
                </p>
              </div>
            </div>

            {/* Buyer Status */}
            <div className="bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Your Status</h3>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-black text-[#1E293B]">Verified Buyer</span>
              </div>
              <p className="text-xs text-gray-400 font-bold pl-8">KYC Level 2 Active</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-10 border-t border-gray-200 py-8 px-12 flex items-center justify-center gap-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">
        <span className="hover:text-brand-primary cursor-pointer">Terms of Service</span>
        <span className="hover:text-brand-primary cursor-pointer">Escrow Policy</span>
        <span className="hover:text-brand-primary cursor-pointer">Help Center</span>
      </footer>
    </div>
  );
}
