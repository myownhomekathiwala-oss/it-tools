import { BrandInstagram } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Instagram font generator',
  path: '/instagram-font-generator',
  description: 'Generate stylish Instagram fonts for Bio, Captions and Stories.',
  keywords: ['instagram', 'font', 'fancy', 'bio', 'stylish'],
  component: () => import('./index.vue'),
  icon: BrandInstagram,
  createdAt: new Date('2024-11-04'),
});
