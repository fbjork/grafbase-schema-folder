# Grafbase schema folder proposal

Introduce a folder structure for Grafbase schemas.

## Proposal

The proposal is to organize the schemas in a folder structure that is consistent and easy to understand. The structure is as follows:

```
schema
├── mutations
│   ├── create-post.ts
│   ├── delete-post.ts
│   └── update-post.ts
├── queries
│   └── post.ts
└── types
    └── post.ts
```

## Queries and Mutations

All files in the `queries` and `mutations` folders will be resolvers. The file name will be converted to lower camel case and the extension will be removed.

```ts
import { Post } from "../types/post";

export default function resolver(_, { id }, context): Post {
  const post = context.db.posts.find((post) => post.id === id);

  return post;
}
```


## Types

All files in this folder will be type definitions. The file name should be the same as the type name.

```ts
export type Post = {
  title: string;
  content: string;
};
```

Gets converted to:

```gql
type Post {
  title: String!
  content: String!
}
```
