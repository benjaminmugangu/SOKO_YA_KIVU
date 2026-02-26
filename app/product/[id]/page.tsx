'use client';

import { useParams } from 'next/navigation';
import { products } from '@/lib/mockData';
import Navbar from '@/components/Navbar';
import { ShieldCheck, Star, ChevronLeft, ShoppingCart, Truck, Clock, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id) || products[0];

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1E293B] transition-colors mb-8 group text-sm font-medium">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour au Marketplace
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
                <ShieldCheck className="w-4 h-4" />
                SÉQUESTRE ACTIVÉ
              </div>
              <button className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map((img, i) => (
                <div key={i} className={`relative aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${i === 0 ? 'border-brand-primary' : 'border-gray-200 hover:border-gray-300'}`}>
                  <Image src={img} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 text-brand-primary font-bold text-xs mb-2 uppercase tracking-widest">
              {product.category}
            </div>
            <h1 className="text-3xl font-black text-[#1E293B] mb-4 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-[#1E293B]">{product.rating}</span>
                <span className="text-gray-400 ml-1">(12 avis)</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 text-xs font-bold">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {product.status}
              </div>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-black text-brand-primary">${product.price}</span>
              <span className="text-sm text-gray-400 font-bold ml-2">≈ {(product.price * 2500).toLocaleString()} CDF</span>
            </div>

            {/* Escrow protection box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">Protection Soko Ya Kivu</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    L&apos;argent est bloqué par la plateforme jusqu&apos;à ce que vous confirmiez avoir reçu l&apos;article conforme.
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery info */}
            <div className="flex items-center justify-between text-sm text-gray-500 px-1 mb-8 bg-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-gray-400" />
                <span className="font-medium">Livraison à Goma</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="font-medium">Reçu sous 24-48h</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="grid grid-cols-4 gap-4">
              <Link 
                href="/cart" 
                className="col-span-3 bg-brand-primary hover:bg-brand-primary-dark text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20 transition-all"
              >
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </Link>
              <button className="flex items-center justify-center border border-gray-200 bg-white rounded-2xl hover:bg-gray-50 transition-all shadow-sm">
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
            </div>

            {/* Seller info */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="font-bold mb-4 text-gray-400 uppercase tracking-widest text-[10px]">Vendu par</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center font-bold text-xl text-brand-primary">
                  {product.seller[0]}
                </div>
                <div>
                  <div className="text-[#1E293B] font-bold">{product.seller}</div>
                  <div className="text-xs text-gray-400 italic">Vendeur vérifié à Goma</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
