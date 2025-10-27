import { defineType, defineField } from 'sanity';
import { ImagesIcon } from '@sanity/icons';

export default defineType({
  name: 'galleryBlock',
  title: 'Gallery Block',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Gallery Title',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery Images',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Gallery Layout',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Masonry', value: 'masonry' },
          { title: 'Carousel', value: 'carousel' },
        ],
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'columns',
      type: 'number',
      title: 'Columns (Grid Layout)',
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({
      name: 'showCaptions',
      type: 'boolean',
      title: 'Show Captions',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      gallery: 'gallery',
      layout: 'layout',
    },
    prepare({ title, gallery, layout }) {
      return {
        title: title || 'Gallery Block',
        subtitle: `${gallery?.length || 0} images - ${layout} layout`,
        media: 'Gallery',
      };
    },
  },
});
