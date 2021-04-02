import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function PulsePage({ allPosts }) {
  console.log(allPosts);
  return <PostPage title="Pulse" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
  ]);

  return {
    props: { allPosts },
  };
}
