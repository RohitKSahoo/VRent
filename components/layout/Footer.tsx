import Link from 'next/link';
import { Camera, Mail, MessageCircle, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="w-full bg-white/20 backdrop-blur-3xl border-t border-black/5 py-12 md:py-20 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-8">
             <Link href="/" className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                   <Sparkles className="w-5 h-5 text-white fill-white/20" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-foreground">
                   VRent<span className="text-vrent-primary">.</span>
                </span>
             </Link>
            <p className="text-muted-foreground font-medium max-w-sm leading-relaxed opacity-60 italic">
               Redesigning campus mobility with fluidity and design excellence. A product of the kinetic curator protocol.
            </p>
            <div className="flex gap-4">
              {[Camera, MessageCircle, Mail, Globe].map((Icon, i) => (
                <Button key={i} variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:scale-110 hover:bg-white/60 transition-all">
                  <Icon className="w-5 h-5 text-vrent-primary/60" />
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 italic">Navigation_Hub</h4>
            <ul className="space-y-4">
              {['Browse Nomads', 'Creator Studio', 'Identity System', 'Security Protocol'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm font-semibold opacity-60 hover:opacity-100 hover:text-vrent-primary transition-all flex items-center gap-2 group">
                     <div className="w-1.5 h-1.5 rounded-full bg-vrent-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                     {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] opacity-40 italic">System_Support</h4>
            <ul className="space-y-4">
              {['Node Connectivity', 'Transmission Help', 'API Core', 'Terms of Hub'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm font-semibold opacity-60 hover:opacity-100 hover:text-vrent-primary transition-all flex items-center gap-2 group">
                     <div className="w-1.5 h-1.5 rounded-full bg-vrent-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                     {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            © 2026 Kinetic Curator Protocol // v3.2_prod
          </p>
          <div className="flex items-center gap-2 text-vrent-primary/40 text-[10px] font-bold uppercase tracking-widest italic">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/40" />
            Node: North_Hub_Active
          </div>
        </div>
      </div>
    </footer>
  );
};
