import { defineType, defineField } from 'sanity';
import { seo } from 'sanity-plugin-seo';

export default defineType({
  name: 'page',
  title: 'Page',
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
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft', value: 'draft' },
        ],
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'isFrontPage',
      type: 'boolean',
      title: 'Is Homepage',
      description: 'Only one page can be the homepage',
      initialValue: false,
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
    ...seo({ name: 'seo' }),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      template: 'template',
    },
    prepare({ title, status, template }) {
      return {
        title: title || 'Untitled Page',
        subtitle: `${template} • ${status}`,
      };
    },
  },
});
