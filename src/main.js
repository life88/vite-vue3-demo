import 'virtual:uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import installPlugins from './plugins';
import './style.css';

const app = createApp(App);
installPlugins(app);
app.mount('#app');
