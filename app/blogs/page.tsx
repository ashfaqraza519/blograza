import { prisma } from '@/lib/prisma';
import { BlogCard } from './BlogCard';
import type { Blog } from '@prisma/client';

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        Latest Blogs
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog: Blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
}
