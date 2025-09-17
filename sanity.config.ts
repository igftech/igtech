import { defineConfig } from '@sanity/cli';
import schemaTypes from './src/schemas'   // if sanity.config.ts is in the root


export default defineConfig({
  projectId: 'am22ijkm', // Replace with your Sanity project ID
  dataset: 'production',
  plugins: ['@sanity/vision'],
  schema: {
    types: [
      schemaTypes
           ] // Schema types will be imported from src/schemas
  },
  studio: {
    basePath: '/studio'
  }
});
