import { getAllPosts } from "../../lib/api";
import PostPage from "../../components/PostPage";

export default function AutoDialPage({ allPosts }) {
  return <PostPage title="Auto Dial" posts={allPosts} />;
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt", "content"],
    "content/playbooks"
  );

  return {
    props: { allPosts },
  };
}
