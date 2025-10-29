import { defineType, defineField } from 'sanity';
import { CodeIcon } from '@sanity/icons';

export default defineType({
  name: 'embedBlock',
  title: 'Embed Block',
  type: 'object',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Embed Title',
    }),
    defineField({
      name: 'code',
      type: 'text',
      title: 'Embed Code',
      description: 'Paste the iframe embed code here',
      validation: (Rule) => Rule.required(),
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
      name: 'aspectRatio',
      type: 'string',
      title: 'Aspect Ratio',
      description: 'e.g., 16/9, 4/3, 1/1',
      initialValue: '16/9',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      code: 'code',
    },
    prepare({ title, code }) {
      return {
        title: title || 'Embed Block',
        subtitle: code ? code.substring(0, 50) + '...' : 'No embed code',
      };
    },
  },
});
