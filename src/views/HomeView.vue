<template>
  <div class="layout">
    <h1>FLASH CARD APP</h1>
    <thunderA></thunderA>
    <ul class="panel-list">
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

<style lang="scss">
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 96px 0;
}

h1 {
  font-size: 7.2rem;
  color: #fff;
  text-align: center;
}

.panel-list {
  display: flex;
  justify-content: center;
  gap: 0 80px;
}
.panel a {
  position: relative;
  width: 320px;
  height: 320px;
  background-color: $color-01;
  font-size: 4rem;
  color: #fff;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: $shadow;
}
.panel__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
