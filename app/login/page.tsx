'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign in to BlogRaza
        </h1>

        <button
          onClick={() => signIn('google', { callbackUrl: '/admin' })}
          className="w-full flex items-center justify-center gap-3 border rounded-lg py-3 hover:bg-gray-50 transition"
        >
          <img src="/google.svg" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
