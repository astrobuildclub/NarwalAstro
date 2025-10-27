import { defineType, defineField } from 'sanity';
import { ThLargeIcon } from '@sanity/icons';

export default defineType({
  name: 'textGridBlock',
  title: 'Text Grid Block',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Block Title',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Grid Items',
      of: [
        {
          type: 'object',
          name: 'gridItem',
          title: 'Grid Item',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Item Title',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              type: 'text',
              title: 'Item Text',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              text: 'text',
            },
            prepare({ title, text }) {
              return {
                title: title || 'Grid Item',
                subtitle: text?.substring(0, 50) + '...',
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'media',
      type: 'object',
      title: 'Media',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            }),
          ],
        }),
        defineField({
          name: 'imgposition',
          type: 'string',
          title: 'Image Position',
          options: {
            list: [
              { title: 'Left', value: 'left' },
              { title: 'Right', value: 'right' },
            ],
          },
          initialValue: 'left',
        }),
      ],
    }),
    defineField({
      name: 'columns',
      type: 'number',
      title: 'Grid Columns',
      description: 'Number of columns when no image is present',
      initialValue: 3,
      validation: (Rule) => Rule.min(1).max(6),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
      media: 'media.image',
    },
    prepare({ title, items, media }) {
      return {
        title: title || 'Text Grid Block',
        subtitle: `${items?.length || 0} items`,
        media: media || '📝',
      };
    },
  },
});
