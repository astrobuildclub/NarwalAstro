import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
})
