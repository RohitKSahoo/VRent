'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, LayoutDashboard, User } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { icon: Home, label: 'HOME', href: '/' },
  { icon: Search, label: 'BROWSE', href: '/vehicles' },
  { icon: LayoutDashboard, label: 'STUDIO', href: '/vendor' },
  { icon: User, label: 'PROFILE', href: '/profile' },
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-6 left-6 right-6 z-50">
      <div className="bg-white/40 backdrop-blur-2xl border border-white/60 p-3 rounded-[32px] shadow-2xl flex items-center justify-between px-6 border-t">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className="relative flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all"
            >
              <div className={`relative p-2.5 rounded-2xl transition-all duration-500 overflow-hidden ${isActive ? 'bg-vrent-primary text-white shadow-xl shadow-vrent-primary/40 scale-110' : 'text-foreground/40 hover:bg-black/5 hover:text-foreground'}`}>
                <item.icon className="w-5 h-5" />
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent pointer-events-none"
                  />
                )}
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
