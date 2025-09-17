import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '../src/schemas'

export default defineConfig({
  name: 'igiehon-foundation',
  title: 'Igiehon Foundation CMS',

  projectId: 'am22ijkm', // Replace with your actual Sanity project ID
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
