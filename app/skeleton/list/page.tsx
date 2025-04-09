'use client';

import React from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';

const FanListSkeleton = () => {
  return (
    <div className="p-4 space-y-4">

      {/* Top Back Button + Search Icon */}
      <div className="flex justify-between items-center">
        <SkeletonLoader width="w-8" height="h-8" variant="icon" />
        <div className="flex gap-2">
          <SkeletonLoader width="w-8" height="h-8" variant="icon" />
          <SkeletonLoader width="w-8" height="h-8" variant="icon" />
        </div>
      </div>

      {/* Search Bar */}
      <SkeletonLoader height="h-10" rounded="rounded-md" className="w-full" />

      {/* Category Tags */}
      <div className="flex gap-2">
        {[...Array(4)].map((_, i) => (
          <SkeletonLoader key={i} width="w-20" height="h-8" rounded="rounded-full" />
        ))}
      </div>

      {/* Product Card Skeleton (repeat 4 times) */}
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-4 items-start">
          {/* Product Image */}
          <SkeletonLoader width="w-[80px]" height="h-[80px]" rounded="rounded-lg" />

          {/* Text Content */}
          <div className="flex-1 space-y-2">
            <SkeletonLoader width="w-3/4" height="h-4" />
            <SkeletonLoader width="w-1/2" height="h-4" />
            <SkeletonLoader width="w-1/3" height="h-3" />
            <SkeletonLoader width="w-1/4" height="h-4"/>
          </div>

          {/* Action Icon */}
          <div className="flex flex-col space-y-2 items-end justify-between h-full">
            <SkeletonLoader width="w-6" height="h-6" variant="icon" />
            <SkeletonLoader width="w-8" height="h-8" rounded="rounded-md" />
          </div>
        </div>
      ))}

      {/* Promo Banner */}
      <SkeletonLoader height="h-[100px]" rounded="rounded-lg" />
    </div>
  );
};

export default FanListSkeleton;
