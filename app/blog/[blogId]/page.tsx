import React from 'react';

export const dynamicParams = true;

export default async function Post({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  const res = await fetch(`https://dummyjson.com/posts/${blogId}`, {
    // cache: 'force-cache', // 适用于静态生成
    next: {
      revalidate: 10,
    },
  });
  const blog = await res.json();
  return <div>My Post: {blog.title} {Date.now().toString()}</div>;
}

export async function generateStaticParams() {
  // 预生成路径（等同于 getStaticPaths）
  const res = await fetch('https://dummyjson.com/posts?limit=2');
  const data = await res.json();

  return data.posts.map((post: { id: string }) => ({
    blogId: post.id.toString(),
  }));
}
