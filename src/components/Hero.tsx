"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Constellation from "@/components/Constellation";

// Optimized animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Custom ease for "premium" feel
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-950">
      {/* Background: Constellation Magic */}
      <Constellation />

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/30 via-transparent to-gray-950/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(103,201,112,0.08),transparent_50%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-5xl text-center"
        >
          {/* Badge / Label */}
          <motion.div variants={fadeIn} className="mb-6 flex justify-center">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-[#67c970] backdrop-blur-sm">
              Northern Lights for Africa's Tech Frontier
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeIn}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-space text-white leading-[1.1]"
          >
            Illuminating the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
              Digital Frontier.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeIn}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-gray-400 max-w-2xl mx-auto font-sans"
          >
            We engineer award-winning digital experiences that guide your
            business through the complexities of the modern web.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#67c970] text-gray-950 hover:bg-[#5ab562] hover:scale-105 transition-all duration-300 font-medium text-base"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto h-12 px-8 rounded-full border-white/10 text-white bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 font-medium text-base"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
