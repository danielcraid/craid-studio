import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigationModule',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'logoIcon',
      title: 'Logo Icon (klein, fuer Mobile)',
      type: 'image',
    }),
    defineField({
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label_de', title: 'Label (DE)', type: 'string'},
            {name: 'label_en', title: 'Label (EN)', type: 'string'},
            {
              name: 'href',
              title: 'Ziel (Pfad oder Anker)',
              type: 'string',
              description:
                'Interne Route (z.B. "/contact", "/insights"), Anker auf Home (z.B. "#services") oder externe URL (https://...). Anker funktionieren auch von Sub-Pages aus — sie werden automatisch zur Home-Page aufgelöst.',
            },
          ],
          preview: {
            select: {title: 'label_de', subtitle: 'href'},
          },
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {name: 'label_de', title: 'Label (DE)', type: 'string'},
        {name: 'label_en', title: 'Label (EN)', type: 'string'},
        {name: 'url', title: 'URL', type: 'string', description: 'Pfad (z.B. "/contact") oder externe URL (https://...).'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Navigation'}
    },
  },
})
