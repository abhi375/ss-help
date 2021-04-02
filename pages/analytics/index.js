import Link from "next/link";
import { getAllPosts } from "../../lib/api";
import ctl from "@netlify/classnames-template-literals";
import { ChevronRightIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown/with-html";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const PostRowClass = ctl(`
  block
  bg-white
  cursor-pointer
  border-b
  border-solid
  border-black
  border-opacity-10
  pb-8
  group
`);

export default function AnalyticsPage({ allPosts }) {
  console.log(allPosts);
  const router = useRouter();
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2, easings: [0.5, 0.12, 0.49, 0.84] }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: !!router.query.slug ? 0.2 : 1 }}
        whileHover={{ opacity: 1 }}
        className="max-w-[560px]"
      >
        <h1 className="my-12 pb-8 border-b border-solid border-black border-opacity-10">
          Analytics
        </h1>
        <div className="grid grid-cols-1 gap-12">
          {allPosts.map((post) => {
            return (
              <Link
                key={post.slug}
                href={`/analytics/?slug=${post.slug}`}
                as={`/analytics/${post.slug}`}
                // href={`/analytics/${post.slug}`}
              >
                <a className={PostRowClass}>
                  <h2 className="text-2xl group-hover:text-accent duration-300">
                    {post.title}
                  </h2>
                  <p className="my-2 opacity-75">{post.excerpt}</p>
                  <p className="text-accent flex items-center">
                    <span className="block mr-1">Read More</span>
                    <ChevronRightIcon className="w-5 h-5 mt-0.5 transform group-hover:translate-x-1 duration-300 transition-transform" />
                  </p>
                </a>
              </Link>
            );
          })}
        </div>
      </motion.div>
      <AnimatePresence>
        {!!router.query.slug && (
          <motion.div
            className="bg-white z-20 p-16 fixed right-0 top-16 bottom-0 overflow-auto shadow-lg"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, easings: [0.5, 0.12, 0.49, 0.84] }}
          >
            <h1>
              {
                allPosts.filter((post) => post.slug === router.query.slug)[0]
                  .title
              }
            </h1>
            <ReactMarkdown
              className="prose prose-lg mx-auto pb-16"
              escapeHtml={false}
              source={
                allPosts.filter((post) => post.slug === router.query.slug)[0]
                  .content
              }
            />
            <p onClick={() => router.push("/analytics/")}>Close</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
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
