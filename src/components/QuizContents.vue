<template>
  <div class="quiz-contents">
    <div class="quiz-item">
      <div class="quiz-item__num">Q{{ quizNum }}</div>
      <panel-card-c :wordData="currentWord"></panel-card-c>
    </div>

    <ul class="quiz-controller">
      <li>
        <btn-b
          :filename="'ok'"
          :altText="'No problem about this word'"
          :widthNum="'24'"
          :heightNum="'42'"
          :sizeClass="'is-large'"
          :currentActiveBtn="currentActiveBtn"
          @click="controllActiveBtn('ok')"
        >
        </btn-b>
      </li>
      <li>
        <btn-b
          :filename="'miss'"
          :altText="'Could not get this word so preview later'"
          :widthNum="'24'"
          :heightNum="'42'"
          :sizeClass="'is-large'"
          :currentActiveBtn="currentActiveBtn"
          @click="controllActiveBtn('miss')"
        >
        </btn-b>
      </li>
      <li>
        <btn-b
          :filename="'next'"
          :altText="'Go to next word'"
          :widthNum="'24'"
          :heightNum="'42'"
          :sizeClass="'is-large'"
          :isInactive="returnNextBtnState"
          @click="goToNextQuiz"
        >
        </btn-b>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {
  defineComponent,
  defineProps,
  Ref,
  ref,
  inject,
  computed,
  watch,
} from "vue";
import PanelCardC from "../components/PanelCardC.vue";
import BtnB from "./BtnB.vue";
// const $word: Ref<Array<WordType> | null> | undefined = inject("$word");
const $word: any = inject("$word");

defineComponent({
  name: "PanelCardC",
  components: {
    PanelCardC,
  },
});
defineComponent({
  name: "BtnB",
  components: {
    BtnB,
  },
});
const props = defineProps({
  mode: String,
});

// Ref
const quizNum: Ref<number> = ref(1);
let currentActiveBtn: Ref<undefined | string> = ref(undefined);

/**
 * @description decide data to show
 */
const returnPanelWordData = computed(() => {
  if (!($word && $word.value && quizNum.value)) {
    return;
  }
  let returnData = null;
  if (props.mode === "random") {
    const index = Math.floor(Math.random() * $word.value.length);
    returnData = [$word.value[index], index];
  } else if (props.mode === "preview") {
    const index = 0;
    returnData = [$word.value[index], index];
  }

  // TODO: what if not to use `as`
  return returnData as Array<WordType | null>;
});

/**
 * @description current word
 */
// const currentWord: ComputedRef<Array<WordType | null> | undefined> =
const currentWord: any = returnPanelWordData;

/**
 * @description activate next button
 */
const controllActiveBtn = (str: string) => {
  currentActiveBtn.value = str;
};

/**
 * @description return next-btn's active state
 */
const returnNextBtnState = computed(() => {
  return currentActiveBtn.value ? false : true;
});

/**
 * @description go to next quiz
 */
const goToNextQuiz = () => {
  if (!($word && $word.value && currentWord.value)) {
    return;
  }
  $word.value[currentWord.value[1]].state = currentActiveBtn.value;
  quizNum.value += 1;
  currentActiveBtn.value = undefined;
};

/**
 * @description watch currentWord changes, to reflect  onto an inicial btn state
 */
watch(currentWord, () => {
  currentActiveBtn.value = currentWord.value[0].state
    ? currentWord.value[0].state
    : undefined;
});
</script>

<style scoped lang="scss">
.quiz-contents {
  margin-top: calc(-1 * $distance-02);
  > *:last-child {
    margin-bottom: 0;
  }
}

.quiz-item {
  > *:last-child {
    margin-bottom: 0;
  }

  &__num {
    font-size: $fontSize-04;
    color: $color-05;
    text-align: center;
    font-weight: 500;
    margin-bottom: $distance-03;
  }
}

.quiz-controller {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 40px;
  margin-top: $distance-02;
}
</style>
