import { defineType, defineField } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  // Singleton - only one instance allowed
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site Title',
      validation: (Rule) => Rule.required().min(3).max(60),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Site Description',
      validation: (Rule) => Rule.required().min(10).max(160),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Site URL',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https']
      }),
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
      name: 'defaultSeo',
      type: 'object',
      title: 'Default SEO Settings',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Default SEO Title',
          description: 'Default title for search engines',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Default Meta Description',
          description: 'Default description for search engines',
          rows: 3,
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Default Keywords',
          of: [{ type: 'string' }],
          options: {
            layout: 'tags',
          },
        }),
        defineField({
          name: 'image',
          type: 'image',
          title: 'Default Social Media Image',
          description: 'Default image for social media sharing',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
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
        media: 'Settings',
      };
    },
  },
});
