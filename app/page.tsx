'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Move, Star, Globe, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16 min-h-[calc(100vh-theme(spacing.16))] mesh-bg relative overflow-hidden font-sans">
      
      {/* ── FLOATERS (Apple Style Soft Orbs) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-vrent-primary/10 blur-[100px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-vrent-accent/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
        
        {/* ── CARD PROTOCOL (Glass Morphism) ── */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-4xl"
        >
          <div className="glass-card rounded-[40px] p-10 md:p-24 relative overflow-hidden group">
            
            {/* Gloss Highlight */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent pointer-events-none" />

            <div className="relative flex flex-col items-center text-center gap-12">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center gap-2 text-vrent-primary"
                >
                  <Sparkles className="w-5 h-5 fill-vrent-primary/20" />
                  <span className="text-sm font-bold tracking-[0.4em] text-vrent-primary/60 uppercase">Protocol: v-rent 3.2</span>
                </motion.div>
                <h1 className="text-6xl md:text-[8rem] font-bold tracking-tight leading-[0.9] text-foreground flex flex-col">
                  Move with <span className="text-gradient">Fluidity.</span>
                </h1>
                <p className="max-w-md mx-auto text-lg text-muted-foreground font-medium opacity-60">
                   The next-gen campus mobility protocol. Experience speed and design in perfect harmony.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
                <Link href="/vehicles" className="flex-1">
                  <Button className="w-full h-18 bg-vrent-primary text-white rounded-3xl font-bold text-xl shadow-2xl shadow-vrent-primary/30 hover:scale-[1.02] hover:shadow-vrent-primary/40 transition-all duration-300">
                    START_BROWSING <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
                <Link href="/vendor" className="flex-1">
                  <Button className="w-full h-18 bg-white/40 backdrop-blur-md text-vrent-primary border border-white/60 rounded-3xl font-bold text-xl shadow-lg hover:bg-white/60 transition-all duration-300">
                    LIST_VEHICLE
                  </Button>
                </Link>
              </div>

              {/* Status Pills */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6 opacity-40">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Globe className="w-3.5 h-3.5" /> Campus Hub</div>
                <div className="w-1 h-1 bg-black/20 rounded-full" />
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ShieldCheck className="w-3.5 h-3.5" /> 100% Encrypted</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ── FOOTER SYSTEM (Mini Ticker Glass) ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="bg-white/30 backdrop-blur-lg border border-white/40 px-8 py-3 rounded-full flex gap-10 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl"
        >
          <span>Kinetic Protocol</span>
          <span>//</span>
          <span>Zero Paperwork</span>
          <span>//</span>
          <span>Design Excellence</span>
        </motion.div>
      </div>

    </div>
  );
}
