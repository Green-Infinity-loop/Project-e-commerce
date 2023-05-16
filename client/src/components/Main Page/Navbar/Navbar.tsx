import { FC, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  IoNotificationsOutline,
  IoSearchSharp,
  IoMenu,
  IoLogoElectron,
  IoCloseCircleOutline,
} from "react-icons/io5";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { Button } from "@/components/atoms/Button";

interface NavbarItem {}

interface NavbarProps {
  items?: NavbarItem[];
  cartCount?: number;
  currentUser?: any;
}

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "#", current: false },
  { name: "News", href: "#", current: false },
  { name: "Pages", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}



export const Navbar:FC<NavbarProps> = ({
  items,
  currentUser,
  cartCount = 0,
}) => {
  const [search, setSearch] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#615cbe") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  function Search() {
    return (
      <div className="relative">
        <div className="  fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-70 z-40 w-full">
          <form>
            <input
              type="text"
              placeholder="Search"
              className=" px-4 py-2 rounded-lg bg-gray-600 h-12 w-60 "
            />
          </form>

          <button className="absolute top-0 right-0 ">
            <IoCloseCircleOutline
              className="w-10 h-10 text-white"
              onClick={() => {
                setSearch(!search);
              }}
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="">
      <Disclosure
        as="nav"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
          position: "fixed",
          width: "100%",
          zIndex: 1,
        }}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2  sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex  items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white  ">
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
                      <a href="/">MedZone</a>
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
                          aria-current={item.current ? "page" : undefined}>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0  ">
                  <button type="button" className=" p-1 text-[#181D31]  ">
                    <span className="sr-only">Search</span>
                    <div>{search && <Search />}</div>
                    <IoSearchSharp
                      onClick={() => {
                        setSearch(!search);
                      }}
                      className="h-5 w-5 text-xs ml-9 "
                      aria-hidden="true"
                    />
                  </button>
                  <Link href="/basket">
                    <button type="button" className=" p-1 text-[#181D31]   ">
                      <IoNotificationsOutline
                        className="h-5 w-5 mx-2"
                        aria-hidden="true"
                      />
                      {cartCount > 0 && (
                       <span className="sr-only ">
                          {cartCount}
                        </span>
                      )}
                      
                    </button>
                  </Link>
                  {cartCount > 0 && (
                <span className="absolute right-3 top-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
                  <div className=" mb-6 ml-3">
                    <Sidebar />
                  </div>
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
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      </div>
    </>
  );
}