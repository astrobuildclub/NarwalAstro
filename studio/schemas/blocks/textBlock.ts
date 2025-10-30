import { defineType, defineField } from 'sanity';
import { TextIcon } from '@sanity/icons';

export default defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'text',
      type: 'array',
      title: 'Text Content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Underline', value: 'underline' },
              { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) => Rule.required(),
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  },
                ],
              },
            ],
          },
        },
      ],
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
          { title: 'Page', value: 'page' },
        ],
      },
      initialValue: 'content',
    }),
  ],
  preview: {
    select: { text: 'text', size: 'size' },
    prepare({ text, size }) {
      const textContent = text?.[0]?.children?.[0]?.text || 'Empty text block';
      const title =
        textContent?.substring(0, 50) + (textContent?.length > 50 ? '...' : '');
      return {
        title,
        subtitle: `Text Block • ${size || 'content'}`,
      };
    },
  },
});
