import type { SanityImage } from '../types';

/**
 * Generate optimized image URL from Sanity image source
 */
export function urlForImage(source: SanityImage | null | undefined) {
  if (!source?.asset) {
    const fallbackBuilder = {
      width: () => fallbackBuilder,
      height: () => fallbackBuilder,
      fit: () => fallbackBuilder,
      quality: () => fallbackBuilder,
      format: () => fallbackBuilder,
      url: () => null,
    };
    return fallbackBuilder;
  }

  // Generate Sanity image URL manually
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

  if (!projectId || !dataset) {
    console.warn('Missing Sanity project ID or dataset');
    return {
      width: () => fallbackBuilder,
      height: () => fallbackBuilder,
      fit: () => fallbackBuilder,
      quality: () => fallbackBuilder,
      format: () => fallbackBuilder,
      url: () => null,
    };
  }

  // Extract asset ID from reference (like ImageBlock.astro)
  const assetId = source.asset._ref
    .replace('image-', '')
    .replace(/-jpg$|-png$|-webp$|-gif$/, '');
  const extension = source.asset._ref.includes('-jpg')
    ? 'jpg'
    : source.asset._ref.includes('-png')
      ? 'png'
      : source.asset._ref.includes('-webp')
        ? 'webp'
        : 'jpg';

  // Use the same URL structure as ImageBlock.astro
  const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${assetId}-1280x720.${extension}`;

  return {
    width: (w: number) => ({
      height: (h: number) => ({
        fit: (f: string) => ({
          quality: (q: number) => ({
            format: (fmt: string) => ({
              url: () => `${baseUrl}?w=${w}&h=${h}&fit=${f}&q=${q}&fm=${fmt}`,
            }),
            url: () => `${baseUrl}?w=${w}&h=${h}&fit=${f}&q=${q}`,
          }),
          url: () => `${baseUrl}?w=${w}&h=${h}&fit=${f}`,
        }),
        url: () => `${baseUrl}?w=${w}&h=${h}`,
      }),
      url: () => `${baseUrl}?w=${w}`,
    }),
    url: () => baseUrl,
  };
}

/**
 * Generate thumbnail image URL
 */
export function urlForThumbnail(
  source: SanityImage | null | undefined,
  size: 'small' | 'default' | 'large' = 'default',
) {
  if (!source?.asset) return null;

  const sizes = {
    small: { width: 300, height: 200 },
    default: { width: 600, height: 400 },
    large: { width: 900, height: 600 },
  };

  const { width, height } = sizes[size];

  return urlForImage(source)
    .width(width)
    .height(height)
    .fit('crop')
    .quality(80)
    .url();
}

/**
 * Generate hero image URL
 */
export function urlForHero(source: SanityImage | null | undefined) {
  if (!source?.asset) return null;

  return urlForImage(source)
    .width(1920)
    .height(1080)
    .fit('crop')
    .quality(85)
    .url();
}

/**
 * Generate gallery image URL
 */
export function urlForGallery(
  source: SanityImage | null | undefined,
  index: number = 0,
) {
  if (!source?.asset) return null;

  return urlForImage(source)
    .width(800)
    .height(600)
    .fit('crop')
    .quality(80)
    .url();
}

/**
 * Generate profile image URL
 */
export function urlForProfile(source: SanityImage | null | undefined) {
  if (!source?.asset) return null;

  return urlForImage(source)
    .width(400)
    .height(400)
    .fit('crop')
    .quality(85)
    .url();
}

/**
 * Generate logo image URL
 */
export function urlForLogo(source: SanityImage | null | undefined) {
  if (!source?.asset) return null;

  return urlForImage(source)
    .width(200)
    .height(100)
    .fit('contain')
    .quality(90)
    .url();
}
