"use client";


import Link from "next/link";
import { ArrowRight, Package, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function AuroraSEOFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  
  // Mouse tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  }

  return (
    <section ref={ref} className="py-24 bg-gray-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#67c970]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className="px-3 py-1 rounded-full bg-[#67c970]/10 border border-[#67c970]/20 text-xs font-medium text-[#67c970]">
                Open Source
              </span>
            </motion.div>
            
            <motion.h2
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold tracking-tight font-space text-white mb-6"
            >
              Aurora<span className="text-[#67c970]">SEO</span>
            </motion.h2>
            
            <motion.p
              variants={fadeIn}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Our flagship contribution to the developer community. A lightweight, 
              type-safe SEO utility that makes managing meta tags, social previews, 
              and structured data effortlessly simple.
            </motion.p>

            <motion.div variants={fadeIn} className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Zero Config Required",
                "TypeScript First",
                "Auto JSON-LD",
                "Social Previews",
              ].map((feature) => (
                <div key={feature} className="flex items-center text-gray-300">
                  <div className="h-1.5 w-1.5 bg-[#67c970] rounded-full mr-3" />
                  {feature}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#67c970] text-gray-950 hover:bg-[#5ab562]"
              >
                <Link
                  href="https://www.npmjs.com/package/aurora-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Package className="mr-2 h-4 w-4" />
                  npm install
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/10 text-white hover:bg-white/5"
              >
                <Link href="/aurora-seo">
                  Read Documentation
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Side - 3D Card */}
          <motion.div
            style={{ y, rotateX, perspective: 1000 }}
            className="relative hidden lg:block"
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="relative z-10 bg-gray-950 border border-white/10 rounded-xl p-6 shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                rotateX: useTransform(mouseY, [-300, 300], [5, -5]),
                rotateY: useTransform(mouseX, [-300, 300], [-5, 5]),
              }}
            >
              {/* Code Snippet Mockup */}
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                <div className="ml-auto text-xs text-gray-500 font-mono">layout.tsx</div>
              </div>
              
              <div className="font-mono text-sm leading-relaxed">
                <div className="text-purple-400">import</div>
                <div className="text-gray-300">
                  <span className="text-blue-400">{`{`}</span> AuroraSEO <span className="text-blue-400">{`}`}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'aurora-seo'</span>;
                </div>
                <br />
                <div className="text-purple-400">export default function</div>
                <div className="text-yellow-400">RootLayout() {`{`}</div>
                <div className="pl-4 text-gray-300">
                  <span className="text-purple-400">return</span> (
                </div>
                <div className="pl-8 text-gray-300">
                  <span className="text-blue-400">{`<`}</span>
                  <span className="text-yellow-400">AuroraSEO</span>
                </div>
                <div className="pl-12 text-gray-300">
                  <span className="text-blue-300">title</span>=<span className="text-green-400">"Aurora Labs"</span>
                </div>
                <div className="pl-12 text-gray-300">
                  <span className="text-blue-300">description</span>=<span className="text-green-400">"Future of Tech"</span>
                </div>
                <div className="pl-8 text-gray-300">
                  <span className="text-blue-400">{`/>`}</span>
                </div>
                <div className="pl-4 text-gray-300">);</div>
                <div className="text-yellow-400">{`}`}</div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                className="absolute -right-6 -bottom-6 bg-[#67c970] text-gray-950 p-4 rounded-lg font-bold shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs uppercase tracking-wider opacity-75">Downloads</div>
                <div className="text-2xl">1.2k+</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
