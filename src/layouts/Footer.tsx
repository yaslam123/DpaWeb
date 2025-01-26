"use client";

import * as React from "react";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  CenterUnderline,
  ComesInGoesOutUnderline,
} from "../components/ui/underline-animation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { Send } from "lucide-react";

import { TbBrandX } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

function Footer() {
  return (
    <footer className="relative border-t border-gray-300 bg-white text-zinc-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-5">
          <div className="relative">
            <div className="flex flex-col">
              <img
                src="/images/Logo/DPA - LOGO-02.png"
                alt="Footer Logo"
                className="max-w-[210px] sm:max-w-[150px] xs:max-w-[150px] transition-all"
              />
            </div>
            <div className="mb-6 mt-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.facebook.com/dpasomalia?mibextid=LQQJ4d">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <FiFacebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://x.com/dpasomalia?s=21">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <TbBrandX className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.instagram.com/dpa.somalia?igsh=MXJ0b3B1ZzdxdGJqZg==">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <FaInstagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.facebook.com/dpasomalia?mibextid=LQQJ4d">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <LuLinkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-zinc-900 text-zinc-50 transition-transform hover:scale-105 hover:bg-[#47BDFF] dark:bg-zinc-50 dark:text-zinc-900"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-zinc-900/10 blur-2xl dark:bg-zinc-50/10" />
          </div>
          <div className="relative">
            {/* <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-zinc-900 text-zinc-50 transition-transform hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form> */}
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block">
                <CenterUnderline label="Home" />
              </a>
              <a href="/about" className="block">
                <CenterUnderline label="About Us" />
              </a>
              <a href="/news" className="block">
                <CenterUnderline label="News & Media" />
              </a>
              <a href="/" className="block">
                <CenterUnderline label="Services" />
              </a>
              <a href="/contact" className="block">
                <CenterUnderline label="Contact Us" />
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <nav className="space-y-2 text-sm">
              <a href="/docs" className="block">
                <CenterUnderline label="Regulations" />
              </a>
              <a href="/ftp" className="block">
                <CenterUnderline label="For The Public" />
              </a>
              <a href="/fto" className="block">
                <CenterUnderline label="For Organizations" />
              </a>
              <a href="/contact" className="block">
                <CenterUnderline label="FAQs" />
              </a>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Mogadishu, Somalia</p>
              <p>Aden Adde Airport, Road</p>
              <p>Email: Info@dpa.gov.so</p>
              <p>Phone: 452</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-300 pt-8 text-center md:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2025 Somali Data Protection Authority. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#">
              <ComesInGoesOutUnderline label="Privacy Policy" />
            </a>
            <a href="#">
              <ComesInGoesOutUnderline label="Terms of Service" />
            </a>
            <a href="#">
              <ComesInGoesOutUnderline label="Cookie Settings" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
