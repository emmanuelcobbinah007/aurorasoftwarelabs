"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
              <span className="text-2xl font-bold font-space tracking-tight">
                Aurora<span className="text-[#67c970]">.</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Crafting innovative, reliable, and scalable digital solutions that
              empower businesses and communities across Africa.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-sm font-medium text-[#67c970] uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {["About", "Services", "Portfolio", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    {item}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-medium text-[#67c970] uppercase tracking-wider mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@aurorasoftwarelabs.io"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-3"
                >
                  <Mail className="h-4 w-4" />
                  hello@aurorasoftwarelabs.io
                </a>
              </li>
              <li>
                <span className="text-gray-300 flex items-center gap-3">
                  <MapPin className="h-4 w-4" />
                  Ghana
                </span>
              </li>
              <li>
                <span className="text-gray-300 flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  +233 50 048 6113
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Aurora Software Labs. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        
        {/* Big Text */}
        <div className="mt-20 border-t border-white/5 pt-10">
             <h1 className="text-[12vw] leading-none font-bold font-space text-white/5 text-center select-none pointer-events-none">
                AURORA
             </h1>
        </div>
      </div>
    </footer>
  );
}
