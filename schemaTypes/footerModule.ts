import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footerModule',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'text', rows: 2},
        {name: 'en', title: 'English', type: 'text', rows: 2},
      ],
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Label', type: 'string'},
            {name: 'url', title: 'URL', type: 'string'},
          ],
          preview: {
            select: {title: 'label'},
          },
        },
      ],
    }),
    defineField({
      name: 'email',
      title: 'E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'object',
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'url', title: 'URL', type: 'url'},
      ],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'designedBy',
      title: 'Designed by',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Footer'}
    },
  },
})
