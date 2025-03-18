'use client'

import { useRouter } from 'next/navigation';

export default function RouterButton() {
  const router = useRouter();
  return (
    <>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.back()}>Back</div>
    </>
  );
}
