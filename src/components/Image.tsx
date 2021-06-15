import React from 'react';
import NextImage from 'next/image';

interface Props {
  src: any;
  alt: string;
  isFromApi?: boolean;
  width?: number;
  height?: number;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: never;
}

const Image: React.FC<Props> = ({ src, alt, isFromApi, width, height, layout, placeholder, blurDataURL }) => {
  const sourceUrl = isFromApi ? process.env.NEXT_PUBLIC_BACKEND_URL + src : src;

  return (
    <NextImage
      src={sourceUrl}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
    />
  );
};

export default Image;
