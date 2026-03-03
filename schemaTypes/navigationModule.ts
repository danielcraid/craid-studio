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
            {name: 'anchor', title: 'Anker (z.B. #philosophy)', type: 'string'},
          ],
          preview: {
            select: {title: 'label_de'},
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
        {name: 'url', title: 'URL', type: 'url'},
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Navigation'}
    },
  },
})
