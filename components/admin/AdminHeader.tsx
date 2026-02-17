"use client";

import { signOut, useSession } from "next-auth/react";

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow">
      <h2 className="text-xl font-semibold">Blog Admin</h2>

      {session?.user && (
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">
            {session.user.name}
          </span>

          {session.user.image && (
            <img
              src={session.user.image}
              alt="User"
              className="h-8 w-8 rounded-full"
            />
          )}

          <button
            onClick={() => signOut()}
            className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
