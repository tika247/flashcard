<template>
  <footer class="list-footer" :class="{ 'is-panel': !mode }">
    <list-btn
      @click="openModal"
      v-if="!returnIsSelectMode"
      :filename="'icon-add.svg'"
      :altText="'add new word'"
      :widthNum="'16'"
      :heightNum="'20'"
    >
    </list-btn>
    <list-btn
      @click="startSelectMode"
      v-if="!returnIsSelectMode"
      :filename="'icon-edit.svg'"
      :altText="'edit a word'"
      :widthNum="'19'"
      :heightNum="'19'"
    >
    </list-btn>
    <list-btn
      @click="startSelectMode"
      v-if="!returnIsSelectMode"
      :filename="'icon-delete.svg'"
      :altText="'remove a word'"
      :widthNum="'19'"
      :heightNum="'20'"
    >
    </list-btn>
    <list-btn
      @click="closeSelectMode"
      v-if="returnIsSelectMode"
      :filename="'icon-close.svg'"
      :altText="'close select mode'"
      :widthNum="'14'"
      :heightNum="'14'"
    >
    </list-btn>
  </footer>
</template>
<script setup lang="ts">
import ListBtn from "./ListBtn.vue";
import { defineProps, inject, computed } from "vue";
const $globalProps: any = inject("$globalProps");

defineProps({
  mode: Boolean,
});

const openModal = () => {
  $globalProps.$isModal = true;
};

const startSelectMode = () => {
  $globalProps.$isSelectMode = true;
};

const closeSelectMode = () => {
  $globalProps.$isSelectMode = false;
};

const returnIsSelectMode = computed((): boolean => {
  return $globalProps.$isSelectMode;
});
</script>

<style scoped lang="scss">
.list-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 24px 16px 40px;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 32px;

  &.is-panel {
    position: relative;
    bottom: inherit;
    left: inherit;
    margin-top: -104px;
    padding: 32px 16px 56px;
  }
}
</style>
