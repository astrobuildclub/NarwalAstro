import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'slide',
  type: 'object',
  title: 'Carousel Slide',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Slide Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Slide Subtitle',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Slide Image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    }),
    defineField({
      name: 'videoUrl',
      type: 'url',
      title: 'Video URL (Vimeo)',
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Slide Link',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
});
