"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function HeroIllustration() {
  return (
    <div className="relative w-full h-96 lg:h-[500px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circles */}
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          cx="300"
          cy="200"
          r="180"
          fill="url(#heroGradient1)"
        />
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          cx="300"
          cy="200"
          r="120"
          fill="url(#heroGradient2)"
        />

        {/* Central hub */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          cx="300"
          cy="200"
          r="20"
          fill="url(#centralGradient)"
          className="drop-shadow-lg"
        />

        {/* Connection nodes */}
        {[
          { x: 180, y: 120, delay: 0.8 },
          { x: 420, y: 120, delay: 0.9 },
          { x: 480, y: 200, delay: 1.0 },
          { x: 420, y: 280, delay: 1.1 },
          { x: 180, y: 280, delay: 1.2 },
          { x: 120, y: 200, delay: 1.3 },
        ].map((node, index) => (
          <motion.circle
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: node.delay }}
            cx={node.x}
            cy={node.y}
            r="12"
            fill="url(#nodeGradient)"
            className="drop-shadow-md"
          />
        ))}

        {/* Connecting lines */}
        {[
          { x1: 300, y1: 200, x2: 180, y2: 120, delay: 1.4 },
          { x1: 300, y1: 200, x2: 420, y2: 120, delay: 1.5 },
          { x1: 300, y1: 200, x2: 480, y2: 200, delay: 1.6 },
          { x1: 300, y1: 200, x2: 420, y2: 280, delay: 1.7 },
          { x1: 300, y1: 200, x2: 180, y2: 280, delay: 1.8 },
          { x1: 300, y1: 200, x2: 120, y2: 200, delay: 1.9 },
        ].map((line, index) => (
          <motion.line
            key={index}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 0.8, delay: line.delay }}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}

        {/* Animated data flow */}
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <motion.circle
            key={`flow-${index}`}
            r="3"
            fill="#34D399"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              cx: [300, [180, 420, 480, 420, 180, 120][index]],
              cy: [200, [120, 120, 200, 280, 280, 200][index]],
            }}
            transition={{
              duration: 2,
              delay: index * 0.3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        ))}

        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.circle
            key={`particle-${index}`}
            r="2"
            fill="#4F8CFF"
            opacity="0.4"
            initial={{
              x: Math.random() * 600,
              y: Math.random() * 400,
            }}
            animate={{
              x: Math.random() * 600,
              y: Math.random() * 400,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          
          <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
          
          <radialGradient id="centralGradient">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </radialGradient>
          
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#10B981" />
          </radialGradient>
          
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F8CFF" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
