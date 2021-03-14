import Link from "next/link";
import Image from "next/image";
import {
  Logo,
  SearchIcon,
  AnalyticsIcon,
  PulseIcon,
  StudioIcon,
  SettingsIcon,
  AutoDialIcon,
  AppsIcon,
  DeveloperIcon,
  ChromeIcon,
  SFIcon,
  TeamsIcon,
} from "../components/Icons";

import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav isHome />
      <header>
        <section className="mt-16 bg-gray-50">
          <div className="wrapper flex justify-between">
            <div className="flex-1 flex flex-col justify-center mr-20">
              <h1>We’re here to help</h1>
              <p className="mt-4 mb-8 opacity-60 text-lg">
                Find the answers you're looking for with these simple
                step-by-step articles and guides.
              </p>
              <div className="w-full bg-white relative overflow-hidden rounded-md shadow-searchbar ">
                <input
                  placeholder="Search for topic or question"
                  className="h-full w-full p-4 focus:outline-none"
                  type="text"
                />
                <div className="absolute bg-white right-2 top-1.5 bottom-1 w-10 h-10 grid place-items-center">
                  <SearchIcon />
                </div>
              </div>
            </div>
            <Image src="/assets/hero.png" width={480} height={320} />
          </div>
        </section>
      </header>

      <section className="px-8 py-10">
        <div className="wrapper grid grid-cols-4 gap-4">
          <Link href="/analytics">
            <a className="p-6 shadow-card rounded-md bg-white cursor-pointer group">
              <div className="w-10 h-10 grid place-items-center rounded-full bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white">
                <AnalyticsIcon />
              </div>
              <p className="text-lg font-semibold mt-3 mb-1">Analytics</p>
              <p className="opacity-60 text-sm">
                Analyse conversations and agent performance
              </p>
            </a>
          </Link>

          <div className="p-6 shadow-card rounded-md bg-white cursor-pointer group">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-rose-100 text-rose-700 group-hover:bg-rose-700 group-hover:text-white">
              <PulseIcon />
            </div>
            <p className="text-lg font-semibold mt-3 mb-1">Pulse</p>
            <p className="opacity-60 text-sm ">
              Monitor and Coach agents in real time.
            </p>
          </div>

          <div className="p-6 shadow-card rounded-md bg-white cursor-pointer group">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white">
              <StudioIcon />
            </div>
            <p className="text-lg font-semibold mt-3 mb-1">Studio</p>
            <p className="opacity-60 text-sm">
              Design Smart IVRs, Chatbot and Voicebot
            </p>
          </div>

          <div className="p-6 shadow-card rounded-md bg-white cursor-pointer group">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-green-100 text-green-700 group-hover:bg-green-700 group-hover:text-white">
              <AutoDialIcon />
            </div>
            <p className="text-lg font-semibold mt-3 mb-1">Playbooks</p>
            <p className="opacity-60 text-sm">
              Supercharge prospecting and service
            </p>
          </div>

          <div className="p-6 shadow-card rounded-md bg-white cursor-pointer group">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-yellow-100 text-yellow-700 group-hover:bg-yellow-700 group-hover:text-white">
              <TeamsIcon />
            </div>
            <p className="text-lg font-semibold mt-3 mb-1">User Management</p>
            <p className="opacity-60 text-sm">
              Manage users and team preferences
            </p>
          </div>

          <div className="p-6 shadow-card rounded-md bg-white cursor-pointer group">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-gray-100 text-black group-hover:bg-black group-hover:text-white">
              <SettingsIcon />
            </div>
            <p className="text-lg font-semibold mt-3 mb-1">Settings</p>
            <p className="opacity-60 text-sm">
              Voice, Chat, Integration and Dock Settings
            </p>
          </div>

          <div className="p-6 shadow-card rounded-md bg-white cursor-pointer group ">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-cyan-100 text-cyan-700 group-hover:bg-cyan-700 group-hover:text-white">
              <AppsIcon />
            </div>
            <p className="text-lg font-semibold mt-3 mb-1">Apps</p>
            <p className="opacity-60 text-sm">
              Native CTI for Salesforce and Chrome Extension
            </p>
          </div>

          <div className="p-6 shadow-card rounded-md bg-white cursor-pointer group">
            <div className="w-10 h-10 grid place-items-center rounded-full bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white">
              <DeveloperIcon />
            </div>
            <p className="text-lg font-semibold mt-3 mb-1">Developers</p>
            <p className="opacity-60 text-sm">
              Open APIs, custom functions and API Keys
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-20 bg-gray-50">
        <div className="wrapper grid grid-cols-2 gap-16 items-center">
          <div>
            <h2>Samespace Dialer</h2>
            <p className="mt-4 mb-8 opacity-60 text-lg">
              Download Native Salesforce CTI and chrome extension for better
              calling experiernce.
            </p>
            <div className="p-4 bg-gray-200 bg-opacity-30 rounded-md text-black text-opacity-70">
              Before starting to make calls check our{" "}
              <Link href="/">
                <a className="text-accent">
                  network requirements and recommendations.
                </a>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white shadow-soft rounded-md px-6 py-8 flex flex-col items-center justify-center">
              <ChromeIcon />
              <p className="my-4">Chrome Extension</p>
              <a
                href="/"
                className="text-sm px-4 py-2 rounded-md bg-accent text-white font-semibold"
              >
                Download
              </a>
            </div>
            <div className="bg-white shadow-soft rounded-md px-6 py-8 flex flex-col items-center justify-center">
              <SFIcon />
              <p className="my-4">Native CTI</p>
              <a
                href="/"
                className="text-sm px-4 py-2 rounded-md bg-accent text-white font-semibold"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
