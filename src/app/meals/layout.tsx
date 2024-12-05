import React from "react";
import { SideBar } from "@components/sideBar";
export default function MealLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
        <SideBar />
      <h1>Meal</h1>
      {children}
    </main>
  );
}
