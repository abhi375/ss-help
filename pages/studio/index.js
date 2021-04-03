import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function StudioPage({ allPosts }) {
  return <PostPage title="Studio" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "content"],
    "content/studio"
  );

  return {
    props: { allPosts },
  };
}
