<template>
  <button class="btn">
    <img
      :src="require(`@/assets/img/${filename}`)"
      :alt="altText"
      :width="widthNum"
      :height="heightNum"
    />
  </button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  filename: String,
  altText: String,
  widthNum: String,
  heightNum: String,
});
</script>

<style scoped lang="scss">
.btn {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-01;
  box-shadow: $shadow;
  border-radius: 50%;
  transition: 0.3s background-color ease-in-out, 0.3s transform ease-in-out;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.3);
    background-color: $color-brighter;
  }
}
</style>
