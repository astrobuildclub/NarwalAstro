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
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required().custom((slug) => {
        if (!slug?.current) return 'Slug is required';
        if (!/^[a-z0-9-]+$/.test(slug.current)) {
          return 'Slug can only contain lowercase letters, numbers, and hyphens';
        }
        return true;
      }),
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
      slug: 'slug.current',
      media: 'logo',
    },
    prepare({ title, slug, media }) {
      return {
        title: title || 'Untitled Client',
        subtitle: `/${slug || 'no-slug'}`,
        media: media || '🏢',
      };
    },
  },
});
