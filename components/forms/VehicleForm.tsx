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
import { Wand2, Plus, Sparkles, Map } from 'lucide-react';
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
    <Card className="bg-white border-sketchy p-8 neo-shadow-lg rotate-1 transform transition-all hover:rotate-0">
      <CardHeader className="p-0 mb-10">
        <div className="flex items-center gap-3 mb-2">
          <Map className="w-10 h-10 text-vrent-pink" />
          <h2 className="text-4xl font-hand text-black italic leading-none">List Your Loot!</h2>
        </div>
        <p className="font-bold uppercase tracking-widest text-[10px] opacity-40 leading-none">
          Add a new nomad to the treasure map. ⮕
        </p>
      </CardHeader>
      
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm font-black uppercase tracking-widest leading-none">Nomad's Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g. Silver Linings Cloud-Chariot" 
                        {...field} 
                        className="h-16 px-6 bg-vrent-yellow/5 border-sketchy rounded-none text-xl font-hand focus:scale-105 transition-transform"
                      />
                    </FormControl>
                    <FormMessage className="font-hand text-red-500 text-lg italic lowercase" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm font-black uppercase tracking-widest leading-none">Vehicle Species</FormLabel>
                    <FormControl>
                      <select 
                        {...field} 
                        className="w-full h-16 px-6 bg-vrent-yellow/5 border-sketchy rounded-none text-xl font-hand focus:scale-105 transition-transform outline-none appearance-none cursor-pointer"
                      >
                        <option value="Car">Swift Scoot (Car)</option>
                        <option value="Bike">Magic Bike</option>
                        <option value="Van">Campus Chariot</option>
                        <option value="Scooter">Road Runner</option>
                      </select>
                    </FormControl>
                    <FormMessage className="font-hand text-red-500 text-lg italic lowercase" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm font-black uppercase tracking-widest leading-none">Toll (Price/MOON)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 font-hand text-2xl text-black select-none">$</span>
                        <Input 
                          type="number" 
                          {...field} 
                          className="h-16 pl-12 pr-6 bg-vrent-yellow/5 border-sketchy rounded-none text-xl font-hand focus:scale-105 transition-transform"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="font-hand text-red-500 text-lg italic lowercase" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-sm font-black uppercase tracking-widest leading-none">Photo Transmission URL</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://..." 
                        {...field} 
                        className="h-16 px-6 bg-vrent-yellow/5 border-sketchy rounded-none font-mono text-sm focus:scale-105 transition-transform"
                      />
                    </FormControl>
                    <p className="text-[9px] font-bold uppercase opacity-30 leading-none">Hint: Unsplash works best!</p>
                    <FormMessage className="font-hand text-red-500 text-lg italic lowercase" />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-20 bg-vrent-pink text-white border-4 border-black rounded-none font-black text-2xl uppercase tracking-tighter italic neo-shadow-lg hover:neo-shadow-none hover:translate-x-2 hover:translate-y-2 transition-all group-hover:scale-105"
            >
              LET'S DO THIS! 🚀
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
