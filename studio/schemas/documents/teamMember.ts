import { defineType, defineField } from 'sanity';
import { UserIcon } from '@sanity/icons';

export default defineType({
  name: 'teamMember',
  title: 'Team',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required().min(2).max(100),
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
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Profile Photo',
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
    defineField({
      name: 'roles',
      type: 'array',
      title: 'Roles',
      of: [
        {
          type: 'object',
          name: 'role',
          title: 'Role',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Role Name',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              title: 'Role Description',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'twitter',
      type: 'url',
      title: 'Twitter URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured Team Member',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      roles: 'roles',
      media: 'featuredImage',
      featured: 'featured',
      email: 'email',
    },
    prepare({ title, roles, media, featured, email }) {
      const roleNames = roles?.map((role: any) => role.name).join(', ') || 'No roles';
      const featuredBadge = featured ? '⭐ ' : '';
      return {
        title: `${featuredBadge}${title || 'Untitled Team Member'}`,
        subtitle: `${roleNames}${email ? ` • ${email}` : ''}`,
        media: media || '👤',
      };
    },
  },
});
