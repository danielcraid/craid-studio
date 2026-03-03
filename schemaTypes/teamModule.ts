import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamModule',
  title: 'Team Section',
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
        {name: 'de', title: 'Deutsch', type: 'text', rows: 4},
        {name: 'en', title: 'English', type: 'text', rows: 4},
      ],
    }),
    defineField({
      name: 'founder',
      title: 'Founder',
      type: 'object',
      fields: [
        {name: 'name', title: 'Name', type: 'string'},
        {name: 'role_de', title: 'Rolle (DE)', type: 'string'},
        {name: 'role_en', title: 'Role (EN)', type: 'string'},
        {name: 'image', title: 'Foto', type: 'image', options: {hotspot: true}},
        {name: 'linkedin', title: 'LinkedIn URL', type: 'url'},
      ],
    }),
    defineField({
      name: 'agentsLabel',
      title: 'Agenten-Label',
      type: 'object',
      fields: [
        {name: 'de', title: 'Deutsch', type: 'string'},
        {name: 'en', title: 'English', type: 'string'},
      ],
    }),
    defineField({
      name: 'agents',
      title: 'AI Agenten',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'role', title: 'Rolle', type: 'string'},
            {name: 'task_de', title: 'Aufgabe (DE)', type: 'string'},
            {name: 'task_en', title: 'Task (EN)', type: 'string'},
            {name: 'avatar', title: 'Avatar', type: 'image'},
          ],
          preview: {
            select: {title: 'name', subtitle: 'role'},
          },
        },
      ],
    }),
    defineField({
      name: 'bottomText',
      title: 'Text unten',
      type: 'object',
      fields: [
        {name: 'line1_de', title: 'Zeile 1 (DE)', type: 'string'},
        {name: 'line2_de', title: 'Zeile 2 (DE)', type: 'string'},
        {name: 'cta_de', title: 'CTA (DE)', type: 'string'},
        {name: 'line1_en', title: 'Line 1 (EN)', type: 'string'},
        {name: 'line2_en', title: 'Line 2 (EN)', type: 'string'},
        {name: 'cta_en', title: 'CTA (EN)', type: 'string'},
        {name: 'email', title: 'E-Mail', type: 'string'},
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
      return {title: 'Team Section'}
    },
  },
})
