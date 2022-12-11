import { reactive } from "vue";

const globalProps: GlobalPropsType = reactive({
  $modalMode: false,
  $isSelectMode: false,
});

export default globalProps;
