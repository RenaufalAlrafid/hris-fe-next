"use client";
import InputLogin from "@/components/InputLogin";
import React, { useState } from "react";
import { login } from "../action";
import { useRouter } from "next/navigation";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await login(email, password);

    if (response?.access_token) {
      router.push("/dashboard");
    } else {
      setError("email or password is incorrect");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="mt-5 flex flex-col gap-3"
    >
      <span className="text-red-500">{error}</span>
      <InputLogin
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />
      <InputLogin
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />

      <button
        type="submit"
        className="rounded-lg bg-[#009EE3] p-2 font-bold text-white"
      >
        Login
      </button>
    </form>
  );
}
