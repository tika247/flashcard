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

    <div class="quiz-content" v-else>
      <div class="quiz-item">
        <div class="quiz-item__num">Q1</div>
        <panel-card :text="'taunt'"></panel-card>
      </div>

      <ul class="quiz-controller">
        <li>
          <button class="list-footer__btn">
            <img src="@/assets/img/icon-ok.svg" alt="" width="22" height="33" />
          </button>
        </li>
        <li>
          <button class="list-footer__btn">
            <img
              src="@/assets/img/icon-miss.svg"
              alt=""
              width="22"
              height="33"
            />
          </button>
        </li>
        <li>
          <button class="list-footer__btn">
            <img
              src="@/assets/img/icon-next.svg"
              alt=""
              width="22"
              height="33"
            />
          </button>
        </li>
      </ul>
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
  margin-top: $distance-03;

  > li {
    > button {
      width: 64px;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $color-01;
      box-shadow: $shadow;
      border-radius: 50%;

      > img {
        margin-top: 4px;
      }
    }
  }
}
</style>
