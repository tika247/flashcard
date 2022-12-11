import { reactive } from "vue";

const globalProps: GlobalPropsType = reactive({
  $modalMode: {
    type: false,
  },
  $isSelectMode: false,
});

export default globalProps;
