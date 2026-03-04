'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink =
    "https://wa.me/919315941574?text=Hi%20Mohit,%20I%20saw%20your%20portfolio%20website%20and%20would%20like%20to%20discuss%20a%20project.";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F8F8]/80 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className={`text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-[#222222]" : "text-white"
          }`}
        >
          Mohit.Dev
        </Link>

        {/* Nav Links */}
        <div
          className={`hidden md:flex items-center gap-8 text-[14px] font-medium transition-colors ${
            scrolled ? "text-[#7B7B7B]" : "text-white/70"
          }`}
        >
          <Link href="#projects" className="hover:text-[#222222]">
            Projects
          </Link>

          <Link href="#services" className="hover:text-[#222222]">
            Services
          </Link>

          <Link href="#about" className="hover:text-[#222222]">
            About
          </Link>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-[14px] font-medium transition-all ${
            scrolled
              ? "bg-white border border-black/10 text-[#222222] hover:bg-[#222222] hover:text-white shadow-[0px_4px_12px_rgba(0,0,0,0.05)]"
              : "border border-white/20 text-white hover:bg-white hover:text-black"
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          Book A Call
        </a>

      </div>
    </nav>
  );
}