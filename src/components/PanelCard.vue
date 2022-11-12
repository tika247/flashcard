<template>
  <li class="panel">
    <button>
      <span>{{ text }}</span>
      <svg viewBox="0 0 400 532" class="panel__bg">
        <use xlink:href="#thunderB"></use>
      </svg>
    </button>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  text: String,
});
</script>

<style lang="scss">
.panel {
  button {
    position: relative;
    display: block;
    height: 100%;
    background-color: $color-01;
    box-shadow: $shadow;
    border-radius: 8px;
    overflow: hidden;

    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: $fontSize-02;
      color: #fff;
      font-weight: 500;
    }
  }

  &__bg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
