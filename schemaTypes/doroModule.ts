import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doroModule',
  title: 'Doro / Digital Office Section',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'text_de', title: 'Text (DE)', type: 'string'},
            {name: 'text_en', title: 'Text (EN)', type: 'string'},
            {name: 'icon', title: 'Icon Name', type: 'string', description: 'z.B. MessageCircle, Clock, Zap'},
          ],
          preview: {
            select: {title: 'text_de'},
          },
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA Button',
      type: 'object',
      fields: [
        {name: 'label_de', title: 'Label (DE)', type: 'string'},
        {name: 'label_en', title: 'Label (EN)', type: 'string'},
        {name: 'url', title: 'URL', type: 'url'},
      ],
    }),
    defineField({
      name: 'chatMessages',
      title: 'Chat-Vorschau Nachrichten',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'text_de', title: 'Text (DE)', type: 'text', rows: 2},
            {name: 'text_en', title: 'Text (EN)', type: 'text', rows: 2},
            {name: 'sender', title: 'Absender', type: 'string', options: {list: ['doro', 'user']}},
          ],
          preview: {
            select: {title: 'text_de', subtitle: 'sender'},
          },
        },
      ],
    }),
    defineField({
      name: 'stageImage',
      title: 'Hintergrundbild',
      type: 'image',
      options: {hotspot: true},
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
      initialValue: 5,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Doro / Digital Office'}
    },
  },
})
