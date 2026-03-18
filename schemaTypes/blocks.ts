import {defineField, defineType} from 'sanity'

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero Banner',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'text', options: {rows: 2} as any},
        {name: 'en', title: 'English', type: 'text', options: {rows: 2} as any},
      ],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Hintergrundbild',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {title: 'headline.de'},
    prepare({title}) {
      return {title: title || 'Hero Banner', subtitle: 'Hero'}
    },
  },
})

const richTextContent = [
  {
    type: 'block',
    styles: [
      {title: 'Normal', value: 'normal'},
      {title: 'H2', value: 'h2'},
      {title: 'H3', value: 'h3'},
      {title: 'H4', value: 'h4'},
      {title: 'Quote', value: 'blockquote'},
    ],
    marks: {
      decorators: [
        {title: 'Bold', value: 'strong'},
        {title: 'Italic', value: 'em'},
        {title: 'Underline', value: 'underline'},
      ],
      annotations: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [{name: 'href', title: 'URL', type: 'url'}],
        },
      ],
    },
  },
  {
    type: 'image',
    options: {hotspot: true},
    fields: [
      {name: 'alt', title: 'Alt Text', type: 'string'},
      {name: 'caption', title: 'Bildunterschrift', type: 'string'},
    ],
  },
]

export const textBlock = defineType({
  name: 'textBlock',
  title: 'Textblock',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Überschrift',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'content_de',
      title: 'Text (Deutsch)',
      type: 'array',
      of: richTextContent,
    }),
    defineField({
      name: 'content_en',
      title: 'Text (English)',
      type: 'array',
      of: richTextContent,
    }),
    defineField({
      name: 'alignment',
      title: 'Ausrichtung',
      type: 'string',
      options: {
        list: [
          {title: 'Links', value: 'left'},
          {title: 'Zentriert', value: 'center'},
        ],
      },
      initialValue: 'left',
    }),
  ],
  preview: {
    select: {title: 'heading.de'},
    prepare({title}) {
      return {title: title || 'Textblock', subtitle: 'Text'}
    },
  },
})

export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Bildblock',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Bildunterschrift',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'fullWidth',
      title: 'Volle Breite',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'alt', media: 'image'},
    prepare({title, media}) {
      return {title: title || 'Bild', subtitle: 'Bild', media}
    },
  },
})

export const richTextBlock = defineType({
  name: 'richTextBlock',
  title: 'Rich Text (Fließtext)',
  type: 'object',
  fields: [
    defineField({
      name: 'content_de',
      title: 'Inhalt (Deutsch)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [{name: 'href', title: 'URL', type: 'url'}],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', title: 'Alt Text', type: 'string'},
            {name: 'caption', title: 'Bildunterschrift', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'content_en',
      title: 'Inhalt (English)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [{name: 'href', title: 'URL', type: 'url'}],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {name: 'alt', title: 'Alt Text', type: 'string'},
            {name: 'caption', title: 'Caption', type: 'string'},
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Rich Text', subtitle: 'Fließtext'}
    },
  },
})

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Überschrift',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'text', options: {rows: 2} as any},
        {name: 'en', title: 'English', type: 'text', options: {rows: 2} as any},
      ],
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Text',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button Link',
      type: 'url',
    }),
    defineField({
      name: 'style',
      title: 'Stil',
      type: 'string',
      options: {
        list: [
          {title: 'Primary (farbig)', value: 'primary'},
          {title: 'Outline', value: 'outline'},
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {title: 'heading.de'},
    prepare({title}) {
      return {title: title || 'CTA', subtitle: 'Call to Action'}
    },
  },
})
