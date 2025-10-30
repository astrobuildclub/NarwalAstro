import { defineType, defineField } from 'sanity';
import { ThListIcon } from '@sanity/icons';

export default defineType({
  name: 'columnsBlock',
  title: 'Columns Block',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Block Title',
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: [
          { title: 'Page', value: 'page' },
          { title: 'Feature', value: 'feature' },
        ],
      },
      initialValue: 'page',
    }),
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [
        { type: 'textBlock' },
        { type: 'imageBlock' },
        { type: 'videoBlock' },
      ],
      validation: (Rule) => Rule.min(2).max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      columns: 'columns',
      size: 'size',
    },
    prepare({ title, columns, size }) {
      const columnTypes =
        columns?.map((col: any) => col._type).join(', ') || 'No columns';
      return {
        title: title || 'Columns Block',
        subtitle: `Columns Block • ${columns?.length || 0} columns (${columnTypes}) • ${size || 'page'}`,
      };
    },
  },
});
