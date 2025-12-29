"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Heart,
  Zap,
  Shield,
  Handshake,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { companyInfo, whyChooseUs } from "@/data";

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

const valueIcons = {
  Innovation: Zap,
  Reliability: Shield,
  Collaboration: Handshake,
  Integrity: Heart,
  Impact: TrendingUp,
};

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold font-space tracking-tight text-white sm:text-6xl"
            >
              <span className="text-white">About Aurora</span>
              <span className="text-[#67c970]">.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg leading-8 text-gray-300"
            >
              We are the northern lights for Africa's tech frontier—guiding,
              inspiring, and illuminating the path to digital innovation across
              the continent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-3"
          >
            <motion.div variants={fadeInUp}>
              <Card className={`h-full bg-gray-800 border border-white/10`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#67c970]/10">
                      <Target className="h-6 w-6 text-[#67c970]" />
                    </div>
                    <CardTitle className="text-2xl font-space text-white">
                      Our Mission
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7 text-white/55">
                    {companyInfo.mission}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className={`h-full bg-gray-800 border border-white/10`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#67c970]/10">
                      <Eye className="h-6 w-6 text-[#67c970]" />
                    </div>
                    <CardTitle className="text-2xl font-space text-white">
                      Our Vision
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7 text-white/55">
                    {companyInfo.vision}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className={`h-full bg-gray-800 border border-white/10`}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#67c970]/10">
                      <Users className="h-6 w-6 text-[#67c970]" />
                    </div>
                    <CardTitle className="text-2xl font-space text-white">
                      Our Values
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {companyInfo.values.map((value) => {
                      const IconComponent =
                        valueIcons[value as keyof typeof valueIcons];
                      return (
                        <div
                          key={value}
                          className="flex items-center space-x-3"
                        >
                          <IconComponent className="h-5 w-5 text-[#67c970]" />
                          <span className="font-medium text-white/55">
                            {value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl font-bold font-space tracking-tight text-white sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Building digital excellence from the heart of Ghana
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 prose prose-lg mx-auto"
            >
              <p className="text-white leading-8">
                Aurora Software Labs was founded with a simple yet ambitious
                vision: to become Africa's leading hub of software excellence.
                Based in Ghana, we recognized the immense potential of
                technology to transform businesses and communities across the
                continent.
              </p>
              <p className="text-white leading-8">
                Our journey began with a passion for creating digital solutions
                that not only meet international standards but also understand
                and address the unique challenges faced by African businesses.
                From e-commerce platforms that connect local artisans to global
                markets, to political campaign websites that strengthen
                democratic processes, our work spans diverse sectors and
                impacts.
              </p>
              <p className="text-white leading-8">
                Today, we continue to grow, learn, and innovate, always keeping
                our core values at the center of everything we do. Every project
                we undertake is an opportunity to make a meaningful impact and
                contribute to Africa's digital transformation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-950">
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
              className="text-3xl font-bold font-space tracking-tight text-white sm:text-4xl"
            >
              Why Choose Aurora?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg leading-8 text-gray-300"
            >
              What sets us apart in the competitive world of software
              development
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div key={reason.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow border bg-gray-900 border-white/5 hover:border-[#67c970]/30 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-white font-space font-bold">{reason.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-white/55">
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats/Achievements */}
      <section className="py-20 bg-gray-900 text-white">
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
              className="text-3xl font-bold font-space tracking-tight sm:text-4xl"
            >
              Our Impact
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg leading-8 text-gray-300"
            >
              Measurable results that speak to our commitment
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 lg:max-w-none"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-5xl font-bold font-space text-[#67c970]">3+</div>
              <div className="mt-2 text-lg">Projects Completed</div>
              <div className="mt-1 text-sm text-gray-300">
                Successfully delivered and deployed
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-5xl font-bold font-space text-[#67c970]">100%</div>
              <div className="mt-2 text-lg">Client Satisfaction</div>
              <div className="mt-1 text-sm text-gray-300">
                Every client has been delighted
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
              <div className="text-5xl font-bold font-space text-[#67c970]">24/7</div>
              <div className="mt-2 text-lg">Support Available</div>
              <div className="mt-1 text-sm text-gray-300">
                Always here when you need us
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
