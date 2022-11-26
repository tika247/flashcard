<template>
  <div class="lyt-inner">
    <router-view />
  </div>
  <list-modal></list-modal>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import ListModal from "./components/ListModal.vue";
defineComponent({
  name: "ListModal",
  components: {
    ListModal,
  },
});
</script>

<style lang="scss">
.lyt-inner {
  max-width: calc($reference + $padding * 2);
  padding-left: $padding;
  padding-right: $padding;
  margin: 0 auto;
}
</style>
