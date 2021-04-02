import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ctl from "@netlify/classnames-template-literals";
import {
  ChartBarIcon,
  CogIcon,
  CollectionIcon,
  InboxIcon,
  LightningBoltIcon,
  SpeakerphoneIcon,
  TerminalIcon,
  UsersIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import { motion } from "framer-motion";

const SidebarItemIconClass = ({ item }) => {
  return ctl(`
            w-8
            h-8
            bg-gradient
            bg-gradient-to-r
            mr-2
            rounded-full
            grid
            place-items-center
            text-white
            ${item.label === "Getting Started" && `from-purple-500 to-pink-500`}
            ${item.label === "Analytics" && `from-blue-500 to-purple-500`}
            ${item.label === "Pulse" && `from-amber-500 to-red-500`}
            ${item.label === "Studio" && `from-blue-500 to-cyan-500`}
            ${item.label === "Playbooks" && `from-green-400 to-cyan-500`}
            ${item.label === "Users & Teams" && `from-purple-500 to-rose-500`}
            ${item.label === "Settings" && `from-gray-500 to-gray-600`}
            ${item.label === "Apps" && `from-blue-400 to-blue-600`}
            ${item.label === "Developers" && `from-indigo-400 to-indigo-600`}
        `);
};

const navItemClass = ctl(`
flex items-center p-2 bg-white dark:bg-gray-900 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800
`);

export default function NavSidebar() {
  const router = useRouter();
  const [navItems] = useState([
    {
      label: "Getting Started",
      icon: <InboxIcon className="w-5 h-5" />,
      link: "/",
    },
    {
      label: "Analytics",
      icon: <ChartBarIcon className="w-5 h-5" />,
      link: "/analytics",
    },
    {
      label: "Pulse",
      icon: <LightningBoltIcon className="w-5 h-5" />,
      link: "/pulse",
    },
    {
      label: "Playbooks",
      icon: <SpeakerphoneIcon className="w-5 h-5" />,
      link: "/autodial",
    },
    {
      label: "Studio",
      icon: <CollectionIcon className="w-5 h-5" />,
      link: "/studio",
    },
    {
      label: "Settings",
      icon: <CogIcon className="w-5 h-5" />,
      link: "/settings",
    },
    {
      label: "Apps",
      icon: <ViewGridAddIcon className="w-5 h-5" />,
      link: "/apps",
    },
    {
      label: "Users & Teams",
      icon: <UsersIcon className="w-5 h-5" />,
      link: "/users-and-teams",
    },
    {
      label: "Developers",
      icon: <TerminalIcon className="w-5 h-5" />,
      link: "/developers",
    },
  ]);

  return (
    <nav className="col-span-1 p-6 grid grid-cols-1 gap-2">
      {navItems.map((item) => {
        console.log(
          "pathname ",
          router.pathname,
          " and item link is ",
          item.link
        );
        return (
          <Link key={item.label} href={item.link}>
            <a>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.99 }}
                className={`${navItemClass} ${
                  router.pathname === item.link &&
                  "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                <div className={SidebarItemIconClass({ item })}>
                  {item.icon}
                </div>
                <div>{item.label}</div>
              </motion.div>
            </a>
          </Link>
        );
      })}
    </nav>
  );
}
