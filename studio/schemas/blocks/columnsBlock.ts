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
      name: 'columns',
      type: 'array',
      title: 'Columns',
      of: [
        {
          type: 'object',
          name: 'column',
          title: 'Column',
          fields: [
            defineField({
              name: 'contentType',
              type: 'string',
              title: 'Content Type',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' },
                ],
              },
              initialValue: 'text',
            }),
            defineField({
              name: 'title',
              type: 'string',
              title: 'Column Title',
            }),
            defineField({
              name: 'text',
              type: 'text',
              title: 'Text Content',
            }),
            defineField({
              name: 'showText',
              type: 'boolean',
              title: 'Show Text',
              initialValue: true,
            }),
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
              name: 'video',
              type: 'object',
              title: 'Video',
              fields: [
                defineField({
                  name: 'url',
                  type: 'url',
                  title: 'Video URL',
                }),
                defineField({
                  name: 'type',
                  type: 'string',
                  title: 'Video Type',
                  options: {
                    list: [
                      { title: 'Upload', value: 'upload' },
                      { title: 'Vimeo', value: 'vimeo' },
                      { title: 'YouTube', value: 'youtube' },
                    ],
                  },
                }),
              ],
            }),
            defineField({
              name: 'verticalAlign',
              type: 'array',
              title: 'Vertical Alignment',
              of: [{ type: 'string' }],
              options: {
                list: [
                  { title: 'Top', value: 'top' },
                  { title: 'Center', value: 'center' },
                  { title: 'Bottom', value: 'bottom' },
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              contentType: 'contentType',
            },
            prepare({ title, contentType }) {
              return {
                title: title || 'Column',
                subtitle: contentType,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).max(4),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      columns: 'columns',
    },
    prepare({ title, columns }) {
      return {
        title: title || 'Columns Block',
        subtitle: `${columns?.length || 0} columns`,
        media: '📊',
      };
    },
  },
});
