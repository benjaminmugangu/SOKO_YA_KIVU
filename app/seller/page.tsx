'use client';

import React from 'react';
import { 
  TrendingUp, 
  Bolt,
  Search,
  Filter,
  ShieldPlus
} from 'lucide-react';

const stats = [
  { 
    label: 'Ventes Totales', 
    value: '$12,450.00', 
    sub: 'CDF ≈ 31,125,000',
    icon: LayoutGridIcon, 
    trend: 'Augmentation de 12.5%',
    color: 'text-[#1476D1]'
  },
  { 
    label: 'Séquestre en Attente', 
    value: '$2,140.50', 
    sub: 'Bloqué dans 14 transactions',
    icon: LockIcon, 
    trend: null,
    color: 'text-[#F59E0B]'
  },
];

const transactions = [
  { id: '#DRC-1029', customer: 'M. Kabila', date: '24 Oct 2023', amount: '$450.00', method: 'M-Pesa', status: 'EN SÉQUESTRE', statusColor: 'bg-[#FFEDD5] text-[#9A3412]' },
  { id: '#DRC-1028', customer: 'S. Mutombo', date: '22 Oct 2023', amount: '$1,200.00', method: 'Airtel', status: 'EXPÉDIÉ', statusColor: 'bg-[#DBEAFE] text-[#1E40AF]' },
];

export default function PayoutsPage() {
  return (
    <div className="space-y-8">
      {/* Top Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-8 rounded-[32px] border border-[#E2E8F0] shadow-sm flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#64748B] text-sm font-bold uppercase tracking-widest">{stat.label}</span>
                <div className="w-10 h-10 bg-[#F1F5F9] rounded-xl flex items-center justify-center text-[#94A3B8]">
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mb-2">
                <h3 className="text-4xl font-black text-[#1E293B] tracking-tight">{stat.value}</h3>
                <p className="text-[10px] text-[#94A3B8] font-bold mt-1 uppercase tracking-tighter">{stat.sub}</p>
              </div>
              {stat.trend && (
                <div className="mt-auto pt-6 flex items-center gap-2 text-[#10B981] text-xs font-bold">
                  <TrendingUp className="w-4 h-4" />
                  {stat.trend}
                </div>
              )}
              {!stat.trend && (
                 <div className="mt-auto pt-6 text-[#94A3B8] text-xs font-bold uppercase tracking-tight">
                    Fonds sécurisés par séquestre
                 </div>
              )}
            </div>
          ))}
        </div>

        {/* Available for Withdrawal Card */}
        <div className="bg-[#EBF5FF] p-8 rounded-[32px] border border-[#BFDBFE] flex flex-col relative overflow-hidden group">
           <div className="absolute top-6 right-6 w-12 h-12 bg-[#1476D1] rounded-xl flex items-center justify-center text-white shadow-lg">
              <Bolt className="w-6 h-6 fill-current" />
           </div>
           <p className="text-[#1476D1] text-xs font-black uppercase tracking-[0.2em] mb-4">Disponible pour Retrait</p>
           <h3 className="text-4xl font-black text-[#1E293B] mb-8 tracking-tight">$4,812.25</h3>
           
           <button className="w-full bg-[#1476D1] text-white py-4 rounded-xl font-bold text-sm shadow-xl shadow-[#1476D1]/30 hover:bg-[#0E5AA1] transition-all mb-6">
             Retrait via Mobile Money
           </button>
           
           <div className="flex items-center justify-center gap-4 grayscale opacity-60">
              <span className="text-[9px] font-black text-[#64748B]">M-PESA</span>
              <span className="text-[9px] font-black text-[#64748B]">AIRTEL MONEY</span>
              <span className="text-[9px] font-black text-[#64748B]">ORANGE</span>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Sales Performance Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-[40px] border border-[#E2E8F0] p-8 shadow-sm h-[400px] flex flex-col">
           <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xl font-bold text-[#1E293B]">Performance des Ventes</h4>
                <p className="text-[#64748B] text-sm">Tendances des revenus et des commandes</p>
              </div>
              <div className="flex bg-[#F1F5F9] p-1 rounded-xl">
                 <button className="px-4 py-2 bg-white text-[#1E293B] rounded-lg text-xs font-bold shadow-sm">Weekly</button>
                 <button className="px-4 py-2 text-[#64748B] rounded-lg text-xs font-bold">Monthly</button>
              </div>
           </div>
           
           <div className="flex-1 flex items-end justify-between px-4 pb-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                 <div key={day} className="flex flex-col items-center gap-4">
                    <div className="w-1.5 bg-[#F1F5F9] rounded-full h-32 relative overflow-hidden">
                       <div className="absolute bottom-0 w-full bg-[#1476D1]/20 h-1/2" />
                    </div>
                    <span className="text-[10px] font-black text-[#94A3B8] uppercase">{day}</span>
                 </div>
              ))}
           </div>
        </div>

        {/* Escrow Shield Card */}
        <div className="bg-[#00171F] p-8 rounded-[40px] text-white relative flex flex-col">
           <div className="flex items-center gap-2 text-[#1476D1] mb-6">
              <ShieldPlus className="w-5 h-5 fill-current" />
              <span className="text-[10px] font-black uppercase tracking-widest">Confiance & Sécurité</span>
           </div>
           <h4 className="text-2xl font-bold mb-4 leading-tight">Vos fonds sont sécurisés avec Escrow Shield.</h4>
           <p className="text-gray-400 text-sm leading-relaxed mb-12 font-medium">
             Les paiements ne sont débloqués qu&apos;après confirmation de réception par l&apos;acheteur ou 48h après livraison. Cela bâtit la confiance.
           </p>
           
           <div className="mt-auto">
              <button className="text-[#1476D1] text-xs font-bold hover:underline mb-8">En savoir plus sur le cycle de versement</button>
              <div className="w-full h-48 bg-gradient-to-t from-[#002A38] to-transparent rounded-t-[40px]" />
           </div>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-[40px] border border-[#E2E8F0] shadow-sm overflow-hidden">
         <div className="px-8 py-6 border-b border-[#E2E8F0] flex items-center justify-between">
            <h4 className="text-xl font-bold text-[#1E293B]">Transactions Récentes</h4>
            <div className="flex items-center gap-4">
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                 <input type="text" placeholder="Search orders..." className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none w-64" />
               </div>
               <button className="p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-[#64748B]">
                  <Filter className="w-4 h-4" />
               </button>
            </div>
         </div>
         
         <table className="w-full text-left">
            <thead>
               <tr className="bg-[#F8FAFC] text-[10px] font-black text-[#94A3B8] uppercase tracking-widest">
                  <th className="px-8 py-4">ID Commande</th>
                  <th className="px-8 py-4">Client</th>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Montant</th>
                  <th className="px-8 py-4">Méthode</th>
                  <th className="px-8 py-4">Statut</th>
                  <th className="px-8 py-4 text-right">Action</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-[#F1F5F9]">
               {transactions.map(tx => (
                  <tr key={tx.id} className="hover:bg-[#F8FAFC] transition-colors">
                     <td className="px-8 py-6 text-sm font-bold text-[#1476D1]">{tx.id}</td>
                     <td className="px-8 py-6 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[10px] font-black text-[#64748B]">
                           {tx.customer.split('. ')[1][0]}
                        </div>
                        <span className="text-sm font-bold text-[#1E293B]">{tx.customer}</span>
                     </td>
                     <td className="px-8 py-6 text-sm text-[#64748B] font-medium">{tx.date}</td>
                     <td className="px-8 py-6 text-sm font-black text-[#1E293B]">{tx.amount}</td>
                     <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                           <div className={`w-2 h-2 rounded-full ${tx.method === 'M-Pesa' ? 'bg-[#F97316]' : 'bg-[#3B82F6]'}`} />
                           <span className="text-xs font-bold text-[#64748B]">{tx.method}</span>
                        </div>
                     </td>
                     <td className="px-8 py-6">
                        <span className={`text-[9px] font-black px-2.5 py-1 rounded-md tracking-widest ${tx.statusColor}`}>
                           {tx.status}
                        </span>
                     </td>
                     <td className="px-8 py-6 text-right">
                        <button className="text-[#1476D1] text-xs font-bold hover:underline">Détails</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}

function LayoutGridIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  )
}
