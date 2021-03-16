import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const [section, setSection] = useState({});
  const getData = (path) => {
    switch (path) {
      case "/analytics":
        setSection({
          icon: <AnalyticsIcon />,
          title: "Analytics",
        });
        return null;
      case "/pulse":
        setSection({
          icon: <PulseIcon />,
          title: "Pulse",
        });
        return null;
      case "/studio":
        setSection({
          icon: <StudioIcon />,
          title: "Studio",
        });
        return null;
      case "/autodial":
        setSection({
          icon: <AutoDialIcon />,
          title: "Autodial",
        });
        return null;
      case "/settings":
        setSection({
          icon: <SettingsIcon />,
          title: "Settings",
        });
        return null;
      case "/users-and-teams":
        setSection({
          icon: <TeamsIcon />,
          title: "Users & Teams",
        });
        return null;
      case "/apps":
        setSection({
          icon: <AppsIcon />,
          title: "Apps",
        });
        return null;
      case "/developers":
        setSection({
          icon: <DeveloperIcon />,
          title: "Developers",
        });
        return null;
      default:
        return null;
    }
  };

  useEffect(() => {
    getData(router.pathname);
  }, []);

  return (
    <section className="bg-gray-50 mt-14 h-14 px-8 fixed top-0 left-0 right-0">
      <div className="h-full">
        <div className="flex items-center h-full">
          <div className="w-8 h-8 grid place-items-center rounded-full bg-gray-200">
            <div className="transform scale-75">{section.icon}</div>
          </div>
          <div className="ml-2 text-base">{section.title}</div>
        </div>
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
