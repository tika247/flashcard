<template>
  <li class="panel" v-if="wordData">
    <button
      class="panel__btn"
      :class="{ 'is-clicked': isClicked }"
      @click="switchIsClicked()"
    >
      <svg viewBox="0 0 400 532" class="panel__bg">
        <use xlink:href="#thunderB"></use>
      </svg>
      <div class="panel__front">{{ wordData[0].word }}</div>
      <div class="panel__back">
        <table class="panel__table">
          <caption>
            information of
            {{
              wordData[0].word
            }}
          </caption>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <tr
            v-for="item in getKeyValue(wordData[0] as WordType)"
            :key="item[0]"
          >
            <th>{{ item[0] }}</th>
            <td>{{ item[1] }}</td>
          </tr>
        </table>
      </div>
    </button>
  </li>
</template>

<script setup lang="ts">
import { defineProps, Ref, ref } from "vue";

const props = defineProps({
  wordData: Object,
});

let isClicked: Ref<boolean> = ref(false);

/**
 * get key value
 * @param {object} obj
 * @returns {object}
 */
const getKeyValue = (obj: WordType) => {
  if (!props.wordData) {
    return;
  }
  const pair = Object.entries(obj);

  return pair;
};

/**
 * switch isClicked
 */
const switchIsClicked = () => {
  isClicked.value = isClicked.value ? false : true;
};
</script>

<style lang="scss" scoped>
.panel {
  &__btn {
    position: relative;
    display: block;
    height: 100%;
    background-color: $color-01;
    box-shadow: $shadow;
    border-radius: 8px;
    transform-style: preserve-3d;
    backface-visibility: visible;
    transition: 0.5s ease-in-out;
    will-change: transform;
    transition: transform 0.3s ease-in-out;

    @include hover {
      transform: scale(1.05);
    }

    &.is-clicked {
      transform: rotateY(180deg);
      box-shadow: $shadow-reverse;
    }
  }

  &__front,
  &__back {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
  }

  &__front {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    font-size: $fontSize-02;
    color: #fff;
    font-weight: 500;
    word-break: break-all;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__back {
    width: 100%;
    height: 100%;
    padding: 20px 24px;
    transform: rotateY(180deg);
    backdrop-filter: blur(5px);
    overflow-y: scroll;

    // TODO: cannot scroll with mouse drag if ::-webkit-scrollbar
    // &::-webkit-scrollbar {
    //   width: 8px;
    //   transform: scaleY(0.8);
    // }

    // &::-webkit-scrollbar-track {
    //   background-color: $color-01;
    // }

    // &::-webkit-scrollbar-thumb {
    //   background-color: $color-04;
    //   border-radius: 5em;
    // }
  }

  &__bg {
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__table {
    height: 100%;

    caption,
    colgroup {
      position: absolute;
      white-space: nowrap;
      width: 1px;
      height: 1px;
      overflow: hidden;
      border: 0;
      padding: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      margin: -1px;
    }

    th,
    td {
      display: block;
      width: 100%;
      color: #fff;
      text-align: left;
      word-break: break-all;
    }

    tr {
      display: block;
      line-height: 1.4;

      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    th {
      color: $color-05;
      font-size: $fontSize-05;
      font-weight: normal;
    }
  }
}
</style>
