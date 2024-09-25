import { createApp, h } from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'

const appLifecycles = {}

if (import.meta.env.DEV) {
  createApp(App).mount('#app');
} else {
  const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
      // single-spa v5+ changes element ids on runtime
      domElementGetter: () => {
        let root = document.getElementById('app');
        if (!root) {
          root = document.createElement('div');
          root.id = 'app';
          document.body.appendChild(root);
        }
        return root;
      },
      render() {
        return h(App);
      },
    },
  });

  appLifecycles.bootstrap = vueLifecycles.bootstrap;
  appLifecycles.mount = vueLifecycles.mount;
  appLifecycles.unmount = vueLifecycles.unmount;
}

export const bootstrap = appLifecycles.bootstrap;
export const mount = appLifecycles.mount;
export const unmount = appLifecycles.unmount;
