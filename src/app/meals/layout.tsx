import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar";
import React from "react";

export default function MealLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex">
        <SideBar />
        {children}
      </main>
    </>
  );
}
