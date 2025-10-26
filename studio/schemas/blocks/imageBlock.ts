import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'imageBlock',
  type: 'object',
  title: 'Image Block',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        },
        { name: 'caption', type: 'string', title: 'Caption' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showCaption',
      type: 'boolean',
      title: 'Show Caption',
      initialValue: false,
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Image Size',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full Width', value: 'full' },
        ],
      },
      initialValue: 'large',
    }),
  ],
  preview: {
    select: { media: 'image', size: 'size' },
    prepare({ media, size }) {
      return {
        title: 'Image Block',
        subtitle: `Size: ${size}`,
        media,
      };
    },
  },
});
