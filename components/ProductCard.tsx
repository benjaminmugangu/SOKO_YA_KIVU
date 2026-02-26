'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  seller: string;
  rating: number;
  image: string;
  escrow: boolean;
  reviews?: number;
  category?: string;
}

export default function ProductCard({ product }: Readonly<{ product: Product }>) {
  const cdfPrice = (product.price * 2500).toLocaleString(); // Example conversion rate

  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium-hover transition-all duration-500 relative h-full flex flex-col group">
      {/* Full-card link for product detail (z-10) */}
      <Link 
        href={`/product/${product.id}`} 
        className="absolute inset-0 z-10"
        aria-label={product.name}
      />

      {/* Badges - Top Layer (z-20) */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
         <div className="bg-brand-secondary text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg shadow-brand-secondary/20">
           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
           VENDEUR VÉRIFIÉ
         </div>
      </div>

      {/* Wishlist Button - Top Layer (z-20) */}
      <button className="absolute top-4 right-4 z-20 p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 transition-all shadow-sm hover:scale-110 active:scale-90">
        <Heart className="w-4 h-4" />
      </button>

      {/* image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* content */}
      <div className="p-5 flex flex-col flex-1">
         <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-2">
           {product.category || 'Électronique'}
         </div>
         <h3 className="text-brand-dark font-display font-bold text-[15px] mb-3 line-clamp-2 leading-tight min-h-[2.5rem] group-hover:text-brand-primary transition-colors">
           {product.name}
         </h3>

         <div className="flex items-center gap-1 mb-4">
           <div className="flex text-amber-400">
             {[...new Array(5)].map((_, i) => (
               <Star key={`star-${product.id}-${i}`} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
             ))}
           </div>
           <span className="text-[10px] text-gray-400 font-bold">({product.reviews || 48} avis)</span>
         </div>

         <div className="mt-auto relative z-20">
           <div className="flex items-baseline gap-2 mb-4">
             <span className="text-brand-primary text-xl font-black">${product.price.toFixed(2)}</span>
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">≈ {cdfPrice} CDF</span>
           </div>

           {/* Button - Top Layer (z-20) */}
           <Link 
             href="/cart"
             className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-black text-[11px] uppercase tracking-widest transition-all shadow-xl shadow-brand-primary/20 active:scale-[0.98]"
           >
             <ShoppingCart className="w-4 h-4" />
             Ajouter au Panier
           </Link>
         </div>
      </div>
    </div>
  );
}
