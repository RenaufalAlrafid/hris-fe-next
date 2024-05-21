"use client";

import { useFormStatus } from "react-dom";

export function ButtonSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="rounded-lg bg-[#009EE3] p-2 font-bold text-white">
      {pending ? "Loading..." : "Submit"}
    </button>
  );
}
