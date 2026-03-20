import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  locale: {
    default: 'en-US',
  },
  layout: {
    title: 'Caesar Aquila',
  },
  base: '/tool/aquila',
  publicPath: '/tool/aquila/',
  npmClient: 'pnpm',
  tailwindcss: {},
});
