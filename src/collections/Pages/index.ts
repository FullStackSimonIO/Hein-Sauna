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
import Layout493 from '@/blocks/Layout/Layout493/config'
import Layout356 from '@/blocks/Layout/Layout356/config'
import Layout486 from '@/blocks/Layout/Layout486/config'
import { Layout488 } from '@/blocks/Layout/Layout488/config'
import { Layout352 } from '@/blocks/Layout/Layout352/config'
import { Layout354 } from '@/blocks/Layout/Layout354/config'
import { Layout412 } from '@/blocks/Layout/Layout412/config'
import { Layout413 } from '@/blocks/Layout/Layout413/config'
import { Layout419 } from '@/blocks/Layout/Layout419/config'
import { Layout424 } from '@/blocks/Layout/Layout424/config'
import { Layout425 } from '@/blocks/Layout/Layout425/config'
import { Layout485 } from '@/blocks/Layout/Layout485/config'
import { Layout517 } from '@/blocks/Layout/Layout517/config'
import { Contact1 } from '@/blocks/Contact/Contact1/config'
import { Contact6 } from '@/blocks/Contact/Contact6/config'
import { Contact24 } from '@/blocks/Contact/Contact24/config'
import FAQ1 from '@/blocks/FAQ/FAQ1/config'
import FAQ7 from '@/blocks/FAQ/FAQ7/config'
import Faq3 from '@/blocks/FAQ/FAQ3/config'
import Faq4 from '@/blocks/FAQ/FAQ4/config'
import Faq11 from '@/blocks/FAQ/FAQ11/config'
import Faq13 from '@/blocks/FAQ/FAQ13/config'
import Faq14 from '@/blocks/FAQ/FAQ14/config'
import Faq8 from '@/blocks/FAQ/FAQ8/config'
import Testimonial17 from '@/blocks/Testimonials/Testimonial17/config'
import Testimonial23 from '@/blocks/Testimonials/Testimonial23/config'
import Testimonial32 from '@/blocks/Testimonials/Testimonial32/config'
import Testimonial1 from '@/blocks/Testimonials/Testimonial1/config'
import Testimonial3 from '@/blocks/Testimonials/Testimonial3/config'
import Testimonial18 from '@/blocks/Testimonials/Testimonial18/config'
import Testimonial21 from '@/blocks/Testimonials/Testimonial21/config'
import Testimonial13 from '@/blocks/Testimonials/Testimonial13/config'
import Testimonial26 from '@/blocks/Testimonials/Testimonial26/config'
import Logo1 from '@/blocks/LogoSections/Logo1/config'
import Logo2 from '@/blocks/LogoSections/Logo2/config'
import Logo3 from '@/blocks/LogoSections/Logo3/config'
import Logo4 from '@/blocks/LogoSections/Logo4/config'
import Team1 from '@/blocks/TeamSections/Team1/config'
import Team2 from '@/blocks/TeamSections/Team2/config'
import Team16 from '@/blocks/TeamSections/Team16/config'
import Team18 from '@/blocks/TeamSections/Team18/config'
import Team21 from '@/blocks/TeamSections/Team21/config'
import Team22 from '@/blocks/TeamSections/Team22/config'
import Gallery27 from '@/blocks/GallerySections/Gallery27/config'
import Gallery26 from '@/blocks/GallerySections/Gallery26/config'
import Gallery21 from '@/blocks/GallerySections/Gallery21/config'
import Gallery15 from '@/blocks/GallerySections/Gallery15/config'
import Gallery19 from '@/blocks/GallerySections/Gallery19/config'
import Gallery8 from '@/blocks/GallerySections/Gallery8/config'
import Gallery10 from '@/blocks/GallerySections/Gallery10/config'
import Gallery13 from '@/blocks/GallerySections/Gallery13/config'
import Gallery7 from '@/blocks/GallerySections/Gallery7/config'
import Gallery24 from '@/blocks/GallerySections/Gallery24/config'
import Gallery1 from '@/blocks/GallerySections/Gallery1/config'
import Gallery9 from '@/blocks/GallerySections/Gallery9/config'
import Gallery20 from '@/blocks/GallerySections/Gallery20/config'
import Portfolio from '@/blocks/PortfolioSections/config'

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
                Layout493,
                Layout356,
                Layout486,
                Layout488,
                Layout352,
                Layout354,
                Layout412,
                Layout413,
                Layout419,
                Layout424,
                Layout425,
                Layout485,
                Layout517,
                Contact1,
                Contact6,
                Contact24,
                FAQ1,
                FAQ7,
                Faq3,
                Faq4,
                Faq11,
                Faq13,
                Faq14,
                Faq8,
                Testimonial17,
                Testimonial23,
                Testimonial32,
                Testimonial1,
                Testimonial3,
                Testimonial18,
                Testimonial21,
                Testimonial13,
                Testimonial26,
                Logo1,
                Logo2,
                Logo3,
                Logo4,
                Team1,
                Team2,
                Team16,
                Team18,
                Team21,
                Team22,
                Gallery27,
                Gallery26,
                Gallery21,
                Gallery15,
                Gallery19,
                Gallery8,
                Gallery10,
                Gallery13,
                Gallery7,
                Gallery24,
                Gallery1,
                Gallery9,
                Gallery20,
                Portfolio,
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
