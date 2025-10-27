import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(3).max(100),
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
      name: 'content',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
        // This enables autocomplete with existing tags
        // Sanity will automatically suggest previously used tags
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      categories: 'categories',
    },
    prepare({ title, categories }) {
      return {
        title: title || 'Untitled Service',
        subtitle: categories?.join(', ') || 'No categories',
      };
    },
  },
});
