
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



import { BlogCard } from './blogs/BlogCard';


export default function Home() {


  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="mx-auto max-w-5xl px-6 py-24">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center sm:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Blog Raza
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            A personal blog by Ashfaq Raza sharing thoughts, tutorials, and experiences around web development and tech.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/blogs"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black"
            >
              Explore Blogs
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100"
            >
              Contact Me
            </Link>
          </div>
        </motion.section>
        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 overflow-hidden rounded-2xl"
        >
          <Image
            src="/home.jpg"
            alt="Home Cover"
            width={1200}
            height={600}
            className="w-full object-cover"
            priority
          />
        </motion.div>
      </main>
    </div>
  );
}
