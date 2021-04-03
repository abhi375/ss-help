import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function AnalyticsPage({ allPosts }) {
  return <PostPage title="Analytics" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "content"],
    "content/analytics"
  );

  return {
    props: { allPosts },
  };
}
