"use client";
import InputLogin from "@/components/InputLogin";
import React, { useState } from "react";
import { ButtonSubmit } from "./ButtonSubmit";
import SelectJabatan from "./SelectJabatan";
import { register } from "../register/action";

interface props {
  datas: any;
}

export default function FormRegister({ datas }: props) {
  const [error, setError] = useState({
    name: "",
    email: "",
    jabatan: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(formData: FormData) {
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password === confirmPassword) {
      const response = await register(formData);
      if (response) {
        setError({
          ...error,
          name: response.name,
          email: response.email,
          jabatan: response.jabatan_id,
          password: response.password,
        });
      }
    } else {
      setError({ ...error, confirmPassword: "Password not match" });
    }
  }
  return (
    <form action={handleSubmit} className="mt-5 flex flex-col gap-3">
      <InputLogin label="Username" name="name" type="text" />
      <span className="text-sm text-red-500">{error.name}</span>
      <InputLogin label="Email" name="email" type="email" />
      <span className="text-sm text-red-500">{error.email}</span>
      <SelectJabatan datas={datas} />
      <span className="text-sm text-red-500">{error.jabatan}</span>
      <InputLogin label="Password" name="password" type="password" />
      <span className="text-sm text-red-500">{error.password}</span>
      <InputLogin
        label="Confirm Password"
        name="confirmPassword"
        type="password"
      />
      <span className="text-sm text-red-500">{error.confirmPassword}</span>

      <ButtonSubmit />
    </form>
  );
}
