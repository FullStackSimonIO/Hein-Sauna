// src/collections/Categories.ts
import type { CollectionConfig } from 'payload'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Kategorie',
    plural: 'Kategorien',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'slug'],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },

    {
      name: 'type',
      type: 'select',
      label: 'Kategorie-Typ',
      required: true,
      defaultValue: 'sauna',
      options: [
        { label: 'Sauna-Kategorie', value: 'sauna' },
        { label: 'Blog-Kategorie', value: 'blog' },
        // Weitere Typen bei Bedarf
      ],
      admin: {
        description: 'Wofür wird diese Kategorie verwendet?',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (URL)',
      required: true,
      unique: true,
      admin: {
        description: 'Wird in der URL verwendet, z.B. `/saunas/premium-sauna`',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung (Hero-Text)',
      admin: {
        description: 'Wird im Hero-Block auf der Kategorie-Preview angezeigt',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'previewImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Vorschaubild',
      admin: {
        description: 'Wird als Hero-Hintergrund oder in den Vorschaulinks der Kategorie verwendet',
      },
    },
    // Falls du später noch Blog oder andere Typen separat nutzen willst, genügt dieses Feld
    // und im Frontend filterst du dann nach type === 'sauna'.
  ],
}

export default Categories
