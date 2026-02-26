'use client';

import React from 'react';
import { 
  Search, 
  Bell, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  AlertTriangle,
  Globe,
  BarChart3,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  MoreVertical,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

const adminStats = [
  { label: 'Total Transaction Volume', value: '$1,240,500', trend: '+18.2%', up: true, icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Active Escrow Total', value: 'FC 450M', trend: '+12.4%', up: true, icon: ShieldCheck, color: 'text-green-500', bg: 'bg-green-50' },
  { label: 'Dispute Rate', value: '1.2%', trend: '-0.3%', up: false, icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Pending KYC', value: '128', trend: '+24', up: true, icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
];

const recentEscrow = [
  { id: 'TRX-98234', buyer: 'Samuel K.', seller: 'TechHub Goma', amount: 'FC 150,000', status: 'Held', statusColor: 'bg-blue-100 text-blue-600', method: 'M-Pesa' },
  { id: 'TRX-98231', buyer: 'Marie T.', seller: 'Fashion DRC', amount: 'FC 45,000', status: 'Released', statusColor: 'bg-green-100 text-green-600', method: 'Orange' },
  { id: 'TRX-98228', buyer: 'David L.', seller: 'Agro Kivu', amount: 'FC 280,000', status: 'Disputed', statusColor: 'bg-red-100 text-red-600', method: 'Airtel' },
  { id: 'TRX-98225', buyer: 'Esperance M.', seller: 'Solar Plus', amount: 'FC 520,000', status: 'Held', statusColor: 'bg-blue-100 text-blue-600', method: 'Card' },
];

const sidebarLinks = [
  { label: 'Dashboard', icon: BarChart3, active: true },
  { label: 'Transactions', icon: TrendingUp, active: false },
  { label: 'Escrow Management', icon: Wallet, active: false },
  { label: 'KYC Verification', icon: Users, active: false },
  { label: 'Disputes', icon: AlertTriangle, active: false },
  { label: 'Sales Trends', icon: TrendingUp, active: false },
  { label: 'Regional Activity', icon: Globe, active: false },
];

export default function AdminReportsPage() {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0F172A] text-white flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight block">DRC E-commerce</span>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">Global Admin Panel</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {sidebarLinks.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all font-bold text-sm ${
                item.active 
                  ? 'bg-blue-600/20 text-blue-400' 
                  : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xs font-black">AD</div>
            <div>
              <p className="text-sm font-bold">Admin User</p>
              <p className="text-[10px] text-gray-500 font-medium">admin@sokoyakivu.cd</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-72">
        {/* Header */}
        <header className="bg-white border-b border-gray-100 py-5 px-10 flex items-center justify-between sticky top-0 z-40">
          <div>
            <h1 className="text-2xl font-black text-[#1E293B]">Analytics Overview</h1>
            <p className="text-xs text-gray-400 font-medium mt-1">Real-time platform performance across the DRC</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
              <input type="text" placeholder="Search transactions..." className="w-full bg-gray-50 border border-gray-100 rounded-full pl-10 pr-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <button className="relative p-1 text-gray-400">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
            </button>
          </div>
        </header>

        <main className="p-10 space-y-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm group hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-bold ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.trend}
                  </div>
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
                <h3 className="text-3xl font-black text-[#1E293B]">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Charts Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Transaction Trends */}
            <div className="bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-black text-[#1E293B]">Transaction Trends</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1">Daily volume comparison across the DRC</p>
                </div>
                <button className="text-gray-300 hover:text-gray-500"><MoreVertical className="w-5 h-5" /></button>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-3xl flex items-center justify-center">
                <div className="flex items-end gap-3 h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className={`w-5 rounded-t-lg ${i === 9 ? 'bg-blue-500' : 'bg-blue-200'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Regional Density */}
            <div className="bg-white rounded-[40px] p-10 border border-gray-50 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-black text-[#1E293B]">Regional Density</h3>
                  <p className="text-xs text-gray-400 font-medium mt-1">Transaction concentration by province</p>
                </div>
                <button className="text-gray-300 hover:text-gray-500"><MoreVertical className="w-5 h-5" /></button>
              </div>
              <div className="h-48 bg-gradient-to-br from-green-50 to-green-100/30 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <Globe className="w-32 h-32 text-green-200" />
                <div className="absolute top-8 right-12 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-40" />
                <div className="absolute top-12 right-16 w-3 h-3 bg-green-600 rounded-full shadow-lg" />
                <div className="absolute bottom-12 left-16 w-3 h-3 bg-blue-500 rounded-full shadow-lg" />
                <div className="absolute top-16 left-24 w-2 h-2 bg-orange-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* Recent Escrow Activity Table */}
          <div className="bg-white rounded-[40px] border border-gray-50 shadow-sm overflow-hidden">
            <div className="p-10 pb-0">
              <h3 className="text-lg font-black text-[#1E293B] mb-1">Recent Escrow Activity</h3>
              <p className="text-xs text-gray-400 font-medium">Latest transactions held in escrow across the platform</p>
            </div>
            <div className="mt-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                    <th className="px-10 py-5">Transaction ID</th>
                    <th className="px-10 py-5">Buyer</th>
                    <th className="px-10 py-5">Seller</th>
                    <th className="px-10 py-5">Method</th>
                    <th className="px-10 py-5">Amount</th>
                    <th className="px-10 py-5">Status</th>
                    <th className="px-10 py-5">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentEscrow.map((tx) => (
                    <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-10 py-6 text-sm font-bold text-blue-500">{tx.id}</td>
                      <td className="px-10 py-6 text-sm font-medium text-gray-700">{tx.buyer}</td>
                      <td className="px-10 py-6 text-sm font-medium text-gray-700">{tx.seller}</td>
                      <td className="px-10 py-6 text-xs text-gray-400 font-bold">{tx.method}</td>
                      <td className="px-10 py-6 text-sm font-black text-gray-900">{tx.amount}</td>
                      <td className="px-10 py-6">
                        <span className={`text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider ${tx.statusColor}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-10 py-6">
                        <button className="text-gray-300 hover:text-gray-500"><MoreVertical className="w-4 h-4" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
