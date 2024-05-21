import InputLogin from "@/components/InputLogin";
import { login } from "../login/action";
import { ButtonSubmit } from "./ButtonSubmit";

export default function FormLogin() {
  async function handleSubmit(formData: FormData) {
    "use server";
    const response = await login(formData);

    if (response?.error) {
      console.log(response.error);
    }
  }

  return (
    <form action={handleSubmit} className="mt-5 flex flex-col gap-3">
      <InputLogin name="email" label="Email" type="email" />
      <InputLogin name="password" label="Password" type="password" />

      <ButtonSubmit />
    </form>
  );
}
