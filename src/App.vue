<template>
  <div class="lyt-inner">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// import { inject } from "vue";
// const $globalProps: any = inject("$globalProps");

// import { defineComponent } from "vue";
// import Sample from "../components/Sample.vue";
// defineComponent({
//   name: "Sample",
//   components: {
//     Sample,
//   },
// });
</script>

<style lang="scss">
.lyt-inner {
  max-width: calc($reference + $padding * 2);
  padding-left: $padding;
  padding-right: $padding;
  margin: 0 auto;
}
</style>
