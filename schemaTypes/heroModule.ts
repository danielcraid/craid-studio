import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroModule',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'overline',
      title: 'Overline Text',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'headline',
      title: 'Headline (3 Zeilen)',
      type: 'object',
      fields: [
        {name: 'line1_de', title: 'Zeile 1 (DE)', type: 'string'},
        {name: 'line2_de', title: 'Zeile 2 (DE)', type: 'string'},
        {name: 'line3_de', title: 'Zeile 3 (DE) - farbig', type: 'string'},
        {name: 'line1_en', title: 'Line 1 (EN)', type: 'string'},
        {name: 'line2_en', title: 'Line 2 (EN)', type: 'string'},
        {name: 'line3_en', title: 'Line 3 (EN) - colored', type: 'string'},
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
      name: 'cta1',
      title: 'CTA Button 1 (Primary)',
      type: 'object',
      fields: [
        {name: 'label_de', title: 'Label (DE)', type: 'string'},
        {name: 'label_en', title: 'Label (EN)', type: 'string'},
        {name: 'url', title: 'URL', type: 'url'},
      ],
    }),
    defineField({
      name: 'cta2',
      title: 'CTA Button 2 (Secondary)',
      type: 'object',
      fields: [
        {name: 'label_de', title: 'Label (DE)', type: 'string'},
        {name: 'label_en', title: 'Label (EN)', type: 'string'},
        {name: 'anchor', title: 'Anker-Link (z.B. #philosophy)', type: 'string'},
      ],
    }),
    defineField({
      name: 'backgroundType',
      title: 'Background Typ',
      type: 'string',
      options: {
        list: [
          {title: 'Bild', value: 'image'},
          {title: 'Video', value: 'video'},
        ],
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Hintergrundbild',
      type: 'image',
      options: {hotspot: true},
      hidden: ({parent}) => parent?.backgroundType === 'video',
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Hintergrund-Video (URL)',
      type: 'url',
      description: 'URL zum Video (z.B. MP4 auf Cloudinary/Mux)',
      hidden: ({parent}) => parent?.backgroundType !== 'video',
    }),
    defineField({
      name: 'backgroundVideoFile',
      title: 'Hintergrund-Video (Upload)',
      type: 'file',
      options: {accept: 'video/*'},
      hidden: ({parent}) => parent?.backgroundType !== 'video',
    }),
    defineField({
      name: 'overlayColor',
      title: 'Overlay Farbe',
      type: 'string',
      description: 'Hex-Farbe z.B. #0a0a0f',
      initialValue: '#0a0a0f',
    }),
    defineField({
      name: 'overlayOpacity',
      title: 'Overlay Transparenz',
      type: 'number',
      description: '0 = durchsichtig, 100 = undurchsichtig',
      validation: (Rule) => Rule.min(0).max(100),
      initialValue: 70,
    }),
    defineField({
      name: 'cloudImage',
      title: 'Cloud/Atmosphäre Bild',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'iconImage',
      title: 'Floating Icon',
      type: 'image',
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
      initialValue: 1,
    }),
  ],
  preview: {
    select: {title: 'overline.de'},
    prepare({title}) {
      return {title: title || 'Hero Section'}
    },
  },
})
