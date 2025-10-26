import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'work',
  title: 'Projects',
  type: 'document',
  groups: [
    {
      name: 'hero',
      title: 'Hero',
      default: true,
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Project Details',
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
      title: 'Project Title',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Hero Title',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
          title: 'Hero Subtitle',
        }),
        defineField({
          name: 'intro',
          type: 'text',
          title: 'Hero Intro',
        }),
        defineField({
          name: 'coverMedia',
          type: 'image',
          title: 'Cover Media',
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
          name: 'color',
          type: 'string',
          title: 'Color',
          description: 'Hex color code (e.g., #ff0000)',
        }),
      ],
      group: 'hero',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Project Content',
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
      ],
      group: 'content',
    }),
    defineField({
      name: 'credits',
      type: 'array',
      title: 'Credits',
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
            ],
          },
        },
      ],
      group: 'content',
    }),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      group: 'meta',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      group: 'meta',
    }),
    defineField({
      name: 'thumbnail',
      type: 'object',
      title: 'Thumbnail',
      fields: [
        defineField({
          name: 'image',
          type: 'image',
          title: 'Thumbnail Image',
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
          name: 'size',
          type: 'string',
          title: 'Size',
          options: {
            list: [
              { title: 'Small', value: 'small' },
              { title: 'Default', value: 'default' },
              { title: 'Large', value: 'large' },
            ],
          },
          initialValue: 'default',
        }),
        defineField({
          name: 'video',
          type: 'url',
          title: 'Video URL',
          description: 'Optional video URL for thumbnail',
        }),
        defineField({
          name: 'aspectRatio',
          type: 'string',
          title: 'Aspect Ratio',
          description: 'e.g., 16:9, 4:3, 1:1',
        }),
      ],
      group: 'meta',
    }),
    defineField({
      name: 'client',
      type: 'reference',
      title: 'Client',
      to: [{ type: 'client' }],
      group: 'meta',
    }),
    defineField({
      name: 'relatedProjects',
      type: 'array',
      title: 'Related Projects',
      of: [{ type: 'reference', to: [{ type: 'work' }] }],
      validation: (Rule) => Rule.max(3),
      group: 'meta',
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
            'Title for search engines (leave empty to use project title)',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Meta Description',
          description: 'Description for search engines',
          rows: 3,
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
          description: 'Canonical URL for this project',
        }),
      ],
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'client.title',
      media: 'thumbnail.image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Project',
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
