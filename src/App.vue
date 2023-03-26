<template>
  <div class="lyt-inner">
    <router-view />
  </div>
  <list-modal-a v-if="$globalProps.$modalMode.type === 'A'"></list-modal-a>
  <list-modal-b v-if="$globalProps.$modalMode.type === 'B'"></list-modal-b>
  <list-modal-c v-if="$globalProps.$modalMode.type === 'C'"></list-modal-c>
</template>

<script setup lang="ts">
import { defineComponent, inject, nextTick, watch } from "vue";
import ListModalA from "./components/ListModalA.vue";
import ListModalB from "./components/ListModalB.vue";
import ListModalC from "./components/ListModalC.vue";
const $globalProps: any = inject("$globalProps");
const DOC = document.documentElement;
defineComponent({
  name: "ListModalA",
  components: {
    ListModalA,
  },
});
defineComponent({
  name: "ListModalB",
  components: {
    ListModalB,
  },
});
defineComponent({
  name: "ListModalC",
  components: {
    ListModalC,
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
 * watch - when $globalProps changes
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
      switchModal($globalProps.$modalMode.type);
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
