import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import React from "react";

export default function CommonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {" "}
      <div className=" sticky top-0 bg-background z-10">
        <Navbar />
      </div>
      <div className="min-h-screen">{children}</div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
