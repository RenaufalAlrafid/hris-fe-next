import { Suspense } from "react";
import { get_user } from "../action";
import UserNavbar from "./UserNavbar";

// interface props {
//   name?: string;
//   email?: string;
// }

export default async function Navbar() {
  return (
    <>
      <div className="flex w-full items-center justify-between  bg-primary-shades-50 px-3 py-3 text-white md:h-32 md:px-11 md:py-8 ">
        <div className="hidden md:block">
          <h1 className="font-bold lg:text-2xl">RAI - HRIS</h1>
        </div>

        <div className="flex gap-1">
          <div className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44px"
              height="44px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            {/* {!name ? (
              // make skeleton loader here
              
            ) : (
              <>
                <span className="text-sm font-bold">{name}</span>
                <span className="text-sm font-bold">{email}</span>
              </>
            )} */}

            <Suspense
              fallback={
                <>
                  <div className="h-4 w-40 animate-pulse rounded-full bg-gray-300"></div>
                  <div className="h-4 w-40 animate-pulse rounded-full bg-gray-300"></div>
                </>
              }
            >
              <UserNavbar />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
