import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text Content',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Text Size',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' }
        ]
      },
      initialValue: 'medium'
    })
  ],
  preview: {
    select: { text: 'text', size: 'size' },
    prepare({ text, size }) {
      return {
        title: text?.substring(0, 50) + '...',
        subtitle: `Text Block (${size})`
      }
    }
  }
})
