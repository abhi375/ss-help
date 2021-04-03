import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function AppsPage({ allPosts }) {
  return <PostPage title="Apps" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "content"],
    "content/apps"
  );

  return {
    props: { allPosts },
  };
}
