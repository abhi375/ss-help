import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function SettingsPage({ allPosts }) {
  return <PostPage title="Settings" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "content"],
    "content/settings"
  );

  return {
    props: { allPosts },
  };
}
