import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'work',
  title: 'Work (Project)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Project Title',
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
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'draft',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short description of the project',
    }),
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Project Hero',
      fields: [
        defineField({
          name: 'details',
          type: 'object',
          title: 'Hero Details',
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
              name: 'color',
              type: 'string',
              title: 'Hero Color',
              description: 'Hex color code for hero background',
            }),
            defineField({
              name: 'coverMedia',
              type: 'boolean',
              title: 'Cover Media',
              description: 'Whether to use media as cover',
            }),
            defineField({
              name: 'media',
              type: 'object',
              title: 'Hero Media',
              fields: [
                defineField({
                  name: 'coverImage',
                  type: 'image',
                  title: 'Cover Image',
                  options: { hotspot: true },
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alt Text',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
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
    }),
    defineField({
      name: 'meta',
      type: 'object',
      title: 'Project Meta',
      fields: [
        defineField({
          name: 'credits',
          type: 'text',
          title: 'Credits',
        }),
        defineField({
          name: 'client',
          type: 'reference',
          title: 'Client',
          to: [{ type: 'client' }],
        }),
        defineField({
          name: 'services',
          type: 'array',
          title: 'Services',
          of: [
            {
              type: 'reference',
              to: [{ type: 'service' }],
            },
          ],
        }),
        defineField({
          name: 'related',
          type: 'array',
          title: 'Related Projects',
          of: [
            {
              type: 'reference',
              to: [{ type: 'work' }],
            },
          ],
        }),
        defineField({
          name: 'thumbnailGroup',
          type: 'object',
          title: 'Thumbnail Group',
          fields: [
            defineField({
              name: 'size',
              type: 'string',
              title: 'Thumbnail Size',
              options: {
                list: [
                  { title: 'Small', value: 'small' },
                  { title: 'Medium', value: 'medium' },
                  { title: 'Large', value: 'large' },
                ],
              },
            }),
            defineField({
              name: 'aspectRatio',
              type: 'string',
              title: 'Aspect Ratio',
              description: 'e.g., 16/9, 4/3, 1/1',
            }),
            defineField({
              name: 'vimeo',
              type: 'url',
              title: 'Vimeo URL',
            }),
            defineField({
              name: 'thumbnail',
              type: 'image',
              title: 'Thumbnail Image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                }),
                defineField({
                  name: 'title',
                  type: 'string',
                  title: 'Title',
                }),
              ],
            }),
          ],
        }),
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
          name: 'metaDesc',
          type: 'text',
          title: 'Meta Description',
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
      status: 'status',
      media: 'hero.details.media.coverImage',
    },
    prepare({ title, status, media }) {
      return {
        title: title || 'Untitled Project',
        subtitle: status,
        media: media,
      };
    },
  },
});
