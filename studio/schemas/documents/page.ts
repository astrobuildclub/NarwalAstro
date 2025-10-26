import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
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
      name: 'template',
      type: 'string',
      title: 'Page Template',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'Default', value: 'default' },
          { title: 'About', value: 'about' },
          { title: 'Contact', value: 'contact' },
          { title: 'Services', value: 'services' },
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'homepageContent',
      type: 'object',
      title: 'Homepage Content',
      hidden: ({ document }) => document?.template !== 'homepage',
      fields: [
        defineField({
          name: 'intro',
          type: 'text',
          title: 'Homepage Intro (Column 1)',
        }),
        defineField({
          name: 'statement',
          type: 'text',
          title: 'Homepage Statement (Column 2)',
        }),
        defineField({
          name: 'slides',
          type: 'array',
          title: 'Homepage Carousel Slides',
          of: [{ type: 'slide' }],
          validation: (Rule) => Rule.max(10),
        }),
        defineField({
          name: 'featuredProjects',
          type: 'array',
          title: 'Featured Projects',
          of: [{ type: 'reference', to: [{ type: 'work' }] }],
          validation: (Rule) => Rule.max(6),
        }),
      ],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page Content',
      of: [
        { type: 'textBlock' },
        { type: 'imageBlock' },
        { type: 'videoBlock' },
        { type: 'embedBlock' },
        { type: 'testimonialBlock' },
        { type: 'columnsBlock' },
        { type: 'colorBlock' },
        { type: 'galleryBlock' },
        { type: 'textGridBlock' },
        { type: 'teamBlock' },
        { type: 'servicesBlock' },
        { type: 'clientsBlock' },
      ],
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'SEO Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Meta Description',
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Social Media Image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        }),
        defineField({
          name: 'canonical',
          type: 'url',
          title: 'Canonical URL',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      template: 'template',
    },
    prepare({ title, template }) {
      return {
        title: title || 'Untitled Page',
        subtitle: template,
      };
    },
  },
});
