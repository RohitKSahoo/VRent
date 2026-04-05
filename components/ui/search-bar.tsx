'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUIStore } from '@/store/useUIStore';

interface SearchBarProps {
  dark?: boolean;
}

export const SearchBar = ({ dark = false }: SearchBarProps) => {
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useUIStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/vehicles${searchQuery.trim() ? `?query=${encodeURIComponent(searchQuery)}` : ''}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${dark ? 'text-white/40' : 'text-[#7c7a8a]'}`} />
        <input
          type="text"
          placeholder="Search for cars, bikes, vans..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`
            w-full h-13 pl-12 pr-4 rounded-2xl text-base outline-none transition-all
            ${dark
              ? 'bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-violet-500/60'
              : 'bg-white border border-[#e8e4f0] text-[#0e0b1e] placeholder:text-[#7c7a8a] focus:border-violet-400 shadow-sm'
            }
          `}
        />
      </div>
    </form>
  );
};
