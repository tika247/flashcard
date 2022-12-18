<template>
  <div class="quiz-contents">
    <div class="quiz-item">
      <div class="quiz-item__num">Q1</div>
      <panel-card-a :text="'taunt'"></panel-card-a>
    </div>

    <ul class="quiz-controller">
      <li>
        <btn-a
          :filename="'icon-ok.svg'"
          :altText="'No problem about this word'"
          :widthNum="'24'"
          :heightNum="'42'"
          :sizeClass="'is-large'"
        >
        </btn-a>
      </li>
      <li>
        <btn-a
          :filename="'icon-miss.svg'"
          :altText="'Could not get this word so preview later'"
          :widthNum="'24'"
          :heightNum="'42'"
          :sizeClass="'is-large'"
        >
        </btn-a>
      </li>
      <li>
        <btn-a
          :filename="'icon-next.svg'"
          :altText="'Go to next word'"
          :widthNum="'24'"
          :heightNum="'42'"
          :sizeClass="'is-large'"
        >
        </btn-a>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, defineProps } from "vue";
import PanelCardA from "../components/PanelCardA.vue";
import BtnA from "./BtnA.vue";

defineComponent({
  name: "PanelCardA",
  components: {
    PanelCardA,
  },
});
defineComponent({
  name: "BtnA",
  components: {
    BtnA,
  },
});
defineProps({
  mode: String,
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
