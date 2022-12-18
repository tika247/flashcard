<template>
  <footer class="list-footer" :class="{ 'is-panel': !mode }">
    <btn-a
      @click="openModal('A')"
      v-if="!returnIsSelectMode"
      :filename="'icon-add.svg'"
      :altText="'add new word'"
      :widthNum="'16'"
      :heightNum="'20'"
    >
    </btn-a>
    <btn-a
      @click="startSelectMode('edit')"
      v-if="!returnIsSelectMode"
      :filename="'icon-edit.svg'"
      :altText="'edit a word'"
      :widthNum="'19'"
      :heightNum="'19'"
    >
    </btn-a>
    <btn-a
      @click="startSelectMode('remove')"
      v-if="!returnIsSelectMode"
      :filename="'icon-remove.svg'"
      :altText="'remove a word'"
      :widthNum="'19'"
      :heightNum="'20'"
    >
    </btn-a>
    <btn-a
      @click="closeSelectMode"
      v-if="returnIsSelectMode"
      :filename="'icon-close.svg'"
      :altText="'close select mode'"
      :widthNum="'14'"
      :heightNum="'14'"
    >
    </btn-a>
  </footer>
</template>
<script setup lang="ts">
import BtnA from "./BtnA.vue";
import { defineProps, defineComponent, inject, computed } from "vue";
const DOC = document.documentElement;
const $globalProps: any = inject("$globalProps");

defineProps({
  mode: Boolean,
});

defineComponent({
  name: "BtnA",
  components: {
    BtnA,
  },
});

const openModal = (type: string) => {
  $globalProps.$modalMode.type = type;
};

const startSelectMode = (type: string) => {
  $globalProps.$isSelectMode = type;
};

const closeSelectMode = () => {
  $globalProps.$isSelectMode = false;
  closeModal();
};

const returnIsSelectMode = computed((): boolean => {
  return $globalProps.$isSelectMode;
});

const closeModal = () => {
  DOC.style.overflow = "visible";
  $globalProps.$modalMode.type = false;
};
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
