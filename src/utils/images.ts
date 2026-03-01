const DEFAULT_WIDTHS = [400, 800, 1600];

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
  return `/images/${path}`;
}

export function withBaseUrl(path: string): string {
  let res = "";
  if (isExternalUrl(path)) {
    res = path;
  }

  const normalizedPath = normalizePath(path);
  const base = import.meta.env.BASE_URL;

  if (res) {
    return res;
  }
  if (base === '/') {
    res = normalizedPath;
  }

  if (res) {
    return res;
  }
  res = `${base.replace(/\/$/, '')}${normalizedPath}`;
  return res;
}

export function createStaticImageSet(baseName: string, options: StaticImageSetOptions = {}): ImageSources {
  const widths = options.widths ?? DEFAULT_WIDTHS;
  const format = options.format ?? 'webp';
  const defaultWidth = options.defaultWidth ?? 400;
  const sizes = options.sizes ?? '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw';

  //WITH BASEURL
  const src = withBaseUrl(`/images/webp-${defaultWidth}/${baseName}.${format}`);
  const srcSet = widths
    .map((width) => `${withBaseUrl(`/images/webp-${width}/${baseName}.${format}`)} ${width}w`)
    .join(', ');

  return { src, srcSet, sizes };
}

export function resolveImageSources(image: string, imageBase?: string): ImageSources {
  if (imageBase) {
    return createStaticImageSet(imageBase);
  }

  return { src: withBaseUrl(image) };
}
