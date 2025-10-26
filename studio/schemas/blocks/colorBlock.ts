import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'colorBlock',
  title: 'Color Block',
  type: 'object',
  fields: [
    defineField({
      name: 'colorMode',
      type: 'string',
      title: 'Color Mode',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
          { title: 'Custom', value: 'custom' },
        ],
      },
      initialValue: 'light',
    }),
    defineField({
      name: 'backgroundColor',
      type: 'color',
      title: 'Background Color',
      options: {
        disableAlpha: true,
      },
    }),
    defineField({
      name: 'textColor',
      type: 'color',
      title: 'Text Color',
      options: {
        disableAlpha: true,
      },
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'object',
          name: 'contentItem',
          title: 'Content Item',
          fields: [
            defineField({
              name: 'type',
              type: 'string',
              title: 'Content Type',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Image', value: 'image' },
                  { title: 'Button', value: 'button' },
                ],
              },
            }),
            defineField({
              name: 'text',
              type: 'text',
              title: 'Text Content',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'button',
              type: 'link',
              title: 'Button Link',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      colorMode: 'colorMode',
      backgroundColor: 'backgroundColor',
    },
    prepare({ colorMode, backgroundColor }) {
      return {
        title: 'Color Block',
        subtitle: `${colorMode} mode`,
        media: '🎨',
      };
    },
  },
});
