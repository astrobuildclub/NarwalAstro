import { defineType, defineField } from 'sanity';
import { FaceHappyIcon } from '@sanity/icons';

export default defineType({
  name: 'teamBlock',
  title: 'Team Block',
  type: 'object',
  icon: FaceHappyIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Block Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'members',
      type: 'array',
      title: 'Team Members',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
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
          { title: 'Grid', value: 'grid' },
          { title: 'List', value: 'list' },
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
  ],
  preview: {
    select: {
      title: 'title',
      members: 'members',
      layout: 'layout',
    },
    prepare({ title, members, layout }) {
      return {
        title: title || 'Team Block',
        subtitle: `Team Block • ${layout || 'grid'} • ${members?.length || 0} members`,
      };
    },
  },
});
