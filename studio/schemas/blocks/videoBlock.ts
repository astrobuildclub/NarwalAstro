import { defineType, defineField } from 'sanity';
import { PlayIcon } from '@sanity/icons';

export default defineType({
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Video Title',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Video URL',
      validation: (Rule) => Rule.required(),
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
      initialValue: 'upload',
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: [
          { title: 'Content (Default)', value: 'content' },
          { title: 'Popout', value: 'popout' },
          { title: 'Feature', value: 'feature' },
          { title: 'Full Width', value: 'full' },
        ],
      },
      initialValue: 'content',
    }),
    defineField({
      name: 'autoplay',
      type: 'boolean',
      title: 'Autoplay',
      initialValue: true,
    }),
    defineField({
      name: 'loop',
      type: 'boolean',
      title: 'Loop',
      initialValue: true,
    }),
    defineField({
      name: 'muted',
      type: 'boolean',
      title: 'Muted',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      type: 'type',
    },
    prepare({ title, url, type }) {
      return {
        title: title || 'Video Block',
        subtitle: `${type} - ${url}`,
        media: 'Video',
      };
    },
  },
});
