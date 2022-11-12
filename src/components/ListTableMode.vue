<template>
  <div class="list-tableMode">
    <ul class="list-table">
      <li>
        <ul class="list-table__category">
          <li><span>Word</span></li>
          <li><span>Meaning</span></li>
          <li><span>Japanese</span></li>
          <li><span>Example</span></li>
          <li><span>Note</span></li>
        </ul>
      </li>
      <li v-for="item in arr" :key="item.word">
        <list-word
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
import { defineComponent } from "vue";
import ListWord from "./ListWord.vue";
import { Word } from "@/@type/type";

defineComponent({
  name: "ListWord",
  components: {
    ListWord,
  },
});

const arr: Array<Word> = [
  {
    word: "taunt",
    japanese: "hohogehogehogehogehohogehogehogehogehohogehogehogehoge",
    meaning: "挑発する",
    example: "fugafugafugafuga",
    note: "humuhumuhumu",
  },
];
</script>

<style scoped lang="scss">
.list-content {
  padding: 24px 0;
  box-shadow: 0 4px 8px $color-darker;
}

.list-table {
  display: grid;
  grid-template-columns: 10% 30% 20% 20% 20%;

  > li,
  &__category {
    display: contents;
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
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>
