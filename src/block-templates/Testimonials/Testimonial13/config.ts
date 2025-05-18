import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const Testimonial13: Block = {
  slug: 'test13',
  interfaceName: 'Testimonial13',
  labels: {
    singular: 'Testimonial 13',
    plural: 'Testimonial 13',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Testimonial Image',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Company Logo',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial Quote',
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Beschreibung',
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default Testimonial13
