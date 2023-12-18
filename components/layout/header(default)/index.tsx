"use client"

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Logo from "../logo";
import LogoImg from "@/public/images/logo.svg";
import Image from "next/image";
import { usePathname } from 'next/navigation'

const navigation = [
  { name: "Home", href: "/" },
  { name: "Profile", href: "/profile" },
  { name: "Tokenomics", href: "/tokenomics" },
];

const navigation2 = [{ name: "Rewards", href: "/rewards" }];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPath = usePathname();

  return (
    <header className="bg-header bg-center h-[120px] lg:h-full">
      <nav
        className="flex items-center justify-between p-6 mx-auto lg:grid lg:grid-cols-5 max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <div className="ml-6">
            <Logo />
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open navigation</span>
            <Bars3Icon className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
        <div className="items-center hidden grid-cols-4 col-span-4 text-xl tracking-wide uppercase lg:grid lg:gap-x-12 ">
          <div className="flex flex-row justify-around w-full col-span-2 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={` ${currentPath === item.href ? "text-primary link-active" : " text-secondary"} link  leading-6  hover:text-primary `}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Link
              href={"/"}
              className="flex-1 block transition text-secondary hover:text-primary hover:scale-90"
            >
              <Image src={LogoImg} width={264} height={96} alt="Logo" />
            </Link>
          </div>
          {navigation2.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={` ${currentPath === item.href ? "text-primary link-active" : " text-secondary"}  link leading-6  hover:text-primary w-fit `}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={"/signin"}
            className={`${currentPath === '/signin' ? "signup-active" : " text-secondary"} block uppercase transition text-lg text-secondary signup hover:scale-90 target:scale-75`}
          >
            <span>Sign up</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full h-screen px-6 py-6 bg-black overflow-y-clip sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="ml-6">
              <Logo />
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col items-start justify-around h-full gap-8 px-6 mt-6 text-xl ">
            <div className="py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={` ${currentPath === item.href ? "text-primary" + "link-active" : " text-secondary"} link  block px-3 py-2 -mx-3 text-xl leading-7 hover:text-primary`}
                >
                  {item.name}
                </Link>
              ))}
              {navigation2.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${currentPath === item.href ? "text-primary link-active" : " text-secondary"} link block px-3 py-2 -mx-3 text-xl leading-7 hover:text-primary`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="p-2">
              <Link
                href={"/signin"}
                onClick={() => setMobileMenuOpen(false)}
                className="uppercase transition-all ease-in-out duration-300 text-secondary block px-3 py-2 -mx-3 text-xl signup signup-active hover:scale-90 target:scale-75"
              >
                <span>Sign up</span>
              </Link>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
