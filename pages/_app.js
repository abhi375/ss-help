import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";
import NavSidebar from "../components/NavSidebar";
import "../styles/global.css";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <main className="">
      <Nav />
      <div className="mt-16 page grid grid-cols-5 gap-8 items-start bg-white dark:bg-gray-900 text-black dark:text-white">
        <NavSidebar />
        <div className="col-span-4 w-full h-full">
          <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}

export default MyApp;
