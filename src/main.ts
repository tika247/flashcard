import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import globalProps from "./store/globalProps";

const vm = createApp(App);
vm.use(router);
vm.provide("$globalProps", globalProps);
vm.mount("#app");
