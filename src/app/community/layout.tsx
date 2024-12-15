import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar";
import React from "react";

type Children = {
  children: React.ReactNode;
};

export default function CommunityLayout({ children }: Readonly<Children>) {
  return (
    <>
      {children}
    </>
  );
}
