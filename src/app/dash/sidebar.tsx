"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils";

const managementProfiles = [
  { name: "Dr. Philip N.", slug: "philip-n" },
  { name: "Dr. James Erhurh", slug: "james-erhurh" },
  { name: "Bashir Gambo", slug: "bashir-gambo" },
  { name: "Ado Sule", slug: "ado-sule" },
  { name: "Nasfisa Muhd", slug: "nadi-muhd" },
];

const CustomSidebar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: {
      x: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const settingsVariants = {
    open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
    closed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        className="lg:hidden fixed top-4 right-4 z-20 p-2 rounded-md bg-gray-800 text-white"
        onClick={toggleSidebar}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Sidebar */}

      <motion.div
        className="fixed inset-y-0 left-0 z-10 w-64 bg-blue-main text-white overflow-hidden lg:relative"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="flex flex-col h-full">
          {/* Logo and App Name */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/">
              <Image src="/logo2.webp" alt="Logo" width={155} height={53} />
            </Link>
            {/* <span className="text-base font-medium text-white text-center">
              CSPPP
            </span> */}
          </motion.div>

          <nav className="flex-grow mt-8 gap-3">
            <NavItem href="/about" text="About" />
            <NavItem href="/management" text="Management" />
            <div className="px-4 py-2">
              <motion.button
                className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors duration-200"
                onClick={toggleSettings}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex">
                  <span className="group-hover:block w-[185px] text-end text-[24px]">
                    Adminstration
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: isSettingsOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {isSettingsOpen && (
                  <motion.div
                    className="ml-6 mt-2 space-y-2 overflow-hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={settingsVariants}
                  >
                    {managementProfiles.map((profile) => (
                      <NavItem
                        key={profile.slug}
                        href={`/administration/${profile.slug}`}
                        text={profile.name}
                        clasName="text-base"
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavItem href="/programs" text="Programs" />
            <NavItem href="/academics" text="Academics" />
            <NavItem href="/" text="Research" />
            <NavItem href="/journals" text="Journals" />
            <NavItem href="/activities" text="Activities" />
            <NavItem href="/gallery" text="Gallery" />
          </nav>

          {/* Footer */}

          <div className="mt-auto p-4 font-mono text-gray-400 text-lg">
            © {new Date().getFullYear()} CSPP
          </div>
        </div>
      </motion.div>
    </>
  );
};

const NavItem = ({
  href,
  icon,
  text,
  clasName,
}: {
  href: string;
  icon?: React.ReactNode;
  text: string;
  clasName?: string;
}) => (
  <motion.div whileHover={{ scale: 1.05, x: 5 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className="flex items-center px-4 py-3 text-[24px] h-[52px] text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 text-end w-full"
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span className={cn("group-hover:block w-[185px] text-end", clasName)}>
        {text}
      </span>
    </Link>
  </motion.div>
);

export default CustomSidebar;
