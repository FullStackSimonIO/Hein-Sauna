import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'

//import { Contact1 } from '@/blocks/contact/Contact1/config'
/* PLOP_IMPORT_BLOCK_CONFIG */

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { revalidateDelete, revalidatePage } from '../Pages/hooks/revalidatePage'
import { Layout1 } from '@/blocks/Layout/Layout1/config'
import Layout209 from '@/blocks/Layout/Layout209/config'
import SaunaCarouselBlock from '@/blocks/Gallery/SaunaCarouselBlock/config'
import AccessoryPreviews from '@/blocks/AccessoriesPreview/config'
import FAQ1 from '@/blocks/FAQ/FAQ1/config'
import Contact1 from '@/blocks/Contact/Contact1/config'

export const Accessories: CollectionConfig<'accessories'> = {
  slug: 'accessories',
  labels: {
    singular: 'Zubehör',
    plural: 'Zubehör',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
    richText: true,
    oldPrice: true,
    newPrice: true,
    image: true,
    categories: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
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
      label: 'Artikel-Beschreibung',
    },
    {
      name: 'oldPrice',
      type: 'number',
      label: 'Preis (UVP)',
      required: true,
      admin: {
        description: 'Preis in Euro (z.B. 29.99)',
      },
    },
    {
      name: 'newPrice',
      type: 'number',
      label: 'Preis (Aktuell)',
      required: false,
      admin: {
        description: 'Aktueller Preis in Euro (z.B. 19.99)',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
    },

    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                Layout1,
                Layout209,
                SaunaCarouselBlock,
                AccessoryPreviews,
                FAQ1,
                Contact1 /*, weitere Blocks hier*/,
              ], // ! HIER DIE CONFIG DES BLOCKS IMPORTIEREN
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Blöcke',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
