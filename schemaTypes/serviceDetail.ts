import {defineField, defineType} from 'sanity'

const bilingualString = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: 'object',
    description,
    fields: [
      {name: 'de', title: 'Deutsch', type: 'string'},
      {name: 'en', title: 'English', type: 'string'},
    ],
  })

const bilingualText = (name: string, title: string, rows = 3, description?: string) =>
  defineField({
    name,
    title,
    type: 'object',
    description,
    fields: [
      {name: 'de', title: 'Deutsch', type: 'text', rows},
      {name: 'en', title: 'English', type: 'text', rows},
    ],
  })

export default defineType({
  name: 'serviceDetail',
  title: 'Service Page',
  type: 'document',
  groups: [
    {name: 'identity', title: 'Identity & Hero'},
    {name: 'antiposition', title: 'Anti-Position'},
    {name: 'whatwedo', title: 'What We Do'},
    {name: 'outcomes', title: 'Outcomes'},
    {name: 'framework', title: 'Framework'},
    {name: 'inpractice', title: 'In Practice'},
    {name: 'cta', title: 'Big CTA'},
    {name: 'meta', title: 'SEO & Meta'},
  ],
  fields: [
    // ──────────────────────────── IDENTITY & HERO ────────────────────────────
    defineField({
      name: 'serviceNumber',
      title: 'Service Number',
      type: 'string',
      description: 'Two-digit number with leading zero, e.g. "04". Shown as pink overline above title.',
      group: 'identity',
      validation: (R) => R.required().regex(/^\d{2}$/, {name: 'two digits'}),
    }),
    {...bilingualString('title', 'Title', 'z.B. "Agentic Experience Factory"'), group: 'identity'},
    {...bilingualString('taglinePart1', 'Tagline Teil 1 (Ink)', 'Erste Hälfte des Split-Color Subtitles, dunkler Ton'), group: 'identity'},
    {...bilingualString('taglinePart2', 'Tagline Teil 2 (Slate)', 'Zweite Hälfte, gemuteter Ton'), group: 'identity'},
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'Großes Bild oben rechts neben dem Hero-Text. Atmosphärisch (Smoke / Cloud).',
      group: 'identity',
      options: {hotspot: true},
    }),
    {...bilingualText('pitch', 'Pitch', 3, '1-2 Sätze Hero-Subtext im CRAiD-Voice'), group: 'identity'},
    defineField({
      name: 'heroStats',
      title: 'Hero Stats (max 3)',
      type: 'array',
      group: 'identity',
      description: 'Drei große Pink-Zahlen unter dem Pitch — wie bei MING. Optional aber stark.',
      validation: (R) => R.max(3),
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', title: 'Wert', type: 'string', description: 'z.B. "<90d", "7+", "100%"'},
            bilingualString('label', 'Label'),
            bilingualString('source', 'Quelle (optional)'),
          ],
          preview: {select: {title: 'value', subtitle: 'label.de'}},
        },
      ],
    }),
    defineField({
      name: 'heroCtas',
      title: 'Hero CTAs',
      type: 'object',
      group: 'identity',
      fields: [
        {
          name: 'primary',
          title: 'Primary',
          type: 'object',
          fields: [
            bilingualString('label', 'Label'),
            {name: 'url', title: 'URL', type: 'string'},
          ],
        },
        {
          name: 'secondary',
          title: 'Secondary',
          type: 'object',
          fields: [
            bilingualString('label', 'Label'),
            {name: 'url', title: 'URL', type: 'string'},
          ],
        },
      ],
    }),

    // ──────────────────────────── ANTI-POSITION ────────────────────────────
    defineField({
      name: 'antiPositionEnabled',
      title: 'Anti-Position Section anzeigen?',
      type: 'boolean',
      initialValue: true,
      group: 'antiposition',
    }),
    {...bilingualString('antiPositionOverline', 'Overline (UPPERCASE)', 'z.B. "Was im Markt schiefläuft"'), group: 'antiposition'},
    {...bilingualString('antiPositionHeadlinePart1', 'Headline Teil 1 (Ink)'), group: 'antiposition'},
    {...bilingualString('antiPositionHeadlinePart2', 'Headline Teil 2 (Slate)'), group: 'antiposition'},
    {...bilingualText('antiPositionBody', 'Body Text', 4), group: 'antiposition'},
    defineField({
      name: 'antiPositionStats',
      title: 'Anti-Position Stats (max 3, optional)',
      type: 'array',
      group: 'antiposition',
      validation: (R) => R.max(3),
      of: [
        {
          type: 'object',
          fields: [
            {name: 'value', title: 'Wert', type: 'string'},
            bilingualString('label', 'Label'),
            bilingualString('source', 'Quelle (z.B. "MIT Sloan / BCG, 2024")'),
          ],
          preview: {select: {title: 'value', subtitle: 'label.de'}},
        },
      ],
    }),

    // ──────────────────────────── WHAT WE DO ────────────────────────────
    {...bilingualString('whatWeDoOverline', 'Overline'), group: 'whatwedo'},
    {...bilingualString('whatWeDoHeadlinePart1', 'Headline Teil 1 (Ink)'), group: 'whatwedo'},
    {...bilingualString('whatWeDoHeadlinePart2', 'Headline Teil 2 (Slate)'), group: 'whatwedo'},
    {...bilingualText('whatWeDoIntro', 'Intro Text (optional)', 3), group: 'whatwedo'},
    defineField({
      name: 'whatWeDoCards',
      title: 'Phase Cards (4 Stück bei AEF)',
      type: 'array',
      group: 'whatwedo',
      validation: (R) => R.max(4),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'phaseNumber',
              title: 'Phase Number',
              type: 'string',
              description: 'z.B. "01", "02"',
            },
            bilingualString('mantra', 'Mantra Step', 'z.B. "Get ready to build"'),
            bilingualString('title', 'Phase Titel', 'z.B. "Envision"'),
            bilingualText('description', 'Beschreibung', 5),
            {
              name: 'iconName',
              title: 'Lucide Icon Name',
              type: 'string',
              description: 'z.B. "Compass", "Layers", "Hammer", "Rocket". Aus lucide-react.',
            },
          ],
          preview: {select: {title: 'title.de', subtitle: 'mantra.de'}},
        },
      ],
    }),

    // ──────────────────────────── OUTCOMES ────────────────────────────
    {...bilingualString('outcomesOverline', 'Overline', 'meist "Outcomes" oder "Was ihr bekommt"'), group: 'outcomes'},
    {...bilingualString('outcomesHeadlinePart1', 'Headline Teil 1 (Ink)'), group: 'outcomes'},
    {...bilingualString('outcomesHeadlinePart2', 'Headline Teil 2 (Slate)'), group: 'outcomes'},
    defineField({
      name: 'outcomes',
      title: 'Outcomes (Bullet-Liste)',
      type: 'array',
      group: 'outcomes',
      of: [
        {
          type: 'object',
          fields: [bilingualString('text', 'Outcome')],
          preview: {select: {title: 'text.de'}},
        },
      ],
    }),

    // ──────────────────────────── FRAMEWORK / BUILDING BLOCKS ────────────────────────────
    defineField({
      name: 'frameworkEnabled',
      title: 'Framework / Building Blocks Section anzeigen?',
      type: 'boolean',
      initialValue: false,
      group: 'framework',
    }),
    {...bilingualString('frameworkOverline', 'Overline'), group: 'framework'},
    {...bilingualString('frameworkHeadlinePart1', 'Headline Teil 1 (Ink)'), group: 'framework'},
    {...bilingualString('frameworkHeadlinePart2', 'Headline Teil 2 (Slate)'), group: 'framework'},
    {...bilingualText('frameworkIntro', 'Intro Text', 3), group: 'framework'},
    defineField({
      name: 'frameworkImage',
      title: 'Framework Image (Hexagon / Diagram)',
      type: 'image',
      description: 'Optional. Visualisierung der Building Blocks (z.B. Hexagon-Modell).',
      group: 'framework',
      options: {hotspot: true},
    }),
    defineField({
      name: 'frameworkCards',
      title: 'Framework / Building Block Cards (bei AEF: 6 Säulen)',
      type: 'array',
      group: 'framework',
      validation: (R) => R.max(6),
      of: [
        {
          type: 'object',
          fields: [
            {name: 'anchor', title: 'Visueller Anker', type: 'string', description: 'z.B. "01", "02" oder "A", "B"'},
            bilingualString('label', 'Sub-Label'),
            bilingualString('title', 'Card Titel'),
            bilingualText('description', 'Beschreibung', 4),
            {
              name: 'iconName',
              title: 'Lucide Icon Name',
              type: 'string',
              description: 'z.B. "Target", "Network", "Code", "Workflow", "Users", "HeartHandshake".',
            },
          ],
          preview: {select: {title: 'title.de', subtitle: 'anchor'}},
        },
      ],
    }),
    defineField({
      name: 'frameworkImplication',
      title: 'Implication-Box (optional, dunkler Akzent)',
      type: 'object',
      group: 'framework',
      fields: [
        bilingualString('label', 'Label', 'z.B. "The Implication"'),
        bilingualText('text', 'Punchline', 3),
      ],
    }),

    // ──────────────────────────── IN PRACTICE ────────────────────────────
    defineField({
      name: 'inPracticeEnabled',
      title: 'In-Practice Section anzeigen?',
      type: 'boolean',
      initialValue: true,
      group: 'inpractice',
    }),
    {...bilingualString('inPracticeOverline', 'Overline'), group: 'inpractice'},
    {...bilingualString('inPracticeHeadlinePart1', 'Headline Teil 1 (Ink)'), group: 'inpractice'},
    {...bilingualString('inPracticeHeadlinePart2', 'Headline Teil 2 (Slate)'), group: 'inpractice'},
    {...bilingualText('inPracticeIntro', 'Intro Text', 3), group: 'inpractice'},
    defineField({
      name: 'inPracticeImage',
      title: 'In Practice Image',
      type: 'image',
      description: 'Atmosphärisches Bild oben in der Section.',
      group: 'inpractice',
      options: {hotspot: true},
    }),
    defineField({
      name: 'referencesNote',
      title: 'References Note',
      type: 'object',
      group: 'inpractice',
      description: 'Hinweis auf Referenzen unterhalb der Cards.',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'inPracticeCards',
      title: 'In-Practice Cards (zeigt CRAiD Agents bei der Arbeit)',
      type: 'array',
      group: 'inpractice',
      validation: (R) => R.max(4),
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'avatar',
              title: 'Agent Avatar',
              type: 'image',
              description: 'Klein, kreisrund — das Gesicht des Agents.',
              options: {hotspot: true},
            },
            bilingualString('tag', 'Tag', 'z.B. "Doro · Chief of Staff"'),
            bilingualString('title', 'Titel'),
            bilingualText('description', 'Beschreibung', 4),
          ],
          preview: {select: {title: 'title.de', subtitle: 'tag.de', media: 'avatar'}},
        },
      ],
    }),

    // ──────────────────────────── BIG CTA ────────────────────────────
    {...bilingualString('ctaOverline', 'Overline'), group: 'cta'},
    {...bilingualString('ctaHeadlinePart1', 'Headline Teil 1 (Ink)'), group: 'cta'},
    {...bilingualString('ctaHeadlinePart2', 'Headline Teil 2 (Slate)'), group: 'cta'},
    {...bilingualText('ctaBody', 'Body (optional)', 2), group: 'cta'},
    defineField({
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'object',
      group: 'cta',
      fields: [
        {
          name: 'primary',
          title: 'Primary Button',
          type: 'object',
          fields: [
            bilingualString('label', 'Label'),
            {name: 'url', title: 'URL', type: 'string', initialValue: '/contact'},
          ],
        },
        {
          name: 'secondary',
          title: 'Secondary Button',
          type: 'object',
          fields: [
            bilingualString('label', 'Label'),
            {name: 'url', title: 'URL', type: 'string'},
          ],
        },
      ],
    }),

    // ──────────────────────────── META ────────────────────────────
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'z.B. "delivery-factory" → /services/delivery-factory',
      group: 'meta',
      options: {source: 'title.en', maxLength: 80},
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: 'Nummerische Sortierung in Listings. Niedrig = oben.',
      group: 'meta',
    }),
    defineField({
      name: 'enabled',
      title: 'Service aktiv (sichtbar)',
      type: 'boolean',
      initialValue: true,
      group: 'meta',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Titel',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Beschreibung',
      type: 'text',
      rows: 2,
      group: 'meta',
    }),
  ],
  preview: {
    select: {
      number: 'serviceNumber',
      title: 'title.de',
      slug: 'slug.current',
      enabled: 'enabled',
    },
    prepare({number, title, slug, enabled}) {
      return {
        title: `${number || '??'} · ${title || 'Neuer Service'}`,
        subtitle: `/services/${slug || '...'}${enabled === false ? ' (deaktiviert)' : ''}`,
      }
    },
  },
})
