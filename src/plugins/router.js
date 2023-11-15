import { createRouter, createWebHistory } from 'vue-router';
import { getConfigRoutes } from '@/utils/routesConfig';

const modules = import.meta.glob([
  '@/pages/**/*.{vue,tsx}',
  '!**/components/**',
  '!**/model.{ts,js}',
  '!**/services.{ts,js}',
  '!**/utils/**',
  '!**/utils.{ts,js}',
]);
const excludeLayoutPages = ['/user/login', '/user/register', '/404', '/500'];

export default (app) => {
  const routes = getConfigRoutes({
    modules,
    excludeLayoutPages,
  });

  const base = import.meta.env.VITE_APP_BASE;
  const router = createRouter({
    history: createWebHistory(base),
    routes,
    scrollBehavior: () => {
      return { top: 0 };
    },
  });

  app.use(router);
};
