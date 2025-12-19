import Image from 'next/image';

interface AppImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export default function AppImage({
  src,
  alt,
  className = '',
  width,
  height,
  fill,
  priority = false,
}: AppImageProps) {
  // If neither fill nor dimensions are provided, use fill as default
  const useFill = fill || (!width && !height);

  if (useFill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={className}
      priority={priority}
    />
  );
}