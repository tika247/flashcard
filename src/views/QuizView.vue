<template>
  <div class="quiz-lyt">
    <hdg-Level02 :hdg="'Word Quiz'" :text="returnSubTitle"></hdg-Level02>
    <ul class="quiz-panel-list" v-if="!currentQuizMode">
      <panel-card-a
        :text="'Review'"
        :is-select-mode="true"
        @click="
          {
            currentQuizMode = 'preview';
          }
        "
      ></panel-card-a>
      <panel-card-a
        :text="'Rondom'"
        :is-select-mode="true"
        @click="
          {
            currentQuizMode = 'random';
          }
        "
      ></panel-card-a>
    </ul>

    <quiz-contents
      @eventUpdateMode="updateCurrentQuizMode"
      :mode="currentQuizMode"
      v-else
    ></quiz-contents>
  </div>
  <link-home></link-home>
  <thunderB></thunderB>
</template>

<script setup lang="ts">
import { defineComponent, ref, Ref, computed } from "vue";
import ThunderB from "../components/symbol/ThunderB.vue";
import PanelCardA from "../components/PanelCardA.vue";
import HdgLevel02 from "../components/HdgLevel02.vue";
import QuizContents from "../components/QuizContents.vue";
import LinkHome from "../components/LinkHome.vue";

defineComponent({
  name: "ThunderB",
  components: {
    ThunderB,
  },
});

defineComponent({
  name: "PanelCardA",
  components: {
    PanelCardA,
  },
});

defineComponent({
  name: "HdgLevel02",
  components: {
    HdgLevel02,
  },
});

defineComponent({
  name: "QuizContents",
  components: {
    QuizContents,
  },
});
defineComponent({
  name: "LinkHome",
  components: {
    LinkHome,
  },
});

// Ref
let currentQuizMode: Ref<string | undefined> = ref("");

/**
 * return subTitle text to switch according to mode
 * @returns {string}
 */
const returnSubTitle = computed(() => {
  let returnString = null;
  if (currentQuizMode.value === "preview") {
    returnString = "Preview Mode";
  } else if (currentQuizMode.value === "random") {
    returnString = "Random Mode";
  } else {
    returnString = "Select Quiz Mode";
  }

  return returnString;
});

/**
 * update current
 * @param newMode
 */
const updateCurrentQuizMode = (newMode: any) => {
  currentQuizMode.value = newMode.value;
};
</script>

<style lang="scss" scoped>
.quiz-lyt {
  padding: $distance-01 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > .quiz-panel-list {
    display: flex;
    gap: 0 80px;
  }
}

@include sp {
  .quiz-lyt {
    padding: 40px 0;
    > .quiz-panel-list {
      flex-direction: column;
      gap: 32px 0;
    }
  }
}
</style>
