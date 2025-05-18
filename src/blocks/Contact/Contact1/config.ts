import { Block } from 'payload'

export const Contact1: Block = {
  slug: 'contact1',
  interfaceName: 'Contact1',
  labels: {
    singular: 'Contact 1',
    plural: 'Contact 1',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Kontakt“',
        description: 'Kleiner Hinweistext oberhalb der Überschrift.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Schreib uns!“',
        description: 'Hauptüberschrift des Formulars.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Weiterführende Informationen oder Hinweise.',
      },
    },
    {
      name: 'button',
      type: 'group',
      label: 'Button',

      admin: {
        description: 'Text und Styling für den Senden-Button.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Button-Text',
          required: true,
          admin: {
            placeholder: 'z. B. „Senden“',
            description: 'Beschriftung des Buttons.',
          },
        },
      ],
    },
  ],
}

export default Contact1
