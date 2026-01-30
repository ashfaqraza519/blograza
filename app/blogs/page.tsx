"use client";

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

export default function Blogs() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      {/* Blog Section */}
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
  );
}
