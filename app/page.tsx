import Link from 'next/link';

export default function Home() {
  return <div>Hello
    <Link href="/blog">Blogs</Link>
    <Link href="/about">About</Link>
  </div>;
}
