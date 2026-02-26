'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ChevronDown,
  X,
  Upload,
  Info,
  Package,
  CheckCircle2,
  AlertTriangle,
  History,
  ShoppingCart
} from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const inventoryStats = [
  { label: 'Total Produits', value: '142', trend: '+4 ce mois', trendColor: 'text-green-500' },
  { label: 'Annonces Actives', value: '128', badge: 'Escrow Actif', badgeColor: 'bg-blue-50 text-[#1476D1]' },
  { label: 'Alertes Stock Faible', value: '7', valueColor: 'text-red-500' },
];

const inventoryProducts = [
  { 
    id: 1, 
    name: 'Lumina Watch Series X', 
    sku: 'LW-99230', 
    price: 45.00, 
    cdfPrice: '11,250', 
    stock: 42, 
    status: 'Active', 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Aero-Step Pro Sneakers', 
    sku: 'AS-11044', 
    price: 89.99, 
    stock: 2, 
    status: 'Low Stock', 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'SonicWave Noise Cancelling', 
    sku: 'SW-77210', 
    price: 120.00, 
    stock: 0, 
    status: 'Not published', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    grayscale: true
  },
];

export default function InventoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8 relative">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2">
            <span>Dashboard</span>
            <ChevronDown className="w-3 h-3 -rotate-90" />
            <span className="text-gray-600">Inventory</span>
          </nav>
          <h1 className="text-3xl font-black text-[#1E293B] tracking-tight">Gestion des Produits</h1>
          <p className="text-gray-500 text-sm mt-1">Gérez votre catalogue sur le marché RDC</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher des produits, SKUs..." 
            className="w-full bg-white border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 shadow-sm"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {inventoryStats.map((stat) => (
          <div key={stat.label} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
            <p className="text-[#64748B] text-xs font-black uppercase tracking-widest mb-4">{stat.label}</p>
            <div className="flex items-baseline justify-between">
              <h3 className={`text-4xl font-black tracking-tight ${stat.valueColor || 'text-[#1E293B]'}`}>{stat.value}</h3>
              {stat.trend && <span className={`text-[10px] font-bold ${stat.trendColor}`}>{stat.trend}</span>}
              {stat.badge && <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${stat.badgeColor}`}>{stat.badge}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Filters & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex gap-4">
          <button className="bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50">
            Toutes Catégories <ChevronDown className="w-4 h-4" />
          </button>
          <button className="bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50">
            Tous Statuts <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-primary text-white px-6 py-3 rounded-2xl font-black text-sm shadow-xl shadow-brand-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Ajouter un Produit
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventoryProducts.map((product) => (
          <div key={product.id} className="bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-sm group hover:border-brand-primary/30 transition-all flex flex-col h-full">
            <div className="relative h-56 bg-gray-50">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className={`object-cover ${product.grayscale ? 'grayscale opacity-50' : 'group-hover:scale-110 transition-transform duration-700'}`} 
              />
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className={`text-[9px] font-black px-2 py-1 rounded-md tracking-widest ${
                  product.status === 'Active' ? 'bg-green-100 text-green-700' : 
                  product.status === 'Low Stock' ? 'bg-red-100 text-red-700' : 'bg-gray-200 text-gray-600'
                }`}>
                  {product.status.toUpperCase()}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-[#1E293B] font-black text-base">{product.name}</h3>
                <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">SKU: {product.sku}</p>
              
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-xl font-black text-[#1E293B]">${product.price.toFixed(2)}</span>
                {product.cdfPrice && <span className="text-[11px] text-gray-400 font-bold uppercase tracking-tighter">/ {product.cdfPrice} CDF</span>}
              </div>
              
              <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <Package className={`w-4 h-4 ${product.status === 'Low Stock' ? 'text-red-500' : 'text-gray-400'}`} />
                   <span className={`text-xs font-bold ${product.status === 'Low Stock' ? 'text-red-600' : 'text-gray-600'}`}>
                     {product.stock === 0 ? 'Non publié' : `${product.stock} en stock`}
                   </span>
                </div>
                <button className={`text-xs font-black flex items-center gap-1 hover:underline ${product.status === 'Low Stock' ? 'text-brand-primary' : 'text-brand-primary'}`}>
                  {product.status === 'Low Stock' ? 'Réapprovisionner' : 'Modifier'} 
                  {product.status === 'Low Stock' ? null : <Edit2 className="w-3 h-3 ml-1" />}
                </button>
              </div>
            </div>
            {product.status === 'Low Stock' && (
              <div className="px-6 pb-2">
                 <div className="bg-red-50 text-red-600 text-[10px] font-black p-2 rounded-xl flex items-center gap-2 border border-red-100">
                    <AlertTriangle className="w-3 h-3" />
                    Plus que {product.stock} !
                 </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Product Modal (Right Side Drawer) */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#003B5C]/20 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }} 
              animate={{ x: 0 }} 
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-lg bg-white shadow-2xl z-[101] flex flex-col pt-24"
            >
              <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                <div>
                  <h2 className="text-xl font-black text-[#1E293B]">Add New Product</h2>
                  <p className="text-gray-400 text-xs font-medium">Fill in the details to list on the marketplace</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full text-gray-400">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Images */}
                <div className="space-y-3">
                  <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Product Images</label>
                  <div className="border-2 border-dashed border-gray-200 rounded-[24px] p-12 flex flex-col items-center justify-center gap-4 hover:border-brand-primary/40 hover:bg-brand-primary/[0.02] transition-all cursor-pointer group">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-brand-primary transition-colors">
                      <Upload className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-700">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400 mt-1">Up to 5 high-res photos</p>
                    </div>
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Product Title</label>
                    <input type="text" placeholder="e.g. Smart Watch Series 5" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Description</label>
                    <textarea rows={4} placeholder="Describe your product's key features..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary resize-none" />
                  </div>
                </div>

                {/* Category & SKU */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Category</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary appearance-none text-gray-600 font-bold">
                        <option>Select Category</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">SKU (Optional)</label>
                    <input type="text" placeholder="ABC-123" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary" />
                  </div>
                </div>

                {/* Pricing & Stock */}
                <div className="pt-8 border-t border-gray-100">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6">Pricing & Inventory</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Price (USD)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                        <input type="number" placeholder="0.00" className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Initial Stock</label>
                      <input type="number" placeholder="0" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary" />
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl flex gap-3">
                   <div className="bg-[#1476D1] w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5">
                      <Info className="w-3 h-3" />
                   </div>
                   <p className="text-[10px] text-[#1476D1] font-bold leading-relaxed">
                     Marketplace fees and Escrow protection will be calculated based on your final listing price. Your estimated payout will be shown after submission.
                   </p>
                </div>
              </div>

              <div className="p-8 border-t border-gray-100 flex gap-4 bg-gray-50">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 bg-white border border-gray-200 py-4 rounded-2xl font-black text-sm text-gray-600 hover:bg-gray-100 transition-all">
                  Save Draft
                </button>
                <button className="flex-1 bg-brand-primary text-white py-4 rounded-2xl font-black text-sm hover:bg-brand-primary-dark transition-all shadow-xl shadow-brand-primary/20">
                  Publish Product
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sticky Footer Info */}
      <div className="fixed bottom-8 left-72 right-8 flex items-center gap-8 text-[10px] font-black text-gray-400 uppercase tracking-widest pointer-events-none">
         <div className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Mobile Money Integrated
         </div>
         <div className="flex items-center gap-2">
            <ShieldPlus className="w-4 h-4" />
            Escrow System Active
         </div>
      </div>
    </div>
  );
}

function ShieldPlus(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
  );
}
