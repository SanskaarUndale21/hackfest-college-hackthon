"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const pageVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    filter: "blur(8px)",
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.97,
    filter: "blur(6px)",
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {/* Page wipe overlay on enter */}
      <motion.div
        key={`wipe-${pathname}`}
        className="fixed inset-0 z-[9999] bg-gradient-to-b from-amber-900/80 to-black pointer-events-none"
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />

      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={isHome ? "" : "pt-28 md:pt-36"}
      >
        {children}
      </motion.div>
    </>
  );
}
