import React from 'react';
import Link from 'next/link';

export default async function Product() {
  const products = await getProducts();
  const date = new Date();

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>{product.title}</Link>
        </div>
      ))}
      {date?.toString()}
    </div>
  );
}

async function getProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/product`, { cache: 'no-store' });
  const data = await res.json();

  return data.products as any[];
}
