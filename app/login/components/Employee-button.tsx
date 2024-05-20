import React from "react";

export default function EmployeeButton() {
  return (
    <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-solid border-white bg-blue-500 p-4 text-white hover:bg-blue-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 14 14"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M3.5 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2.045 6v-.03c0-.99.547-1.852 1.355-2.302A3.5 3.5 0 0 0 0 8.5v1a.5.5 0 0 0 .5.5h1l.445 3.562a.5.5 0 0 0 .496.438H4.56a.5.5 0 0 0 .496-.438L5.5 10zm4.382-2.313a.25.25 0 0 0-.25.25v.651h1.413v-.65a.25.25 0 0 0-.25-.25zm-1.75.25v.651c-.763 0-1.382.62-1.382 1.383v2.647c0 .763.619 1.382 1.382 1.382h4.412c.763 0 1.382-.619 1.382-1.382V9.97c0-.763-.618-1.382-1.381-1.382v-.65a1.75 1.75 0 0 0-1.75-1.75h-.913a1.75 1.75 0 0 0-1.75 1.75Z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="text-sm font-semibold">Login As Employee</span>
    </button>
  );
}
