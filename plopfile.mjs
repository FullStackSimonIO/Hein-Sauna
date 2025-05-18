import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { execSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default function plopfile(plop) {
  plop.setActionType('exec', (answers, config) => {
    // config.command enthält den Shell-Befehl
    execSync(config.command, { stdio: 'inherit' })
    // wir geben eine Message zurück, die Plop im Log anzeigt
    return config.message || `exec "${config.command}" completed`
  })

  plop.setGenerator('block', {
    description: 'Erstelle einen neuen Payload-Block',
    prompts: [
      { type: 'input', name: 'name', message: 'Wie soll der Block heißen? (z.B. Contact6)' },
      {
        type: 'input',
        name: 'slug',
        message: 'Welcher slug soll genutzt werden?',
        default: (a) => a.name.toLowerCase(),
      },
      {
        type: 'list',
        name: 'category',
        message: 'In welchem Ordner soll der Block liegen?',
        choices: ['layout', 'contact', 'features', 'cta', 'faq'],
      },
    ],
    actions: [
      // 1) Component.tsx anlegen
      {
        type: 'add',
        path: 'src/blocks/{{category}}/{{name}}/Component.tsx',
        templateFile: path.resolve(
          __dirname,
          'src/block-templates',
          '{{category}}',
          '{{name}}',
          'Component.tsx',
        ),
      },
      // 2) config.ts anlegen
      {
        type: 'add',
        path: 'src/blocks/{{category}}/{{name}}/config.ts',
        templateFile: path.resolve(
          __dirname,
          'src/block-templates',
          '{{category}}',
          '{{name}}',
          'config.ts',
        ),
      },
      // 3) @ts-nocheck entfernen (optional)
      {
        type: 'modify',
        path: 'src/blocks/{{category}}/{{name}}/Component.tsx',
        pattern: /\/\/ @ts-nocheck\r?\n/,
        template: '',
      },
      // 4) Import in RenderBlocks.tsx
      {
        type: 'modify',
        path: 'src/blocks/RenderBlocks.tsx',
        pattern: /(\/\* PLOP_IMPORTS \*\/)/,
        template: `import { {{name}} } from './{{category}}/{{name}}/Component'\n$1`,
      },
      // 5) Registrierung im blockComponents-Objekt (mit slug als Key)
      {
        type: 'modify',
        path: 'src/blocks/RenderBlocks.tsx',
        pattern: /(const blockComponents = \{)/,
        template: `$1\n  '{{slug}}': {{name}},`,
      },
      // 7) PascalCase-Component in Pages-Collection eintragen
      {
        type: 'modify',
        path: 'src/collections/Pages/index.ts',
        pattern: /(blocks:\s*\[[\s\S]*?)(\/\*\s*PLOP_BLOCKS\s*\*\/)/,
        template: `$1
          {{name}},
          $2`,
      },
      // 8) Import der Block-Config in Pages-Collection
      {
        type: 'modify',
        path: 'src/collections/Pages/index.ts', // oder Pages/index.ts
        pattern: /\/\*\s*PLOP_IMPORT_BLOCK_CONFIG\s*\*\//,
        template: `import { {{name}} } from '@/blocks/{{category}}/{{name}}/config'\n$&`,
      },
      {
        type: 'exec',
        command: 'pnpm payload generate:types',
        message: '✅ Payload-Typen regeneriert',
      },
    ],
  })
}
