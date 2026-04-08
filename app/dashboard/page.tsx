import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { getUserBlogStats } from "./dashboardData";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-center mt-10 text-red-500">You are not logged in</p>;
  }

  // Blog stats (placeholder: total blogs)
  const stats = await getUserBlogStats(session.user?.email!);
  // Recent blogs (show 3 latest)
  const recentBlogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Image
          src={session.user?.image!}
          alt="Profile"
          width={64}
          height={64}
          className="rounded-full border"
        />
        <div>
          <h1 className="text-2xl font-bold">Welcome, {session.user?.name}</h1>
          <p className="text-gray-500">{session.user?.email}</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-2">Your Blog Stats</h2>
        <div className="flex gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-6 py-4 text-center">
            <div className="text-3xl font-bold">{stats.totalBlogs}</div>
            <div className="text-gray-600 dark:text-gray-300">Total Blogs</div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Blogs</h2>
        <ul className="space-y-4">
          {recentBlogs.length === 0 && (
            <li className="text-gray-500">No blogs found.</li>
          )}
          {recentBlogs.map((blog) => (
            <li key={blog.id} className="bg-white dark:bg-gray-900 rounded-lg shadow p-4">
              <Link href={`/blogs/${blog.slug}`}
                className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:underline">
                {blog.title}
              </Link>
              <div className="text-gray-500 text-sm mt-1">
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-2">{blog.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
