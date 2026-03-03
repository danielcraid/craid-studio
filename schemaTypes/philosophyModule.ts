import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'philosophyModule',
  title: 'Philosophy Section',
  type: 'document',
  fields: [
    defineField({
      name: 'overline',
      title: 'Overline',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'object',
      fields: [
        {name: 'line1_de', title: 'Zeile 1 (DE)', type: 'string'},
        {name: 'line2_de', title: 'Zeile 2 (DE) - grau', type: 'string'},
        {name: 'line1_en', title: 'Line 1 (EN)', type: 'string'},
        {name: 'line2_en', title: 'Line 2 (EN) - gray', type: 'string'},
      ],
    }),
    defineField({
      name: 'cards',
      title: 'Philosophy Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title_de', title: 'Titel (DE)', type: 'string'},
            {name: 'title_en', title: 'Title (EN)', type: 'string'},
            {name: 'description_de', title: 'Beschreibung (DE)', type: 'text', rows: 3},
            {name: 'description_en', title: 'Description (EN)', type: 'text', rows: 3},
            {name: 'icon', title: 'Icon Name', type: 'string', description: 'z.B. Sparkles, RefreshCw, Layers'},
          ],
          preview: {
            select: {title: 'title_de'},
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'quote',
      title: 'Zitat',
      type: 'object',
      fields: [
        {name: 'text_de', title: 'Zitat (DE)', type: 'text', rows: 3},
        {name: 'text_en', title: 'Quote (EN)', type: 'text', rows: 3},
        {name: 'author', title: 'Autor', type: 'string'},
      ],
    }),
    defineField({
      name: 'enabled',
      title: 'Modul aktiv',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      initialValue: 2,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Philosophy Section'}
    },
  },
})
