<template>
  <ul class="list-table__word">
    <li>
      <span>{{ word }}</span>
    </li>
    <li>
      <span lang="ja">{{ japanese }}</span>
    </li>
    <li>
      <span>{{ meaning }}</span>
    </li>
    <li>
      <span>{{ example }}</span>
    </li>
    <li v-if="note">
      <span>{{ note }}</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  check: Boolean,
  word: String,
  meaning: String,
  japanese: String,
  example: String,
  note: String,
});
</script>

<style scoped lang="scss">
.list-table__word {
  display: contents;

  > li {
    position: relative;
    padding: 12px 24px;

    &:not(:first-child)::before {
      width: 1px;
      height: 2ch;
      background-color: $color-04;
      position: absolute;
      content: "";
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    > span {
      display: block;
      width: 100%;
      overflow: auto;
      color: #fff;
      text-align: left;
      white-space: nowrap;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>
