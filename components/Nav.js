import Link from "next/link";
import { Logo } from "../components/Icons.js";
import ctl from "@netlify/classnames-template-literals";
import { SearchIcon } from "@heroicons/react/solid";

const navClass = ctl(`
  fixed
  z-50
  top-0
  inset-x-0
  h-16
  bg-white
  dark:bg-gray-900
  px-8
  shadow-sm
`);

const searchClass = ctl(`
  w-80
  px-3
  py-2
  bg-gray-100
  dark:bg-gray-800
  rounded-md
  flex
  items-center
  absolute
  left-[50%]
  transform
  translate-x-[-50%]
`);

const signInButtonClass = ctl(`
  text-xs
  uppercase
  font-semibold
  dark:font-normal
  tracking-wide
  bg-white
  text-black
  dark:text-white
  dark:bg-gray-900
  px-4
  py-2
  border
  border-solid
  border-black
  dark:border-gray-500
  border-opacity-10
  dark:border-opacity-100
  rounded-md
`);

export default function Nav() {
  return (
    <nav className={navClass}>
      <div className="h-full flex justify-between items-center relative">
        <Link href="/">
          <a className="text-black dark:text-white">
            <Logo />
          </a>
        </Link>
        <div className={searchClass}>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full focus:outline-none font-light bg-transparent"
          />
          <SearchIcon className="w-5 h-5 dark:text-gray-500 text-gray-500" />
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-8">
          <a
            href="https://www.samespace.com/signin"
            target="_blank"
            rel="noreferer noopener"
            className={signInButtonClass}
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
