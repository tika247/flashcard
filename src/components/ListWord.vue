<template>
  <th>
    <span>{{ word }}</span>
  </th>
  <td>
    <span>{{ japanese }}</span>
  </td>
  <td>
    <span>{{ meaning }}</span>
  </td>
  <td>
    <span>{{ example }}</span>
  </td>
  <td>
    <span>{{ note }}</span>
  </td>
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
th,
td {
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
</style>
