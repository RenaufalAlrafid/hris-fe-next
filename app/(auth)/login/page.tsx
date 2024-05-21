import Link from "next/link";
import EmployeeButton from "../components/Employee-button";
import FormLogin from "../components/FormLogin";
import HrdButton from "../components/Hrd-button";

export default function LoginPage({
  searchParams,
}: {
  searchParams: {
    register: string;
  };
}) {
  return (
    <>
      {searchParams.register === "true" && (
        <div className="mt-5 flex flex-col gap-2 rounded-xl bg-blue-300 px-3 py-2">
          <span className="text-lg font-semibold">Register Success</span>
          <span>Silahkan Cek Email Anda Untuk Konfirmasi Email</span>
          <span>Lalu Login Sebagai HRD untuk verifikasi akun anda </span>
        </div>
      )}
      <div className="mt-5 flex flex-col font-bold">
        <span>Welcome Back.</span>
        <span>Sign In</span>
      </div>
      <FormLogin />
      <div className="mt-4 flex gap-2">
        <HrdButton />
        <EmployeeButton />
      </div>
      <div className="mt-5 flex gap-2">
        <span>Or try to register? </span>
        <Link href={"/register"} className=" font-bold text-blue-500">
          Register
        </Link>
      </div>
    </>
  );
}
