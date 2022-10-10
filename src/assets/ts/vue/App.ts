/**
 * import
 */
import { createApp, reactive } from "vue";
import router from "./router/router";
/**
 * Component
 */
import Sample from "./component/sample.vue";

/**
 * set Variable
 */
const App = () => {
  /**
   * set App
   * @returns {void}
   */
  (() => {
    const config = {
      components: {
        Sample,
      },
    };
    // global properties
    let gp = reactive({
      $sample: null,
    });

    // create
    const vm = createApp(config);

    // define plugins
    vm.use(router);

    // provide & mount
    router.isReady().then(() => {
      vm.provide("$gp", gp);
      vm.mount("#app");
    });
  })();
};

export default App;
