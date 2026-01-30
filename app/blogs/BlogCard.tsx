'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Blog } from '@prisma/client';

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export function BlogCard({ blog, index }: BlogCardProps) {
  const formattedDate = new Date(blog.createdAt).toLocaleDateString('en-GB');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <Link
        href={`/blogs/${blog.slug}`}
        className="block p-6 space-y-4 group"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
          {blog.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{blog.content}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-400 dark:text-gray-400">{formattedDate}</p>
          <span className="text-blue-500 font-semibold group-hover:translate-x-1 transition-transform">
            Read more →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
