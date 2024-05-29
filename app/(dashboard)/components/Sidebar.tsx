"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { width: 250 },
    closed: { width: 90 },
  };

  const variants_button = {
    open: { x: 160 },
    closed: { x: 0 },
  };

  const variants_link = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      initial={false}
      transition={{ duration: 0.3 }}
      className="left-0 top-0 z-20 hidden max-h-screen min-h-screen bg-white pt-40 shadow-lg md:fixed md:block"
    >
      <motion.button
        animate={isOpen ? "open" : "closed"}
        variants={variants_button}
        initial={false}
        transition={{ duration: 0.3 }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute left-0 top-0 ml-[69px] mt-[88px] rounded-md bg-white p-2 shadow-lg "
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17.59 18L19 16.59L14.42 12L19 7.41L17.59 6l-6 6z"
            ></path>
            <path
              fill="currentColor"
              d="m11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.575 12L5 7.4L6.4 6l6 6l-6 6L5 16.6zm6.6 0L11.6 7.4L13 6l6 6l-6 6l-1.4-1.4z"
            ></path>
          </svg>
        )}
      </motion.button>

      <div className=" flex w-full flex-col ">
        <motion.h1
          animate={isOpen ? "open" : "closed"}
          variants={variants_link}
          initial={false}
          transition={{ duration: 0.3 }}
          className="w-full px-8 text-lg font-bold text-gray-400"
        >
          HRIS
        </motion.h1>
        <Link href={"/"} className="flex w-72 items-center gap-3 px-8 py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"
            ></path>
          </svg>

          <motion.span
            animate={isOpen ? "open" : "closed"}
            variants={variants_link}
            initial={false}
            transition={{ duration: 0.3 }}
            className="font-semibold"
          >
            User Management
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}
