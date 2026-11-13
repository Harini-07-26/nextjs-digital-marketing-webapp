'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface BlogImageProps extends Omit<ImageProps, 'onLoad'> {
  containerClassName?: string;
}

export default function BlogImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  fill,
  priority,
  sizes,
  ...rest
}: BlogImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton loader overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-secondary/50 animate-pulse">
          <div className="h-6 w-6 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0 scale-98' : 'opacity-100 scale-100'
        } ${className}`}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );
}
