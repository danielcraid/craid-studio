import {defineField, defineType} from 'sanity'

// All available module types that can be added to pages
const MODULE_TYPES = [
  {type: 'reference', title: 'Hero Section', to: [{type: 'heroModule'}]},
  {type: 'reference', title: 'Navigation', to: [{type: 'navigationModule'}]},
  {type: 'reference', title: 'Philosophy Section', to: [{type: 'philosophyModule'}]},
  {type: 'reference', title: 'Services Section', to: [{type: 'servicesModule'}]},
  {type: 'reference', title: 'Team Section', to: [{type: 'teamModule'}]},
  {type: 'reference', title: 'Doro Section', to: [{type: 'doroModule'}]},
  {type: 'reference', title: 'Report Section', to: [{type: 'reportModule'}]},
  {type: 'reference', title: 'Footer Section', to: [{type: 'footerModule'}]},
  // Inline-Bausteine für freie Inhalte
  {type: 'textBlock'},
  {type: 'imageBlock'},
  {type: 'ctaBlock'},
  {type: 'richTextBlock'},
]

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
      description: '"home" = Startseite. Sonst z.B. "impressum" → craid.de/impressum',
      options: {
        source: 'title.de',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showNav',
      title: 'Navigation anzeigen',
      type: 'boolean',
      initialValue: true,
      description: 'Navigation oben auf der Seite einblenden',
    }),
    defineField({
      name: 'showFooter',
      title: 'Footer anzeigen',
      type: 'boolean',
      initialValue: true,
      description: 'Footer unten auf der Seite einblenden',
    }),
    defineField({
      name: 'modules',
      title: 'Module & Bausteine',
      description: 'Ziehe Module hierher und sortiere sie per Drag & Drop. Bestehende Sections (Hero, Team etc.) werden als Referenz eingefügt — Änderungen gelten für alle Seiten die dieses Modul nutzen.',
      type: 'array',
      of: MODULE_TYPES,
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
        subtitle: `/${slug === 'home' ? '' : slug || '...'}${enabled === false ? ' (deaktiviert)' : ''}`,
      }
    },
  },
})
