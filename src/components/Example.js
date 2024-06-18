"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Example = () => {
  return (
    <div className='flex justify-center items-center h-[500px] px-4 py-12'>
      <FlyoutLink href='#' FlyoutContent={PricingContent}>
        For Developers
      </FlyoutLink>
      <div className='mx-4'></div> {/* This adds horizontal space */}
      <FlyoutLink href='#' FlyoutContent={PricingContent}>
        For Companies
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative flex flex-col items-center'
    >
      <a href={href} className='relative text-black'>
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out'
        />
      </a>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className='absolute left-1/2 top-12 bg-white text-black px-4 py-2 rounded-lg shadow-xl'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div className='w-64 bg-gray-100 p-6 shadow-xl'>
      <div className='mb-6 space-y-3'>
        <h3 className='font-semibold text-black'>By Industries</h3>
        <div className='mb-3 space-y-3'>
          <a
            href='#'
            className='block text-sm hover:underline font-semibold text-black'
          >
            Healthcare
          </a>
          <a href='#' className='block text-sm hover:underline text-black'>
            Hire top healthcare developers
          </a>
        </div>
        <div className='mb-3 space-y-3'>
          <a
            href='#'
            className='block text-sm hover:underline font-semibold text-black'
          >
            Startups
          </a>
          <a href='#' className='block text-sm hover:underline text-black'>
            Build Your Engineering Team With Us
          </a>
        </div>
        <div className='mb-3 space-y-3'>
          <a
            href='#'
            className='block text-sm hover:underline font-semibold text-black'
          >
            Generative AI
          </a>
          <a href='#' className='block text-sm hover:underline text-black'>
            Hire Best Gen AI Engineers
          </a>
        </div>
        <div className='mb-3 space-y-3'>
          <a
            href='#'
            className='block text-sm hover:underline font-semibold text-black'
          >
            Bigger Software Companies
          </a>
          <a href='#' className='block text-sm hover:underline text-black'>
            Scale Your Tech Team With Us
          </a>
        </div>
        <div className='mb-3 space-y-3'>
          <a
            href='#'
            className='block text-sm hover:underline font-semibold text-black'
          >
            Fintech
          </a>
          <a href='#' className='block text-sm hover:underline text-black'>
            Build top-notch fintech products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Example;
