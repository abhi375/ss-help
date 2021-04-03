import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function DevelopersPage({ allPosts }) {
  return <PostPage title="Developers" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "content"],
    "content/developers"
  );

  return {
    props: { allPosts },
  };
}
