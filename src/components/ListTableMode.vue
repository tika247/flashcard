<template>
  <div class="list-tableMode">
    <ul class="list-table">
      <li class="list-table__item">
        <ul class="list-table__category">
          <li><span>Word</span></li>
          <li><span>Japanese</span></li>
          <li><span>Meaning</span></li>
          <li><span>Example</span></li>
          <li><span>Note</span></li>
        </ul>
      </li>

      <li class="list-table__item" v-for="item in $word" :key="item.word">
        <a v-if="$globalProps.$isSelectMode">
          <list-word
            :check="false"
            :word="item.word"
            :meaning="item.meaning"
            :japanese="item.japanese"
            :example="item.example"
            :note="item.note"
          >
          </list-word>
        </a>
        <list-word
          v-else
          :check="false"
          :word="item.word"
          :meaning="item.meaning"
          :japanese="item.japanese"
          :example="item.example"
          :note="item.note"
        >
        </list-word>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import ListWord from "./ListWord.vue";
import { defineComponent, inject, Ref } from "vue";
const $globalProps: any = inject("$globalProps");
const $word: Ref<Array<WordType> | null> | undefined = inject("$word");

defineComponent({
  name: "ListWord",
  components: {
    ListWord,
  },
});
</script>

<style scoped lang="scss">
.list-content {
  padding: 24px 0;
  box-shadow: 0 4px 8px $color-darker;
}

.list-table {
  display: grid;
  grid-template-columns: 10% 30% 20% 20% 20%;

  &__item,
  &__category {
    display: contents;
  }

  &__item {
    > a {
      display: flex;
      flex-wrap: wrap;

      &:hover > a,
      &:focus > div,
      &:active > div {
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }

  &__category {
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
        position: relative;
        color: #fff;
        text-align: left;
        white-space: nowrap;
        color: $color-05;
        font-weight: 500;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>
