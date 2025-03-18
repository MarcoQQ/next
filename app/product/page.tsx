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
  const res = await fetch(`http://localhost:3000/api/product`, { cache: 'no-store' });
  const data = await res.json();

  return data.products as any[];
}
