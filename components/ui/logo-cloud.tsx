"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Logo {
  name: string;
  logo: string;
}

interface LogoCloudProps {
  logos: Logo[];
  className?: string;
}

export function LogoCloud({ logos, className }: LogoCloudProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <div className="relative w-24 h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                {/* Placeholder for logos - using text for now */}
                <div className="w-full h-full flex items-center justify-center bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-white/70 font-medium text-sm">
                    {logo.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
