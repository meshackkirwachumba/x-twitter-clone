"use client";

import { Image } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageType = {
  path: string;
  w: number;
  h: number;
  alt: string;
  className?: string;
  tr?: boolean;
};

const ImageCo = ({ path, w, h, alt, className, tr }: ImageType) => {
  return (
    <Image
      urlEndpoint={urlEndpoint} // New prop
      src={path}
      width={w}
      height={h}
      alt={alt}
      className={className}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
    />
  );
};

export default ImageCo;
