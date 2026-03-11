import Link from "next/link";
import React from "react";

export default function PracticeLayout({
  children,
  marketingSlot,
  salesSlot,
}: Readonly<{
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="py-8">
        <nav className="max-w-7xl mx-auto flex items-center justify-center gap-8 bg-white shadow-md rounded-xl px-8 py-4 ">
          <Link
            className="text-gray-700 font-medium hover:text-blue-600 hover:underline transition duration-200"
            href="/development"
          >
            Development
          </Link>

          <Link
            className="text-gray-700 font-medium hover:text-blue-600 hover:underline transition duration-200"
            href="/testing"
          >
            Testing
          </Link>

          <Link
            className="text-gray-700 font-medium hover:text-blue-600 hover:underline transition duration-200"
            href="/marketing"
          >
            Marketing
          </Link>

          <Link
            className="text-gray-700 font-medium hover:text-blue-600 hover:underline transition duration-200"
            href="/marketing/settings"
          >
            Settings
          </Link>

          <Link
            className="text-gray-700 font-medium hover:text-blue-600 hover:underline transition duration-200"
            href="/sales"
          >
            Sales
          </Link>
        </nav>
      </div>

      {/* Page Content */}
      <main className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-2 gap-8 w-full mb-10">
          {marketingSlot}
          {salesSlot}
        </div>
        {children}
      </main>
    </div>
  );
}
