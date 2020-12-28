import { UserConfig } from 'vite';
import { resolve } from 'path';

const config: UserConfig = {
  proxy: {
    '/api': {
      target: 'http://localhost:3030',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  optimizeDeps: {
    include: ['ant-design-vue'],
  },
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        'primary-color': '#002060',
      },
      javascriptEnabled: true,
    },
  },
  alias: {
    '/@/': resolve(__dirname, './src/'),
    '/@components/': resolve(__dirname, './src/components/'),
  },
};

export default config;
