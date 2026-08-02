import {defineField, defineType} from 'sanity'

/**
 * venturesModule — CRAiD Ventures block.
 *
 * Separate from services: services = "we do X for you", ventures = "we build X
 * ourselves". Each venture is its own product, own brand, own domain. On
 * craid.de they're shown as a compact grid — the venture's own site carries
 * the deep story.
 */
export default defineType({
  name: 'venturesModule',
  title: 'Ventures Section',
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
        {name: 'line2_de', title: 'Zeile 2 (DE) — grau', type: 'string'},
        {name: 'line1_en', title: 'Line 1 (EN)', type: 'string'},
        {name: 'line2_en', title: 'Line 2 (EN) — gray', type: 'string'},
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
      name: 'ventures',
      title: 'Ventures',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'domain', title: 'Domain (display)', type: 'string', description: 'z.B. "pythai.ch"'},
            {name: 'url', title: 'URL', type: 'url'},
            {name: 'tagline_de', title: 'Tagline (DE)', type: 'string', description: '≤ 60 chars — Category / positioning line'},
            {name: 'tagline_en', title: 'Tagline (EN)', type: 'string'},
            {name: 'description_de', title: 'Beschreibung (DE)', type: 'text', rows: 3, description: '1–2 Sätze, was das Venture tut'},
            {name: 'description_en', title: 'Description (EN)', type: 'text', rows: 3},
            {name: 'accentColor', title: 'Accent-Color (HEX)', type: 'string', description: 'Brand-Farbe des Ventures für 4px-Stripe, z.B. #D4A94E für PYTHAI, #1D80F5 für Foresain'},
            {name: 'logo', title: 'Logo (SVG oder PNG, transparent)', type: 'image', options: {hotspot: false}},
            {name: 'stage', title: 'Stage', type: 'string', options: {list: ['Beta', 'Live', 'In Development', 'Pilot']}},
          ],
          preview: {
            select: {title: 'name', subtitle: 'domain', media: 'logo'},
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
      initialValue: 4,
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Ventures Section'}
    },
  },
})
