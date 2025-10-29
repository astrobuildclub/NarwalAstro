import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity-client'
import type { SanityImage } from '../types'

const builder = imageUrlBuilder(client)

/**
 * Generate optimized image URL from Sanity image source
 */
export function urlForImage(source: SanityImage | null | undefined) {
  if (!source?.asset) return null
  return builder.image(source)
}