import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Gallery1: Block = {
  slug: 'gallery1',
  interfaceName: 'Gallery1',
  labels: {
    singular: 'Gallery 1',
    plural: 'Gallery 1',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      label: 'Images',
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Image URL',
        },
      ],
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default Gallery1
