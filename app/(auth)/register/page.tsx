import React, { Suspense } from "react";
import FormRegister from "../components/FormRegister";
import { getJabatan } from "./action";
import Link from "next/link";

export default async function RegisterPage() {
  const datas = await getJabatan();
  return (
    <>
      <div className="mt-4 flex flex-col font-bold">
        <span>Register</span>
        <span>Sign Up</span>
      </div>
      <Suspense
        fallback={
          <div className="mt-5 text-center">
            <span>Loading...</span>
          </div>
        }
      >
        <FormRegister datas={datas} />
      </Suspense>

      <div className="mt-5 flex gap-2">
        <span>Already have an account? </span>
        <Link href={"/login"} className=" font-bold text-blue-500">
          Login
        </Link>
      </div>
    </>
  );
}
