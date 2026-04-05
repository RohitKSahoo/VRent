'use client';

import { Vehicle } from '@/data/mockData';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowUpRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

export const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <motion.div
      whileHover={{ y: -8, rotate: Math.random() * 2 - 1 }}
      className="relative group"
    >
      <Card className="bg-white border-sketchy p-4 md:p-6 neo-shadow hover:neo-shadow-lg transition-all duration-300 relative group overflow-hidden">
        {/* Sketchy Tape or Clip */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-6 bg-vrent-pink/20 border-x-2 border-black/10 z-10" />
        
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] w-full border-2 border-black overflow-hidden mb-6 group-hover:neo-shadow-pink transition-all">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {vehicle.available && (
              <div className="absolute bottom-2 right-2 bg-white/90 border-2 border-black px-3 py-1 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-vrent-yellow fill-vrent-yellow" />
                <span className="text-[10px] font-black uppercase leading-none">Available</span>
              </div>
            )}
            {!vehicle.available && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
                <div className="bg-black text-white px-6 py-2 transform -rotate-12 border-2 border-white font-hand text-2xl uppercase">
                  Resting for now...
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-hand text-3xl text-black leading-none mb-1 group-hover:text-vrent-pink transition-colors">
                  {vehicle.name}
                </h3>
                <div className="flex items-center gap-1.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  <User className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest italic leading-none">
                    Guarded by <span className="underline">The Campus Sage</span>
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-vrent-pink font-black text-2xl italic leading-none">
                  ${vehicle.price}
                </p>
                <span className="text-[8px] font-black uppercase opacity-40 leading-none">
                  PER MOON
                </span>
              </div>
            </div>

            <Button 
              className={`
                w-full h-12 border-2 border-black rounded-none font-bold uppercase tracking-widest transition-all neo-shadow hover:neo-shadow-none hover:translate-x-1 hover:translate-y-1
                ${vehicle.available 
                  ? 'bg-white text-black hover:bg-vrent-pink hover:text-white' 
                  : 'bg-slate-100/50 text-slate-400 cursor-not-allowed opacity-50'
                }
              `}
              disabled={!vehicle.available}
            >
              {vehicle.available ? (
                <>Meet the Nomad <ArrowUpRight className="ml-2 w-4 h-4" /></>
              ) : 'Sleeping...'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
