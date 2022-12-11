import { reactive } from "vue";

const globalProps: GlobalPropsType = reactive({
  $isModal: false,
  $isSelectMode: false,
});

export default globalProps;
