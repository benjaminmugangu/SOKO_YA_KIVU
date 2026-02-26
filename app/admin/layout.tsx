'use client';

import { usePathname } from 'next/navigation';
import { 
  ShieldCheck, 
  Bell, 
  Search, 
  ChevronDown,
  LayoutGrid,
  Gavel,
  Users,
  BarChart3,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex font-sans">
      {/* Sidebar - Specific to Admin */}
      <aside className="w-16 lg:w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-4 lg:p-6 border-b border-gray-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-primary/20">
             <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="hidden lg:block min-w-0">
            <h1 className="text-sm font-black text-[#003B5C] leading-none">SOKO YA KIVU <span className="text-brand-primary text-[10px] ml-1">ADMIN</span></h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Dispute Resolution Center</p>
          </div>
        </div>

        <nav className="flex-1 p-2 lg:p-4 space-y-1 mt-4">
          {[
            { icon: LayoutGrid, label: 'Dashboard', href: '/admin' },
            { icon: Gavel, label: 'Disputes', href: '/admin' }, // Link to admin as it is the landing
            { icon: Users, label: 'Moderation', href: '/admin/moderation' },
            { icon: BarChart3, label: 'Reports', href: '/admin/reports' },
            { icon: Settings, label: '/admin' },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link 
              key={item.label} 
              href={item.href || '#'}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all font-bold text-sm ${
                isActive 
                  ? 'bg-brand-primary/10 text-brand-primary' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100 hidden lg:block">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-[10px] font-black text-brand-primary">
               JD
             </div>
             <div>
               <p className="text-xs font-black text-[#1E293B]">Admin User</p>
               <p className="text-[10px] text-gray-400 font-bold">SUPER ADMIN</p>
             </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-16 lg:ml-64 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
           <div className="relative w-96 hidden md:block">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input 
               type="text" 
               placeholder="Search disputes, orders..." 
               className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none"
             />
           </div>

           <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:bg-gray-50 rounded-full transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border border-white rounded-full" />
              </button>
              <div className="w-px h-6 bg-gray-200" />
              <button className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-brand-primary text-white rounded-lg flex items-center justify-center font-bold text-xs shadow-md">
                   JD
                 </div>
                 <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
           </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 flex overflow-hidden h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
