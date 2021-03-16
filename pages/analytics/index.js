import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowIcon } from "../../components/Icons";
import Nav from "../../components/Nav";
import TabBar from "../../components/TabBar";
import { getAllPosts } from "../../lib/api";
import { useRouter } from "next/router";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Sidebar = dynamic(() => import("../../components/Sidebar"), {
  loading: () => <div>Loading...</div>,
});

export default function AnalyticsPage({ allPosts }) {
  const router = useRouter();

  return (
    <div>
      <Nav />
      <TabBar />

      <motion.div className="content-view overflow-x-auto overflow-y-hidden">
        <div className="flex w-full h-full">
          <motion.div
            transition={{ duration: 0.3, easings: "easeInOut" }}
            initial={{
              width: "100%",
              height: "100%",
              position: "sticky",
              minWidth: 760,
              left: "0px",
              opacity: 1,
            }}
            animate={{
              width:
                !!router.query.slug && window.innerWidth < 1440 ? "0%" : "100%",
              opacity: !!router.query.slug ? 0.2 : 1,
            }}
            whileHover={{ opacity: 1 }}
            className="bg-white"
          >
            <div className="w-full h-full overflow-scroll">
              <div className="pt-20 pb-10">
                <div className="max-w-640 mx-auto">
                  <h1 className="mb-4">Analytics</h1>
                  <p className="opacity-70 pb-8 border-b border-solid border-black border-opacity-10">
                    Get the dashboards and comprehensive measurements you need
                    to improve your conversations with prospects and customers.
                  </p>
                </div>
              </div>
              <div className="pt-10 pb-20">
                <div className="max-w-640 mx-auto grid grid-cols-1 gap-20">
                  {allPosts.map((post) => {
                    return (
                      <Link
                        key={post.slug}
                        href={`/analytics/?slug=${post.slug}`}
                        as={`/analytics/${post.slug}`}
                      >
                        <a className="block cursor-pointer">
                          <h2 className="text-2xl">{post.title}</h2>
                          <p className="my-2">{post.excerpt}</p>
                          <p className="text-accent flex items-center">
                            <span className="block mr-2">Read More</span>
                            <span>
                              <ArrowIcon />
                            </span>
                          </p>
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {!!router.query.slug && (
            <motion.div
              className="w-[760px] min-w-[720px] bg-white shadow-sidebar px-12 h-full sticky top-0 left-full z-20 overflow-y-auto bottom-0"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, easings: "easeInOut" }}
            >
              Sidebar for {router.query.slug}
              <Sidebar
                post={
                  allPosts.filter((post) => post.slug === router.query.slug)[0]
                }
              />
              <p onClick={() => router.push("/analytics/")}>Close</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
  ]);

  return {
    props: { allPosts },
  };
}
