"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setCursorVisible(true);
    const mouseLeave = () => setCursorVisible(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseenter", mouseEnter);
    window.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {cursorVisible && (
        <motion.div
          className="fixed pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            scale: 1,
            opacity: 1,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.5,
          }}
        >
          <div className="relative">
            <div className="absolute h-8 w-8 bg-white/30 dark:bg-white/20 rounded-full blur-xl" />
            <div className="h-8 w-8 bg-white rounded-full blur-sm opacity-50 dark:opacity-30" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function NoiseDemo() {
  return (
    <SplashCursor />
  );
}