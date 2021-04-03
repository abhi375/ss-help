import ctl from "@netlify/classnames-template-literals";
import { ChevronRightIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import PostSidebar from "./PostSidebar";

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

export default function PostPage({ title, posts }) {
  const router = useRouter();
  console.log("router is ", router);
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
          {title}
        </h1>
        <div className="grid grid-cols-1 gap-12">
          {posts.map((post) => {
            return (
              <Link
                key={post.slug}
                href={`${router.pathname}?slug=${post.slug}`}
                as={`${router.pathname}/${post.slug}`}
                // href={`/analytics/${post.slug}`}
              >
                <a className={PostRowClass}>
                  {console.log(post.slug, " and ", router.pathname)}
                  <h2 className="text-2xl group-hover:text-accent duration-300">
                    {post.title}
                  </h2>
                  <p className="my-2 text-base opacity-75">{post.excerpt}</p>
                  <p className="text-accent text-base flex items-center">
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
          <PostSidebar
            post={posts.filter((post) => post.slug === router.query.slug)[0]}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
