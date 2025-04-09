'use client';

import React from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';

const HomePageSkeleton = () => {
  return (
    <div className="p-4 space-y-6">
      <SkeletonLoader variant="circle" theme="light" />
      <SkeletonLoader variant="text" className="w-1/2" />
      <SkeletonLoader variant="image" theme="dark" />
      <SkeletonLoader variant="icon" />
      <SkeletonLoader height="h-[200px]" width="w-[100%]" rounded="rounded-lg" />
    </div>
  );
};

export default HomePageSkeleton;
