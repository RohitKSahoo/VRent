'use client';

import { useUIStore } from '@/store/useUIStore';
import { mockVehicles } from '@/data/mockData';
import { VehicleCard } from '@/components/vehicle/VehicleCard';
import { FiltersSidebar } from '@/components/vehicle/FiltersSidebar';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/ui/search-bar';
import { 
  SlidersHorizontal, 
  PackageOpen, 
  Sparkles,
  ArrowRight,
  Zap,
  Globe
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';

export default function VehiclesPage() {
  const {
    searchQuery,
    priceRange,
    selectedType,
    isMobileFilterOpen,
    setIsMobileFilterOpen
  } = useUIStore();

  const filteredVehicles = mockVehicles.filter((v) => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = !selectedType || v.type === selectedType;
    const matchesPrice = v.price >= priceRange[0] && v.price <= priceRange[1];
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen mesh-bg pt-20 px-4 md:px-8 pb-32">
      <div className="max-w-7xl mx-auto">
        
        {/* ── HEADER ── */}
        <div className="mb-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 text-vrent-primary px-3 py-1 bg-white/40 backdrop-blur-md rounded-full w-fit border border-white/60 shadow-sm">
              <Sparkles className="w-4 h-4 fill-vrent-primary/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] leading-none opacity-60">Discovery Portal</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground flex flex-wrap gap-x-4 leading-tight">
               Refined <span className="text-vrent-primary opacity-40">Nomads.</span>
            </h1>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 w-full glass p-2 rounded-3xl shadow-lg border-white/60">
              <SearchBar />
            </div>

            <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    className="md:hidden w-full h-14 bg-white/60 backdrop-blur-xl border border-white/80 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-lg"
                  >
                    <SlidersHorizontal className="w-5 h-5 opacity-40" />
                    Filter Vibes
                  </Button>
                }
              />
              <SheetContent side="bottom" className="h-[85vh] rounded-t-[3rem] p-0 overflow-hidden border-t border-white/60 glass-card">
                <SheetHeader className="p-8 border-b border-black/5 bg-vrent-primary/5">
                  <SheetTitle className="text-3xl font-bold tracking-tight">System Filter</SheetTitle>
                </SheetHeader>
                <div className="p-8 overflow-y-auto h-full pb-40">
                  <FiltersSidebar />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="hidden md:block w-80 shrink-0 h-fit sticky top-28 bg-white/40 backdrop-blur-2xl rounded-[32px] p-8 border border-white/60 shadow-xl">
             <div className="space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-vrent-primary/10 rounded-xl flex items-center justify-center border border-vrent-primary/20">
                      <Zap className="w-5 h-5 text-vrent-primary" />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-0.5">Parameters</h4>
                      <p className="text-[10px] uppercase font-bold opacity-30 select-none">Tuning v3.2</p>
                   </div>
                </div>
                <FiltersSidebar />
             </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              {filteredVehicles.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"
                >
                  {filteredVehicles.map((vehicle) => (
                    <motion.div
                      key={vehicle.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    >
                      <VehicleCard vehicle={vehicle} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-32 text-center"
                >
                  <div className="w-24 h-24 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl flex items-center justify-center shadow-xl text-neutral-300 mb-8">
                    <PackageOpen className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-neutral-800 mb-3">
                    No Nomads Signal
                  </h3>
                  <p className="text-neutral-500 font-medium max-w-sm px-6">
                    Try adjusting your system parameters or resetting the discovery portal.
                  </p>
                  <Button
                    variant="link"
                    className="mt-8 text-vrent-primary font-bold text-lg hover:no-underline hover:scale-105 transition-transform flex items-center gap-2"
                    onClick={() => useUIStore.getState().resetFilters()}
                  >
                    Reset Portal <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
