'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Zap, Move, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-18 min-h-[calc(100vh-theme(spacing.16))] bg-vrent-cream relative overflow-hidden">
      
      {/* ── FLOATERS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0], y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[10%] left-[10%] opacity-20"
        >
          <Zap className="w-16 h-16 text-vrent-pink" />
        </motion.div>
        <motion.div 
          animate={{ rotate: [0, -15, 15, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[20%] right-[15%] opacity-20"
        >
          <Move className="w-20 h-20 text-vrent-yellow" />
        </motion.div>
        <div className="absolute top-[40%] right-[5%] opacity-10">
          <Star className="w-32 h-32 text-black fill-black" />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
        
        {/* ── MAIN BLOCK ── */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-4xl relative"
        >
          {/* Sketchy Tape */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-vrent-pink/40 border-x-2 border-black/20 z-20 group-hover:bg-vrent-pink/60 transition-colors" />

          <div className="bg-black text-white border-4 border-black p-12 md:p-20 neo-shadow-lg relative overflow-hidden rotate-[-1deg]">
            
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Image 
                src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=1200" 
                alt="Texture" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="relative flex flex-col items-center text-center gap-12">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-vrent-yellow">
                  <Sparkles className="w-5 h-5 fill-vrent-yellow" />
                  <span className="text-xs font-black uppercase tracking-[0.3em]">The Campus Protocol</span>
                </div>
                <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-[0.8] uppercase flex flex-col">
                  READY TO <span className="text-vrent-yellow">ACT?</span>
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 w-full max-w-lg">
                <Link href="/vehicles" className="flex-1">
                  <Button className="w-full h-20 bg-vrent-yellow text-black border-4 border-black rounded-none font-black text-2xl uppercase italic neo-shadow-lg hover:neo-shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                    START_BROWSING <ArrowUpRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
                <Link href="/vendor" className="flex-1">
                  <Button className="w-full h-20 bg-white text-black border-4 border-black rounded-none font-black text-2xl uppercase italic neo-shadow-lg hover:neo-shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
                    LIST_VEHICLE
                  </Button>
                </Link>
              </div>

              {/* Hand-drawn annotation */}
              <div className="absolute -bottom-12 -right-4 md:-right-16 hidden lg:block rotate-12">
                <p className="font-hand text-3xl text-vrent-pink whitespace-nowrap">
                  500+ legends already joined! ⮕
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── TICKER ── */}
      <div className="absolute bottom-0 w-full bg-vrent-yellow border-t-4 border-black py-2 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 text-sm font-black uppercase tracking-widest text-black/40"
        >
          {Array(10).fill('VRent V3.1 // Kinetic Curator Studio // Move Now // No Paperwork // 100% Student Power').map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
