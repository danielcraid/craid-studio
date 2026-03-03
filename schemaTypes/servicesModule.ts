import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'servicesModule',
  title: 'Services Section',
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
      name: 'subtext',
      title: 'Subtext',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'text', rows: 3},
        {name: 'en', title: 'English', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'number', title: 'Nummer (z.B. 01)', type: 'string'},
            {name: 'title_de', title: 'Titel (DE)', type: 'string'},
            {name: 'title_en', title: 'Title (EN)', type: 'string'},
            {name: 'description_de', title: 'Beschreibung (DE)', type: 'text', rows: 4},
            {name: 'description_en', title: 'Description (EN)', type: 'text', rows: 4},
            {name: 'tags', title: 'Tags', type: 'array', of: [{type: 'string'}]},
            {name: 'outcomes_de', title: 'Outcomes (DE)', type: 'string'},
            {name: 'outcomes_en', title: 'Outcomes (EN)', type: 'string'},
            {name: 'badge', title: 'Badge (optional)', type: 'string', description: 'z.B. "Outcome-based"'},
            {name: 'isHighlighted', title: 'Hervorgehoben', type: 'boolean', initialValue: false},
          ],
          preview: {
            select: {title: 'title_de', subtitle: 'number'},
          },
        },
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
      initialValue: 3,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Services Section'}
    },
  },
})
