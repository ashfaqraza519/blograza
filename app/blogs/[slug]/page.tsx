import { prisma } from '@/lib/prisma';

export async function getServerSideProps({ params }: any) {
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  });

  if (!blog) return { notFound: true };

  return {
    props: {
      blog: {
        ...blog,
        createdAt: blog.createdAt.toISOString(),
      },
    },
  };
}

export default function BlogPage({ blog }: any) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
