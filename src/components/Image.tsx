import React from 'react';

interface Props {
  src: string;
  alt: string;
  isFromApi?: boolean;
}

const Image: React.FC<Props> = ({ src, alt, isFromApi, ...props }) => {
  const sourceUrl = isFromApi ? process.env.NEXT_PUBLIC_BACKEND_URL + src : src;

  return <img src={sourceUrl} alt={alt} {...props} />;
};

export default Image;
