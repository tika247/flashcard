<template>
  <li class="panel">
    <router-link :to="link">
      {{ text }}
      <svg viewBox="0 0 304 304" class="panel__bg">
        <use xlink:href="#thunderA"></use>
      </svg>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
defineProps({
  text: String,
  link: String,
});
</script>

<style lang="scss" scoped>
.panel {
  > a {
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

@include sp {
  .panel {
    > a {
      font-size: $fontSize-02-sp;
    }
  }
}
</style>
