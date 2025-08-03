// app/admin/layout.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userEmail, setUserEmail] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    setUserEmail(email || "Admin");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    // Tambahkan penundaan kecil agar layout tidak crash
    setTimeout(() => {
      router.push("/login");
    }, 100);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky">
        <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">👤 {userEmail}</span>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-600 hover:text-red-800"
            title="Logout"
          >
            <LogOut className="w-5 h-5 mr-1" />
            Logout
          </button>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </>
  );
}
