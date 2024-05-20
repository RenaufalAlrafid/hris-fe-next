"use server";
import axios from "axios";

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


export async function login(email: string, password: string){
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email,
      password,
    });

    const {access_token,  expires_in} = response.data;

    cookies().set("token", `${access_token as string}`, {
      maxAge: expires_in,
    });

    return response.data;
  } catch (error: any) {
    console.log(error?.response?.data.error);
    return error?.response?.data.error;
  }

}
