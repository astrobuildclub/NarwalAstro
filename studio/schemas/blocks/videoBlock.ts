import { defineType, defineField } from 'sanity';
import { PlayIcon } from '@sanity/icons';

export default defineType({
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'videoType',
      type: 'string',
      title: 'Video Type',
      options: {
        list: [
          { title: 'Upload (MP4)', value: 'upload' },
          { title: 'YouTube Embed', value: 'youtube' },
          { title: 'Vimeo Embed', value: 'vimeo' },
        ],
      },
      initialValue: 'upload',
    }),
    // Embed fields (YouTube/Vimeo) - following EmbedBlock structure
    // Service is automatically determined from videoType
    defineField({
      name: 'id',
      type: 'string',
      title: 'Video ID',
      description:
        'YouTube: dQw4w9WgXcQ (from https://youtube.com/watch?v=dQw4w9WgXcQ) or Vimeo: 123456789 (from https://vimeo.com/123456789)',
      hidden: ({ parent }) =>
        parent?.videoType !== 'youtube' && parent?.videoType !== 'vimeo',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Video Title',
    }),
    defineField({
      name: 'params',
      type: 'string',
      title: 'Embed Parameters',
      description: 'Optional: autoplay=1&mute=1&loop=1',
      hidden: ({ parent }) =>
        parent?.videoType !== 'youtube' && parent?.videoType !== 'vimeo',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail Image',
      description: 'Custom thumbnail image for the video',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ratio',
      type: 'string',
      title: 'Aspect Ratio',
      options: {
        list: [
          { title: '1:1', value: '1:1' },
          { title: '2:1', value: '2:1' },
          { title: '3:2', value: '3:2' },
          { title: '5:2', value: '5:2' },
          { title: '4:3', value: '4:3' },
          { title: '16:9', value: '16:9' },
          { title: '16:10', value: '16:10' },
          { title: '20:9', value: '20:9' },
          { title: '21:9', value: '21:9' },
          { title: '9:16', value: '9:16' },
          { title: '9:20', value: '9:20' },
        ],
      },
      initialValue: '16:9',
    }),
    defineField({
      name: 'autoscale',
      type: 'boolean',
      title: 'Autoscale',
      initialValue: true,
      hidden: true, // Hidden - always true for responsive videos
    }),
    defineField({
      name: 'widget',
      type: 'boolean',
      title: 'Widget Mode',
      initialValue: false,
      hidden: true, // Hidden - always false for normal video embeds
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: [
          { title: 'Inline (Default)', value: 'inline' },
          { title: 'Popout', value: 'popout' },
          { title: 'Feature', value: 'feature' },
          { title: 'Full Width', value: 'full' },
          { title: 'Inherit', value: 'inherit' },
        ],
      },
      initialValue: 'inline',
    }),
    // Upload fields (MP4)
    defineField({
      name: 'videoFile',
      type: 'file',
      title: 'Video File',
      options: {
        accept: 'video/mp4',
      },
      hidden: ({ parent }) => parent?.videoType !== 'upload',
    }),
    defineField({
      name: 'autoplay',
      type: 'boolean',
      title: 'Autoplay',
      initialValue: false,
      hidden: ({ parent }) => parent?.videoType !== 'upload',
    }),
    defineField({
      name: 'loop',
      type: 'boolean',
      title: 'Loop',
      initialValue: false,
      hidden: ({ parent }) => parent?.videoType !== 'upload',
    }),
    defineField({
      name: 'muted',
      type: 'boolean',
      title: 'Muted',
      initialValue: true,
      hidden: ({ parent }) => parent?.videoType !== 'upload',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      videoType: 'videoType',
      id: 'id',
      size: 'size',
      thumbnail: 'thumbnail',
    },
    prepare({ title, videoType, size, thumbnail }) {
      let subtitle = 'Video Block';
      if (videoType === 'youtube') {
        subtitle = `Video Block • YouTube • ${size || 'inline'}`;
      } else if (videoType === 'vimeo') {
        subtitle = `Video Block • Vimeo • ${size || 'inline'}`;
      } else if (videoType === 'upload') {
        subtitle = `Video Block • MP4 Upload • ${size || 'inline'}`;
      } else {
        subtitle = `Video Block • ${size || 'inline'}`;
      }

      return {
        title: title || 'Video Block',
        subtitle,
        media: thumbnail || PlayIcon,
      };
    },
  },
});
