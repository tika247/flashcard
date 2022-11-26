<template>
  <footer class="list-footer" :class="{ 'is-panel': !mode }">
    <button class="list-footer__btn">
      <img src="@/assets/img/icon-add.svg" alt="" width="16" height="20" />
    </button>
    <button class="list-footer__btn">
      <img src="@/assets/img/icon-edit.svg" alt="" width="19" height="19" />
    </button>
    <button class="list-footer__btn">
      <img src="@/assets/img/icon-delete.svg" alt="" width="19" height="20" />
    </button>
  </footer>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  mode: Boolean,
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

  &__btn {
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
}
</style>
