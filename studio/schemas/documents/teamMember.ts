import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Full Name',
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
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn URL',
    }),
    defineField({
      name: 'twitter',
      type: 'url',
      title: 'Twitter URL',
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
    },
    prepare({ title, roles, media }) {
      const roleNames =
        roles?.map((role: any) => role.name).join(', ') || 'No roles';
      return {
        title: title || 'Untitled Team Member',
        subtitle: roleNames,
        media: media,
      };
    },
  },
});
