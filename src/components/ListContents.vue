<template>
  <div class="list-contents">
    <list-table-mode v-if="mode"></list-table-mode>
    <list-panel-mode v-if="!mode"></list-panel-mode>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, defineProps } from "vue";
import ListTableMode from "./ListTableMode.vue";
import ListPanelMode from "./ListPanelMode.vue";

defineComponent({
  name: "ListTableMode",
  components: {
    ListTableMode,
  },
});
defineComponent({
  name: "ListPanelMode",
  components: {
    ListPanelMode,
  },
});

defineProps({
  mode: Boolean,
});
</script>

<style scoped lang="scss">
@include sp {
  .list-contents {
    overflow-x: scroll;
  }
}
</style>
