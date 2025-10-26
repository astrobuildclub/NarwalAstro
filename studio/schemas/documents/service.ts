import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Service Name',
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
      name: 'content',
      type: 'text',
      title: 'Service Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Service Icon',
      description: 'Icon name or emoji',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Service Category',
      options: {
        list: [
          { title: 'Design', value: 'design' },
          { title: 'Development', value: 'development' },
          { title: 'Strategy', value: 'strategy' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Consulting', value: 'consulting' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Service',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      initialValue: 0,
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Related Projects',
      of: [
        {
          type: 'reference',
          to: [{ type: 'work' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      icon: 'icon',
    },
    prepare({ title, category, icon }) {
      return {
        title: title || 'Untitled Service',
        subtitle: category,
        media: icon || 'Service',
      };
    },
  },
});
