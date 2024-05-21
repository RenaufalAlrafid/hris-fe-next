import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-screen min-h-screen min-w-full items-center justify-center bg-[#94D9F8]">
      <div
        className="m-10 flex min-h-[90vh] w-full items-center justify-end rounded-xl bg-cover bg-center bg-no-repeat px-5 shadow-lg"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="min-w-96 max-w-screen-sm rounded-2xl bg-white p-10">
          <h1 className="text-center text-2xl font-bold">RAI - HRIS</h1>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
