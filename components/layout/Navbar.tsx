import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, LayoutDashboard, Search } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-black/5 h-16 flex items-center md:px-8">
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-vrent-primary flex items-center justify-center shadow-lg shadow-vrent-primary/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white fill-white/20" />
          </div>
          <span className="text-xl font-bold tracking-tight text-vrent-foreground">
            VRent<span className="text-vrent-primary">.</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-2 bg-black/5 p-1 rounded-2xl">
          <Link href="/vehicles" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl hover:bg-white/50 transition-all">
            <Search className="w-4 h-4 opacity-50" />
            Browse
          </Link>
          <Link href="/vendor" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl hover:bg-white/50 transition-all">
            <LayoutDashboard className="w-4 h-4 opacity-50" />
            Studio
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <Link href="/vehicles">
            <Button className="bg-vrent-primary text-white rounded-2xl h-10 px-6 font-semibold shadow-md shadow-vrent-primary/20 hover:scale-105 transition-all">
              GO!
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
