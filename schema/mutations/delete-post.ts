import { Post } from "../types/post";

export default function resolver(_, { id }, context): Post {
  const post = context.db.posts.delete((post) => post.id === id);

  return post;
}
