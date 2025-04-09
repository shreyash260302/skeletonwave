'use client';

import React from 'react';
import clsx from 'clsx';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: string;
  variant?: 'rect' | 'circle' | 'text' | 'image' | 'icon';
  theme?: 'light' | 'dark';
}

const themeClasses = {
  light: 'bg-gray-400 shimmer-light',
  dark: 'bg-gray-700 shimmer-dark',
};

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width,
  height,
  className = '',
  rounded,
  variant = 'rect',
  theme = 'light',
}) => {
  // Predefined styles for variants
  const variantStyles = (() => {
    switch (variant) {
      case 'circle':
        return 'w-[48px] h-[48px] rounded-full';
      case 'text':
        return 'w-full h-4 rounded';
      case 'image':
        return 'w-full h-[200px] rounded-md';
      case 'icon':
        return 'w-[32px] h-[32px] rounded-md';
      default:
        return '';
    }
  })();

  return (
    <div
      className={clsx(
        'skeleton-loader relative overflow-hidden animate-pulse',
        variantStyles,
        themeClasses[theme],
        width,
        height,
        rounded,
        className
      )}
    >
      <div className="shimmer absolute inset-0" />
    </div>
  );
};

export default SkeletonLoader;
