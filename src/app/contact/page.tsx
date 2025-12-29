"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import apiClient from "@/lib/axios";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";
import { companyInfo, faq } from "@/data";

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

export default function ContactPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await apiClient.post("/api/contact", {
        ...formData,
        formType: "contact",
      });

      if (response.data.success) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(response.data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle Axios error response
      if (axios.isAxiosError(error)) {
        console.error("Response data:", error.response?.data);
        console.error("Response status:", error.response?.status);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

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
              Let's Build Together
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`mt-6 text-lg leading-8 text-gray-400`}
            >
              Ready to transform your digital presence? We'd love to hear about
              your project and discuss how we can help bring your vision to
              life.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section
        className={`py-20 bg-gray-950`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Card className={`bg-gray-900 border border-white/5`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-space text-white">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-white/55">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium mb-2 text-gray-200`}
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="bg-gray-800 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#67c970] transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className={`block text-sm font-medium mb-2 text-gray-300`}
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="bg-gray-800 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#67c970] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="company"
                          className={`block text-sm font-medium mb-2 text-gray-300`}
                        >
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="bg-gray-800 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#67c970] transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className={`block text-sm font-medium mb-2 text-gray-300`}
                        >
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Project Discussion"
                          className="bg-gray-800 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#67c970] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 text-gray-300`}
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, and how we can help..."
                        className="bg-gray-800 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#67c970] transition-colors"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-white text-black hover:bg-gray-100 hover:cursor-pointer"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center p-4 text-green-800 bg-green-100 rounded-md">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>
                          Message sent successfully! We'll be in touch soon.
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center p-4 text-red-800 bg-red-100 rounded-md">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        <span>
                          Something went wrong. Please try again or email us
                          directly.
                        </span>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Card className={`bg-gray-900 border border-white/5`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <Mail className="h-6 w-6 text-white" />
                      <span>Email Us</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`mb-4 text-gray-300`}
                    >
                      For project inquiries, partnerships, or general questions.
                    </p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-white hover:text-white/80 font-medium text-lg"
                    >
                      {companyInfo.email}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className={`bg-gray-900 border border-white/5`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <MapPin className="h-6 w-6 text-white" />
                      <span>Our Location</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`mb-4 text-gray-300`}
                    >
                      Based in Ghana, serving clients across Africa and
                      globally.
                    </p>
                    <p
                      className={`text-lg font-medium text-white`}
                    >
                      {companyInfo.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className={`bg-gray-900 border border-white/5`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3 text-white">
                      <Clock className="h-6 w-6 text-white" />
                      <span>Response Time</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`text-gray-300`}
                    >
                      We typically respond to all inquiries within 24 hours
                      during business days. For urgent matters, please mention
                      it in your message.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Newsletter Signup */}
              <motion.div variants={fadeInUp}>
                <Card className={`bg-gray-900 border border-white/5`}>
                  <CardHeader>
                    <CardTitle className="text-white">Stay Updated</CardTitle>
                    <CardDescription>
                      Subscribe to our newsletter for the latest updates on our
                      projects and insights into African tech innovation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-gray-800 border border-white/10 text-white placeholder:text-gray-500 focus:border-[#67c970] transition-colors"
                      />
                      <Button className="hover:cursor-pointer">
                        Subscribe
                      </Button>
                    </div>
                    <p
                      className={`text-xs mt-2 text-gray-400`}
                    >
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className={`mt-4 text-lg leading-8 text-gray-400`}
            >
              Quick answers to common questions about our services and process
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mx-auto mt-16 max-w-3xl space-y-8"
          >
            {faq.map((item) => (
              <motion.div key={item.id} variants={fadeInUp}>
                <Card className={`bg-gray-800 border border-white/5`}>
                  <CardContent className="p-6">
                    <h3
                      className={`text-lg font-semibold font-space mb-3 text-white`}
                    >
                      {item.question}
                    </h3>
                    <p
                      className={`leading-7 text-gray-300`}
                    >
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
