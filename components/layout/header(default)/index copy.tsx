import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.svg";
import Logo from "../logo";

export default function Header() {
  const [isToggled, setIsToggled] = useState(false);

  function toggleNavlinks() {
    const navlinks = document.querySelector("#navlinks");
    const hamburger = document.querySelector("#hamburger");
    const layer = document.querySelector("#navLayer");

    if (isToggled) {
      navlinks?.classList.add(
        "!visible",
        "!scale-100",
        "!opacity-100",
        "lg:!translate-y-0"
      );
      hamburger?.classList.remove("toggled");
      layer?.classList.add("origin-top", "scale-y-100");
    } else {
      navlinks?.classList.remove(
        "!visible",
        "!scale-100",
        "!opacity-100",
        "lg:!translate-y-0"
      );
      hamburger?.classList.add("toggled");
      layer?.classList.remove("origin-top", "scale-y-100");
    }
  }

  function handleToggle() {
    setIsToggled(!isToggled);
    toggleNavlinks();
  }

  function handleLinkClick() {
    setIsToggled(!isToggled);
    toggleNavlinks();
  }

  return (
    <header>
      <nav className="absolute z-50 w-full overflow-hidden">
        <div className="m-auto">
          <div className="relative flex flex-wrap items-center justify-between gap-6 md:gap-0">
            <div className="relative z-20 flex items-center justify-between w-full md:px-0 lg:w-max">
              <div
                data-aos="fade-down"
                className={`bg-header bg-center h-[120px] lg:h-full relative flex items-center justify-between lg:hidden w-full ${
                  isToggled ? "bg-none !origin-bottom" : ""
                }`}
              >
                <div className="ml-6">
                  <Logo />
                </div>
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative mr-6"
                  onClick={handleToggle}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-secondary transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-secondary transition duration-300 dark:bg-gray-300"
                  ></div>
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className={`fixed inset-0 w-full flex items-center justify-center z-[16] h-screen origin-bottom scale-y-0 backdrop-blur-2xl transition duration-500 lg:hidden ${
                isToggled
                  ? "bg-zinc-950/80 backdrop-blur-sm !scale-y-100 !origin-top"
                  : ""
              }`}
            />
            <div
              data-aos="fade-down"
              id="navlinks"
              className={`lg:bg-header top-0 h-full lg:h-[110px] flex-1 invisible absolute right-0 z-[19] w-full origin-bottom scale-90 flex-col flex-wrap justify-center gap-6  opacity-0 transition-all duration-500 lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                isToggled
                  ? "!visible lg:scale-100 !opacity-100 !origin-top"
                  : ""
              }`}
            >
              <div className="grid items-center justify-around w-full grid-cols-1 pt-5 xl:grid-cols-5 lg:w-auto lg:pt-0">
                <ul
                  className="flex flex-col justify-around col-span-2 gap-4 lg:flex-row"
                >
                  <li>
                    <Link
                      href={"/"}
                      className="block uppercase transition link text-secondary hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/profile"}
                      className="block uppercase transition link text-secondary hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/tokenomics"}
                      className="block uppercase transition link text-secondary hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      <span>Tokenomics</span>
                    </Link>
                  </li>
                </ul>
                <div className="hidden lg:block">
                  <Link
                    href={"/"}
                    className="flex-1 block uppercase transition text-secondary hover:text-primary"
                    onClick={handleLinkClick}
                  >
                    <Image src={LogoImg} width={264} height={96} alt="Logo" />
                  </Link>
                </div>
                <ul
                  className="flex flex-col justify-around col-span-2 gap-4 lg:flex-row"
                >
                  <li>
                    <Link
                      href={"/rewards"}
                      className="block uppercase transition link text-secondary hover:text-primary"
                      onClick={handleLinkClick}
                    >
                      <span>Rewards</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/signin"}
                      className="block uppercase transition text-secondary hover:text-primary signup hover:scale-90 target:scale-75"
                      onClick={handleLinkClick}
                    >
                      <span>Sign up</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
