import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'none',
      label: 'Auswahl',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Header 1',
          value: 'header1',
        },
        {
          label: 'Header 5',
          value: 'header5',
        },
        {
          label: 'Header 9',
          value: 'header9',
        },
      ],
      required: true,
    },
    // * Hero Section Title
    {
      name: 'title',
      type: 'text',
      label: 'Hero Section Titel',
      required: true,
    },
    // * Hero Section Rich Text
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Hero Section Fließtext',
    },
    // * Hero Section Links
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      label: 'Hero Section Medien',
      type: 'array', // <-- Jetzt ein Array, damit du mehrere Bilder speichern kannst
      admin: {
        condition: (_, { type } = {}) =>
          [
            'highImpact',
            'mediumImpact',
            'header1',
            'header5',
            'header9',
            'header19',
            'header26',
            'header30',
            'header36',
            'header37',
            'header76',
            'header77',
            'header78',
            'header83',
            'header104',
            'header127',
          ].includes(type),
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Verknüpfung zur Media Collection
          required: true,
        },
      ],
    },
  ],
  label: 'Hero Section Komponente',
}
