'use client';

import React from 'react';
import { 
  Search, 
  Bell, 
  ShieldCheck, 
  ChevronRight, 
  Truck, 
  MapPin, 
  Box, 
  CheckCircle2, 
  Clock, 
  Phone,
  ArrowRight,
  Info,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

const timelineSteps = [
  { label: 'Order Placed', time: 'Oct 20, 09:30 AM', desc: 'Successfully processed at Kinshasa Hub', completed: true, active: false },
  { label: 'Payment Secured in Escrow', time: 'Oct 20, 10:15 AM', desc: 'Funded via Orange Money (KYC Verified)', completed: true, active: false, badge: 'Funded via Orange Money (KYC Verified)', badgeColor: 'bg-green-100 text-green-700', icon: ShieldCheck },
  { label: 'Shipped', time: 'Oct 21, 02:00 PM', desc: 'Departed from Kinshasa Warehouse', completed: true, active: false, icon: Truck },
  { label: 'Out for Delivery', time: 'Oct 23, 08:00 AM', desc: 'Courier is 2.4km from your location in Goma', completed: false, active: true, icon: MapPin },
  { label: 'Awaiting Confirmation', time: 'Pending arrival', desc: '', completed: false, active: false, icon: Box },
];

export default function OrderTrackingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header (Matching User Marketplace Theme) */}
      <header className="bg-white border-b border-gray-100 py-6 px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-lg font-black text-[#003B5C]">DRC Escrow</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
           {['Marketplace', 'My Orders', 'Payments', 'Disputes'].map((link, i) => (
             <button key={link} className={`text-xs font-black uppercase tracking-widest ${i === 1 ? 'text-brand-primary border-b-2 border-brand-primary pb-1' : 'text-gray-400 hover:text-gray-600'}`}>
               {link}
             </button>
           ))}
        </nav>

        <div className="flex items-center gap-6">
           <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input type="text" placeholder="Search orders..." className="w-full bg-gray-50 border border-gray-100 rounded-full pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary" />
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

      <main className="max-w-7xl mx-auto p-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">
           <span>Home</span> <ChevronRight className="w-3 h-3" />
           <span>My Orders</span> <ChevronRight className="w-3 h-3" />
           <span className="text-gray-900">Order #DRC-84291</span>
        </div>

        {/* Case Header */}
        <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-gray-200/50 border border-gray-50 mb-10">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                 <div className="flex items-center gap-4 mb-3">
                    <h1 className="text-4xl font-black text-[#1E293B]">Order #DRC-84291</h1>
                    <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">In Transit</span>
                 </div>
                 <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-500 font-medium">
                    <p>Estimated delivery: <span className="text-gray-900 font-black">Thursday, Oct 24, 2023</span></p>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                    <p>Shipped from Kinshasa via <span className="text-brand-primary font-black cursor-pointer hover:underline">SafeRoute Logistics</span></p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <button className="bg-gray-50 border border-gray-200 text-[#1E293B] px-8 py-3.5 rounded-xl font-black text-sm flex items-center gap-2 hover:bg-gray-100 transition-all">
                    <Phone className="w-4 h-4" />
                    Contact Seller
                 </button>
                 <button className="bg-brand-primary text-white px-8 py-3.5 rounded-xl font-black text-sm flex items-center gap-2 hover:bg-brand-primary-dark transition-all shadow-xl shadow-brand-primary/20">
                    <CheckCircle2 className="w-4 h-4" />
                    Release Escrow
                 </button>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {/* Timeline */}
           <div className="lg:col-span-1 bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm relative h-fit">
              <h3 className="flex items-center gap-3 text-xs font-black text-[#003B5C] uppercase tracking-[0.2em] mb-10">
                 <TrendingUp className="w-5 h-5 text-brand-primary" />
                 Delivery Progress
              </h3>
              
              <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                 {timelineSteps.map((step, idx) => (
                    <div key={idx} className="relative pl-12">
                       <div className={`absolute left-0 top-0 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center z-10 ${
                         step.completed ? 'bg-brand-primary text-white' : 
                         step.active ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/40' : 
                         'bg-gray-100 text-gray-300'
                       }`}>
                          {step.icon ? <step.icon className="w-4 h-4" /> : step.completed ? <CheckCircle2 className="w-4 h-4" /> : null}
                       </div>
                       
                       <div>
                          <p className={`text-sm font-black mb-1 ${step.active ? 'text-brand-primary' : 'text-[#1E293B]'}`}>{step.label}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-2">{step.time}</p>
                          {step.badge && (
                            <span className={`text-[9px] font-black px-2 py-1 rounded-md mb-2 inline-block ${step.badgeColor}`}>
                               {step.badge}
                            </span>
                          )}
                          <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Live Tracking Map & Details */}
           <div className="lg:col-span-2 space-y-10">
              {/* Map Placeholder as seen in screenshot */}
              <div className="bg-[#1E293B] rounded-[40px] h-[400px] relative overflow-hidden group shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop" 
                   alt="Goma DRC Map" 
                   fill 
                   className="object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-[5s]" 
                 />
                 {/* Map overlays */}
                 <div className="absolute inset-x-8 bottom-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between">
                    <div>
                       <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Current Speed</p>
                       <p className="text-3xl font-black text-white">22 km/h</p>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-1">Heading to</p>
                       <p className="text-xs font-bold text-white">Av. de la Paix, Goma</p>
                    </div>
                 </div>
                 
                 {/* Map marker */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                       <div className="absolute inset-0 bg-brand-primary/40 rounded-full scale-[3] animate-ping" />
                       <div className="relative w-8 h-8 bg-brand-primary rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                       </div>
                    </div>
                 </div>

                 {/* Top Label */}
                 <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl flex items-center gap-3 border border-white/20">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-lg overflow-hidden relative">
                       <div className="w-full h-full bg-[#E5A186] opacity-30" />
                       <Truck className="w-5 h-5 absolute" />
                    </div>
                    <div>
                       <p className="text-[9px] font-black text-white/50 uppercase tracking-widest leading-none">Live Tracking</p>
                       <p className="text-xs font-black text-white mt-1">Jean-Claude M.</p>
                       <p className="text-[8px] text-white/40 font-bold">ID: #DRC-DEL-092</p>
                    </div>
                 </div>
              </div>

              {/* Order Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm">
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Shipping Address</h3>
                    <div className="flex gap-4">
                       <div className="w-10 h-10 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 shrink-0">
                          <MapPin className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="text-sm font-black text-[#1E293B] mb-2">Marie-Thérèse Kabila</p>
                          <div className="space-y-1 text-xs text-gray-500 font-medium leading-relaxed">
                             <p>142 Boulevard Kanyamuhanga</p>
                             <p>Quartier les Volcans, Goma</p>
                             <p>North Kivu, DR Congo</p>
                             <p className="text-gray-900 font-bold mt-2">+243 81 234 5678</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm">
                    <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">Order Summary</h3>
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gray-50 rounded-2xl overflow-hidden relative border border-gray-100 shrink-0">
                             <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200&auto=format&fit=crop" alt="Item" fill className="object-cover" />
                          </div>
                          <div className="flex-1">
                             <p className="text-xs font-black text-[#1E293B] leading-snug">UltraLite Running Shoes - DRC Version</p>
                             <p className="text-[9px] text-gray-400 font-bold uppercase mt-1">Size: 42 • Color: Red/Black</p>
                             <div className="flex items-center justify-between mt-2">
                                <span className="text-xs font-black text-blue-500">85.00 USD</span>
                                <span className="text-[9px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-bold">Qty: 1</span>
                             </div>
                          </div>
                       </div>

                       <div className="space-y-3 pt-6 border-t border-gray-50">
                          <div className="flex justify-between text-xs font-medium text-gray-500">
                             <span>Subtotal</span>
                             <span className="font-bold text-gray-900">85.00 USD</span>
                          </div>
                          <div className="flex justify-between text-xs font-medium text-gray-500">
                             <span>Escrow Service Fee</span>
                             <span className="font-bold text-gray-900">1.50 USD</span>
                          </div>
                          <div className="flex justify-between text-base font-black text-blue-500 pt-3">
                             <span>Total</span>
                             <span>86.50 USD</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Escrow Banner */}
              <div className="bg-[#EBF5FF] border border-blue-100 rounded-[32px] p-8 flex items-start gap-4 shadow-sm">
                 <div className="w-10 h-10 bg-[#1476D1] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20">
                    <ShieldCheck className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-[#003B5C] mb-2 uppercase tracking-wide">Escrow Protection Active</h4>
                    <p className="text-xs text-gray-600 font-medium leading-relaxed">
                       Your payment is held securely. Funds will only be released to the seller after you confirm delivery. If there's an issue with your order, you can open a dispute within 48 hours of receipt.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-200 py-10 px-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] flex items-center justify-between">
         <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            © 2023 DRC Escrow E-commerce
         </div>
         <div className="flex items-center gap-8">
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Safety Center</span>
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Seller Portal</span>
            <span className="hover:text-brand-primary cursor-pointer transition-colors">Terms of Service</span>
         </div>
      </footer>
    </div>
  );
}
