import { defineType, defineField } from 'sanity';
import { ColorWheelIcon } from '@sanity/icons';

export default defineType({
  name: 'colorBlock',
  title: 'Color Block',
  type: 'object',
  icon: ColorWheelIcon,
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
      type: 'string',
      title: 'Background Color',
      description: 'Hex color code (e.g., #ffffff)',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hex color',
          invert: false,
        }),
    }),
    defineField({
      name: 'textColor',
      type: 'string',
      title: 'Text Color',
      description: 'Hex color code (e.g., #000000)',
      validation: (Rule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hex color',
          invert: false,
        }),
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
        media: 'Color',
      };
    },
  },
});
