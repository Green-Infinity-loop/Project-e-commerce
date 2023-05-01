import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  IoNotificationsOutline,
  IoPersonOutline,
  IoSearchSharp,
  IoMenu,
  IoLogoElectron,
} from "react-icons/io5";
import Link from "next/link";
import Sidebar from "./Sidebar";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "#", current: false },
  { name: "News", href: "#", current: false },
  { name: "Pages", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Search() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-70 z-40 w-full">
      <form>
        <input
          type="text"
          placeholder="Search"
          className=" px-4 py-2 rounded-lg bg-gray-600 h-12 w-60 "
        />
      </form>
    </div>
  );
}
export default function Example() {
  const [search, setSearch] = useState(false);

  return (
    <>
      <Disclosure
        as="nav"
        className="w-full bg-gradient-to-l from-green-400 to-green-700"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <IoMenu className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <IoMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
                  <div className="flex flex-shrink-0 items-center">
                    <IoLogoElectron className="block h-8 w-auto lg:hidden" />
                    <IoLogoElectron className="hidden h-8 w-auto lg:block" />
                    <h1 className="px-4 text-bold text-xl font-black">
                      MedZone
                    </h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:block absolute right-24 font-light text-xs  place-content-center ">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "  text-[#181D31] hover:bg-[#ffff] hover:rounded-xl"
                              : " text-[#181D31] hover:bg-[#ffff] hover:rounded-xl",
                            " px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className=" p-1 text-[#181D31]  focus:outline-none focus:ring-2   focus:ring-offset-2 "
                  >
                    <span className="sr-only ">Search</span>
                    <div>{search && <Search />}</div>
                    <IoSearchSharp
                      onClick={() => {
                        setSearch(!search);
                      }}
                      className="h-5 w-9 text-xs"
                      aria-hidden="true"
                    />
                  </button>
                  <Link href="/k">
                    <button
                      type="button"
                      className=" p-1 text-[#181D31]  focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-2 "
                    >
                      <span className="sr-only ">View notifications</span>

                      <IoNotificationsOutline
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </button>
                  </Link>

                  <Sidebar />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
