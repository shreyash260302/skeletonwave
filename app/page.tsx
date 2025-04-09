'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/skeleton');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <button
        onClick={handleNavigate}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go to Skeleton Page
      </button>
    </div>
  );
}
