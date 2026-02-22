const DEFAULT_WIDTHS = [320, 640, 960, 1280];

interface StaticImageSetOptions {
  widths?: number[];
  format?: 'webp' | 'jpg' | 'jpeg' | 'png';
  defaultWidth?: number;
  sizes?: string;
}

interface ImageSources {
  src: string;
  srcSet?: string;
  sizes?: string;
}

function isExternalUrl(path: string): boolean {
  return /^https?:\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:');
}

function normalizePath(path: string): string {
  if (path.startsWith('/')) {
    return path;
  }
  return `/${path}`;
}

export function withBaseUrl(path: string): string {
  if (isExternalUrl(path)) {
    return path;
  }

  const normalizedPath = normalizePath(path);
  const base = import.meta.env.BASE_URL;

  if (base === '/') {
    return normalizedPath;
  }

  return `${base.replace(/\/$/, '')}${normalizedPath}`;
}

export function createStaticImageSet(baseName: string, options: StaticImageSetOptions = {}): ImageSources {
  const widths = options.widths ?? DEFAULT_WIDTHS;
  const format = options.format ?? 'webp';
  const defaultWidth = options.defaultWidth ?? 640;
  const sizes = options.sizes ?? '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw';

  const src = withBaseUrl(`/images/${baseName}-${defaultWidth}.${format}`);
  const srcSet = widths
    .map((width) => `${withBaseUrl(`/images/${baseName}-${width}.${format}`)} ${width}w`)
    .join(', ');

  return { src, srcSet, sizes };
}

export function resolveImageSources(image: string, imageBase?: string): ImageSources {
  if (imageBase) {
    return createStaticImageSet(imageBase);
  }

  return { src: withBaseUrl(image) };
}
