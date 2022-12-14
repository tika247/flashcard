import { reactive } from "vue";

const globalProps: GlobalPropsType = reactive({
  $modalMode: {
    type: false,
    index: null,
  },
  $isSelectMode: false,
});

export default globalProps;
