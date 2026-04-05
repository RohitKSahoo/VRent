import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black px-4 md:px-8 h-18 flex items-center">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-vrent-pink border-2 border-black flex items-center justify-center neo-shadow transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black lowercase tracking-tighter text-black">
            VRent<span className="text-vrent-pink">.</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/vehicles" className="text-sm font-bold uppercase tracking-widest hover:text-vrent-pink transition-colors">
            01. Browse
          </Link>
          <Link href="/vendor" className="text-sm font-bold uppercase tracking-widest hover:text-vrent-pink transition-colors">
            02. Studio
          </Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center">
          <Link href="/vehicles">
            <Button className="bg-vrent-yellow text-black border-2 border-black rounded-none h-11 px-6 font-bold uppercase neo-shadow hover:neo-shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              GO!
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
