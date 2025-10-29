import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'servicesBlock',
  title: 'Services Block',
  type: 'object',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Block Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Layout',
      options: {
        list: [
          { title: 'List', value: 'list' },
          { title: 'Grid', value: 'grid' },
          { title: 'Cards', value: 'cards' },
        ],
      },
      initialValue: 'list',
    }),
    defineField({
      name: 'showDescriptions',
      type: 'boolean',
      title: 'Show Descriptions',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      services: 'services',
      layout: 'layout',
    },
    prepare({ title, services, layout }) {
      return {
        title: title || 'Services Block',
        subtitle: `Services Block • ${layout || 'list'} • ${services?.length || 0} services`,
        media: 'Services',
      };
    },
  },
});
