import { reactive } from "vue";

const globalProps: GlobalPropsType = reactive({
  $isModal: false,
});

export default globalProps;
