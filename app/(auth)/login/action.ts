"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



export async function login(formData: FormData){

  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    });

    const {access_token, expires_in} = response.data;

    cookies().set("token", access_token, {
      maxAge: expires_in,
    });

  } catch (error: any) {
    return error?.response?.data.error;
  }

  revalidatePath("/login");
  redirect("/dashboard");

}
