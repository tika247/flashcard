<template>
  <div class="home-lyt">
    <h1>FLASH CARD APP</h1>
    <thunderA></thunderA>
    <ul class="home-panel-list">
      <li class="panel">
        <router-link to="/list">
          List
          <svg viewBox="0 0 304 304" class="panel__bg">
            <use xlink:href="#thunderA"></use>
          </svg>
        </router-link>
      </li>
      <li class="panel">
        <router-link to="/quiz">
          Quiz
          <svg viewBox="0 0 304 304" class="panel__bg">
            <use xlink:href="#thunderA"></use>
          </svg>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import ThunderA from "../components/symbol/ThunderA.vue";

defineComponent({
  name: "ThunderA",
  components: {
    ThunderA,
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
}

h1 {
  font-size: $fontSize-01;
  color: #fff;
  text-align: center;
}

.home-panel-list {
  display: flex;
  justify-content: center;
  gap: 0 80px;

  .panel {
    a {
      position: relative;
      width: 320px;
      height: 320px;
      background-color: $color-01;
      font-size: $fontSize-02;
      color: #fff;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: $shadow;
      border-radius: 4px;
      overflow: hidden;

      transition: transform 0.3s ease-in-out;

      @include hover {
        transform: scale(1.05);
      }
    }

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
