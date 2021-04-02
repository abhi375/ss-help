import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function AnalyticsPage({ allPosts }) {
  console.log(allPosts);
  return <PostPage title="Analytics" posts={allPosts} />;
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
