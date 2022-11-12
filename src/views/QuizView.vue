<template>
  <div class="quiz-lyt">
    <hdg-Level02 :hdg="'Word Quiz'" :text="'Select Quiz Mode'"></hdg-Level02>
    <ul class="quiz-panel-list" v-if="!quizMode">
      <panel-card
        :text="'Review'"
        @click="
          {
            quizMode = 'Review';
          }
        "
      ></panel-card>
      <panel-card
        :text="'Rondom'"
        @click="
          {
            quizMode = 'Rondom';
          }
        "
      ></panel-card>
    </ul>

    <div class="quiz-item" v-else>
      <div class="quiz-item__num">Q1</div>
      <panel-card :text="'taunt'"></panel-card>
    </div>
  </div>
  <thunderB></thunderB>
</template>

<script setup lang="ts">
import { defineComponent, ref, Ref } from "vue";
import ThunderB from "../components/symbol/ThunderB.vue";
import PanelCard from "../components/PanelCard.vue";
import HdgLevel02 from "../components/HdgLevel02.vue";

defineComponent({
  name: "ThunderB",
  components: {
    ThunderB,
  },
});

defineComponent({
  name: "PanelCard",
  components: {
    PanelCard,
  },
});

defineComponent({
  name: "HdgLevel02",
  components: {
    HdgLevel02,
  },
});

const quizMode: Ref<string | null> = ref(null);
</script>

<style lang="scss" scoped>
.quiz-lyt {
  padding: $distance-01 0;
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
