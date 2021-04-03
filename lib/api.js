import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

export function getAllPosts(fields = [], folder) {
  const slugs = getPostSlugs(folder);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, folder))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostSlugs(folder) {
  const postsDirectory = join(process.cwd(), folder);
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = [], folder) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(folder, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}
