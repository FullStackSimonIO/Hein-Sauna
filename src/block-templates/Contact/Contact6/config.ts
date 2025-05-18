import { Block } from 'payload'

export const Contact6: Block = {
  slug: 'contact6',
  interfaceName: 'Contact6',
  labels: {
    singular: 'Kontaktbereich',
    plural: 'Kontaktbereiche',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: false,
      admin: {
        placeholder: 'z. B. „Fragen?“',
        description: 'Kleiner Hinweistext oberhalb der Überschrift.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Überschrift',
      required: true,
      admin: {
        placeholder: 'z. B. „Erreichen Sie uns“',
        description: 'Hauptüberschrift des Kontaktbereichs.',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      label: 'Einleitungstext',
      required: false,
      admin: {
        description: 'Weiterführende Informationen.',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'E-Mail-Adresse',
      required: false,
      admin: {
        placeholder: 'z. B. info@domain.de',
        description: 'Anschauungs-E-Mail oben links.',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefonnummer',
      required: false,
      admin: {
        placeholder: 'z. B. +49 123 456789',
        description: 'Anzeigetext für Telefonkontakt.',
      },
    },
    {
      name: 'address',
      type: 'text',
      label: 'Adresse',
      required: false,
      admin: {
        placeholder: 'z. B. Musterstraße 1, 12345 Stadt',
        description: 'Anschrift, z. B. für Karte o. Ä.',
      },
    },
    {
      name: 'button',
      type: 'group',
      label: 'Button',

      admin: {
        description: 'Text für Senden-Button.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Button-Text',
          required: true,
          admin: {
            placeholder: 'z. B. „Absenden“',
          },
        },
      ],
    },
    {
      name: 'topics',
      type: 'array',
      label: 'Dropdown-Optionen',
      required: true,
      admin: {
        description: 'Werte, die im Themen-Select angezeigt werden.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Wert',
          required: true,
          admin: {
            placeholder: 'z. B. „Allgemein“',
          },
        },
      ],
    },
    {
      name: 'identities',
      type: 'array',
      label: 'Radio-Optionen',
      required: true,
      admin: {
        description: 'Werte, die als Radio-Buttons angezeigt werden.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Wert',
          required: true,
          admin: {
            placeholder: 'z. B. „Privatperson“',
          },
        },
      ],
    },
  ],
}

export default Contact6
