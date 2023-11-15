import groupBy from 'lodash-es/groupBy';
import { keyToPath } from './';

const _LAYOUT = '/_layout';

export function byLongestLatest(a, b) {
  return a.length - b.length;
}

function _isLayout(route) {
  return route.id?.endsWith(_LAYOUT);
}

function existsLayout(routes) {
  return routes.some((route) => route.path?.endsWith(_LAYOUT));
}

export function transformRoutes(modules) {
  const routes = [];
  Object.keys(modules).map((key) => {
    const path = keyToPath(key);
    const module = modules[key];
    routes.push({
      id: path || 'home',
      path: path || '/',
      component: module,
    });
  });
  return routes;
}

export function generatorRoutes(routes = []) {
  const layoutRoutes = routes.filter(_isLayout);
  const nestedRoutes = layoutRoutes.map((route) => {
    const children = routes.filter((r) => r.id !== route.id && r.id.startsWith(route.id.replace(_LAYOUT, '')));
    return {
      ...route,
      path: route.path.replace(_LAYOUT, ''),
      children,
    };
  });

  const newRoutes = routes.filter((route) => {
    if (route.id === '/') return true;
    return !_isLayout(route) && !layoutRoutes.some((layout) => route.id.startsWith(layout.id.replace(_LAYOUT, '')));
  });

  newRoutes.push(...nestedRoutes);

  return newRoutes;
}

export function getConfigRoutes(opts) {
  const { modules, excludeLayoutPages = [] } = opts;
  const routes = transformRoutes(modules);

  const groups = groupBy(routes, (route) => {
    const { path } = route;
    const isExclude = excludeLayoutPages.some((excludePath) => {
      return path === excludePath;
    });
    return isExclude ? 'excludes' : 'includes';
  });

  const { includes = [], excludes = [] } = groups;
  const includesRoutes = existsLayout(includes)
    ? generatorRoutes(includes.sort((a, b) => byLongestLatest(a.id, b.id)))
    : includes;
  const excludeRoutes = existsLayout(excludes)
    ? generatorRoutes(excludes.sort((a, b) => byLongestLatest(a.id, b.id)))
    : excludes;

  const rootRoute = {
    id: 'root',
    path: '/',
    component: () => import('@/layouts/index.vue'),
    children: includesRoutes,
  };

  return [rootRoute, ...excludeRoutes];
}
