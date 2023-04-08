<template>
  <dialog class="modal" ref="modal" @click="clickOverlay" open>
    <div class="modal__inner">
      <div class="modal__content">
        <ul class="modal__list">
          <li v-for="item in modalList" :key="item">
            <span :data-itemName="item">{{ item }}</span>
            <textarea :name="item" :id="item"></textarea>
          </li>
        </ul>

        <div class="modal__btnWrap">
          <button type="submit" class="modal__btn" @click="startAddProcess">
            add
          </button>
        </div>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { putWord } from "../helper/apiController";
import { ref, Ref, inject, onMounted } from "vue";
const $globalProps: any = inject("$globalProps");
const $word = inject("$word") as Ref<Array<WordType>>;

// Ref
const modal: Ref<HTMLDialogElement | null> = ref(null);

const modalList: Array<string> = [
  "word",
  "meaning",
  "japanese",
  "example",
  "note",
  "state",
];

// HTMLCollection of textareas
let textareas: HTMLCollectionOf<HTMLTextAreaElement> | undefined = undefined;
onMounted(() => {
  textareas = modal.value?.getElementsByTagName("textarea");
});

/**
 * detect if overlay is clicked
 * @returns {void}
 */
const clickOverlay = (e: Event) => {
  if (!(e.target instanceof HTMLElement)) {
    return;
  }
  if (e.target === modal.value) {
    $globalProps.$modalMode.type = false;
  }
};

/**
 * return new word info
 * @returns {object} wordInfo
 */
const returnNewWordInfo = (): Array<string> | undefined => {
  if (!textareas?.length) {
    return;
  }
  const wordInfo = Array.from(textareas).map((el) => el.value);

  return wordInfo;
};

/**
 * add new word
 * @returns {Promise}
 */
const startAddProcess = async () => {
  const enteredWordInfo: Array<string> | undefined = returnNewWordInfo();

  if (!enteredWordInfo) {
    return;
  }

  // if no word
  if (!(enteredWordInfo[0].length > 0)) {
    alert("Please fill in the blank of 'Word'!");
    return;
  }

  // if a word registed already
  const alreadyCheck = $word.value.some(
    (wordInfo) => wordInfo.word === enteredWordInfo[0]
  );
  if (alreadyCheck) {
    alert("The word is already registered!");
    return;
  }

  // if a word registed already
  let newWordInfo: objectKeyType<string> = {};
  for (let i = 0; i < modalList.length; i++) {
    newWordInfo[modalList[i]] = enteredWordInfo[i];
  }

  $word.value.push(newWordInfo);
  putWord($word.value);

  if (!textareas?.length) {
    return;
  }
  for (const el of textareas) {
    el.value = "";
  }

  $globalProps.$modalMode.type = false;
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  padding: $distance-01 0;
  overflow-y: auto;
  z-index: 1000;
  &::backdrop {
    backdrop-filter: blur(5px);
  }

  &__inner {
    width: min(900px, 90%);
    margin: 0 auto;
  }
  &__content {
    padding: $distance-01;
    background-color: $color-brighter;
    color: #fff;
    box-shadow: 0 0 16px $color-darker;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    margin-bottom: 24px;

    > li {
      text-transform: capitalize;
      > span {
        display: block;
        color: $color-05;
        font-weight: 500;
        margin-bottom: 8px;
      }

      > textarea {
        width: 100%;
        background-color: $color-darker;
        outline-color: $color-brighter;
        border-color: $color-01;
        color: $color-03;
        padding: 8px;
      }

      > span[data-itemName="state"],
      > textarea[name="state"] {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
      }
    }
  }

  &__btnWrap {
    text-align: center;
  }

  &__btn {
    width: 56px;
    height: 56px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: $color-01;
    color: #fff;
    box-shadow: $shadow;
    border-radius: 50%;
    transition: 0.3s background-color ease-in-out, 0.3s transform ease-in-out;

    &:hover,
    &:active,
    &:focus {
      transform: scale(1.1);
      background-color: $color-brighter;
    }
  }
}
@include sp {
  .modal {
    padding: $distance-01-sp 0;
    &__content {
      padding: $distance-01-sp;
    }
  }
}
</style>
