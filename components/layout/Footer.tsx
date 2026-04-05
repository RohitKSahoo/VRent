import Link from 'next/link';
import { Sparkles, Camera, MessageCircle, Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t-8 border-black pt-16 pb-32 md:pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top Info */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="space-y-4">
             <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-vrent-pink border-2 border-black flex items-center justify-center neo-shadow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-4xl font-black lowercase tracking-tighter text-black">
                VRent<span className="text-vrent-yellow">❤</span>
              </span>
            </Link>
            <p className="font-hand text-3xl text-black italic">
              Built by students, for students. Keep it rolling!
            </p>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] opacity-40">
              © 2024 The Kinetic Curator Studio. All rights doodled.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 text-sm font-bold uppercase tracking-widest text-[#0e0b1e]">
            <Link href="#" className="hover:text-vrent-pink underline underline-offset-4 decoration-2">Secrets Policy</Link>
            <Link href="#" className="hover:text-vrent-pink underline underline-offset-4 decoration-2">Rules of the Road</Link>
            <Link href="#" className="hover:text-vrent-pink underline underline-offset-4 decoration-2">Help!</Link>
          </div>
        </div>

        {/* Social Bar */}
        <div className="flex items-center gap-4">
           {[
             { icon: Globe, href: '#' },
             { icon: MessageCircle, href: '#' },
             { icon: Camera, href: '#' },
             { icon: Mail, href: '#' }
           ].map((social, i) => (
             <a 
               key={i} 
               href={social.href}
               className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center neo-shadow hover:neo-shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
             >
               <social.icon className="w-5 h-5" />
             </a>
           ))}
        </div>

      </div>
    </footer>
  );
};
