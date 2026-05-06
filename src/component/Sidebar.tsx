import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoImg } from "../assets";

const navItems = [
  { label: "Model", href: "#" },
  { label: "Our Vision", href: "#" },
  { label: "Models", href: "#" },
  { label: "About Us", href: "#" },
];

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.08 + 0.15, duration: 0.35, ease: "easeOut" },
  }),
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="z-50 flex flex-col gap-1.5 p-2 rounded-lg bg-[#6B4226] shadow-lg"
        aria-label="Open menu"
      >
        <span className="block w-6 h-0.5 bg-[#F5E6D3]" />
        <span className="block w-6 h-0.5 bg-[#F5E6D3]" />
        <span className="block w-6 h-0.5 bg-[#F5E6D3]" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            />

            {/* Sidebar Panel */}
            <motion.aside
              key="sidebar"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-full w-72 flex flex-col"
              style={{
                background:
                  "linear-gradient(160deg, #5C3317 0%, #7A4828 40%, #6B4226 100%)",
                boxShadow: "4px 0 32px rgba(0,0,0,0.4)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-8 pb-6 border-b border-[#8B5E3C]/40">
                <img src={LogoImg} alt="LOGO" />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="text-[#D4A574] hover:text-[#F5E6D3] transition-colors duration-200 text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              {/* Nav Items */}
              <nav className="flex flex-col gap-1 px-4 pt-6 flex-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setIsOpen(false)}
                    className="group relative font-saonara flex items-center gap-4 px-4 py-4 rounded-xl text-[#E8C9A0] hover:text-[#F5E6D3] transition-colors duration-200 overflow-hidden"
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Hover Background */}
                    <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/[0.06] transition-colors duration-200" />

                    {/* Accent Bar */}
                    <span className="relative w-1 h-5 rounded-full bg-[#C8853A] opacity-60 group-hover:opacity-100 transition-opacity duration-200" />

                    <span className="relative text-base font-medium tracking-wide">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
