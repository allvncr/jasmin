import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/base.scss";
import router from "./router";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
