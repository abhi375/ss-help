import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown/with-html";

export default function DetailView({ post }) {
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
