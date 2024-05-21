"use server"
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getJabatan() {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/jabatan");
    return response.data.data;
  } catch (error: any) {
    return error?.response?.data.error;
  }
}

export async function register(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const jabatan_id = formData.get("jabatan");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  try {
    const response = await axios.post("http://127.0.0.1:8000/api/register", {
      name,
      email,
      jabatan_id,
      password,
      confirmPassword,
    });
  }
  catch (error: any) {
    console.log(error.response.data.errors);
    return error.response.data.errors;
  }
  revalidatePath("/register");
  redirect("/login?register=true");

}
