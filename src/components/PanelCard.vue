<template>
  <div class="card">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  text: String,
});
</script>

<style lang="scss">
.card {
  background-color: $color-01;
}
</style>
