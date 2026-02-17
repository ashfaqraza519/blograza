import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="p-6">{children}</main>
    </div>
  );
}
