import ReactMarkdown from "react-markdown/with-html";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PostSidebar({ post }) {
  const router = useRouter();

  return (
    <motion.div
      className="bg-white z-20 p-16 fixed right-0 top-16 bottom-0 overflow-auto shadow-lg w-[720px]"
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3, easings: [0.5, 0.12, 0.49, 0.84] }}
    >
      {console.log("post from state is ", post)}
      <h1>{post.title}</h1>
      <ReactMarkdown
        className="prose mx-auto pb-16"
        escapeHtml={false}
        source={post.content}
      />
      <p onClick={() => router.replace(router.pathname)}>Close</p>
    </motion.div>
  );
}
