'use client';

import { useUIStore } from '@/store/useUIStore';
import { VehicleType } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, DollarSign, Wand2 } from 'lucide-react';

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
    <div className="flex flex-col gap-8">
      {/* Sticky Note Filters */}
      <Card className="bg-[#FFFCEB] border-sketchy p-4 md:p-6 neo-shadow rotate-[-1deg] transform transition-all hover:rotate-0">
        <CardContent className="p-0">
          <div className="flex items-center gap-2 mb-4">
            <Wand2 className="w-5 h-5 text-vrent-pink" />
            <h3 className="font-hand text-2xl text-black">What's your vibe?</h3>
          </div>
          <div className="space-y-3">
            {VEHICLE_TYPES.map((type) => (
              <div key={type} className="flex items-center space-x-3 group cursor-pointer" onClick={() => setSelectedType(selectedType === type ? null : type)}>
                <div className={`w-5 h-5 border-2 border-black rounded-none flex items-center justify-center transition-all ${selectedType === type ? 'bg-vrent-pink' : 'bg-white'}`}>
                  {selectedType === type && <div className="w-3 h-3 bg-white" />}
                </div>
                <Label className="text-sm font-bold uppercase tracking-widest cursor-pointer group-hover:text-vrent-pink transition-colors">
                  {type === 'Car' ? 'Swift Scoots' : type === 'Bike' ? 'Magic Bikes' : type === 'Van' ? 'Campus Chariots' : 'Road Runners'}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Pocket */}
      <Card className="bg-white border-2 border-black p-6 rounded-none neo-shadow relative">
        {/* Sketchy Speech Bubble Tail */}
        <div className="absolute -left-3 top-10 w-6 h-6 bg-white border-l-2 border-b-2 border-black rotate-45" />
        
        <CardContent className="p-0 space-y-6">
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-vrent-yellow" />
            <h3 className="font-bold text-lg uppercase tracking-tighter">Price Pockets</h3>
          </div>
          <Slider
            min={0}
            max={200}
            step={5}
            value={priceRange}
            onValueChange={(val) => setPriceRange(val as [number, number])}
            className="[&_[role=slider]]:bg-vrent-yellow [&_[role=slider]]:border-2 [&_[role=slider]]:border-black [&_[role=slider]]:rounded-none [&_[role=slider]]:neo-shadow"
          />
          <div className="flex justify-between text-[10px] font-black uppercase opacity-40">
            <span>Pocket Change</span>
            <span>Big Dreams</span>
          </div>
        </CardContent>
      </Card>

      {/* Reset Sketchy Button */}
      <Button 
        variant="outline" 
        onClick={resetFilters}
        className="border-sketchy bg-[#F1F5F9] text-black h-12 font-hand text-xl hover:bg-vrent-pink hover:text-white transition-all transform hover:rotate-2"
      >
        Wander Free (Reset)
      </Button>
    </div>
  );
};
