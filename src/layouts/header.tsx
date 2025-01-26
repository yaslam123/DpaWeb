"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import Language from "@/components/Language";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ArrowRight,
  Menu,
  Landmark,
  Mail,
  FileStack,
  Users,
  Building,
  UserPenIcon,
  FileText,
  MessageCircleWarning,
  DatabaseZap,
  FolderSearch,
} from "lucide-react";

function Header() {
  const subMenuItemsOne = [
    {
      title: "About Us",
      description: "Learn more about our history, mission, and values.",
      icon: <Landmark className="size-5 shrink-0" />,
      href: "/about",
    },
    {
      title: "News & Media",
      description: "Stay updated with our latest news and media coverage.",
      icon: <Mail className="size-5 shrink-0" />,
      href: "/news",
    },
    {
      title: "Documentations",
      description: "Access our comprehensive documentation and resources.",
      icon: <FileStack className="size-5 shrink-0" />,
      href: "/docs",
    },
    {
      title: "For The Public",
      description: "Find information and resources available to the public.",
      icon: <Users className="size-5 shrink-0" />,
      href: "/ftp",
    },
    {
      title: "For Organizations",
      description: "Explore our services and support for organizations.",
      icon: <Building className="size-5 shrink-0" />,
      href: "/fto",
    },
  ];

  const subMenuItemsTwo = [
    {
      title: "Registration For Data Controllers & Processors",
      description: "Register as a data controller or processor with us.",
      icon: <FileText className="size-5 shrink-0" />,
      href: "/",
    },
    {
      title: "Registration For DPOs",
      description: "Register as a Data Protection Officer (DPO).",
      icon: <UserPenIcon className="size-5 shrink-0" />,
      href: "/",
    },
    {
      title: "Complaint Handling",
      description: "Submit and track complaints regarding data protection.",
      icon: <MessageCircleWarning className="size-5 shrink-0" />,
      href: "/",
    },
    {
      title: "Report Data Breach",
      description: "Report any data breaches promptly and securely.",
      icon: <DatabaseZap className="size-5 shrink-0" />,
      href: "/",
    },
    {
      title: "Audit Filing",
      description: "Submit audit reports and related documentation.",
      icon: <FolderSearch className="size-5 shrink-0" />,
      href: "/",
    },
  ];

  const subMenuItemsThree = [
    {
      title: "Registered Data Controllers & Processors",
      description:
        "View the list of registered data controllers and processors.",
      icon: <FileText className="size-5 shrink-0" />,
      href: "/",
    },
    {
      title: "Registered DPOs",
      description:
        "Access the directory of registered Data Protection Officers.",
      icon: <UserPenIcon className="size-5 shrink-0" />,
      href: "/",
    },
    {
      title: "Audited Firms",
      description: "Check the status and results of firm audits.",
      icon: <FolderSearch className="size-5 shrink-0" />,
      href: "/",
    },
  ];

  // Render Institution NavigationMenuContent
  const renderInstitutionContent = () => (
    <NavigationMenuContent className="!w-[450px] p-4">
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 ">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="flex flex-col">
            <img src="/images/Logo/DPA - LOGO-02.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col text-sm h-full justify-end">
          {[
            { title: "About us", href: "/about" },
            { title: "News & Media", href: "/news" },
            { title: "Documentations", href: "/docs" },
            { title: "For The Public", href: "/ftp" },
            { title: "For The Organizations", href: "/fto" },
          ].map((subItem) => (
            <NavigationMenuLink
              href={subItem.href}
              key={subItem.title}
              className="flex flex-row justify-between items-center hover:bg-black/10 group py-2 px-4 rounded"
            >
              <span>{subItem.title}</span>
              <ArrowRight
                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    </NavigationMenuContent>
  );
  // Render Services NavigationMenuContent
  const renderServicesContent = () => (
    <NavigationMenuContent className="!w-[450px] p-4">
      <div className="flex flex-col lg:grid grid-cols-2 gap-4 ">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col">
            <p className="text-base">Services</p>
            <p className="text-gray-600 text-justify text-sm">
              The Data Protection Authority of Somalia is dedicated to ensuring
              the privacy and security of personal data for all citizens and
              organizations.
            </p>
            <Button size="sm" className="mt-[50px]">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="flex flex-col text-sm h-full justify-start">
          {[
            {
              title: "Registartion For Data Controllers & Processors",
              href: "/about",
            },
            { title: "Registration For DPOs", href: "/statistics" },
            { title: "Complain Handling", href: "/dashboards" },
            { title: "Report Data Breach ", href: "/recordings" },
            { title: "Audit Filling", href: "/recordings" },
          ].map((subItem) => (
            <NavigationMenuLink
              href={subItem.href}
              key={subItem.title}
              className="flex flex-row justify-between items-center hover:bg-black/10 group py-2 px-4 rounded"
            >
              <span>{subItem.title}</span>
              <ArrowRight
                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    </NavigationMenuContent>
  );
  // Render Resources NavigationMenuContent
  const renderResourcesContent = () => (
    <NavigationMenuContent className="!w-[450px] p-4">
      <div className=" ">
        <div className="flex flex-col text-sm h-full justify-end">
          {[
            { title: "Contact Us", href: "/contact" },
            { title: "Audited Firms", href: "/recordings" },
            { title: "Registered DPOs", href: "/About" },
            {
              title: "Registered Data Controller \n& Processors",
              href: "/statistics",
            },
          ].map((subItem) => (
            <NavigationMenuLink
              href={subItem.href}
              key={subItem.title}
              className="flex flex-row justify-between items-center hover:bg-black/10 group py-2 px-4 rounded"
            >
              <span>{subItem.title}</span>
              <ArrowRight
                className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    </NavigationMenuContent>
  );

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-white">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-6 md:px-0">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {/* Home Menu */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className="inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f2f2f2] hover:text-accent-foreground focus:bg-[#f2f2f2] focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Institution Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-sm">
                  Institution
                </NavigationMenuTrigger>
                {renderInstitutionContent()}
              </NavigationMenuItem>

              {/* Services Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-sm">
                  Services
                </NavigationMenuTrigger>
                {renderServicesContent()}
              </NavigationMenuItem>

              {/* Resources Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium text-sm">
                  Resources
                </NavigationMenuTrigger>
                {renderResourcesContent()}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex lg:justify-center transition-all">
          {/* Default Logo (for sm, md, and xl screens) */}
          <img
            src="/images/Logo/DPA - LOGO.png"
            alt="Logo"
            className="max-w-[210px] transition-all lg:max-w-[210px] xl:block lg:hidden"
          />
          {/* Alternate Logo (for lg screens only) */}
          <img
            src="/images/Logo/DPA - LOGO-lock.png"
            alt="Logo"
            className="hidden lg:block xl:hidden lg:max-w-[60px] transition-all"
          />
        </div>

        <div className="flex justify-end w-full gap-4">
          <div className="border-r border-gray-300 hidden lg:inline"></div>
          <div className="hidden sm:flex gap-4 transition-all">
            {/* Report Button */}
            <Button
              size="lg"
              className="group gap-4  hidden lg:inline"
              variant="outline"
            >
              <span className="font-medium hidden lg:inline">
                Report A Breach
              </span>
            </Button>

            {/* Register Button */}
            <Button
              size="lg"
              className="group bg-[#061829] hover:bg-[#061829] gap-4 hidden lg:inline"
            >
              <span className="hidden lg:inline">Register Now</span>
            </Button>
          </div>
          <div>
            <Language />
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white">
                <SheetHeader className="border-b border-gray-200/60 pb-4">
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/Logo/DPA - LOGO-03.png"
                        className="w-auto"
                        alt="logo"
                      />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-6 mt-6 flex flex-col gap-4">
                  <a href="/" className="font-medium">
                    Home
                  </a>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="Institution" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 text-md font-medium">
                        Institution
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              "flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                            href={item.href}
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm">{item.title}</div>
                              <p className="text-sm leading-snug text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Services" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 text-md font-medium">
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                            href={item.href}
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm">{item.title}</div>
                              <p className="text-sm leading-snug text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="Resources" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 text-md font-medium">
                        Resources
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsThree.map((item, idx) => (
                          <a
                            key={idx}
                            className={cn(
                              "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                            href={item.href}
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm">{item.title}</div>
                              <p className="text-sm leading-snug text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="border-t border-gray-300 py-4">
                  <div className="flex flex-col gap-3">
                    <a href="/contact">
                      <Button variant="outline" className="w-full ">
                        Get In Touch
                      </Button>
                    </a>
                    <Button variant="outline">Report A Breach</Button>
                    <Button variant="outline">Register Now</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
