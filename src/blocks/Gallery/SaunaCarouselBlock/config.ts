import { Block } from 'payload'

export const SaunaCarouselBlock: Block = {
  slug: 'saunaCarousel',
  interfaceName: 'SaunaCarouselBlock',
  labels: {
    singular: 'Sauna Galerie',
    plural: 'Sauna Galerien',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Galerie-Überschrift',
      required: false,
    },
    {
      name: 'images',
      label: 'Bilder',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Bild',
          required: true,
        },
        {
          name: 'imageTitle',
          type: 'text',
          label: 'Bild-Überschrift',
          required: false,
        },
        {
          name: 'imageDescription',
          type: 'richText',
          label: 'Bild-Beschreibung',
          required: false,
        },
      ],
    },
  ],
}

export default SaunaCarouselBlock
