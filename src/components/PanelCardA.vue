<template>
  <li class="panel">
    <button :class="{ 'is-selectMode': isSelectMode }">
      <span>{{ text }}</span>
      <svg viewBox="0 0 400 532" class="panel__bg">
        <use xlink:href="#thunderB"></use>
      </svg>
    </button>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  text: String,
  isSelectMode: Boolean,
});
</script>

<style lang="scss" scoped>
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

    &.is-selectMode {
      transition: transform 0.3s ease-in-out;

      @include hover {
        transform: scale(1.05);
      }
    }
  }

  &__bg {
    display: block;
    width: 100%;
    height: 100%;
  }
}
@include sp {
  .panel {
    button {
      > span {
        font-size: $fontSize-02-sp;
      }
    }
  }
}
</style>
