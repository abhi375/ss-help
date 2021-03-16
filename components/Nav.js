import Link from "next/link";
import { Logo } from "../components/Icons.js";

export default function Nav({ isHome }) {
  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 h-14  px-8 ${
        isHome ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div className="h-full flex justify-between items-center">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="grid grid-flow-col auto-cols-max gap-8">
          <Link href="/">
            <a className="text-xs uppercase font-semibold tracking-wide">
              Contact Us
            </a>
          </Link>
          <a
            href="https://www.samespace.com/signin"
            target="_blank"
            rel="noreferer noopener"
            className="text-xs uppercase font-semibold tracking-wide"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
}
