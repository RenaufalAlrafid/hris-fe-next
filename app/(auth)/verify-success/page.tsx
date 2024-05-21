import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="mt-4 font-bold">
        <span>Verify Success</span>
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <span>Akun anda Berhasil teverikasi email</span>
        <span>
          Silahkan Login Menggunakan Akun HRD dengan mengeklik tombol
          &quot;Login as HRD&quot; pada halaman login dan verifikasi akun anda
          supaya aktif
        </span>
      </div>
    </div>
  );
}
