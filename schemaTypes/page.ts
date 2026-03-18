import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Seiten',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Seitentitel',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'slug',
      title: 'URL-Pfad',
      type: 'slug',
      description: 'z.B. "impressum", "datenschutz", "doro" → wird zu craid.de/impressum',
      options: {
        source: 'title.de',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Seiten-Typ',
      type: 'string',
      options: {
        list: [
          {title: 'Einfache Textseite', value: 'simple'},
          {title: 'Modulare Seite (Bausteine)', value: 'modular'},
        ],
      },
      initialValue: 'simple',
    }),

    // --- Einfache Textseite ---
    defineField({
      name: 'body_de',
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
      hidden: ({parent}) => parent?.pageType === 'modular',
    }),
    defineField({
      name: 'body_en',
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
      hidden: ({parent}) => parent?.pageType === 'modular',
    }),

    // --- Modulare Seite ---
    defineField({
      name: 'modules',
      title: 'Bausteine',
      type: 'array',
      of: [
        {type: 'heroBlock'},
        {type: 'textBlock'},
        {type: 'imageBlock'},
        {type: 'ctaBlock'},
      ],
      hidden: ({parent}) => parent?.pageType !== 'modular',
    }),

    // --- Meta ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Titel',
      type: 'string',
      description: 'Wird im Browser-Tab angezeigt (optional)',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Beschreibung',
      type: 'text',
      rows: 2,
      description: 'Für Google-Suchergebnisse (optional)',
    }),
    defineField({
      name: 'enabled',
      title: 'Seite aktiv',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title.de',
      slug: 'slug.current',
      enabled: 'enabled',
    },
    prepare({title, slug, enabled}) {
      return {
        title: title || 'Neue Seite',
        subtitle: `/${slug || '...'}${enabled === false ? ' (deaktiviert)' : ''}`,
      }
    },
  },
})
