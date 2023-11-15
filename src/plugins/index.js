import installGlobalProps from './globalProps';
import installMeta from './meta';
import installPinia from './pinia';
import installRouter from './router';
import installVueQuery from './vueQuery';

export default (app) => {
  installRouter(app);
  installPinia(app);
  installMeta(app);
  installVueQuery(app);
  installGlobalProps(app);
};
