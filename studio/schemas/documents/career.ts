import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'career',
  title: 'Jobs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Job Title',
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
      name: 'excerpt',
      type: 'text',
      title: 'Job Excerpt',
      description: 'Short description of the position',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Job Content',
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
      name: 'department',
      type: 'string',
      title: 'Department',
      options: {
        list: [
          { title: 'Design', value: 'design' },
          { title: 'Development', value: 'development' },
          { title: 'Strategy', value: 'strategy' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Operations', value: 'operations' },
        ],
      },
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
      options: {
        list: [
          { title: 'Utrecht, Netherlands', value: 'utrecht' },
          { title: 'Remote', value: 'remote' },
          { title: 'Hybrid', value: 'hybrid' },
        ],
      },
    }),
    defineField({
      name: 'employmentType',
      type: 'string',
      title: 'Employment Type',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
        ],
      },
    }),
    defineField({
      name: 'experienceLevel',
      type: 'string',
      title: 'Experience Level',
      options: {
        list: [
          { title: 'Entry Level', value: 'entry' },
          { title: 'Mid Level', value: 'mid' },
          { title: 'Senior Level', value: 'senior' },
          { title: 'Lead Level', value: 'lead' },
        ],
      },
    }),
    defineField({
      name: 'salary',
      type: 'object',
      title: 'Salary Information',
      fields: [
        defineField({
          name: 'min',
          type: 'number',
          title: 'Minimum Salary',
        }),
        defineField({
          name: 'max',
          type: 'number',
          title: 'Maximum Salary',
        }),
        defineField({
          name: 'currency',
          type: 'string',
          title: 'Currency',
          initialValue: 'EUR',
        }),
        defineField({
          name: 'period',
          type: 'string',
          title: 'Period',
          options: {
            list: [
              { title: 'Per Year', value: 'year' },
              { title: 'Per Month', value: 'month' },
              { title: 'Per Hour', value: 'hour' },
            ],
          },
          initialValue: 'year',
        }),
      ],
    }),
    defineField({
      name: 'applicationEmail',
      type: 'string',
      title: 'Application Email',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'applicationUrl',
      type: 'url',
      title: 'Application URL',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published Date',
    }),
    defineField({
      name: 'deadline',
      type: 'datetime',
      title: 'Application Deadline',
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
      department: 'department',
      location: 'location',
    },
    prepare({ title, department, location }) {
      return {
        title: title || 'Untitled Position',
        subtitle: `${department} • ${location}`,
        media: '💼',
      };
    },
  },
});
