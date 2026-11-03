import { Tools } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Instagram font generator',
  path: '/instagram-font-generator',
  description: 'Generate stylish Instagram fonts for Bio and Captions',
  keywords: ['instagram', 'font', 'fancy', 'bio', 'caption'],
  component: () => import('./index.vue'),
  icon: Tools,
  createdAt: new Date(),
});
