import { defineConfig } from '@sanity/cli';

export default defineConfig({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  plugins: ['@sanity/vision'],
  schema: {
    types: [] // Schema types will be imported from src/schemas
  },
  studio: {
    basePath: '/studio'
  }
});