import React from 'react';
import Link from 'next/link';

export default async function Home() {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();
  const posts = data.posts as any[];
  const date = new Date();

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
      {date?.toString()}
    </div>
  );
}
