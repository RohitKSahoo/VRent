'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, LayoutDashboard } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/', label: 'HOME', icon: Home },
  { href: '/vehicles', label: 'BROWSE', icon: Search },
  { href: '/vendor', label: 'STUDIO', icon: LayoutDashboard },
];

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden bg-white border-4 border-black neo-shadow pb-safe h-18 rounded-none">
      <div className="flex items-center justify-around px-2 h-full">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-1 flex-1 h-full min-w-0 transition-all duration-200 ${
                isActive ? 'text-vrent-pink' : 'text-black/30 hover:text-black/60'
              }`}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-none transition-all duration-200 ${
                isActive ? 'bg-vrent-pink/10 border-2 border-black neo-shadow-pink' : ''
              }`}>
                <Icon className={`transition-all duration-200 ${isActive ? 'w-6 h-6' : 'w-5 h-5'}`} />
              </div>
              <span className={`text-[9px] font-black tracking-widest ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
