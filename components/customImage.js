'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CustomImage({
  src,
  width = 600,
  height = 600,
  alt = 'image',
  className,
  sizes,
  blurDataURL,
  placeholder,
  srcset,
  onClick,
  link,
  priority,
  loading = 'lazy',
}) {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (link) {
      router.push(link);
    }
  };
  return (
    <Image
      onClick={handleClick}
      src={src}
      alt={alt}
      style={onClick || link ? { cursor: 'pointer' } : null}
      width={width}
      height={height}
      className={className}
      srcSet={srcset}
      sizes={sizes}
      priority={priority}
      loading={loading}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      quality={100}
    />
  );
}
