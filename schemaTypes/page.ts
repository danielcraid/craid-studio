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
      description: '"home" = Startseite. Sonst z.B. "impressum", "doro"',
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
    }),
    defineField({
      name: 'showFooter',
      title: 'Footer anzeigen',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'modules',
      title: 'Module & Bausteine',
      description: 'Bestehende Sections als Referenz oder freie Bausteine hinzufuegen. Per Drag & Drop sortieren.',
      type: 'array',
      of: [
        // Eine Referenz die auf ALLE Modul-Typen zeigen kann
        {
          type: 'reference',
          title: 'Bestehendes Modul',
          to: [
            {type: 'heroModule'},
            {type: 'navigationModule'},
            {type: 'philosophyModule'},
            {type: 'servicesModule'},
            {type: 'teamModule'},
            {type: 'doroModule'},
            {type: 'reportModule'},
            {type: 'footerModule'},
          ],
        },
        // Inline-Bausteine
        {type: 'textBlock'},
        {type: 'imageBlock'},
        {type: 'ctaBlock'},
        {type: 'richTextBlock'},
      ],
    }),

    // --- Meta ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Titel',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Beschreibung',
      type: 'text',
      rows: 2,
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
