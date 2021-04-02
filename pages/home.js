import { ChromeIcon, SFIcon } from "../components/Icons";
import ctl from "@netlify/classnames-template-literals";
import {
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const StoreCardClass = ctl(`
  p-8
  bg-white
  dark:bg-gray-800
  shadow-card
  rounded-lg
  grid
  place-items-center
  cursor-pointer
`);

const StoreButtonClass = ctl(`
  bg-accent
  px-10
  py-1.5
  rounded-full
  text-white
  flex
  items-center
  justify-center
  mb-4
`);

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full my-12"
    >
      <div className="max-w-[560px]">
        <h1 className="mb-3">Getting Started</h1>
        <p className="opacity-60">
          All you need to get started with Samespace in one place!
        </p>
        <div className="w-full h-px bg-black dark:bg-white bg-opacity-10 mt-5"></div>

        <div className="my-8">
          <p className="mb-5">
            Once your account is created, first thing you should do is create
            team and invite users. After your first team is created, you can map
            that to a phone number in settings section.
          </p>
          <p>
            To start making and receiving calls, you will need to install
            Samespace Dock. If you are using Salesforce as your CRM, you can use
            our native salesforce dialer.
          </p>
        </div>

        <div className="my-8 grid grid-cols-2 gap-10">
          <div className={StoreCardClass}>
            <ChromeIcon />
            <p className="my-4">Chrome Store</p>
            <div className={StoreButtonClass}>Install</div>
          </div>
          <div className={StoreCardClass}>
            <SFIcon />
            <p className="my-4">App Exchange</p>
            <div className={StoreButtonClass}>Install</div>
          </div>
        </div>

        <div className="p-4 rounded-md bg-green-100 grid auto-cols-auto grid-flow-col gap-4">
          <InformationCircleIcon className="w-6 h-6 text-green-700" />

          <div>
            <p>
              Before starting to make calls check our network requirements and
              recommendations.
            </p>
            <Link href="/">
              <a className="flex items-center text-green-700 mt-2">
                <div className="mr-1">Learn More</div>
                <ChevronRightIcon className="w-5 h-5 mt-0.5" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
