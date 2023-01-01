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
const $word: Ref<Array<WordType>> = inject("$word") as Ref<Array<WordType>>;

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
const currentMode: Ref<string> = ref(props.mode) as Ref<string>;

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

  // TODO: what if not to use `as`
  return returnRandomWord() as unknown as Array<WordType | null>;
});

/**
 * @description return random word
 */
const returnRandomWord = (): Array<WordType | number> | void => {
  let returnWord = null;

  if (currentMode.value === "random") {
    const index = Math.floor(Math.random() * $word.value.length);
    returnWord = [$word.value[index], index];
  }

  if (currentMode.value === "preview") {
    const onlyMissWord = $word.value.filter(
      (obj: WordType) => obj.state === "miss"
    );
    if (!onlyMissWord.length) {
      alert(
        "You don't have any word checked as 'miss'.\nLet's move to random mode!"
      );
      currentMode.value = "random";

      return;
    }
    const index = Math.floor(Math.random() * onlyMissWord.length);
    const indexOfAll = $word.value.indexOf(onlyMissWord[index]);
    returnWord = [onlyMissWord[index], indexOfAll];
  }

  return returnWord as Array<WordType | number>;
};

/**
 * @description current word
 */
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
