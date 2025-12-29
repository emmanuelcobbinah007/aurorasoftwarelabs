"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Settings,
  Search,
  ArrowRight,
  CheckCircle,
  Star,
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
import { useTheme } from "@/contexts/ThemeContext";
import { services } from "@/data";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const serviceIcons = {
  "web-development": Code,
  "software-consulting": Settings,
  "search-engine-optimization": Search,
};

const serviceImages = {
  "web-development": {
    light: "/webdev.png",
    dark: "/webdev-dark.png",
  },
  "software-consulting": {
    light: "/consulting.png",
    dark: "/consulting-dark.png",
  },
  "search-engine-optimization": {
    light: "/seo.png",
    dark: "/seo-dark.png",
  }, // Will use icon fallback
};

export default function ServicesPage() {
  const { theme } = useTheme();

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section
        className={`pt-32 pb-12 bg-gray-950`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className={`text-4xl font-bold font-space tracking-tight text-white sm:text-6xl`}
            >
              Our Services
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`mt-6 text-lg leading-8 text-gray-400`}
            >
              Comprehensive digital solutions designed to empower your business
              and drive meaningful growth in today's competitive landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section
        className={`py-20 bg-gray-950`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-16"
          >
            {services.map((service, index) => {
              const IconComponent =
                serviceIcons[service.id as keyof typeof serviceIcons];
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <Card
                        className={`h-full border border-white/5 bg-gray-900 hover:border-[#67c970]/30 transition-all duration-300`}
                      >
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-space text-white">
                              {service.title}
                            </CardTitle>
                            <div className="flex items-center mt-2">
                              <Star className="h-4 w-4 text-[#67c970] fill-[#67c970]" />
                              <Star className="h-4 w-4 text-[#67c970] fill-[#67c970]" />
                              <Star className="h-4 w-4 text-[#67c970] fill-[#67c970]" />
                              <Star className="h-4 w-4 text-[#67c970] fill-[#67c970]" />
                              <Star className="h-4 w-4 text-[#67c970] fill-[#67c970]" />
                              <span
                                className={`ml-2 text-sm text-gray-400`}
                              >
                                Premium Service
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <CardDescription className="text-base leading-7 text-white/55">
                          {service.description}
                        </CardDescription>
                        <div>
                          <h4
                            className={`font-semibold font-space text-white mb-3`}
                          >
                            What's Included:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center space-x-3"
                              >
                                <CheckCircle className="h-5 w-5 text-[#67c970] flex-shrink-0" />
                                <span
                                  className={`text-gray-300`}
                                >
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4">
                          <Button
                            asChild
                            className="w-full sm:w-auto bg-white/90 text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105 hover:shadow-md"
                          >
                            <Link href="/contact">
                              Get Started
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                      {serviceImages[
                        service.id as keyof typeof serviceImages
                      ] && (
                        <Image
                          src={
                            theme === "dark"
                              ? serviceImages[
                                  service.id as keyof typeof serviceImages
                                ]?.dark
                              : serviceImages[
                                  service.id as keyof typeof serviceImages
                                ]?.light
                          }
                          alt={service.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full rounded-lg"
                        />
                      )}
                      {!serviceImages[
                        service.id as keyof typeof serviceImages
                      ] && (
                        <IconComponent className="h-24 w-24 text-primary opacity-50" />
                      )}
                    </div>

                    {/* Process or benefits */}
                    <div>
                      <h3
                        className={`text-xl font-semibold font-space text-white mb-4`}
                      >
                        {service.id === "web-development"
                          ? "Our Development Process"
                          : service.id === "software-consulting"
                          ? "Our Consulting Approach"
                          : "Our SEO Strategy"}
                      </h3>
                      <div className="space-y-4">
                        {service.id === "web-development" ? (
                          <>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-medium">
                                1
                              </div>
                              <div>
                                <h4 className={`font-medium text-white`}>
                                  Discovery & Planning
                                </h4>
                                <p className={`text-sm text-gray-300`}>
                                  Understanding your requirements and goals
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-medium">
                                2
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Design & Development
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Creating beautiful, functional solutions
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-medium">
                                3
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Testing & Launch
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Ensuring quality and smooth deployment
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-medium">
                                4
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Support & Maintenance
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Ongoing support for optimal performance
                                </p>
                              </div>
                            </div>
                          </>
                        ) : service.id === "software-consulting" ? (
                          <>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-[#67c970]-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                1
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Current State Analysis
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Comprehensive review of your existing systems
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-[#67c970]-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                2
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Strategic Recommendations
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Tailored solutions for your specific needs
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-[#67c970]-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                3
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Implementation Planning
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Detailed roadmap for execution
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-[#67c970]-foreground rounded-full flex items-center justify-center text-sm font-medium">
                                4
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Ongoing Support
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Continuous guidance and optimization
                                </p>
                              </div>
                            </div>
                          </>
                        ) : (
                          // SEO Service
                          <>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-black rounded-full flex items-center justify-center text-sm font-medium">
                                1
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  SEO Audit & Analysis
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Comprehensive review of your current SEO
                                  performance
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-black rounded-full flex items-center justify-center text-sm font-medium">
                                2
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Keyword Research & Strategy
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Target the right keywords for your audience
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-black rounded-full flex items-center justify-center text-sm font-medium">
                                3
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Implementation & Optimization
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Execute improvements for better rankings
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-[#67c970] text-black rounded-full flex items-center justify-center text-sm font-medium">
                                4
                              </div>
                              <div>
                                <h4
                                  className={`font-medium ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  Monitoring & Reporting
                                </h4>
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  Track progress and continuous improvement
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section
        className={`py-20 bg-gray-900`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className={`text-3xl font-bold font-space tracking-tight text-white sm:text-4xl`}
            >
              Technologies We Master
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`mt-4 text-lg leading-8 text-gray-400`}
            >
              We work with modern, proven technologies to ensure your solutions
              are scalable, secure, and future-ready.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-none lg:grid-cols-6"
          >
            {[
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "Python",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Framer Motion",
              "Stripe",
              "Vercel",
              "AWS",
            ].map((tech) => (
              <motion.div
                key={tech}
                variants={fadeInUp}
                className="flex items-center justify-center"
              >
                <div
                  className={`rounded-lg px-4 py-3 shadow-sm border text-center min-w-full bg-gray-800 border-white/5 hover:border-[#67c970]/50 transition-colors`}
                >
                  <span
                    className={`text-sm font-medium text-gray-300`}
                  >
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 bg-[#67c970] text-black`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold font-space tracking-tight sm:text-4xl text-black">
              Ready to Get Started?
            </h2>
            <p className={`mt-6 text-lg leading-8 text-black/80`}>
              Let's discuss your project requirements and how we can help bring
              your vision to life with our expert services.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Button
                className="w-full sm:w-fit"
                size="lg"
                variant="secondary"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border border-black/20 text-black bg-black/5 hover:bg-black/10 px-4 py-2 rounded-md shadow-sm transition-transform duration-200 ease-out hover:scale-105"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
