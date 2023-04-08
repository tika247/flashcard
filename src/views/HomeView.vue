<template>
  <div class="home-lyt">
    <h1>FLASH CARD APP</h1>
    <thunderA></thunderA>
    <ul class="home-panel-list">
      <panel-card-top :text="'List'" :link="'/list'"></panel-card-top>
      <panel-card-top :text="'Quiz'" :link="'/quiz'"></panel-card-top>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import ThunderA from "../components/symbol/ThunderA.vue";
import PanelCardTop from "../components/PanelCardTop.vue";

defineComponent({
  name: "ThunderA",
  components: {
    ThunderA,
  },
});
defineComponent({
  name: "PanelCardTop",
  components: {
    PanelCardTop,
  },
});
</script>

<style lang="scss" scoped>
.home-lyt {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: $distance-01 0;
  > h1 {
    font-size: $fontSize-01;
    color: #fff;
    text-align: center;
  }
  > .home-panel-list {
    display: flex;
    justify-content: center;
    gap: 0 80px;
  }
}

@include sp {
  .home-lyt {
    height: inherit;
    padding: 40px 0;
    gap: 40px 0;
    gap: 24px 0;
    > h1 {
      font-size: $fontSize-01-sp;
    }
    > .home-panel-list {
      flex-direction: column;
      gap: 40px 0;
    }
  }
}
</style>
