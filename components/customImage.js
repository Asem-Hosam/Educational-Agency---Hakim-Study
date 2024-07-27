import Image from "next/image";

export default function CustomImage({ src, width, height, alt, className, sizes, blurDataURL, placeholder, srcset }) {
    return (
        <Image src={src} alt={alt} width={width} height={height} className={className} srcSet={srcset}
            sizes={sizes} priority placeholder={placeholder} blurDataURL={blurDataURL} />
    );
}


