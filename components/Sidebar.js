import { getPostBySlug, getAllPosts } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import ReactMarkdown from "react-markdown/with-html";

export default function Sidebar({ post }) {
  return (
    <div className="relative max-w-[760px] w-full h-full overscroll-y-auto mx-auto">
      <div className="max-w-[760px] mx-auto min-h-full flex flex-col overflow-hidden">
        <h1>Sidebar</h1>

        <ReactMarkdown
          className="mb-4"
          escapeHtml={false}
          source={post.content}
        />
      </div>
    </div>
  );
}
