'use client';

import { useUIStore } from '@/store/useUIStore';
import { VehicleType } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, DollarSign, Wand2, SlidersHorizontal, RefreshCcw } from 'lucide-react';

const VEHICLE_TYPES: VehicleType[] = ['Car', 'Bike', 'Van', 'Scooter'];

export const FiltersSidebar = () => {
  const { 
    priceRange, 
    setPriceRange, 
    selectedType, 
    setSelectedType,
    resetFilters 
  } = useUIStore();

  return (
    <div className="flex flex-col gap-10">
      {/* Type Selection (System Parameters) */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4 opacity-40">
          <Wand2 className="w-5 h-5 text-vrent-primary" />
          <h3 className="font-bold text-xs uppercase tracking-[0.3em]">Module_Select</h3>
        </div>
        <div className="space-y-4">
          {VEHICLE_TYPES.map((type) => (
            <div 
              key={type} 
              className={`flex items-center space-x-3 p-4 rounded-2xl border transition-all cursor-pointer group shadow-sm
                ${selectedType === type ? 'bg-vrent-primary text-white border-vrent-primary' : 'bg-white/40 border-white/60 hover:bg-white/60'}`} 
              onClick={() => setSelectedType(selectedType === type ? null : type)}
            >
              <div className={`w-5 h-5 rounded-lg border-2 transition-all flex items-center justify-center 
                ${selectedType === type ? 'bg-white border-white' : 'bg-transparent border-vrent-primary/30'}`}>
                {selectedType === type && <div className="w-2.5 h-2.5 bg-vrent-primary rounded-[2px]" />}
              </div>
              <Label className="text-sm font-bold uppercase tracking-widest cursor-pointer leading-none">
                {type === 'Car' ? 'Passenger Cars' : type === 'Bike' ? 'Two Wheels' : type === 'Van' ? 'Cargo Vans' : 'Commuters'}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Pocket (Slider) */}
      <div className="space-y-8 bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[32px] shadow-lg">
        <div className="flex items-center gap-2 mb-2 opacity-40">
          <DollarSign className="w-5 h-5 text-vrent-primary" />
          <h3 className="font-bold text-xs uppercase tracking-[0.3em]">Pricing_Threshold</h3>
        </div>
        <Slider
          min={0}
          max={200}
          step={5}
          value={priceRange}
          onValueChange={(val) => setPriceRange(val as [number, number])}
          className="[&_[role=slider]]:bg-vrent-primary [&_[role=slider]]:border-white [&_[role=slider]]:rounded-full [&_[role=slider]]:shadow-xl [&_[role=slider]]:w-6 [&_[role=slider]]:h-6"
        />
        <div className="flex justify-between text-[10px] font-bold uppercase opacity-30 tracking-widest">
          <span>Min: ${priceRange[0]}</span>
          <span>Max: ${priceRange[1]}</span>
        </div>
      </div>

      {/* Reset System Button */}
      <Button 
        variant="outline" 
        onClick={resetFilters}
        className="w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl h-14 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white/60 transition-all flex items-center justify-center gap-3 shadow-md"
      >
        <RefreshCcw className="w-4 h-4 opacity-40 group-hover:rotate-180 duration-500 transition-all" />
        Flush Parameters
      </Button>
    </div>
  );
};
