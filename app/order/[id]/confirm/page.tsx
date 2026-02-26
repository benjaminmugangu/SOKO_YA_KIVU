'use client';

import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Search, 
  Bell, 
  ArrowRight,
  FileText,
  MessageSquare,
  HelpCircle,
  Wallet,
  Lock,
  Info
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FundReleasePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      {/* Navbar Shared with Marketplace but refined */}
      <header className="bg-white border-b border-gray-100 py-6 px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#10B981] rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="text-xl font-black text-[#003B5C] tracking-tight">EscrowDRC</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-10">
           {['Dashboard', 'My Orders', 'Wallet', 'Support'].map((link, i) => (
             <button key={link} className={`text-xs font-black uppercase tracking-widest ${i === 1 ? 'text-green-600 border-b-2 border-green-600 pb-1' : 'text-gray-400 hover:text-gray-600'}`}>
               {link}
             </button>
           ))}
        </nav>

        <div className="flex items-center gap-8">
           <div className="relative w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input type="text" placeholder="Search transactions..." className="w-full bg-green-50/30 border border-green-100 rounded-full pl-11 pr-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-green-400" />
           </div>
           <button className="relative p-1 text-gray-400">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
           </button>
           <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden p-0.5">
              <div className="w-full h-full bg-[#E5A186] rounded-full" />
           </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10">
           <span>Orders</span> <ChevronRight className="w-3 h-3" />
           <span>#ORD-88291</span> <ChevronRight className="w-3 h-3" />
           <span className="text-gray-900 border-b border-gray-900 pb-0.5">Final Confirmation</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Left Section: Main Actions */}
           <div className="lg:col-span-2 space-y-10">
              {/* Success Hero */}
              <div className="bg-white rounded-[48px] p-12 shadow-xl shadow-gray-200/50 border border-gray-50 flex flex-col items-center text-center">
                 <motion.div 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ type: 'spring', damping: 12 }}
                   className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8"
                 >
                    <CheckCircle2 className="w-12 h-12" />
                 </motion.div>
                 
                 <h1 className="text-5xl font-black text-[#1E293B] mb-4">Delivery Confirmed!</h1>
                 <p className="text-gray-500 text-base font-medium max-w-md leading-relaxed mb-12">
                    Order #ORD-88291 has been successfully delivered. To complete the transaction and pay the seller, please release the funds below.
                 </p>

                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-6 rounded-3xl font-black text-lg flex items-center justify-center gap-4 transition-all shadow-2xl shadow-green-400/30"
                 >
                    <Lock className="w-6 h-6" />
                    Confirm Receipt & Release Funds
                 </motion.button>
                 <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em] mt-6">Secure Escrow Transfer</p>
              </div>

              {/* Rating Section */}
              <div className="bg-white rounded-[48px] p-12 shadow-xl shadow-gray-200/50 border border-gray-50">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="p-2 bg-green-50 rounded-xl text-green-600">
                       <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-[#1E293B]">Rate Your Experience</h3>
                 </div>

                 <div className="space-y-10">
                    <div>
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Seller Rating</p>
                       <div className="flex gap-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                             <Star key={star} className="w-10 h-10 text-green-500 fill-current cursor-pointer hover:scale-110 transition-transform" />
                          ))}
                       </div>
                    </div>

                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">Write a Review (Optional)</label>
                       <textarea 
                         rows={4} 
                         placeholder="Tell us about the product quality and delivery speed..." 
                         className="w-full bg-gray-50 focus:bg-white border border-gray-100 focus:border-green-200 p-8 rounded-[32px] text-sm text-gray-700 focus:outline-none transition-all resize-none shadow-inner"
                       />
                    </div>

                    <button className="bg-gray-100 text-gray-500 px-12 py-4 rounded-2xl font-black text-sm hover:bg-gray-200 transition-all">
                       Submit Feedback
                    </button>
                 </div>
              </div>
           </div>

           {/* Right Section: Sidebar Summary */}
           <div className="lg:col-span-1 space-y-10">
              <div className="bg-white rounded-[48px] p-10 border border-gray-50 shadow-sm">
                 <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-10">Transaction Summary</h3>
                 
                 <div className="space-y-8">
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-bold text-gray-400">Item</span>
                       <span className="text-xs font-black text-gray-900">iPhone 14 Pro Max (256GB)</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-bold text-gray-400">Seller</span>
                       <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-gray-900">Bakari Electronics</span>
                          <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-500/10" />
                       </div>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-xs font-bold text-gray-400">Escrow ID</span>
                       <span className="bg-gray-50 px-2 py-1 rounded text-[10px] font-black text-gray-500 border border-gray-100 uppercase tracking-tighter">DRC-X992-K82</span>
                    </div>

                    <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                       <div>
                          <p className="text-xs font-black text-gray-900 uppercase">Total Amount</p>
                       </div>
                       <div className="text-right">
                          <p className="text-3xl font-black text-green-600">2,450,000</p>
                          <p className="text-sm font-black text-green-500">CDF</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Payment Flow Widget */}
              <div className="bg-green-50/50 rounded-[48px] p-10 border border-green-100 shadow-sm relative overflow-hidden">
                 <h3 className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-10">Payment Flow</h3>
                 
                 <div className="space-y-10 relative">
                    <div className="absolute left-[19px] top-10 bottom-10 w-0.5 bg-green-200" />
                    
                    <div className="flex items-center gap-6 relative">
                       <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center text-white z-10 shadow-lg shadow-green-200">
                          <Wallet className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="text-xs font-black text-gray-900">Escrow Vault</p>
                          <p className="text-[10px] text-green-600 font-bold">Funds Secured (Ready)</p>
                       </div>
                    </div>

                    <div className="flex items-center gap-6 relative opacity-30">
                       <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 z-10">
                          <ArrowRight className="w-5 h-5 rotate-90" />
                       </div>
                       <div>
                          <p className="text-xs font-black text-gray-400 text-gray-900">Seller Account</p>
                          <p className="text-[10px] font-bold">Payout to Orange Money</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 flex gap-3 items-start">
                    <Info className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-[9px] text-green-700 font-bold leading-relaxed italic">
                       Upon confirmation, funds are instantly disbursed via our Mobile Money integration (M-Pesa, Orange, Airtel).
                    </p>
                 </div>
              </div>

              {/* Utility Buttons */}
              <div className="space-y-4">
                 <button className="w-full bg-white border border-gray-100 p-6 rounded-[32px] flex items-center justify-between group hover:border-green-200 transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-green-600 group-hover:bg-green-50 transition-all">
                          <FileText className="w-5 h-5" />
                       </div>
                       <span className="text-sm font-black text-[#1E293B]">View Digital Invoice</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                 </button>

                 <button className="w-full bg-white border border-gray-100 p-6 rounded-[32px] flex items-center justify-between group hover:border-red-200 transition-all shadow-sm">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-red-500 group-hover:bg-red-50 transition-all">
                          <HelpCircle className="w-5 h-5" />
                       </div>
                       <span className="text-sm font-black text-[#1E293B]">Open Dispute / Support</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                 </button>
              </div>
           </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-200 py-10 px-12 flex items-center justify-between text-[10px] font-black text-gray-400 uppercase tracking-widest">
         <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
               <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            DRC SECURE ESCROW PROTOCOL V2.4
         </div>
         <nav className="flex items-center gap-8">
            <span className="hover:text-green-600 cursor-pointer">Terms</span>
            <span className="hover:text-green-600 cursor-pointer">Privacy</span>
            <span className="hover:text-green-600 cursor-pointer">Fees</span>
         </nav>
      </footer>
    </div>
  );
}
