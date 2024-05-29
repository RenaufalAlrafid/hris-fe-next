import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { get_user } from "./action";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen w-full bg-[#f9f9f9] md:ml-[90px]">
        <Navbar  />

        <main>{children}</main>
      </div>
    </div>
  );
}
