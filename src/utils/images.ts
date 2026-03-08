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

interface CSSProperties {
  transform?: string;
  [key: string]: string | number | undefined;
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
  const defaultWidth = options.defaultWidth ?? 1600;
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

export function createBackgroundImageSet(baseName: string, options: StaticImageSetOptions = {}): string {
  const widths = options.widths ?? DEFAULT_WIDTHS;
  const format = options.format ?? 'webp';
  const defaultWidth = options.defaultWidth ?? 1600;

  // Skapa URL:er för de olika storlekarna
  const urls = widths.map(width => withBaseUrl(`/images/webp-${width}/${baseName}.${format}`));
  
  // Om endast en storlek efterfrågas, returnera enkel url()
  if (widths.length === 1) {
    return `url(${urls[0]})`;
  }

  // Skapa image-set deklaration med alla storlekar
  // För background-images, använd viewport-bredd responsivitet istället för DPR
  // Men image-set() stöder inte viewport queries, så vi använder defaultWidth som fallback
  const fallbackUrl = withBaseUrl(`/images/webp-${defaultWidth}/${baseName}.${format}`);
  
  return `url(${fallbackUrl})`;
}

export function createInspirationImageSet(baseName: string, options: StaticImageSetOptions = {}): ImageSources {
  // Returnerar src, srcSet och sizes för att användas med <img> taggar
  return createStaticImageSet(baseName, {
    ...options,
    defaultWidth: options.defaultWidth ?? 800,
    sizes: options.sizes ?? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px'
  });
}

export function getInspirationImageUrl(baseName: string, options: StaticImageSetOptions = {}): string {
  // Returnerar bara URL-strängen för thumbnail/preview
  const format = options.format ?? 'webp';
  const width = options.defaultWidth ?? 800;
  return withBaseUrl(`/images/webp-${width}/${baseName}.${format}`);
}

export function getImagePropsFromName(imageName: string | { name: string; rotate?: number, imageText?: string }, options: StaticImageSetOptions = {}): ImageSources & { style?: CSSProperties } {
  // Hantera både strängar och objekt med rotation
  let name: string;
  let rotate: number = 0;
  let imageText: string | undefined = undefined;
  
  if (typeof imageName === 'string') {
    name = imageName;
  } else {
    name = imageName.name;
    rotate = imageName.rotate ?? 0;
    imageText = imageName.imageText;
  }
  
  // Om det är en extern URL eller fullständig path, returnera som enkel src
  if (isExternalUrl(name) || name.includes('.')) {
    const result: ImageSources & { style?: CSSProperties } = { src: name };
    if (rotate !== 0) {
      result.style = { transform: `rotate(${rotate * 90}deg)` };
    }
    return result;
  }
  
  // Annars skapa ett responsivt imageSet från bildnamnet
  const imageSet = createInspirationImageSet(name, options);
  const result: ImageSources & { style?: CSSProperties } = { ...imageSet };
  
  if (rotate !== 0) {
    result.style = { transform: `rotate(${rotate * 90}deg)` };
  }
  
  return result;
}

