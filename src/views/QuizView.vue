<template>
  <div class="quiz-lyt">
    <hdg-Level02 :hdg="'Word Quiz'" :text="returnSubTitle"></hdg-Level02>
    <ul class="quiz-panel-list" v-if="!quizMode">
      <panel-card-a
        :text="'Review'"
        :is-select-mode="true"
        @click="
          {
            quizMode = 'preview';
          }
        "
      ></panel-card-a>
      <panel-card-a
        :text="'Rondom'"
        :is-select-mode="true"
        @click="
          {
            quizMode = 'random';
          }
        "
      ></panel-card-a>
    </ul>

    <quiz-contents ref="child" :mode="quizMode" v-else></quiz-contents>
  </div>
  <thunderB></thunderB>
</template>

<script setup lang="ts">
import { defineComponent, ref, Ref, computed, watch, onUpdated } from "vue";
import ThunderB from "../components/symbol/ThunderB.vue";
import PanelCardA from "../components/PanelCardA.vue";
import HdgLevel02 from "../components/HdgLevel02.vue";
import QuizContents from "../components/QuizContents.vue";

const child: any = ref(null);

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

/**
 * @description return subTitle text to switch according to mode
 * @returns {string}
 */
const returnSubTitle = computed(() => {
  let returnString = null;
  if (quizMode.value === "preview") {
    returnString = "Preview Mode";
  } else if (quizMode.value === "random") {
    returnString = "Random Mode";
  } else {
    returnString = "Select Quiz Mode";
  }

  return returnString;
});

// TODO: 親のrefによって子でdefineExposeされた値にアクセス。子での変更を反映するには？
let quizMode: Ref<string | undefined> = ref("");
onUpdated(() => {
  quizMode.value = child?.value?.currentMode;
});
</script>

<style lang="scss" scoped>
.quiz-lyt {
  padding: $distance-01 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: $fontSize-01;
  color: #fff;
  text-align: center;
}

.quiz-panel-list {
  display: flex;
  gap: 0 80px;
}
</style>
