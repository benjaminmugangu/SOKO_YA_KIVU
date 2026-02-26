'use client';

import React from 'react';
import { 
  Search, 
  Bell, 
  MessageSquare, 
  Printer, 
  MoreVertical, 
  ShieldCheck,
  Truck,
  Wallet,
  Plus,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';

const orderStats = [
  { label: 'Expédition en Attente', value: '24 Commandes', icon: Printer, trend: '+12% vs sem. dernière', color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { label: 'Fonds en Séquestre', value: 'CDF 1,240,000', icon: ShieldCheck, trend: 'Fonds Bloqués', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { label: 'Expéditions Actives', value: '42 Commandes', icon: Truck, trend: 'En Transit', color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  { label: "Revenu du Jour", value: 'CDF 850,500', icon: Wallet, trend: 'Libéré', color: 'text-green-500', bg: 'bg-green-500/10' },
];

const dashboardOrders = [
  { id: '#DRC-98421', date: '24 Oct, 14:20', customer: 'Samuel Kabasele', location: 'Goma, RDC', method: 'M-Pesa (Mobile Money)', amount: 'CDF 150,000', status: 'EN ATTENTE', statusColor: 'bg-orange-500/10 text-orange-500' },
  { id: '#DRC-98418', date: '24 Oct, 11:05', customer: 'Marie Tshisekedi', location: 'Lubumbashi, RDC', method: 'Airtel Money', amount: 'CDF 45,000', status: 'EN TRANSIT', statusColor: 'bg-blue-500/10 text-blue-500' },
  { id: '#DRC-98402', date: '23 Oct, 16:45', customer: 'David Lumumba', location: 'Bukavu, RDC', method: 'Paiement Carte', amount: 'CDF 280,000', status: 'SÉQUESTRE', statusColor: 'bg-cyan-500/10 text-cyan-500' },
  { id: '#DRC-98395', date: '23 Oct, 09:12', customer: 'Esperance Mwamba', location: 'Matadi, RDC', method: 'Orange Money', amount: 'CDF 12,500', status: 'TERMINÉ', statusColor: 'bg-green-500/10 text-green-500' },
];

export default function OrderManagementPage() {
  return (
    <div className="min-h-screen bg-[#0A0D14] text-white p-8 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-8 flex-1">
           <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Rechercher ID, Nom client ou numéro mobile..." 
                className="w-full bg-[#131926] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
           </div>
        </div>
        
        <div className="flex items-center gap-6">
           <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full" />
           </button>
           <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <MessageSquare className="w-5 h-5" />
           </button>
           <button className="bg-[#1476D1] text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#0E5AA1] transition-all">
              <Plus className="w-4 h-4 shadow-lg shadow-[#1476D1]/20" />
              Créer une Annonce
           </button>
        </div>
      </div>

      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Gestion des Commandes</h1>
        <p className="text-gray-500 text-sm">Suivi des envois, paiements escrow et satisfaction client.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {orderStats.map((stat, idx) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#131926] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group"
          >
             <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                   <stat.icon className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-bold ${stat.color === 'text-orange-500' ? 'text-green-500' : 'text-gray-400'} uppercase tracking-widest`}>
                   {stat.trend}
                </span>
             </div>
             <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
             <h3 className="text-2xl font-bold tracking-tight">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      {/* Main Table Section */}
      <div className="bg-[#131926] rounded-[32px] border border-white/5 overflow-hidden shadow-2xl">
         {/* Tabs */}
         <div className="px-8 pt-8 flex items-center gap-8 border-b border-white/5">
            {['Toutes (156)', 'En attente (24)', 'En transit (42)', 'Séquestre (85)', 'Terminées (5)'].map((tab, idx) => (
              <button key={tab} className={`pb-4 px-2 text-sm font-bold transition-all border-b-2 ${idx === 0 ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-white'}`}>
                {tab}
              </button>
            ))}
         </div>

         {/* Filter Bar */}
         <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
            <div className="flex gap-4">
               <button className="bg-[#1E2533] border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-gray-300 flex items-center gap-2">
                 Last 7 Days <ChevronDown className="w-4 h-4 text-gray-500" />
               </button>
               <button className="bg-[#1E2533] border border-white/10 px-4 py-2 rounded-xl text-xs font-bold text-gray-300 flex items-center gap-2">
                 All Payment Methods <ChevronDown className="w-4 h-4 text-gray-500" />
               </button>
            </div>
            <p className="text-[10px] text-gray-500 font-bold italic">Showing 1-10 of 156 orders</p>
         </div>

         <table className="w-full text-left">
            <thead>
               <tr className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-6">ID Commande</th>
                  <th className="px-8 py-6">Date</th>
                  <th className="px-8 py-6">Client</th>
                  <th className="px-8 py-6">Méthode de Paiement</th>
                  <th className="px-8 py-6">Montant</th>
                  <th className="px-8 py-6">Statut</th>
                  <th className="px-8 py-6">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
               {dashboardOrders.map(order => (
                  <tr key={order.id} className="hover:bg-white/[0.02] transition-colors group">
                     <td className="px-8 py-6 text-sm font-bold text-blue-500 cursor-pointer hover:underline">{order.id}</td>
                     <td className="px-8 py-6 text-xs text-gray-500 font-medium">{order.date}</td>
                     <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-[#1E2533] flex items-center justify-center overflow-hidden">
                              <div className="w-full h-full bg-blue-400 group-hover:scale-110 transition-transform" />
                           </div>
                           <div>
                              <p className="text-sm font-bold">{order.customer}</p>
                              <p className="text-[10px] text-gray-500 font-medium">{order.location}</p>
                           </div>
                        </div>
                     </td>
                     <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                           <div className={`w-1.5 h-1.5 rounded-full ${order.method.includes('M-Pesa') ? 'bg-orange-500' : 'bg-yellow-500'}`} />
                           <span className="text-xs text-gray-400 font-bold">{order.method}</span>
                        </div>
                     </td>
                     <td className="px-8 py-6 text-sm font-black">{order.amount}</td>
                     <td className="px-8 py-6">
                        <span className={`text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-wider ${order.statusColor}`}>
                           {order.status}
                        </span>
                     </td>
                     <td className="px-8 py-6">
                        <div className="flex items-center gap-4 text-gray-500">
                           <button className="hover:text-blue-500 transition-colors"><Printer className="w-4 h-4" /></button>
                           <button className="hover:text-blue-500 transition-colors"><MessageSquare className="w-4 h-4" /></button>
                           <button className="hover:text-white transition-colors"><MoreVertical className="w-4 h-4" /></button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         {/* Pagination */}
         <div className="p-8 flex items-center justify-between bg-black/20">
            <span className="text-xs text-gray-500 font-bold">Page 1 sur 16</span>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-500 cursor-not-allowed">Précédent</button>
               <button className="px-4 py-2 bg-[#1476D1] border border-blue-500 rounded-lg text-xs font-bold text-white hover:bg-blue-600">Suivant</button>
            </div>
         </div>
      </div>
    </div>
  );
}

