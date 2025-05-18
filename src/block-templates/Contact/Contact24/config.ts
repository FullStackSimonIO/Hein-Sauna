// src/blocks/contact/Contact24/config.ts
import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const Contact24: Block = {
  slug: 'contact24',
  interfaceName: 'Contact24',
  labels: {
    singular: 'Contact 24',
    plural: 'Contact 24',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Kleiner Hinweistext',
      required: false,
      admin: {
        placeholder: 'z. B. „So erreichen Sie uns“',
        description: 'Optionaler kurzer Text über der Überschrift.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Unsere Kontaktdaten“',
        description: 'Hauptüberschrift des Kontaktbereichs.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Hier können Sie weitere Details oder Beschreibungen hinzufügen.',
      },
    },
    {
      name: 'contacts',
      type: 'array',
      label: 'Kontakt-Elemente',
      required: true,
      admin: {
        description: 'Fügen Sie hier alle einzelnen Kontaktfelder hinzu.',
        initCollapsed: false,
      },
      fields: [
        {
          name: 'iconType',
          type: 'select',
          label: 'Icon-Typ',
          required: true,
          options: [
            { label: 'E-Mail', value: 'email' },
            { label: 'Telefon', value: 'phone' },
            { label: 'Adresse', value: 'address' },
            { label: 'Nachricht', value: 'message' },
          ],
          admin: {
            description: 'Wählen Sie das Symbol, das vor diesem Kontaktfeld angezeigt wird.',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Titel',
          required: true,
          admin: {
            placeholder: 'z. B. „E-Mail“ oder „Telefon“',
            description: 'Bezeichnung des Kontaktfelds.',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Inhalt',
          required: false,
          admin: {
            placeholder: 'z. B. „info@beispiel.de“ oder „+49 123 456789“',
            description: 'Die tatsächlichen Kontaktdaten.',
          },
        },
        linkGroup({
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}

export default Contact24
