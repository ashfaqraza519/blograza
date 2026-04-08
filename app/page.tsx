

import { prisma } from '@/lib/prisma';
import type { Blog } from '@prisma/client';
import { HomeClient } from './HomeClient';

export default async function Home() {
  // Fetch 3 latest blogs
  const blogs: Blog[] = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 4,
  });
  return <HomeClient blogs={blogs} />;
}
