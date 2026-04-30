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
            {
              name: 'label',
              title: 'Label (sprachneutral, optional)',
              type: 'string',
              description: 'Wenn gesetzt, wird dieses Label in beiden Sprachen verwendet. Sonst label_de / label_en nutzen.',
            },
            {name: 'label_de', title: 'Label (DE)', type: 'string'},
            {name: 'label_en', title: 'Label (EN)', type: 'string'},
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Interne Route ("/contact", "/insights"), Anker auf Home ("#services") oder externe URL ("https://...").',
            },
          ],
          preview: {
            select: {title: 'label', subtitle: 'url'},
            prepare({title, subtitle}: {title?: string; subtitle?: string}) {
              return {title: title || subtitle || 'Quick Link', subtitle}
            },
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
