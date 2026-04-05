'use client';

import { Vehicle } from '@/data/mockData';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ArrowRight, User, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group h-full"
    >
      <Card className="bg-white/40 backdrop-blur-2xl border border-white/60 p-5 rounded-[40px] shadow-2xl hover:shadow-vrent-primary/10 transition-all duration-500 overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3] w-full rounded-[28px] overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500 shadow-md">
            <Image
              src={vehicle.image}
              alt={vehicle.name}
              fill
              className="object-cover transition-transform duration-700"
            />
            {vehicle.available && (
              <div className="absolute top-3 right-3 bg-white/60 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2 border border-white/60 shadow-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-sm shadow-emerald-500/40" />
                <span className="text-[10px] font-bold uppercase tracking-widest leading-none opacity-60">Ready</span>
              </div>
            )}
            {!vehicle.available && (
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center pointer-events-none">
                <div className="bg-white/40 backdrop-blur-md text-white px-8 py-2.5 border border-white/60 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] shadow-2xl">
                  In Use
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6 px-2">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-foreground tracking-tight group-hover:text-vrent-primary transition-colors flex items-center gap-3">
                  {vehicle.name}
                </h3>
                <div className="flex items-center gap-2 opacity-50">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Available at <span className="text-vrent-primary">North Campus</span>
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-vrent-primary font-bold text-3xl tracking-tight leading-none">
                  ${vehicle.price}
                </p>
                <span className="text-[8px] font-bold uppercase opacity-30 tracking-[0.2em] leading-none">
                  MONTHLY_PLAN
                </span>
              </div>
            </div>

            <Button 
              className={`
                w-full h-14 rounded-3xl font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center gap-2
                ${vehicle.available 
                  ? 'bg-vrent-primary text-white shadow-xl shadow-vrent-primary/20 hover:scale-[1.02] hover:bg-vrent-primary/90' 
                  : 'bg-black/5 text-black/20 cursor-not-allowed'
                }
              `}
              disabled={!vehicle.available}
            >
              {vehicle.available ? (
                <>Reserve Now <ArrowRight className="w-4 h-4" /></>
              ) : 'Reserved'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
