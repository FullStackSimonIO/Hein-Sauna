import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Gallery20: Block = {
  slug: 'gallery20',
  interfaceName: 'Gallery20',
  labels: {
    singular: 'Gallery 20',
    plural: 'Gallery 20',
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

export default Gallery20
