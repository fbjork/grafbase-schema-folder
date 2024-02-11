import { Post } from "../types/post";

export default function resolver(_, args, context): Post {
  const post = context.db.posts.update(args);

  return post;
}
