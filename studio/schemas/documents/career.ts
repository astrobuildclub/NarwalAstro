import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'career',
  title: 'Career (Job Opening)',
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
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          { title: 'Open', value: 'open' },
          { title: 'Closed', value: 'closed' },
          { title: 'Draft', value: 'draft' },
        ],
      },
      initialValue: 'draft',
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
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      department: 'department',
      location: 'location',
    },
    prepare({ title, status, department, location }) {
      return {
        title: title || 'Untitled Position',
        subtitle: `${department} • ${location} • ${status}`,
        media: '💼',
      };
    },
  },
});
