// src/collections/Saunas.ts
import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'
import { hero as saunaHero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { revalidateDelete, revalidatePage } from './hooks/revalidateSauba'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'
import { Archive } from '@/block-templates/ArchiveBlock/config'

export const Saunas: CollectionConfig<'saunas'> = {
  slug: 'saunas',
  labels: {
    singular: 'Sauna Modell',
    plural: 'Sauna Modelle',
  },
  access: {
    create: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
    delete: authenticated,
  },
  defaultPopulate: {
    name: true,
    slug: true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'price', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePage],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: { autosave: { interval: 100 }, schedulePublish: true },
    maxPerDoc: 50,
  },
  fields: [
    // Grunddaten
    {
      name: 'name',
      type: 'text',
      label: 'Modellname',
      required: true,
    },
    ...slugField(),

    // Zuordnung zur Category
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false,
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Wähle die Sauna-Kategorie',
      },
    },

    // Technische Daten für Preview-Card
    {
      name: 'previewImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Vorschaubild',
      required: true,
      admin: {
        description: 'Bild für die Kachel-Vorschau',
      },
    },
    {
      name: 'previewDescription',
      type: 'richText',
      label: 'Kurzbeschreibung (Preview)',
      required: true,
      admin: {
        description: 'Wird als Teaser-Text in der Card angezeigt',
      },
    },
    {
      name: 'uvp',
      type: 'number',
      label: 'UVP',
      admin: {
        description: 'Unverbindliche Preisempfehlung',
        step: 0.01,
      },
    },
    {
      name: 'price',
      type: 'number',
      label: 'Aktueller Preis',
      required: true,
      admin: {
        description: 'Dein Verkaufspreis',
        step: 0.01,
      },
    },
    {
      name: 'discount',
      type: 'number',
      label: 'Rabatt (%)',
      admin: {
        description: 'Optionaler Rabatt in Prozent',
        step: 0.1,
      },
    },
    {
      name: 'ctaLink',
      type: 'group',
      label: 'Call-to-Action Button',
      admin: {
        description: 'Link und Label für den Button in der Vorschau',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button-Text',
          required: true,
        },
        {
          name: 'link',
          type: 'group',
          fields: [
            {
              name: 'type',
              type: 'radio',
              options: [
                { label: 'Internal', value: 'reference' },
                { label: 'Custom URL', value: 'custom' },
              ],
              defaultValue: 'reference',
              admin: { layout: 'horizontal' },
            },
            {
              name: 'reference',
              type: 'relationship',
              relationTo: ['pages', 'saunas'],
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference',
              },
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom',
              },
            },
          ],
        },
      ],
    },

    // Hero + Blöcke + SEO
    {
      type: 'tabs',
      tabs: [
        { label: 'Hero', fields: [saunaHero] },
        {
          label: 'Blöcke',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: false,
              blocks: [Archive /*, weitere Blocks hier*/],
              admin: { initCollapsed: true },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    // Sidebar
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
  ],
}

export default Saunas
