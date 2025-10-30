import { defineType, defineField } from 'sanity';
import { ProjectsIcon } from '@sanity/icons';

export default defineType({
  name: 'work',
  title: 'Projects',
  type: 'document',
  icon: ProjectsIcon,
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
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
        defineField({
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        }),
        defineField({
          name: 'intro',
          type: 'text',
          title: 'Intro',
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
            { title: 'Title', value: 'h3' },
            { title: 'Subtitle', value: 'h4' },
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
          description: 'Choose the aspect ratio for the thumbnail',
          options: {
            list: [
              { title: '16:9 (Widescreen)', value: '16:9' },
              { title: '5:4 (Portrait)', value: '5:4' },
              { title: '4:3 (Standard)', value: '4:3' },
              { title: '3:2 (Photo)', value: '3:2' },
              { title: '1:1 (Square)', value: '1:1' },
              { title: '2:3 (Portrait Photo)', value: '2:3' },
              { title: '3:4 (Portrait)', value: '3:4' },
              { title: '4:5 (Portrait)', value: '4:5' },
              { title: '9:16 (Vertical)', value: '9:16' },
            ],
          },
          initialValue: '16:9',
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
          description: 'Canonical URL for this project',
        }),
      ],
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      size: 'thumbnail.size',
      media: 'thumbnail.image',
    },
    prepare({ title, size, media }) {
      return {
        title: title || 'Untitled Project',
        subtitle: size ? `Size: ${size}` : 'No size set',
        media: media,
      };
    },
  },
});
