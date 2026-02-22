interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
}

export default function ResponsiveImage({
  src,
  alt,
  className,
  srcSet,
  sizes,
  width,
  height,
  loading = 'lazy',
  decoding = 'async'
}: ResponsiveImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
    />
  );
}
