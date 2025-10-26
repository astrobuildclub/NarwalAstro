import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'embedBlock',
  title: 'Embed Block',
  type: 'object',
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
        media: '📺',
      };
    },
  },
});
