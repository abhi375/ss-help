import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown/with-html";
import { useRouter } from "next/router";
import { ChevronLeftIcon, ShareIcon, UploadIcon } from "@heroicons/react/solid";

export default function Post({ post }) {
  const router = useRouter();
  {
    console.log(post);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, easings: [0.5, 0.12, 0.49, 0.84] }}
      className="w-full overflow-scroll post bg-white  relative"
    >
      <div className="w-full h-full">
        <div className="prose prose-lg mt-12 mb-6">
          <h1>{post.title}</h1>
        </div>
        <ReactMarkdown
          className="prose prose-lg  pb-16"
          escapeHtml={false}
          source={post.content}
        />
      </div>
    </motion.div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
