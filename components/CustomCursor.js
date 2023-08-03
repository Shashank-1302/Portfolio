// components/CustomCursor.js
'use client'
import { useEffect } from "react";
import Head from "next/head";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    let rafId;

    const moveCursor = (e) => {
      // Throttle updates using requestAnimationFrame
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        transition: "transform 0.10s ease-out", // Add the transition property here
      }}
    />
  );
};
