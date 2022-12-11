<template>
  <div class="list-tableMode">
    <table class="list-table">
      <caption>
        word list
      </caption>
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
      </colgroup>

      <thead>
        <tr>
          <th><span>Word</span></th>
          <th><span>Japanese</span></th>
          <th><span>Meaning</span></th>
          <th><span>Example</span></th>
          <th><span>Note</span></th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in $word"
          :key="item.word"
          :class="{ 'is-clickable': returnIsSelectMode }"
          :tabindex="returnTabIndex"
        >
          <list-word
            :check="false"
            :word="item.word"
            :meaning="item.meaning"
            :japanese="item.japanese"
            :example="item.example"
            :note="item.note"
          >
          </list-word>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import ListWord from "./ListWord.vue";
import { defineComponent, inject, Ref, computed } from "vue";
const $globalProps: any = inject("$globalProps");
const $word: Ref<Array<WordType> | null> | undefined = inject("$word");

defineComponent({
  name: "ListWord",
  components: {
    ListWord,
  },
});

const returnTabIndex = computed((): string => {
  return $globalProps.$isSelectMode ? "0" : "-1";
});

const returnIsSelectMode = computed((): boolean => {
  return $globalProps.$isSelectMode;
});
</script>

<style scoped lang="scss">
.list-table {
  table-layout: fixed;
  width: 100%;

  > caption {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }

  > colgroup {
    > col {
      &:nth-child(1) {
        width: 10%;
      }
      &:nth-child(2) {
        width: 30%;
      }
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 20%;
      }
      &:nth-child(5) {
        width: 20%;
      }
    }
  }

  thead {
    > tr {
      > th,
      > td {
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
        }
      }
    }
  }

  tbody {
    > tr {
      &.is-clickable {
        cursor: pointer;
        @include hover {
          background-color: rgba(134, 174, 163, 0.2);
        }
      }
    }
  }
}
</style>
