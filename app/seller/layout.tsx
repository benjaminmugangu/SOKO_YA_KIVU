'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  Package, 
  ShoppingCart, 
  Wallet, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  Download,
  Calendar,
  ChevronDown,
  ShieldCheck
} from 'lucide-react';

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const menuItems = [
    { icon: LayoutGrid, label: 'Overview', href: '/seller' },
    { icon: Package, label: 'Inventory', href: '/seller/inventory' },
    { icon: ShoppingCart, label: 'Orders', href: '/seller/orders' },
    { icon: Wallet, label: 'Payouts', href: '/seller' },
    { icon: BarChart3, label: 'Performance', href: '/seller' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7F9] text-[#1E293B] flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#E2E8F0] flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1476D1] rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-[#003B5C]">SOKO YA KIVU</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/seller' && pathname.startsWith(item.href));
            return (
            <Link 
              key={item.label} 
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-sm ${
                isActive 
                  ? 'bg-[#EBF5FF] text-[#1476D1]' 
                  : 'text-[#64748B] hover:bg-gray-50 hover:text-[#1E293B]'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-[#1476D1]' : 'text-[#94A3B8]'}`} />
              {item.label}
              {isActive && <div className="ml-auto w-1 h-6 bg-[#1476D1] rounded-full" />}
            </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-[#E2E8F0] space-y-6">
          <button className="flex items-center gap-4 px-4 py-2 text-[#64748B] hover:text-[#1E293B] transition-colors w-full font-semibold text-sm">
            <Settings className="w-5 h-5" />
            Settings
          </button>
          
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 bg-[#FFD7BE] rounded-full flex items-center justify-center overflow-hidden">
               {/* Avatar placeholder match */}
               <div className="w-full h-full bg-[#E5A186]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#1E293B] truncate uppercase tracking-tight">Jean-Luc Mobutu</p>
              <p className="text-[10px] text-[#64748B] font-medium truncate">Kongo Tech Store</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-20 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-[#1E293B]">Payout Tracking</h1>
            <span className="bg-[#EBF5FF] text-[#1476D1] text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
              Escrow Secure
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-50 border border-[#E2E8F0] px-4 py-2 rounded-xl text-sm font-semibold text-[#64748B]">
              <Calendar className="w-4 h-4" />
              <span>Oct 1 - Oct 31, 2023</span>
            </div>
            
            <button className="p-2.5 text-[#64748B] hover:text-[#1E293B] hover:bg-gray-50 rounded-full transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full" />
            </button>

            <button className="bg-[#1476D1] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#0E5AA1] transition-all shadow-md shadow-[#1476D1]/20">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
