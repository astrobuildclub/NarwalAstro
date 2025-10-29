import { defineType, defineField } from 'sanity';
import { UsersIcon } from '@sanity/icons';

export default defineType({
  name: 'clientsBlock',
  title: 'Clients Block',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Block Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clients',
      type: 'array',
      title: 'Clients',
      of: [
        {
          type: 'reference',
          to: [{ type: 'client' }],
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
          { title: 'Logos', value: 'logos' },
        ],
      },
      initialValue: 'list',
    }),
    defineField({
      name: 'showLogos',
      type: 'boolean',
      title: 'Show Logos',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      clients: 'clients',
      layout: 'layout',
    },
    prepare({ title, clients, layout }) {
      return {
        title: title || 'Clients Block',
        subtitle: `Clients Block • ${layout || 'list'} • ${clients?.length || 0} clients`,
        media: 'Clients',
      };
    },
  },
});
