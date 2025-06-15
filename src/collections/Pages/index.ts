import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

//import { Contact1 } from '@/blocks/contact/Contact1/config'
/* PLOP_IMPORT_BLOCK_CONFIG */

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { Archive } from '@/block-templates/ArchiveBlock/config'
import Header64 from '@/block-templates/Header/Header64/config'
import CategoryPreviews from '@/blocks/CategoryPreview/config'
import Testimonial21 from '@/blocks/Testimonial/Testimonial21/config'
import CTA1 from '@/block-templates/CTA/CTA1/config'
import AccessoryPreviews from '@/blocks/AccessoriesPreview/config'
import Layout348 from '@/blocks/Layout/Layout348/config'
import FAQ1 from '@/blocks/FAQ/FAQ1/config'
import CTA15 from '@/blocks/CTA/CTA15/config'
import Team18 from '@/blocks/Team/Team18/config'
import { Timeline17 } from '@/blocks/Timeline/config'
import Layout29 from '@/blocks/Layout/Layout29/config'
import Gallery1 from '@/blocks/Gallery/Gallery1/config'
import { ShowroomPreview } from '@/blocks/ShowroomPreview/config'
import Contact1 from '@/block-templates/Contact/Contact1/config'
import Gallery10 from '@/blocks/Gallery/Gallery10/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  labels: {
    singular: 'Seite',
    plural: 'Seiten',
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
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                Archive,
                Header64,
                CategoryPreviews,
                Testimonial21,
                CTA1,
                AccessoryPreviews,
                Layout348,
                FAQ1,
                CTA15,
                Team18,
                Timeline17,
                Layout29,
                Gallery1,
                ShowroomPreview,
                Contact1,
                Gallery10,
                /* PLOP_BLOCKS */
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
