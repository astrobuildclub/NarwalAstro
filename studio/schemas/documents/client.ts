import { defineType, defineField } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export default defineType({
  name: 'client',
  title: 'Clients',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Client Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Client Logo',
      description: 'Upload SVG or other image format',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Untitled Client',
        media: media,
      };
    },
  },
});
