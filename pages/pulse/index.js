import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function PulsePage({ allPosts }) {
  return <PostPage title="Pulse" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "content"],
    "content/pulse"
  );

  return {
    props: { allPosts },
  };
}
