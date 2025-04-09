'use client';

import React from 'react';
import SkeletonLoader from '../../components/SkeletonLoader';

const HomePageSkeleton = () => {
  return (
    <div className="p-4 space-y-6">
      {/* 1. Top Banner */}
      <SkeletonLoader height="h-[180px]" rounded="rounded-lg" />

      {/* 2. Search Bar */}
      <SkeletonLoader width="w-[90%]" height="h-[120px]" rounded="rounded-md" className="mx-auto" />

      {/* 3. Category Cards (3x2 grid) */}
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <SkeletonLoader key={i} height="h-[80px]" rounded="rounded-md" />
        ))}
      </div>

      {/* 4. Brand Icons Grid (3x3 layout) */}
      <div className="grid grid-cols-5 gap-4">
        {[...Array(10)].map((_, i) => (
          <SkeletonLoader
            key={i}
            width="w-full"
            height="h-[50px]"
            rounded="rounded-xl"
          />
        ))}
      </div>

      <SkeletonLoader width="w-[90%]" height="h-[120px]" rounded="rounded-md" className="mx-auto" />

    </div>
  );
};

export default HomePageSkeleton;
