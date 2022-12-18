import { reactive } from "vue";

const globalProps: GlobalPropsType = reactive({
  $modalMode: {
    type: false,
    index: null,
  },
  $isSelectMode: false,
  $quizMode: {
    type: false,
  },
});

export default globalProps;
