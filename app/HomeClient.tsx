"use client";

interface HomeClientProps {
  blogs: Blog[];
}

import Image from "next/image";
import ImageSlider from "../components/ImageSlider";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogCard } from './blogs/BlogCard';
import type { Blog } from '@prisma/client';


export function HomeClient({ blogs }: HomeClientProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="mx-auto max-w-8xl px-6 py-6">
        {/* Image Slider at the top */}
        <ImageSlider />
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
        
        {/* Blog Section */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-3xl font-bold text-zinc-900 dark:text-zinc-100"
          >
            Latest Blogs
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {blogs.length === 0 ? (
              <p className="text-zinc-600 dark:text-zinc-400">No blogs found.</p>
            ) : (
              blogs.map((blog: Blog, index: number) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-zinc-950 rounded-2xl my-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">Why Choose Blog Raza?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-zinc-50 dark:bg-zinc-900">
              <Image src="/globe.svg" alt="Global" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Web Insights</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Stay updated with the latest trends, frameworks, and best practices in web development.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-zinc-50 dark:bg-zinc-900">
              <Image src="/file.svg" alt="Tutorials" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">In-Depth Tutorials</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Step-by-step guides and code walkthroughs to help you learn and build real projects.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl shadow-md bg-zinc-50 dark:bg-zinc-900">
              <Image src="/window.svg" alt="Experience" width={48} height={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Experience</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Real-world stories, lessons learned, and productivity tips from a developer's journey.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black rounded-2xl my-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">What Readers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow text-center">
              <p className="text-lg italic mb-4">“Blog Raza helped me land my first dev job. The tutorials are clear and practical!”</p>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">— Sara K.</span>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow text-center">
              <p className="text-lg italic mb-4">“I love the real-world advice and productivity tips. Highly recommended!”</p>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">— Mike D.</span>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow text-center">
              <p className="text-lg italic mb-4">“A must-read for anyone learning web development.”</p>
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">— Priya S.</span>
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-20 bg-white dark:bg-zinc-950 rounded-2xl my-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Join the Newsletter</h2>
          <p className="mb-8 text-lg text-zinc-700 dark:text-zinc-300">Get the latest posts, tips, and resources delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input type="email" placeholder="Your email address" className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" required />
            <button type="submit" className="px-8 py-3 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200">Subscribe</button>
          </form>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black rounded-2xl my-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">About Ashfaq Raza</h2>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">I'm a passionate web developer and blogger, sharing my journey and knowledge to help others grow in tech. I love building modern, scalable apps and writing about the process.</p>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">Follow along for practical tips, deep dives, and inspiration for your own projects!</p>
            </div>
            <div className="flex justify-center">
              <Image src="/member.jpg" alt="Ashfaq Raza" width={320} height={320} className="rounded-2xl shadow-xl object-cover" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white dark:bg-zinc-950 rounded-2xl my-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">Get in Touch</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">Have a question, feedback, or want to collaborate? Reach out and I'll get back to you soon!</p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-white text-lg font-semibold shadow-lg hover:bg-zinc-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200">
            Contact Form
          </Link>
        </section>

      </main>
    </div>
  );
}