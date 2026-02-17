import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AdminBlogsPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Manage Blogs
        </h1>

        <Link
          href="/admin/blogs/new"
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          + New Blog
        </Link>
      </div>

      {/* Blogs Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow">
        <table className="w-full">
          <thead className="bg-gray-50 text-left text-sm text-gray-600">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Slug</th>
              <th className="px-6 py-3">Created</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">
                  {blog.title}
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  /blogs/{blog.slug}
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {blog.createdAt.toISOString().split("T")[0]}
                </td>

                <td className="px-6 py-4 text-right space-x-3">
                  <Link
                    href={`/admin/blogs/${blog.id}/edit`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>

                  <Link
                    href={`/admin/blogs/${blog.id}/delete`}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}

            {blogs.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-sm text-gray-500"
                >
                  No blogs yet. Create your first one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
