<template>
  <div class="hdg-02">
    <h2>{{ hdg }}</h2>
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  hdg: String,
  text: String,
});
</script>

<style lang="scss" scoped>
.hdg-02 {
  width: 100%;
  margin-bottom: $distance-02;

  > *:last-child {
    margin-bottom: 0;
  }

  > h2 {
    font-size: $fontSize-01;
    color: #fff;
    font-weight: bold;
  }

  > span {
    font-size: $fontSize-06;
    color: $color-04;
  }
}
</style>
