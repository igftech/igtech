import { defineConfig } from '@sanity/cli';
import { schemaTypes } from './src/schemas';

export default defineConfig({
  projectId: 'am22ijkm', // Replace with your Sanity project ID
  dataset: 'production',
  plugins: ['@sanity/vision'],
  schema: {
    types: schemaTypes
  },
  studio: {
    basePath: '/studio'
  }
});
