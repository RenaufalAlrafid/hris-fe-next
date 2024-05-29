import React from "react";
import { get_user } from "../action";

export default async function UserNavbar() {
  const user = await get_user();
  return (
    <>
      <span className="text-sm font-bold">{user.name}</span>
      <span className="text-sm font-bold">{user.email}</span>
    </>
  );
}
