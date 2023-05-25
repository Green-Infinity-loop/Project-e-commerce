import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import { IoPersonSharp, IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";

export default function Sidebar() {
  const [sideBar, setSidebar] = React.useState(false);

  function Sidebar() {
    return (
      <>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:px-6 lg:px-8"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="default-sidebar"
          className="fixed top-0 right-0 z-40 w-[25rem] h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <button className="absolute top-2 right-1  ">
              <IoCloseCircleOutline
                className="w-9 h-9 text-gray bg-black"
                onClick={() => {
                  setSidebar(!sideBar);
                }}
              />
            </button>

            <ul className="space-y-2 font-medium">
              <li className="flex justify-center pt-8">
                <Image
                  alt="profile image"
                  src="http://via.placeholder.com/300x300"
                  width={300}
                  height={300}
                  className="mb-8 rounded-full"
                />
              </li>
              <li>
                <div className="flex justify-center gap-2">
                  <div>
                    <div className="text-white border rounded-xl text-center p-2 bg-[#115061] w-[9.55rem]">
                      id dar
                    </div>
                  </div>
                  <div>
                    <div className="text-white border rounded-xl text-center p-2 bg-[#115061] w-[9.55rem]">
                      Nmaig dar
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <button className="border bg-[#115061] rounded-xl w-80">
                  <Link
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-white flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-start text-white flex-1 ml-3 whitespace-nowrap">
                      Users
                    </span>
                  </Link>
                </button>
              </li>
              <li>
                <button className="border bg-[#115061] rounded-xl w-80">
                  <Link
                    href="/searchPage"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-white flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-white text-start">
                      Products
                    </span>
                  </Link>
                </button>
              </li>
              <li>
                <button className="border bg-[#115061] rounded-xl w-80">
                  <Link
                    href="/login"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-white flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-start text-white">
                      Sign In
                    </span>
                  </Link>
                </button>
              </li>
              <li>
                <button className="border bg-[#115061] rounded-xl w-80">
                  <Link
                    href="/signup"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="text-white flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap text-start text-white">
                      Sign Up
                    </span>
                  </Link>
                </button>
              </li>
              <div className="divide-slate-950"></div>
            </ul>
          </div>
        </aside>
      </>
    );
  }
  return (
    <button
      type="button"
      className="p-1 text-[#181D31] absolute z-50 right-2 sm:right-5"
    >
      <span className="sr-only">Search</span>
      <div>{sideBar && <Sidebar />}</div>
      <IoPersonSharp
        onClick={() => {
          setSidebar(!sideBar);
        }}
        aria-hidden="true"
      />
    </button>
  );
}
