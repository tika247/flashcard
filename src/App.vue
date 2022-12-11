<template>
  <div class="lyt-inner">
    <router-view />
  </div>
  <list-modal-a v-if="$globalProps.$modalMode === 'A'"></list-modal-a>
</template>

<script setup lang="ts">
import { defineComponent, inject, nextTick, watch } from "vue";
import ListModalA from "./components/ListModalA.vue";
const $globalProps: any = inject("$globalProps");
const DOC = document.documentElement;
defineComponent({
  name: "ListModalA",
  components: {
    ListModalA,
  },
});

const switchModal = (modalMode: string | boolean) => {
  modalMode ? showModal() : closeModal();
};
const showModal = () => {
  DOC.style.overflow = "hidden";
};
const closeModal = () => {
  DOC.style.overflow = "visible";
};

/**
 * @description watch - when $globalProps changes
 * @returns {void}
 */
watch(
  $globalProps,
  () => {
    /**
     * nextTick
     * @returns {void}
     */
    nextTick(() => {
      console.log($globalProps.$modalMode);
      switchModal($globalProps.$modalMode);
    });
  },
  { deep: true }
);
</script>

<style lang="scss">
.lyt-inner {
  max-width: calc($reference + $padding * 2);
  padding-left: $padding;
  padding-right: $padding;
  margin: 0 auto;
}
</style>
