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
  Trash,
  Settings,
  Bell,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function VendorPage() {
  const vendorVehicles = mockVehicles.slice(0, 2); // Mocking as vendor's own vehicles

  return (
    <div className="min-h-screen mesh-bg pt-20 px-4 md:px-8 pb-32">
      <div className="max-w-7xl mx-auto">
        
        {/* ── HEADER (Glass Section) ── */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-20 bg-white/40 backdrop-blur-3xl p-10 md:p-14 rounded-[50px] shadow-2xl border border-white/60">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="relative w-48 h-48 rounded-[38px] overflow-hidden shadow-2xl ring-8 ring-white/20 transition-all group-hover:ring-white/40 group-hover:scale-105 duration-700">
              <Image 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" 
                alt="Alex the Creator" 
                fill 
                className="object-cover transition-transform duration-700"
              />
              <div className="absolute top-3 right-3 bg-vrent-primary w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border border-white/20">
                <Edit2 className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="mt-8 text-center md:text-left">
              <h1 className="text-4xl font-bold text-foreground leading-tight tracking-tight">Alex Chen</h1>
              <div className="flex items-center gap-2 text-vrent-primary mt-2 font-bold uppercase tracking-[0.25em] text-[10px]">
                 <span className="w-2 h-2 rounded-full bg-vrent-primary animate-pulse" />
                 Senior_Curator
              </div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-vrent-primary/40 text-xs font-bold uppercase tracking-[0.4em]">
               System_Dashboard_v3.2
            </div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-[0.9]">
              Creator <span className="opacity-20">Studio.</span>
            </h2>
            <p className="max-w-xl text-lg text-neutral-500 font-medium">
               Welcome to your command center. Synchronize your parameters, manage your assets, and keep the campus hub moving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Main Dashboard Section */}
          <div className="xl:col-span-2 space-y-16">
            
            {/* User_Credential Grid */}
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-vrent-primary/10 rounded-2xl flex items-center justify-center border border-vrent-primary/20">
                  <UserPlus className="w-6 h-6 text-vrent-primary" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight">User_Credential</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { label: 'Public Identity', value: 'Alex Chen', icon: Settings },
                  { label: 'System Mail', value: 'alex.chen@campus.edu', icon: Bell },
                  { label: 'Dial_Connect', value: '+1 (555) 012-3456', icon: Globe },
                  { label: 'Primary Node', value: 'North Hub', icon: Map },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/40 backdrop-blur-2xl border border-white/60 p-10 rounded-[40px] shadow-xl hover:bg-white/60 transition-all duration-500 group">
                    <stat.icon className="w-5 h-5 text-vrent-primary mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-30 mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground tracking-tight italic">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* System Form Container */}
            <div className="space-y-10">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-vrent-primary/10 rounded-2xl flex items-center justify-center border border-vrent-primary/20">
                     <Plus className="w-6 h-6 text-vrent-primary" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight">Deploy_Asset</h3>
               </div>
               <VehicleForm />
            </div>
          </div>

          {/* Sidebar Modules */}
          <div className="space-y-12">
            
            {/* Wallet System (Glass Card) */}
            <div className="space-y-8 bg-white/60 backdrop-blur-3xl border border-white/80 p-10 rounded-[44px] shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-vrent-primary/5 blur-[80px] group-hover:bg-vrent-primary/10 transition-all duration-1000" />
               <div className="flex items-center gap-4 opacity-40 mb-4">
                  <CreditCard className="w-6 h-6" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.3em]">Asset_Wallet</h3>
               </div>
               
               <div className="space-y-6">
                  <div className="bg-vrent-primary/5 border border-vrent-primary/10 p-10 rounded-[40px] shadow-inner relative overflow-hidden">
                     <Badge className="bg-vrent-primary text-white rounded-full px-6 py-2 border-0 shadow-lg text-[10px] uppercase font-bold tracking-widest absolute top-6 right-6">ACTIVE</Badge>
                     <p className="text-4xl font-bold tracking-tight text-vrent-primary mt-12 mb-2">•••• 4242</p>
                     <p className="text-[10px] font-bold opacity-30 tracking-[0.3em] uppercase">Auth: 12/26</p>
                  </div>
                  <Button className="w-full bg-vrent-primary text-white h-16 rounded-[28px] font-bold shadow-xl shadow-vrent-primary/20 hover:scale-105 hover:bg-vrent-primary/90 transition-all">
                    Link New Gateway
                  </Button>
               </div>
            </div>

            {/* Security Interface */}
            <div className="space-y-10 bg-vrent-primary/5 backdrop-blur-2xl border border-vrent-primary/10 p-12 rounded-[44px] shadow-2xl">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-vrent-primary" />
                <h3 className="text-2xl font-bold tracking-tight">Security_Layer</h3>
              </div>
              
              <div className="space-y-8 pt-4">
                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                  <span className="text-sm font-bold opacity-40 uppercase tracking-widest italic">Identity_Lock</span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500 shadow-lg border-2 border-white" />
                </div>
                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                  <span className="text-sm font-bold opacity-40 uppercase tracking-widest italic">Shield_Enc_v2</span>
                  <Badge className="bg-rose-500 text-white border-0 shadow-lg px-4 py-1.5 rounded-full text-[9px] font-bold uppercase">Disabled</Badge>
                </div>
                <Button className="w-full bg-white/40 text-vrent-primary backdrop-blur-md rounded-2xl h-14 font-bold uppercase tracking-widest text-[10px] border border-white shadow-xl hover:scale-105 transition-all">
                  INITIALIZE SHIELD
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
