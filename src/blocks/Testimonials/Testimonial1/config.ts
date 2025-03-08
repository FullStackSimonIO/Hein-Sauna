import { linkGroup } from '@/fields/linkGroup'
import { Block } from 'payload'

const Testimonial1: Block = {
  slug: 'test1',
  interfaceName: 'Testimonial1',
  labels: {
    singular: 'Testimonial Block',
    plural: 'Testimonial Blocks',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // Ensure you have a media collection
      label: 'Company Logo',
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Beschreibung',
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
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

export default Testimonial1
