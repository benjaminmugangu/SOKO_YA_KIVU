'use client';

import React from 'react';
import { 
  Search, 
  Bell, 
  ChevronRight, 
  Plus,
  Folder,
  Smartphone,
  Laptop,
  Flame,
  Shirt,
  Sprout,
  Filter,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  TrendingUp,
  MoreVertical,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';

const adminStats = [
  { label: 'Pending Review', value: '42', icon: ShieldCheck, trend: '+12% from yesterday', color: 'text-blue-500', bg: 'bg-blue-50' },
  { label: 'Flagged Items', value: '12', icon: Flame, trend: '! 3 High Priority', color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'KYC Verified Vendors', value: '85%', icon: CheckCircle2, trend: 'Of total marketplace vendors', color: 'text-green-500', bg: 'bg-green-50', isBadge: true },
];

const moderationProducts = [
  {
    id: 1, 
    name: 'Solar Panel Home Kit 200W', 
    sku: 'SOL-DRC-2001', 
    vendor: 'Kasai Traders Ltd.', 
    vendorStatus: 'KYC Level 2 • Goma, DRC',
    verified: true,
    details: 'MISSING TECHNICAL SPECS, SHIPPING WEIGHT MISSING',
    errors: true,
    price: '$349.00',
    cdfPrice: '872,500',
    tags: ['SOLAR', 'ESCROW READY'],
    tagColor: 'bg-blue-100 text-blue-700'
  },
  {
    id: 2, 
    name: 'TECNO Spark 10 Pro', 
    sku: 'PHN-TCN-4412', 
    vendor: 'Kin Digital Hub', 
    vendorStatus: 'KYC Level 3 • Kinshasa, DRC',
    verified: true,
    details: 'ALL METADATA VALIDATED',
    errors: false,
    price: '$185.00',
    cdfPrice: '462,500',
    tags: ['ELECTRONICS', 'KYC VENDOR'],
    tagColor: 'bg-green-100 text-green-700'
  },
  {
    id: 3, 
    name: 'Industrial Flour Mill', 
    sku: 'AGRO-MIL-009', 
    vendor: 'Lubumbashi Agro', 
    vendorStatus: 'KYC Pending • Lubumbashi',
    verified: false,
    details: 'SUSPICIOUS PRICE POINT: Price is 40% below market average for this category. Possible fraudulent listing.',
    errors: 'critical',
    price: '$1,200.00',
    cdfPrice: '3,000,000',
    tags: ['AGRO', 'FLAGGED'],
    tagColor: 'bg-orange-100 text-orange-700'
  }
];

export default function AdminModerationPage() {
  return (
    <div className="flex-1 flex overflow-hidden">
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shrink-0">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Marketplace Hierarchy</h2>
          <button className="bg-brand-primary/10 text-brand-primary p-1 rounded-md">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
           <button className="w-full flex items-center gap-3 p-3 bg-brand-primary/10 text-brand-primary rounded-xl font-bold text-xs">
              <Folder className="w-4 h-4 fill-current opacity-20" />
              All Categories
           </button>
           <div className="pl-4 space-y-1">
              <div className="flex flex-col gap-1">
                 <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl font-bold text-xs transition-colors">
                    <ChevronDown className="w-4 h-4 text-gray-300" />
                    <Smartphone className="w-4 h-4" />
                    Electronics
                 </button>
                 <div className="pl-12 space-y-2 py-2">
                    <p className="text-xs text-gray-400 hover:text-brand-primary cursor-pointer font-medium">Mobile Phones</p>
                    <p className="text-xs text-gray-400 hover:text-brand-primary cursor-pointer font-medium">Laptops & Tablets</p>
                    <div className="bg-brand-primary/5 border-l-2 border-brand-primary px-3 py-2 -ml-3">
                       <p className="text-xs text-brand-primary font-bold">Solar Power Systems</p>
                    </div>
                 </div>
              </div>
              <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl font-bold text-xs transition-colors">
                 <ChevronRight className="w-4 h-4 text-gray-300" />
                 <Folder className="w-4 h-4" />
                 Mobile Money Kiosks
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl font-bold text-xs transition-colors">
                 <ChevronRight className="w-4 h-4 text-gray-300" />
                 <Shirt className="w-4 h-4" />
                 Fashion & Textiles
              </button>
           </div>
        </div>
        <div className="p-4 border-t border-gray-100">
           <button className="w-full bg-brand-primary text-white py-3.5 rounded-xl font-black text-xs shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-2">
              <Plus className="w-3.5 h-3.5" /> New Category
           </button>
        </div>
      </aside>

      <div className="flex-1 overflow-y-auto p-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {adminStats.map(stat => (
             <div key={stat.label} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="flex items-center justify-between mb-8">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                   <div className={`p-2.5 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                      <stat.icon className="w-5 h-5" />
                   </div>
                </div>
                <h3 className="text-4xl font-black text-[#1E293B] mb-2">{stat.value}</h3>
                <p className={`text-[10px] font-bold ${stat.color === 'text-orange-500' ? 'text-red-500' : stat.color === 'text-green-500' ? 'text-gray-400' : 'text-green-500'}`}>{stat.trend}</p>
             </div>
           ))}
        </div>

        <div>
           <div className="flex items-center justify-between mb-4">
              <div>
                 <h2 className="text-2xl font-black text-[#1E293B]">Product Moderation</h2>
                 <p className="text-gray-400 text-sm mt-1 font-medium">Review new submissions for escrow eligibility and DRC quality standards.</p>
              </div>
              <div className="flex gap-4">
                 <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 bg-shadow-sm">
                   <Filter className="w-4 h-4" /> Filters
                 </button>
                 <button className="flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-brand-primary/20 hover:bg-brand-primary-dark transition-all">
                   <CheckCircle2 className="w-4 h-4" /> Batch Approve
                 </button>
              </div>
           </div>

           <div className="bg-white rounded-[48px] border border-gray-100 shadow-xl overflow-hidden mt-8">
              <table className="w-full text-left">
                <thead>
                   <tr className="bg-[#F8FAFC] text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <th className="px-10 py-6">Product Info</th>
                      <th className="px-10 py-6">Vendor Status</th>
                      <th className="px-10 py-6">Details & Errors</th>
                      <th className="px-10 py-6">Price (USD)</th>
                      <th className="px-10 py-6 text-right">Actions</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                   {moderationProducts.map(product => (
                     <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-10 py-10">
                           <div className="flex items-center gap-6">
                              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300 shrink-0">
                                 {product.name.includes('Solar') ? <Sprout className="w-8 h-8" /> : <Smartphone className="w-8 h-8" />}
                              </div>
                              <div>
                                 <h4 className="text-sm font-black text-gray-900 leading-tight mb-1">{product.name}</h4>
                                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mb-3">SKU: {product.sku}</p>
                                 <div className="flex gap-2">
                                    {product.tags.map(tag => (
                                      <span key={tag} className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest ${product.tagColor}`}>
                                         {tag}
                                      </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </td>
                        <td className="px-10 py-10">
                           <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-bold text-gray-900">{product.vendor}</span>
                              {product.verified && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                           </div>
                           <p className="text-[10px] text-gray-400 font-medium">{product.vendorStatus}</p>
                        </td>
                        <td className="px-10 py-10">
                           {product.errors === true ? (
                              <div className="space-y-1">
                                 <div className="flex items-center gap-1.5 text-red-500 font-black text-[9px] uppercase tracking-tighter">
                                    <AlertCircle className="w-3 h-3" /> MISSING SPECS
                                 </div>
                              </div>
                           ) : product.errors === 'critical' ? (
                              <div className="max-w-[200px]">
                                 <div className="flex items-center gap-1.5 text-red-600 font-black text-[9px] uppercase tracking-tighter mb-1">
                                    <AlertCircle className="w-3 h-3 fill-current" /> SUSPICIOUS PRICE
                                 </div>
                                 <p className="text-[9px] text-gray-400 font-medium leading-relaxed italic">
                                    Price is 40% below market average.
                                 </p>
                              </div>
                           ) : (
                              <div className="flex items-center gap-1.5 text-green-600 font-black text-[9px] uppercase tracking-tighter">
                                 <CheckCircle2 className="w-3 h-3" /> ALL METADATA VALIDATED
                              </div>
                           )}
                        </td>
                        <td className="px-10 py-10">
                           <span className="text-base font-black text-gray-900 uppercase">{product.price}</span>
                        </td>
                        <td className="px-10 py-10 text-right">
                           <div className="flex items-center justify-end gap-3 font-bold text-[10px] uppercase">
                               <button className="text-red-500 px-4 py-2 hover:bg-red-50 rounded-lg">Reject</button>
                               <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-md">Approve</button>
                           </div>
                        </td>
                     </tr>
                   ))}
                </tbody>
              </table>
           </div>
        </div>
      </div>
    </div>
  );
}
