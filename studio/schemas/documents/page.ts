import { defineType, defineField } from 'sanity';
import { DocumentIcon } from '@sanity/icons';

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'homepage',
      title: 'Homepage Settings',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: (Rule) => Rule.required().min(3).max(100),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (!slug?.current) return 'Slug is required';
          if (!/^[a-z0-9-]+$/.test(slug.current)) {
            return 'Slug can only contain lowercase letters, numbers, and hyphens';
          }
          return true;
        }),
      group: 'content',
    }),
    defineField({
      name: 'pageType',
      type: 'string',
      title: 'Page Type',
      options: {
        list: [
          { title: 'Homepage', value: 'homepage' },
          { title: 'Default', value: 'default' },
          { title: 'About', value: 'about' },
          { title: 'Services', value: 'services' },
          { title: 'Contact', value: 'contact' },
          { title: 'Work Overview', value: 'work' },
        ],
      },
      initialValue: 'default',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'introCols',
      type: 'array',
      title: 'Intro Columns',
      description: 'Maximum 2 columns for intro text',
      of: [
        {
          type: 'object',
          name: 'introColumn',
          title: 'Intro Column',
          fields: [
            defineField({
              name: 'content',
              type: 'array',
              title: 'Column Content',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H3', value: 'h3' },
                    { title: 'H4', value: 'h4' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
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
          ],
          preview: {
            select: {
              content: 'content',
            },
            prepare({ content }) {
              const text = content?.[0]?.children?.[0]?.text || 'Empty column';
              return {
                title:
                  text?.substring(0, 50) + (text?.length > 50 ? '...' : ''),
                subtitle: 'Intro Column',
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(2),
      group: 'content',
    }),
    defineField({
      name: 'slides',
      type: 'array',
      title: 'Homepage Carousel Slides',
      description: 'Only visible on homepage',
      hidden: ({ document }) => document?.pageType !== 'homepage',
      of: [{ type: 'slide' }],
      validation: (Rule) => Rule.max(10),
      group: 'homepage',
    }),
    defineField({
      name: 'featuredProjects',
      type: 'array',
      title: 'Featured Projects',
      description: 'Only visible on homepage',
      hidden: ({ document }) => document?.pageType !== 'homepage',
      of: [{ type: 'reference', to: [{ type: 'work' }] }],
      validation: (Rule) => Rule.max(6),
      group: 'homepage',
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
      group: 'content',
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
          description:
            'Title for search engines (leave empty to use page title)',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Meta Description',
          description: 'Description for search engines',
          rows: 3,
          validation: (Rule) =>
            Rule.max(160).warning(
              'Meta descriptions should be under 160 characters',
            ),
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
          description: 'Image for social media sharing',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        }),
        defineField({
          name: 'canonical',
          type: 'url',
          title: 'Canonical URL',
          description: 'Canonical URL for this page',
        }),
      ],
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
    },
    prepare({ title, pageType }) {
      return {
        title: title || 'Untitled Page',
        subtitle: pageType,
      };
    },
  },
});
