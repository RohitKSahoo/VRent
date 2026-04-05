'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Plus, Sparkles, Map, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, 'Name is too short!'),
  type: z.enum(['Car', 'Bike', 'Van', 'Scooter']),
  price: z.coerce.number().min(1, 'Gotta charge something!'),
  image: z.string().url('Need a real photo URL!'),
});

export const VehicleForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: 0,
      image: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="bg-white/40 backdrop-blur-2xl border border-white/60 p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden group">
      {/* Gloss Highlight */}
      <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent pointer-events-none" />

      <CardHeader className="p-0 mb-14">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-vrent-primary/10 rounded-2xl flex items-center justify-center border border-vrent-primary/20">
            <Database className="w-6 h-6 text-vrent-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Asset_Deployment</h2>
        </div>
        <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-vrent-primary/40 leading-none">
          Synchronizing new nomad with campus hub...
        </p>
      </CardHeader>
      
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Nomad_Identity</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Silver Linings Cloud-Chariot" 
                        {...field} 
                        className="h-16 px-8 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl text-sm font-semibold shadow-inner focus:bg-white/40 transition-all outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-[9px] font-bold text-rose-500 uppercase tracking-widest opacity-60" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Vehicle_Module</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full h-16 px-8 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl text-sm font-semibold shadow-inner focus:bg-white/40 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="Car">Passenger Car</option>
                        <option value="Bike">Two Wheeler</option>
                        <option value="Van">Cargo Van</option>
                        <option value="Scooter">Micro Commuter</option>
                      </select>
                    </FormControl>
                    <FormMessage className="text-[9px] font-bold text-rose-500 uppercase tracking-widest opacity-60" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Pricing_Threshold ($/MT)</FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <span className="absolute left-8 top-1/2 -translate-y-1/2 text-sm font-bold text-vrent-primary opacity-60">$</span>
                        <Input 
                          type="number" 
                          {...field} 
                          className="h-16 pl-12 pr-8 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl text-sm font-semibold shadow-inner focus:bg-white/40 transition-all outline-none"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[9px] font-bold text-rose-500 uppercase tracking-widest opacity-60" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">Transmission_Link (IMG_URL)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://images.unsplash.com..." 
                        {...field} 
                        className="h-16 px-8 bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl text-[10px] font-mono shadow-inner focus:bg-white/40 transition-all outline-none uppercase tracking-widest opacity-60"
                      />
                    </FormControl>
                    <FormMessage className="text-[9px] font-bold text-rose-500 uppercase tracking-widest opacity-60" />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-18 bg-vrent-primary text-white rounded-[28px] font-bold text-sm uppercase tracking-[0.3em] shadow-2xl shadow-vrent-primary/30 hover:scale-[1.01] hover:bg-vrent-primary/90 transition-all flex items-center justify-center gap-4"
            >
              DEPLOY TO HUB <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
