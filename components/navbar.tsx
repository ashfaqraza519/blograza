"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="w-full border-b bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo / Brand */}
        <Link href="/" className="text-xl font-semibold">
          Blog Raza
        </Link>

        {/* Center: Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Right: Auth */}
        <div>
          {status === "loading" ? null : !session ? (
            <button
              onClick={() => signIn("google")}
              className="rounded-full bg-black text-white px-4 py-2 text-sm dark:bg-white dark:text-black"
            >
              Sign in
            </button>
          ) : (
            <div className="flex items-center gap-3">
              {/* Profile image */}
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name ?? "User"}
                  className="h-8 w-8 rounded-full"
                />
              )}

              {/* Display Name */}
              {session.user?.name && (
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {session.user.name}
                </span>
              )}

              {/* Logout */}
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-600 hover:text-black dark:text-gray-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
