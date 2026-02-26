'use client';

import React from 'react';
import { 
  Search, 
  Filter, 
  AlertCircle, 
  Clock, 
  ChevronRight, 
  Download,
  Phone,
  MessageSquare,
  CheckCircle2,
  XCircle,
  History,
  ShieldCheck,
  User,
  Star
} from 'lucide-react';
import Image from 'next/image';

const disputes = [
  { id: '#ORD-88291', item: 'iPhone 13 - Screen Damage', buyer: 'Michel B.', seller: 'TechStore Goma', status: 'IN REVIEW', amount: '$840.00', time: '2h ago', level: 'IN REVIEW', levelColor: 'bg-yellow-100 text-yellow-700' },
  { id: '#ORD-88274', item: 'Item Not Received', buyer: 'Alice M.', seller: 'Global Trends', status: 'URGENT', amount: '$125.00', time: '5h ago', level: 'URGENT', levelColor: 'bg-red-100 text-red-700' },
  { id: '#ORD-88255', item: 'Wrong Size Delivered', buyer: 'Jean-Luc K.', seller: 'Kinshasa Mode', status: 'NEW', amount: '$45.00', time: '1d ago', level: 'NEW', levelColor: 'bg-blue-100 text-blue-700' },
];

export default function AdminDisputesPage() {
  return (
    <>
      {/* List Panel */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest">Active Litigations (12)</h2>
          <Filter className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
        <div className="flex-1 overflow-y-auto">
          {disputes.map((dispute) => (
            <div key={dispute.id} className={`p-6 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${dispute.id === '#ORD-88291' ? 'bg-gray-50' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-black text-brand-primary">{dispute.id}</span>
                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${dispute.levelColor}`}>{dispute.level}</span>
              </div>
              <h3 className="text-sm font-bold text-[#1E293B] mb-1">{dispute.item}</h3>
              <p className="text-[11px] text-gray-400 font-medium">Buyer: {dispute.buyer} • Seller: {dispute.seller}</p>
              <div className="flex items-center justify-between mt-4">
                 <div className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Clock className="w-3 h-3" />
                    <span>{dispute.time}</span>
                 </div>
                 <span className="text-xs font-black text-[#1E293B]">{dispute.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto p-8">
          {/* Case Header */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 mb-8 shadow-sm">
             <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                      <AlertCircle className="w-6 h-6" />
                   </div>
                   <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-black text-[#1E293B]">Case #ORD-88291</h2>
                        <span className="bg-yellow-100 text-yellow-700 text-[10px] font-black px-2 py-1 rounded-md">IN REVIEW</span>
                      </div>
                      <p className="text-sm text-gray-400 font-medium mt-1">Dispute opened on Oct 24, 2023 • Category: <span className="text-gray-600 font-bold">Item not as described</span></p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Escrow Amount</p>
                   <h3 className="text-3xl font-black text-[#1E293B]">840.00 <span className="text-sm font-bold text-gray-400">USD</span></h3>
                   <div className="flex items-center justify-end gap-1 text-[#10B981] text-[10px] font-bold mt-2">
                      <ShieldCheck className="w-3 h-3 fill-current" />
                      SECURED IN ESCROW
                   </div>
                </div>
             </div>

             {/* Parties */}
             <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-50">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Buyer</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white shadow-sm overflow-hidden relative">
                         <div className="absolute inset-0 bg-[#D97706]/40" /> {/* Skin tone placeholder */}
                      </div>
                      <div>
                         <p className="text-xs font-black text-[#1E293B]">Michel Bakongo</p>
                         <div className="flex items-center gap-1 text-[10px] text-yellow-500 mt-0.5">
                            {[...Array(5)].map((_, i) => <Star key={i} className={`w-2 h-2 ${i < 4 ? 'fill-current' : ''}`} />)}
                            <span className="text-gray-400 ml-1 font-bold">(12 orders)</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Seller</p>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/20 border-2 border-white shadow-sm overflow-hidden relative">
                        <div className="absolute inset-0 bg-[#92400E]/30" />
                      </div>
                      <div>
                         <p className="text-xs font-black text-[#1E293B]">TechStore Goma</p>
                         <div className="flex items-center gap-1 text-[10px] text-yellow-500 mt-0.5">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-2 h-2 fill-current" />)}
                            <span className="text-gray-400 ml-1 font-bold">(452 sales)</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Evidence */}
          <div className="mb-8">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Submitted Evidence</h3>
                <span className="text-[10px] font-bold text-gray-400">3 Photos provided by Buyer</span>
             </div>
             <div className="grid grid-cols-3 gap-4">
                {[
                  'https://images.unsplash.com/photo-1601784551446-20c9e07cdbea?q=80&w=800&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop',
                  'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800&auto=format&fit=crop'
                ].map((img, i) => (
                  <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-sm group">
                     <Image src={img} alt="Evidence" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
             </div>
          </div>

          {/* History / Communication */}
          <div className="space-y-6 pb-20">
             <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">Communication History</h3>
                <button className="flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:underline">
                   <Download className="w-3 h-3" />
                   Download Log
                </button>
             </div>

             <div className="space-y-6">
                {/* Message 1 */}
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-black text-gray-500 shrink-0">MB</div>
                   <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                         <span className="text-xs font-black text-[#1E293B]">Michel Bakongo</span>
                         <span className="text-[9px] font-bold text-blue-500 uppercase tracking-tighter">Buyer</span>
                         <span className="text-[9px] text-gray-400 ml-auto">Oct 24, 09:12 AM</span>
                      </div>
                      <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl rounded-tl-none text-xs text-gray-600 leading-relaxed font-medium">
                         The phone arrived with a deep scratch on the bottom left of the screen. This was not mentioned in the listing which stated "Brand New Condition". I'm very disappointed.
                      </div>
                   </div>
                </div>

                <div className="flex items-center justify-center">
                   <div className="bg-blue-50 text-blue-600 text-[9px] font-black px-3 py-1 rounded-full border border-blue-100 flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3" />
                      DISPUTE ESCALATED TO ADMINISTRATION
                   </div>
                </div>

                {/* Message 2 */}
                <div className="flex gap-4 justify-end">
                   <div className="flex-1 text-right">
                      <div className="flex items-baseline gap-2 mb-1 justify-end">
                         <span className="text-[9px] text-gray-400 mr-auto">Oct 24, 11:45 AM</span>
                         <span className="text-[9px] font-bold text-orange-500 uppercase tracking-tighter">Seller</span>
                         <span className="text-xs font-black text-[#1E293B]">TechStore Goma</span>
                      </div>
                      <div className="bg-orange-50/50 border border-orange-100 p-4 rounded-2xl rounded-tr-none text-xs text-gray-600 text-left leading-relaxed font-medium inline-block max-w-lg">
                         Hello, we double-checked all units before shipping. This could have happened during transport via the local courier. We can offer a $50 discount or you can return the item at your cost for a full refund.
                      </div>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-[10px] font-black text-orange-500 shrink-0">TS</div>
                </div>

                {/* Internal Note */}
                <div className="bg-[#F8F9FF] border border-blue-100 rounded-2xl p-4 flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-[10px] font-black text-white shrink-0">AD</div>
                   <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                         <span className="text-xs font-black text-blue-900 italic">Internal Note (Private)</span>
                         <span className="text-[9px] text-gray-400">Oct 24, 02:00 PM</span>
                      </div>
                      <p className="text-xs text-blue-800 font-medium leading-relaxed italic">
                        The photos clearly show the scratch. Checking the courier's insurance policy to see if this is covered.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Action Panel */}
        <div className="w-80 bg-white border-l border-gray-200 p-8 flex flex-col overflow-y-auto">
           {/* Audit Trail Section */}
           <div className="mb-8">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Payment Audit Trail</h3>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 space-y-4">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-black">M</div>
                       <span className="text-xs font-bold text-gray-700">M-Pesa Payment</span>
                    </div>
                    <span className="text-[9px] font-black text-green-600 uppercase">Success</span>
                 </div>
                 <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="flex justify-between text-[10px]">
                       <span className="text-gray-400">Transaction ID</span>
                       <span className="text-gray-600 font-bold uppercase tracking-tight">MP-8821-X90</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                       <span className="text-gray-400">Date</span>
                       <span className="text-gray-600 font-bold uppercase tracking-tight">Oct 22, 2023 14:30</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                       <span className="text-gray-400">Provider Ref</span>
                       <span className="text-gray-600 font-bold uppercase tracking-tight">Vodacom DRC</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Final Resolution Section */}
           <div className="mb-8 p-6 bg-white border border-blue-200 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2" />
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Final Resolution</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium mb-6">
                Choose an action to resolve this dispute. This will trigger the movement of funds from the escrow account.
              </p>
              
              <div className="space-y-3">
                 <button className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-brand-primary-dark transition-all">
                    <MessageSquare className="w-4 h-4" />
                    Contact Both Parties
                 </button>
                 <div className="flex gap-3">
                    <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-green-700 transition-all">
                       Release to Seller
                    </button>
                    <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all">
                       Refund Buyer
                    </button>
                 </div>
                 <button className="w-full bg-white border border-gray-200 text-gray-600 py-3 rounded-xl font-bold text-xs hover:bg-gray-50 transition-all">
                    Request More Evidence
                 </button>
              </div>
           </div>

           {/* Admin Audit Feed */}
           <div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Administrative Audit</h3>
              <div className="space-y-6 relative ml-2">
                 <div className="absolute left-[-9px] top-2 bottom-2 w-0.5 bg-gray-100" />
                 
                 <div className="relative">
                    <div className="absolute left-[-13px] top-1 w-2.5 h-2.5 bg-gray-200 rounded-full border-2 border-white" />
                    <p className="text-[10px] font-medium text-gray-500">Dispute opened by <span className="text-gray-900 font-bold">Michel Bakongo</span></p>
                    <p className="text-[9px] text-gray-300 mt-0.5">Oct 24, 09:12 AM</p>
                 </div>

                 <div className="relative">
                    <div className="absolute left-[-13px] top-1 w-2.5 h-2.5 bg-brand-primary rounded-full border-2 border-white animate-pulse" />
                    <p className="text-[10px] font-medium text-gray-500">Case assigned to <span className="text-blue-600 font-bold">Admin Jane Doe</span></p>
                    <p className="text-[9px] text-gray-300 mt-0.5">Oct 24, 01:45 PM</p>
                 </div>
              </div>
           </div>

           <div className="mt-auto pt-8 border-t border-gray-100">
              <div className="flex items-center justify-between text-[9px] font-black text-gray-400">
                 <div className="flex items-center gap-1.5 grayscale opacity-60">
                    <div className="w-4 h-4 bg-[#059669] rounded-full" />
                    All systems operational
                 </div>
                 <div className="flex items-center gap-2">
                    <span>KIN/GOM</span>
                    <span>v0.1.2</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
}
