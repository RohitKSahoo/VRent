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
  Search,
  Wand2
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
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 min-h-screen">
      {/* ── HEADER ── */}
      <div className="mb-12 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 text-vrent-pink">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-widest leading-none">Find a trusty companion...</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase italic leading-none">
            Available Nomads<span className="text-vrent-yellow">.</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1 w-full relative">
            <SearchBar />
            {/* Sketchy Annotation */}
            <div className="hidden lg:block absolute -right-48 top-1/2 -translate-y-1/2 -rotate-6 pointer-events-none">
              <p className="font-hand text-2xl text-vrent-pink whitespace-nowrap">
                Find your ride! ⮕
              </p>
            </div>
          </div>

          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  className="md:hidden w-full h-14 border-sketchy bg-white neo-shadow font-bold uppercase flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filter the Vibe
                </Button>
              }
            />
            <SheetContent side="bottom" className="h-[85vh] rounded-t-[3rem] p-0 overflow-hidden border-t-8 border-black">
              <SheetHeader className="p-8 border-b-4 border-black bg-vrent-yellow">
                <SheetTitle className="text-3xl font-black uppercase tracking-tighter">Filter the Vibe</SheetTitle>
              </SheetHeader>
              <div className="p-8 overflow-y-auto h-full pb-40 bg-[#FFFCEB]">
                <FiltersSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden md:block w-80 shrink-0 h-fit sticky top-28">
          <FiltersSidebar />
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10"
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
                <div className="w-24 h-24 bg-white border-sketchy flex items-center justify-center neo-shadow text-slate-300 mb-8 rotate-3">
                  <PackageOpen className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-black mb-3 italic">
                  No Nomads today?
                </h3>
                <p className="font-hand text-2xl text-[#7c7a8a] max-w-sm">
                  Try shaking up your vibes or resetting the treasure map!
                </p>
                <Button
                  variant="link"
                  className="mt-6 text-2xl font-hand text-vrent-pink underline decoration-2 underline-offset-4 hover:text-black transition-colors"
                  onClick={() => useUIStore.getState().resetFilters()}
                >
                  Clear the Path!
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
