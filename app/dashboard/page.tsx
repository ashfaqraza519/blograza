import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <p>You are not logged in</p>;
  }

  return (
    <div className="p-8">
      <Image
        src={session.user?.image!}
        alt="Profile"
        width={48}
        height={48}
        className="rounded-full"
      />
      <h1 className="text-xl font-semibold mt-4">
        Welcome, {session.user?.name}
      </h1>
    </div>
  );
}
