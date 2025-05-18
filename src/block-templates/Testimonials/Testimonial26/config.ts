import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Testimonial26: Block = {
  slug: 'test26',
  interfaceName: 'Testimonial26',
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
    {
      name: 'description',
      type: 'richText',
      label: 'Beschreibung',
    },
    {
      name: 'testimonials',
      type: 'array',
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
          relationTo: 'media',
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
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default Testimonial26
