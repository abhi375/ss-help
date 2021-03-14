import Link from "next/link";
import { useRouter } from "next/router";
import {
  AnalyticsIcon,
  PulseIcon,
  StudioIcon,
  SettingsIcon,
  AutoDialIcon,
  AppsIcon,
  DeveloperIcon,
  TeamsIcon,
} from "../components/Icons";

export default function TabBar() {
  const router = useRouter();
  return (
    <section className="bg-gray-50 mt-16 p-4">
      <div className="wrapper grid grid-cols-8 gap-2 place-items-center">
        <Link href="/analytics">
          <a className="cursor-pointer group flex flex-col place-items-center">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-blue-700 group-hover:text-white ${
                router.pathname == "/analytics"
                  ? "bg-blue-700 text-white"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              <AnalyticsIcon />
            </div>
            <div className="mt-1.5 text-sm">Analytics</div>
          </a>
        </Link>

        <Link href="/pulse">
          <a className="flex flex-col place-items-center cursor-pointer group">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-rose-700 group-hover:text-white ${
                router.pathname == "/pulse"
                  ? "bg-rose-700 text-white"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              <PulseIcon />
            </div>
            <div className="mt-1.5 text-sm">Pulse</div>
          </a>
        </Link>

        <Link href="/studio">
          <a className="flex flex-col place-items-center cursor-pointer group">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-indigo-700 group-hover:text-white ${
                router.pathname == "/studio"
                  ? "bg-indigo-700 text-white"
                  : "bg-indigo-100 text-indigo-700"
              }`}
            >
              <StudioIcon />
            </div>
            <div className="mt-1.5 text-sm">Studio</div>
          </a>
        </Link>

        <Link href="/autodial">
          <a className="flex flex-col place-items-center cursor-pointer group">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-green-700 group-hover:text-white ${
                router.pathname == "/autodial"
                  ? "bg-green-700 text-white"
                  : "bg-green-100 text-green-700"
              }`}
            >
              <AutoDialIcon />
            </div>
            <div className="mt-1.5 text-sm">Autodial</div>
          </a>
        </Link>

        <Link href="/users-and-teams">
          <a className="flex flex-col place-items-center cursor-pointer group">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-yellow-700 group-hover:text-white ${
                router.pathname == "/users-and-teams"
                  ? "bg-yellow-700 text-white"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              <TeamsIcon />
            </div>
            <div className="mt-1.5 text-sm">Users & Teams</div>
          </a>
        </Link>

        <Link href="/settings">
          <a className="flex flex-col place-items-center cursor-pointer group">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-black group-hover:text-white ${
                router.pathname == "/settings"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              <SettingsIcon />
            </div>
            <div className="mt-1.5 text-sm">Settings</div>
          </a>
        </Link>

        <Link href="/apps">
          <div className="flex flex-col place-items-center cursor-pointer group ">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-cyan-700 group-hover:text-white ${
                router.pathname == "/apps"
                  ? "bg-cyan-700 text-white"
                  : "bg-cyan-100 text-cyan-700"
              }`}
            >
              <AppsIcon />
            </div>
            <div className="mt-1.5 text-sm">Apps</div>
          </div>
        </Link>

        <Link href="/developers">
          <a className="flex flex-col place-items-center cursor-pointer group">
            <div
              className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-purple-700 group-hover:text-white ${
                router.pathname == "/developers"
                  ? "bg-purple-700 text-white"
                  : "bg-purple-100 text-purple-700"
              }`}
            >
              <DeveloperIcon />
            </div>
            <div className="mt-1.5 text-sm">Developers</div>
          </a>
        </Link>
      </div>
    </section>
  );
}

// <Link href="/analytics">
//           <a className="cursor-pointer group">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-blue-700 group-hover:text-white ${
//                 router.pathname == "/analytics"
//                   ? "bg-blue-700 text-white"
//                   : "bg-blue-100 text-blue-700"
//               }`}
//             >
//               <AnalyticsIcon />
//             </div>
//           </a>
//         </Link>

//         <Link href="/analytics">
//           <a className="cursor-pointer group">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-rose-700 group-hover:text-white ${
//                 router.pathname == "/pulse"
//                   ? "bg-rose-700 text-white"
//                   : "bg-rose-100 text-rose-700"
//               }`}
//             >
//               <PulseIcon />
//             </div>
//           </a>
//         </Link>

//         <Link href="/analytics">
//           <a className="cursor-pointer group">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-indigo-700 group-hover:text-white ${
//                 router.pathname == "/studio"
//                   ? "bg-indigo-700 text-white"
//                   : "bg-indigo-100 text-indigo-700"
//               }`}
//             >
//               <StudioIcon />
//             </div>
//           </a>
//         </Link>

//         <Link href="/analytics">
//           <a className="cursor-pointer group">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-green-700 group-hover:text-white ${
//                 router.pathname == "/autodial"
//                   ? "bg-green-700 text-white"
//                   : "bg-green-100 text-green-700"
//               }`}
//             >
//               <AutoDialIcon />
//             </div>
//           </a>
//         </Link>

//         <Link href="/analytics">
//           <a className="cursor-pointer group">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-yellow-700 group-hover:text-white ${
//                 router.pathname == "/users-and-teams"
//                   ? "bg-yellow-700 text-white"
//                   : "bg-yellow-100 text-yellow-700"
//               }`}
//             >
//               <TeamsIcon />
//             </div>
//           </a>
//         </Link>

//         <Link href="/analytics">
//           <a className="cursor-pointer group">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-black group-hover:text-white ${
//                 router.pathname == "/settings"
//                   ? "bg-black text-white"
//                   : "bg-gray-200 text-black"
//               }`}
//             >
//               <SettingsIcon />
//             </div>
//           </a>
//         </Link>

//         <Link href="/analytics">
//           <div className="cursor-pointer group ">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-cyan-700 group-hover:text-white ${
//                 router.pathname == "/apps"
//                   ? "bg-cyan-700 text-white"
//                   : "bg-cyan-100 text-cyan-700"
//               }`}
//             >
//               <AppsIcon />
//             </div>
//           </div>
//         </Link>

//         <Link href="/analytics">
//           <a className="cursor-pointer group">
//             <div
//               className={`w-10 h-10 grid place-items-center rounded-full group-hover:bg-purple-700 group-hover:text-white ${
//                 router.pathname == "/developers"
//                   ? "bg-purple-700 text-white"
//                   : "bg-purple-100 text-purple-700"
//               }`}
//             >
//               <DeveloperIcon />
//             </div>
//           </a>
//         </Link>
