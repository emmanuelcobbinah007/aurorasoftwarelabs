"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";

const FeaturedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="py-20 bg-gray-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-space text-white mb-4">
              Selected Works
            </h2>
            <p className="text-gray-400 max-w-xl">
              A curated selection of our most recent digital products and
              experiences.
            </p>
          </div>
          <Button
            variant="outline"
            asChild
            className="hidden md:flex border-white/10 text-white hover:bg-white/5"
          >
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative w-full overflow-x-auto pb-12 hide-scrollbar">
        <div className="flex gap-8 px-4 sm:px-6 lg:px-8 w-max">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative w-[85vw] md:w-[600px] flex-shrink-0"
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900 border border-white/5">
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, 600px"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#67c970] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mt-2 line-clamp-2 max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end max-w-[150px]">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 md:hidden">
        <Button variant="outline" asChild className="w-full border-white/10 text-white">
          <Link href="/portfolio">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
