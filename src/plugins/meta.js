import { createMetaManager, plugin as metaPlugin } from 'vue-meta';

export default (app) => {
  const metaManager = createMetaManager();

  app.use(metaManager);
  app.use(metaPlugin);
};
