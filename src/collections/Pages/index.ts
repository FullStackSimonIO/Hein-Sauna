import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { CTA7 } from '@/blocks/CTA/CTA7/config'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { CTA25 } from '@/blocks/CTA/CTA25/config'
import { CTA1 } from '@/blocks/CTA/CTA1/config'
import { CTA37 } from '@/blocks/CTA/CTA37/config'
import { CTA38 } from '@/blocks/CTA/CTA38/config'
import { CTA33 } from '@/blocks/CTA/CTA33/config'
import { CTA15 } from '@/blocks/CTA/CTA15/config'
import Header64 from '@/blocks/Header/Header64/config'
import Header62 from '@/blocks/Header/Header62/config'
import Header47 from '@/blocks/Header/Header47/config'
import Header50 from '@/blocks/Header/Header50/config'
import Layout366 from '@/blocks/Layout/Layout366/config'
import Layout422 from '@/blocks/Layout/Layout422/config'
import Layout415 from '@/blocks/Layout/Layout415/config'
import Layout458 from '@/blocks/Layout/Layout458/config'
import Layout499 from '@/blocks/Layout/Layout499/config'
import Layout38 from '@/blocks/Layout/Layout38/config'
import Layout66 from '@/blocks/Layout/Layout66/config'
import Layout90 from '@/blocks/Layout/Layout90/config'
import Layout364 from '@/blocks/Layout/Layout364/config'
import Layout348 from '@/blocks/Layout/Layout348/config'
import Layout349 from '@/blocks/Layout/Layout349/config'
import Layout423 from '@/blocks/Layout/Layout423/config'
import Layout353 from '@/blocks/Layout/Layout353/config'
import Layout414 from '@/blocks/Layout/Layout414/config'
import Layout417 from '@/blocks/Layout/Layout417/config'
import Layout351 from '@/blocks/Layout/Layout351/config'
import Layout484 from '@/blocks/Layout/Layout484/config'
export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
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
                CTA7,
                CTA25,
                CTA1,
                CTA37,
                CTA38,
                CTA33,
                CTA15,
                Header64,
                Header62,
                Header47,
                Header50,
                Layout366,
                Layout422,
                Layout415,
                Layout458,
                Layout499,
                Layout38,
                Layout66,
                Layout90,
                Layout364,
                Layout348,
                Layout349,
                Layout423,
                Layout353,
                Layout414,
                Layout417,
                Layout351,
                Layout484,
              ],
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
