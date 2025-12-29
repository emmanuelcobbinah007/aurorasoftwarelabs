"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Code,
  Settings,
  Search,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { companyInfo, services, projects, testimonials } from "@/data";
import Hero from "@/components/Hero";
import AuroraSEOFeature from "@/components/AuroraSEOFeature";
import FeaturedProjects from "@/components/FeaturedProjects";

// Optimized, lighter animations
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section - Centered viewport */}
      <Hero />

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-base leading-7 sm:text-lg sm:leading-8 text-gray-300"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3 lg:max-w-none lg:grid-cols-5 lg:gap-8"
          >
            {companyInfo.values.map((value) => (
              <motion.div key={value} variants={fadeIn} className="text-center">
                <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/10">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-white">
                  {value}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-20 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl text-white"
            >
              Our Services
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-base leading-7 sm:text-lg sm:leading-8 text-gray-300"
            >
              Comprehensive digital solutions tailored to your needs
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:gap-8"
          >
            {services.slice(0, 2).map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10">
                        <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-white">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-6 sm:leading-7 text-gray-300">
                      {service.description}
                    </CardDescription>
                    <ul className="mt-4 space-y-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <ChevronRight className="h-4 w-4 text-[#67c970] mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-8 sm:mt-12 text-center"
          >
            <Button
              variant="outline"
              asChild
              className="w-auto border border-white/20 text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Aurora SEO Feature */}
      <AuroraSEOFeature />

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-base leading-7 text-white/80 sm:text-lg sm:leading-8"
            >
              Don't just take our word for it
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 sm:mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeIn}>
                <Card className="bg-gray-900 text-white/90 h-full border border-white/10">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#67c970] text-[#67c970]"
                        />
                      ))}
                    </div>
                    <p className="text-sm leading-6 mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-white/55">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-[#67c970]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-900/80 sm:text-lg sm:leading-8">
              Let's discuss how we can bring your digital vision to life. Get in
              touch for a free consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="w-full sm:w-auto"
              >
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asChild
                className={`w-full sm:w-auto border-accent-foreground text-black hover:bg-white hover:text-[#67c970]`}
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
