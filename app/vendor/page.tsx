'use client';

import { VehicleForm } from '@/components/forms/VehicleForm';
import { mockVehicles } from '@/data/mockData';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Plus, 
  Map, 
  ShieldCheck, 
  UserPlus, 
  Sparkles, 
  CreditCard,
  Target,
  Edit2,
  Trash
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function VendorPage() {
  const vendorVehicles = mockVehicles.slice(0, 2); // Mocking as vendor's own vehicles

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 bg-[#FFFCEB] min-h-screen">
      
      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="w-48 h-48 bg-white border-sketchy neo-shadow p-2 rotate-[-3deg] transform transition-all group-hover:rotate-0">
            <div className="relative aspect-square w-full h-full border-2 border-black overflow-hidden bg-slate-100 grayscale hover:grayscale-0 transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" 
                alt="Alex the Creator" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-vrent-pink text-white w-10 h-10 border-2 border-black rounded-full flex items-center justify-center neo-shadow">
              <Edit2 className="w-5 h-5 leading-none" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <h1 className="text-3xl font-black text-black leading-none mb-1">Alex the Creator</h1>
            <p className="font-hand text-xl text-neutral-400 italic">Living the dream!</p>
          </div>
        </motion.div>

        <div className="flex-1 space-y-6">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase italic leading-none">
            CREATOR <span className="text-vrent-pink">STUDIO.</span>
          </h2>
          <p className="font-hand text-2xl text-black leading-relaxed max-w-2xl">
            This is your command center. Fix your deets, grab your cash, and keep the campus moving!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
        {/* Left Column: Stats & Metadata */}
        <div className="xl:col-span-2 space-y-20">
          
          {/* Who are ya? */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-vrent-yellow border-2 border-black rounded-full flex items-center justify-center neo-shadow">
                <UserPlus className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter">Who are ya?</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'My Name', value: 'Alex Chen', color: 'bg-[#FFFCEB]' },
                { label: 'Secret Email', value: 'alex.chen@campus.edu', color: 'bg-[#FF4DA6]/10' },
                { label: 'Calling Code', value: '+1 (555) 012-3456', color: 'bg-[#FFFCEB]' },
                { label: 'Main Base', value: 'North Hub', color: 'bg-[#FF4DA6]/10' },
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} border-sketchy p-6 neo-shadow rotate-[${i%2 ? '1' : '-1'}deg] transform transition-all hover:rotate-0`}>
                  <p className="font-hand text-xl text-[#7c7a8a] italic mb-1 underline decoration-dotted decoration-[#e5e7eb] underline-offset-4">{stat.label}</p>
                  <p className="text-2xl font-black text-black leading-none italic">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* The Treasure Map */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-vrent-pink border-2 border-black rounded-full flex items-center justify-center neo-shadow">
                <Map className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter">The Treasure Map</h3>
            </div>

            <div className="space-y-6">
              <Card className="bg-[#E2F0D9] border-sketchy p-10 neo-shadow relative rotate-[0.5deg]">
                 <div className="absolute top-4 left-6 bg-black text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest italic">ACTIVE!</div>
                 <div className="flex items-center justify-between mb-8">
                    <h4 className="text-4xl font-bold tracking-tighter text-black/60 italic leading-none">•••• 4242</h4>
                    <CreditCard className="w-10 h-10 text-black/20" />
                 </div>
                 <div className="flex justify-between items-end">
                    <div>
                       <p className="text-[10px] font-black uppercase opacity-40 leading-none mb-1">EXPIRES</p>
                       <p className="text-xl font-black text-black italic">12 / 26</p>
                    </div>
                    <div className="w-12 h-8 bg-vrent-yellow border-2 border-black rounded-sm" />
                 </div>
              </Card>

              <div className="bg-white border-sketchy border-dashed p-10 flex flex-col items-center justify-center gap-4 text-[#7c7a8a] hover:bg-vrent-pink/5 cursor-pointer transition-all neo-shadow rotate-[-0.5deg]">
                <div className="w-16 h-16 bg-slate-50 border-2 border-[#e5e7eb] rounded-2xl flex items-center justify-center">
                  <Plus className="w-8 h-8 text-neutral-300" />
                </div>
                <p className="font-hand text-2xl">Add New Loot!</p>
              </div>
            </div>
          </div>

          {/* Main Studio Form */}
          <VehicleForm />
        </div>

        {/* Right Column (Sidebar Extras) */}
        <div className="space-y-16">
          
          {/* Share Section */}
          <div className="bg-white border-sketchy p-8 neo-shadow-lg relative overflow-hidden flex flex-col gap-8 rotate-[-1deg]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-vrent-yellow transform translate-x-12 -translate-y-12 rotate-45 border-2 border-black opacity-10" />
            
            <div className="space-y-4">
               <Badge className="bg-vrent-pink text-white rounded-none border-2 border-black font-black uppercase italic tracking-tighter text-xs px-4 py-1.5 neo-shadow shadow-vrent-pink/20">
                  STUDENT POWER
               </Badge>
               <h3 className="text-6xl font-black tracking-tighter leading-[0.85] italic text-black">
                  Got <span className="text-vrent-yellow">Wheels?</span><br />
                  <span className="text-vrent-pink">Share the Fun.</span>
               </h3>
               <p className="font-hand text-2xl text-black leading-relaxed italic border-l-4 border-vrent-yellow pl-4">
                  "Yo Alex! Your car is just sitting there. Turn those wheels into weekend festival money. 500+ legends are already doing it!"
               </p>
            </div>
            <Button className="h-20 bg-[#52FF00] text-black border-4 border-black rounded-none font-black text-2xl uppercase italic neo-shadow-lg hover:neo-shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
               LET'S DO THIS! 🚀
            </Button>
          </div>

          {/* Safe & Sound? */}
          <div className="bg-[#E9EDF0] border-sketchy p-10 neo-shadow rotate-[1deg] flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-vrent-pink" />
              <h3 className="text-4xl font-black uppercase tracking-tighter italic">Safe & Sound?</h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                <span className="font-hand text-2xl text-black italic">Identity Locked?</span>
                <div className="w-8 h-8 bg-[#52FF00] border-2 border-black rounded-full flex items-center justify-center text-white neo-shadow shadow-[#52FF00]/20">
                  ✓
                </div>
              </div>
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
                <span className="font-hand text-2xl text-black italic">Two-Factor Shield</span>
                <Badge className="bg-vrent-pink text-white border-2 border-black italic font-black uppercase p-2 rounded-none neo-shadow shadow-vrent-pink/20">NOPE!</Badge>
              </div>
              <Button className="w-full bg-black text-white border-2 border-black rounded-none h-14 font-black uppercase tracking-widest text-sm neo-shadow hover:neo-shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                FIX SECURITY SHIELD
              </Button>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-vrent-yellow/10 border-sketchy p-8 neo-shadow rotate-[-2deg] transform hover:rotate-0 transition-transform">
            <p className="font-hand text-3xl text-black text-center italic">
               "Adventure is just a ride away!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
