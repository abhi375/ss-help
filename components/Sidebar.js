import { getPostBySlug, getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import ReactMarkdown from "react-markdown/with-html";

export default function Sidebar({ post }) {
  return (
    <div>
      <h1>Sidebar</h1>
      {console.log("inside ss, ", post)}
      <ReactMarkdown
        className="mb-4"
        escapeHtml={false}
        source={post.content}
      />
    </div>
  );
}
