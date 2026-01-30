import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"

export default async function BlogPage({
  params,
}: {
  params: { slug: string }
}) {
  // Fetch one blog by slug
  const blog = await prisma.blog.findUnique({
    where: { slug: params.slug },
  })

  if (!blog) return notFound()

  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-100">
        {blog.title}
      </h1>

      <div className="mt-6 text-zinc-600 dark:text-zinc-400">
        <p>{blog.content}</p>
      </div>
    </section>
  )
}
