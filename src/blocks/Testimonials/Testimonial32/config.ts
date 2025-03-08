import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Testimonial32: Block = {
  slug: 'test32',
  interfaceName: 'Testimonial32',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'richText',
      type: 'richText',
      label: 'Text',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Testimonial Quote',
        },
        {
          name: 'numberOfStars',
          type: 'number',
          required: true,
          label: 'Number of Stars',
          min: 1,
          max: 5,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media', // Ensure you have a media collection
          label: 'Avatar',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Person Name',
        },
        {
          name: 'position',
          type: 'text',
          label: 'Job Position',
        },
        {
          name: 'companyName',
          type: 'text',
          label: 'Company Name',
        },
      ],
    },
  ],
}

export default Testimonial32
