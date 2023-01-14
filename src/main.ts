import { createApp, ref, Ref } from "vue";
import App from "./App.vue";
import router from "./router";
import globalProps from "./store/globalProps";
import axios from "axios";
const API_GET_URL = "/api/";
const $word: Ref<Array<WordType> | null> = ref(null);

/**
 * @description Getting Data from API → Create Vm
 */
(async () => {
  await axios
    .get(API_GET_URL)
    .then((res) => {
      if (res && res.data) {
        $word.value = res.data;
      } else {
        throw new Error("JSON file does not exsist or broken");
      }
    })
    .catch((err) => {
      alert(err);
    });

  const vm = createApp(App);
  vm.use(router);
  vm.provide("$globalProps", globalProps);
  vm.provide("$word", $word as Ref<Array<WordType>>);
  vm.mount("#app");
})();
