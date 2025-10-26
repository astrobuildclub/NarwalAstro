import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  // Singleton - only one instance allowed
  __experimental_actions: [
    // 'create',
    'update',
    // 'delete',
    'publish',
    'unpublish',
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Site Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Site URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Site Logo',
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
      name: 'navigation',
      type: 'object',
      title: 'Main Navigation',
      fields: [
        defineField({
          name: 'menuItems',
          type: 'array',
          title: 'Menu Items',
          of: [
            {
              type: 'object',
              name: 'menuItem',
              title: 'Menu Item',
              fields: [
                defineField({
                  name: 'label',
                  type: 'string',
                  title: 'Menu Label',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'link',
                  type: 'link',
                  title: 'Menu Link',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'order',
                  type: 'number',
                  title: 'Menu Order',
                  initialValue: 0,
                }),
              ],
              preview: {
                select: {
                  title: 'label',
                  subtitle: 'link.url',
                },
              },
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'homepage',
      type: 'object',
      title: 'Homepage Settings',
      fields: [
        defineField({
          name: 'content',
          type: 'object',
          title: 'Homepage Content',
          fields: [
            defineField({
              name: 'intro',
              type: 'text',
              title: 'Homepage Intro',
            }),
            defineField({
              name: 'statement',
              type: 'text',
              title: 'Homepage Statement',
            }),
          ],
        }),
        defineField({
          name: 'featured',
          type: 'object',
          title: 'Featured Projects',
          fields: [
            defineField({
              name: 'projects',
              type: 'array',
              title: 'Featured Projects',
              of: [
                {
                  type: 'reference',
                  to: [{ type: 'work' }],
                },
              ],
              validation: (Rule) => Rule.max(6),
            }),
          ],
        }),
        defineField({
          name: 'slides',
          type: 'array',
          title: 'Homepage Carousel Slides',
          of: [
            {
              type: 'slide',
            },
          ],
          validation: (Rule) => Rule.max(10),
        }),
      ],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      title: 'Footer Settings',
      fields: [
        defineField({
          name: 'address',
          type: 'object',
          title: 'Address',
          fields: [
            defineField({
              name: 'company',
              type: 'string',
              title: 'Company Name',
            }),
            defineField({
              name: 'street',
              type: 'string',
              title: 'Street Address',
            }),
            defineField({
              name: 'city',
              type: 'string',
              title: 'City',
            }),
            defineField({
              name: 'country',
              type: 'string',
              title: 'Country',
            }),
          ],
        }),
        defineField({
          name: 'contact',
          type: 'object',
          title: 'Contact Information',
          fields: [
            defineField({
              name: 'phone',
              type: 'string',
              title: 'Phone Number',
            }),
            defineField({
              name: 'email',
              type: 'string',
              title: 'Email Address',
              validation: (Rule) => Rule.email(),
            }),
          ],
        }),
        defineField({
          name: 'social',
          type: 'object',
          title: 'Social Media',
          fields: [
            defineField({
              name: 'instagram',
              type: 'url',
              title: 'Instagram URL',
            }),
            defineField({
              name: 'behance',
              type: 'url',
              title: 'Behance URL',
            }),
            defineField({
              name: 'linkedin',
              type: 'url',
              title: 'LinkedIn URL',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'Default SEO Settings',
      fields: [
        defineField({
          name: 'defaultTitle',
          type: 'string',
          title: 'Default SEO Title',
        }),
        defineField({
          name: 'defaultDescription',
          type: 'text',
          title: 'Default Meta Description',
        }),
        defineField({
          name: 'defaultImage',
          type: 'image',
          title: 'Default Social Image',
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Site Settings',
        subtitle: subtitle || 'Configure your site settings',
        media: '⚙️',
      };
    },
  },
});
