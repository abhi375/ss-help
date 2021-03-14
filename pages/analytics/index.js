import Link from "next/link";
import { ArrowIcon } from "../../components/Icons";
import Nav from "../../components/Nav";
import TabBar from "../../components/TabBar";
import { getAllPosts } from "../../lib/api";
import { useRouter } from "next/router";
import Sidebar from "../../components/Sidebar";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function AnalyticsPage({ allPosts }) {
  const router = useRouter();

  return (
    <div>
      <Nav />
      <TabBar />
      <AnimateSharedLayout>
        <motion.div className="flex flex-row content-view overflow-y-auto">
          <motion.div
            transition={{ duration: 0.3, easings: "easeInOut" }}
            className="mx-auto px-8 max-w-640"
            layout
          >
            <div className="pt-20 pb-10">
              <div className="">
                <h1 className="mb-4">Analytics</h1>
                <p className="opacity-70 pb-8 border-b border-solid border-black border-opacity-10">
                  Get the dashboards and comprehensive measurements you need to
                  improve your conversations with prospects and customers.
                </p>
                {console.log("posts are ", allPosts)}
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
          </motion.div>

          <AnimatePresence>
            {!!router.query.slug && (
              <motion.div
                className="w-640 bg-white shadow-sidebar p-12 h-full sticky top-0  z-20 bottom-0 overflow-y-auto"
                layout
                initial={{ opacity: 0, right: "-100%", y: "initial" }}
                animate={{ opacity: 1, right: "0%", y: "initial" }}
                exit={{ opacity: 0, right: "-100%", y: "initial" }}
                transition={{ duration: 0.3, easings: "easeInOut" }}
              >
                Sidebar for {router.query.slug}
                <Sidebar
                  post={
                    allPosts.filter(
                      (post) => post.slug === router.query.slug
                    )[0]
                  }
                />
                <p onClick={() => router.push("/analytics/")}>Close</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimateSharedLayout>
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
