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
      title: 'Block Size',
      options: {
        list: [
          { title: 'Inline', value: 'inline' },
          { title: 'Popout', value: 'popout' },
          { title: 'Feature', value: 'feature' },
          { title: 'Full', value: 'full' },
          { title: 'Inherit', value: 'inherit' },
        ],
      },
      initialValue: 'full',
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
