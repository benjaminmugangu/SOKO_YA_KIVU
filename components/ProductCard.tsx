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

export default function ProductCard({ product }: { product: Readonly<Product> }) {
  const cdfPrice = (product.price * 2500).toLocaleString(); // Example conversion rate

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative h-full flex flex-col group">
      {/* Full-card link for product detail (z-10) */}
      <Link 
        href={`/product/${product.id}`} 
        className="absolute inset-0 z-10"
        aria-label={product.name}
      />

      {/* Badges - Top Layer (z-20) */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-2 pointer-events-none">
         <div className="bg-green-500 text-white text-[9px] font-black px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
           <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
           VENDEUR VÉRIFIÉ
         </div>
      </div>

      {/* Wishlist Button - Top Layer (z-20) */}
      <button className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
        <Heart className="w-4 h-4" />
      </button>

      {/* image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 border-b border-gray-100">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* content */}
      <div className="p-4 flex flex-col flex-1">
         <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
           {product.category || 'Electronique'}
         </div>
         <h3 className="text-[#1E293B] font-bold text-sm mb-2 line-clamp-2 leading-tight min-h-[2.5rem]">
           {product.name}
         </h3>

         <div className="flex items-center gap-1 mb-4">
           <div className="flex text-yellow-500">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
             ))}
           </div>
           <span className="text-[10px] text-gray-400 font-bold">({product.reviews || 48} avis)</span>
         </div>

         <div className="mt-auto relative z-20">
           <div className="flex items-baseline gap-2 mb-4">
             <span className="text-brand-primary text-xl font-black">${product.price.toFixed(2)}</span>
             <span className="text-[10px] text-gray-400 font-bold uppercase">≈ {cdfPrice} CDF</span>
           </div>

           {/* Button - Top Layer (z-20) */}
           <Link 
             href="/cart"
             className="w-full bg-brand-primary hover:bg-brand-primary-dark text-white py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold text-xs transition-colors shadow-lg shadow-brand-primary/20"
           >
             <ShoppingCart className="w-4 h-4" />
             Ajouter au Panier
           </Link>
         </div>
      </div>
    </div>
  );
}
