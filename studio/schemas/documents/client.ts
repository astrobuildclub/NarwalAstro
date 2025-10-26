import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Client Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Client Description',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Client Logo',
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
      name: 'website',
      type: 'url',
      title: 'Client Website',
    }),
    defineField({
      name: 'industry',
      type: 'string',
      title: 'Industry',
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Client',
      initialValue: false,
    }),
    defineField({
      name: 'projects',
      type: 'array',
      title: 'Related Projects',
      of: [
        {
          type: 'reference',
          to: [{ type: 'work' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      industry: 'industry',
      media: 'logo',
    },
    prepare({ title, industry, media }) {
      return {
        title: title || 'Untitled Client',
        subtitle: industry,
        media: media,
      };
    },
  },
});
