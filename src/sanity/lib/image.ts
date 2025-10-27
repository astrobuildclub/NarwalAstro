import { urlForImage as sanityUrlForImage } from "@sanity/astro";
import type { SanityImage } from '../types';

/**
 * Generate optimized image URL from Sanity image source
 */
export function urlForImage(source: SanityImage | null | undefined) {
  if (!source?.asset) {
    return {
      width: () => urlForImage(source),
      height: () => urlForImage(source),
      fit: () => urlForImage(source),
      quality: () => urlForImage(source),
      format: () => urlForImage(source),
      url: () => null
    };
  }

  return sanityUrlForImage(source);
}

/**
 * Generate thumbnail image URL
 */
export function urlForThumbnail(source: SanityImage | null | undefined, size: 'small' | 'default' | 'large' = 'default') {
  if (!source?.asset) return null;

  const sizes = {
    small: { width: 300, height: 200 },
    default: { width: 600, height: 400 },
    large: { width: 900, height: 600 }
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
export function urlForGallery(source: SanityImage | null | undefined, index: number = 0) {
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
