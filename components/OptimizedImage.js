import Image from 'next/image';

/**
 * OptimizedImage Component
 * This is a wrapper around Next.js Image component with default optimizations
 * 
 * @param {object} props - All standard Image component props
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  quality = 75,
  priority = false,
  className = '',
  ...props
}) {
  // Default blur placeholder for performance
  const placeholder = 'blur';
  
  // BlurDataURL for the placeholder (using a low-res version would be better in production)
  const blurDataURL = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
    </svg>`
  ).toString('base64')}`;
  
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={quality}
      priority={priority}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={`transition-opacity duration-500 ${className}`}
      {...props}
    />
  );
}
