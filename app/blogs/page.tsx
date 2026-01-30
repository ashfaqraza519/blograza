import { prisma } from '@/lib/prisma';
import type { Blog } from '@prisma/client';

export default async function BlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map((blog: Blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
