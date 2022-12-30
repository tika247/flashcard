<template>
  <div class="quiz-contents">
    <div class="quiz-item">
      <div class="quiz-item__num">Q{{ quizNum }}</div>
      <panel-card-c :wordData="returnPanelWordData"></panel-card-c>
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
import { defineComponent, defineProps, Ref, ref, inject, computed } from "vue";
import PanelCardC from "../components/PanelCardC.vue";
import BtnB from "./BtnB.vue";
const $word: Ref<Array<WordType> | null> | undefined = inject("$word");

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
// TODO: adjust value if the word has ok or miss state in API
const currentActiveBtn: Ref<undefined | string> = ref(undefined);
const quizNum: Ref<number> = ref(1);

/**
 * @description decide data to show
 */
const returnPanelWordData = computed(() => {
  if (!($word && $word.value)) {
    return;
  }
  let returnData = null;
  if (quizNum.value) {
    console.log("Next Btn Clicked");
  }
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
 * @description activate next button
 */
const controllActiveBtn = (str: string) => {
  currentActiveBtn.value = str;
};

/**
 * @description return next-btn's active state
 */
const returnNextBtnState = computed(() => {
  if (currentActiveBtn.value) {
    return;
  }

  return true;
});

/**
 * @description go to next quiz
 * @todo reflect state of either of OK or Miss onto API
 */
const goToNextQuiz = () => {
  quizNum.value += 1;
  currentActiveBtn.value = undefined;
};
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
