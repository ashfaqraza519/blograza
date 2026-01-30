"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* Blog type */
type Blog = {
  id: number;
  title: string;
  description: string;
  slug: string;
};

/* Blog data */
const blogs: Blog[] = [
  {
    id: 1,
    title: "How to learn blogging in 2026",
    description:
      "Learn how to start and grow your blog with modern tools and strategies.",
    slug: "how-to-learn-blogging-in-2026",
  },
  {
    id: 2,
    title: "Next.js for beginners",
    description:
      "A simple and practical guide to start building apps with Next.js.",
    slug: "nextjs-for-beginners",
  },
  {
    id: 3,
    title: "Tailwind CSS best practices",
    description:
      "Write clean, scalable, and maintainable UI using Tailwind CSS.",
    slug: "tailwind-css-best-practices",
  },
  {
    id: 4,
    title: "Freelancing tips for developers",
    description:
      "How to get clients, deliver quality work, and grow as a freelancer.",
    slug: "freelancing-tips-for-developers",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <main className="mx-auto max-w-5xl px-6 py-24">
        {/* Hero Section */}
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
            A personal blog by Ashfaq Raza sharing thoughts, tutorials, and
            experiences around web development and tech.
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {blogs.map((blog) => (
              <motion.article
                key={blog.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="mb-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                    {blog.title}
                  </h3>
                </Link>

                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  {blog.description}
                </p>

                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-sm font-medium text-black hover:underline dark:text-white"
                >
                  Read more →
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
