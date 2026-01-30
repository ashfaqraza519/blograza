"use client";

import { useParams } from "next/navigation";
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

export default function SingleBlog() {
  const params = useParams();
  const { slug } = params;

  // Find the blog with matching slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          Blog not found
        </h2>
        <Link
          href="/blogs"
          className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
        >
          Back to Blogs
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-4xl font-bold text-zinc-900 dark:text-zinc-100"
      >
        {blog.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 text-zinc-700 dark:text-zinc-300"
      >
        {blog.description}
      </motion.p>

      <Link
        href="/blogs"
        className="text-sm font-medium text-black hover:underline dark:text-white"
      >
        ← Back to Blogs
      </Link>
    </section>
  );
}
