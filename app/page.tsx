import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Blog Raza
          </h1>
          <p className="max-w-md text-lg leading-8">
            A blog by Ashfaq Raza
          </p>
        </div>
        <Image
          className="dark:invert my-4"
          src="/home.jpg"
          alt="Home Cover"
          width={1000}
          height={500}
          priority
        />
        <div className="blogs">
          <h2 className="mb-4">Latest Blogs</h2>
          <div className="blogItem mb-4">
            <h3>How to learn blogging in 2026</h3>
            <p>Learn how to start and grow your blog in the year 2026.</p>
          </div>
          <div className="blogItem mb-4">
            <h3>How to learn blogging in 2026</h3>
            <p>Learn how to start and grow your blog in the year 2026.</p>
          </div>
          <div className="blogItem mb-4">
            <h3>How to learn blogging in 2026</h3>
            <p>Learn how to start and grow your blog in the year 2026.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Know More
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </main>
    </div>
  );
}
