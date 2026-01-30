import { prisma } from '@/lib/prisma';
import BlogContent from './BlogContent';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  if (!slug) return <p className="text-center mt-10 text-red-500">Invalid blog slug.</p>;

  const blog = await prisma.blog.findUnique({ where: { slug } });

  if (!blog) return <p className="text-center mt-10 text-red-500">Blog not found.</p>;

  return (
    <BlogContent
      slug={blog.slug}
      title={blog.title}
      content={blog.content}
      createdAt={blog.createdAt.toISOString()}
    />
  );
}

export async function generateStaticParams() {
  const blogs = await prisma.blog.findMany();
  return blogs.map((blog) => ({ slug: blog.slug }));
}
