import { createApp } from "vue";
import App from "./App.vue";
//router
import router from "@/router/router.ts";

import { createPinia } from "pinia";
import { registerPlugins } from "./plugins";

/** Create Vue app */
const vueApp = createApp(App);

/** Register router */
vueApp.use(router);

/** Register plugins */
registerPlugins(vueApp);

/** Register store */
const pinia = createPinia();
vueApp.use(pinia);

// Run!
router
  .isReady()
  .then(() => vueApp.mount("#app"))
  .catch((e) => console.error(e));
