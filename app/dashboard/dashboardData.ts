import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export async function getUserBlogStats(email: string) {
  // Count blogs by user email (if you store author info)
  // This is a placeholder; adjust if you have author/user relation
  const totalBlogs = await prisma.blog.count();
  return { totalBlogs };
}
