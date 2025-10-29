export default {
  name: 'embedBlock',
  title: 'Embed Block',
  type: 'object',
  fields: [
    {
      name: 'service',
      title: 'Video Service',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'id',
      title: 'Video ID',
      type: 'string',
      description: 'De ID van de video (bijv. voor YouTube: dQw4w9WgXcQ)',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Titel',
      type: 'string',
      description: 'Optionele titel voor de video'
    },
    {
      name: 'params',
      title: 'Extra Parameters',
      type: 'string',
      description: 'Extra URL parameters (bijv. autoplay=1&mute=1)'
    },
    {
      name: 'thumbnail',
      title: 'Custom Thumbnail',
      type: 'image',
      description: 'Optionele custom thumbnail (laat leeg voor automatische thumbnail)'
    },
    {
      name: 'ratio',
      title: 'Aspect Ratio',
      type: 'string',
      options: {
        list: [
          { title: '16:9 (Widescreen)', value: '16:9' },
          { title: '4:3 (Standard)', value: '4:3' },
          { title: '1:1 (Square)', value: '1:1' },
          { title: '21:9 (Ultrawide)', value: '21:9' },
          { title: '9:16 (Portrait)', value: '9:16' }
        ]
      },
      initialValue: '16:9'
    },
    {
      name: 'autoscale',
      title: 'Auto Scale',
      type: 'boolean',
      description: 'Automatisch schalen van de video',
      initialValue: true
    },
    {
      name: 'size',
      title: 'Grootte',
      type: 'string',
      options: {
        list: [
          { title: 'Inline', value: 'inline' },
          { title: 'Feature', value: 'feature' },
          { title: 'Page', value: 'page' },
          { title: 'Full Width', value: 'full' },
          { title: 'None', value: 'none' }
        ]
      },
      initialValue: 'inline'
    }
  ],
  preview: {
    select: {
      service: 'service',
      id: 'id',
      title: 'title'
    },
    prepare(selection) {
      const { service, id, title } = selection;
      return {
        title: title || `${service} Video`,
        subtitle: `ID: ${id}`
      };
    }
  }
};
