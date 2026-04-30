import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'insightItem',
  title: 'Insight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Kurzbeschreibung',
      type: 'object',
      description: '1–3 Sätze. Wird auf der Listing-Page angezeigt.',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'text', rows: 3},
        {name: 'en', title: 'English', type: 'text', rows: 3},
      ],
    }),
    defineField({
      name: 'type',
      title: 'Typ',
      type: 'string',
      options: {
        list: [
          {title: 'Report', value: 'report'},
          {title: 'Research', value: 'research'},
          {title: 'Studie', value: 'studie'},
          {title: 'Article', value: 'article'},
        ],
        layout: 'radio',
      },
      initialValue: 'report',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL (für externe Links)',
      type: 'url',
      description:
        'Wenn der Insight extern liegt (z.B. PDF, externer Blog), hier die URL setzen — der Link öffnet in neuem Tab. Sonst leer lassen und stattdessen einen internen Slug verwenden (Detail-Page kommt später).',
      validation: (R) =>
        R.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (optional, für interne Posts)',
      type: 'slug',
      description:
        'Nur falls intern publiziert. z.B. "ax-readiness-2026" → /insights/ax-readiness-2026 (Detail-Page-Route folgt später).',
      options: {source: 'title.en', maxLength: 80},
    }),
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'date',
      validation: (R) => R.required(),
      initialValue: () => new Date().toISOString().slice(0, 10),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image (optional)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge (optional)',
      type: 'number',
      description: 'Manuelle Sortierung. Niedrig = oben. Sonst wird nach publishedAt sortiert.',
    }),
    defineField({
      name: 'enabled',
      title: 'Sichtbar',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title.de',
      type: 'type',
      publishedAt: 'publishedAt',
      enabled: 'enabled',
      media: 'coverImage',
    },
    prepare({title, type, publishedAt, enabled, media}) {
      const typeLabel = type ? type.charAt(0).toUpperCase() + type.slice(1) : '?'
      return {
        title: title || '(ohne Titel)',
        subtitle: `${typeLabel} · ${publishedAt || '—'}${enabled === false ? ' · deaktiviert' : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Veröffentlicht (neueste zuerst)',
      name: 'publishedDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Manuelle Reihenfolge',
      name: 'manualOrder',
      by: [{field: 'order', direction: 'asc'}, {field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
