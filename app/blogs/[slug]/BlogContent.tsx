'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogContentProps {
  slug: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogContent({ title, content, createdAt }: BlogContentProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString('en-GB');

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Link
        href="/blogs"
        className="text-blue-500 hover:text-blue-700 hover:underline mb-6 inline-block font-medium"
      >
        ← Back to Blogs
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm text-gray-400 dark:text-gray-400 mb-8"
      >
        Published on {formattedDate}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300"
      >
        {content.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </motion.div>
    </motion.div>
  );
}
