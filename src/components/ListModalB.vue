<template>
  <dialog class="modal" ref="modal" @click="clickOverlay" open>
    <div class="modal__inner">
      <div class="modal__content">
        <ul class="modal__list">
          <li v-for="item in modalList" :key="item">
            <span>{{ item }}</span>
            <textarea :name="item" :id="item"></textarea>
          </li>
        </ul>

        <div class="modal__btnWrap">
          <list-btn-a
            :filename="'icon-close.svg'"
            :altText="'Cancel'"
            :widthNum="'20'"
            :heightNum="'20'"
            :sizeClass="'is-large'"
            @click="closeModal"
          ></list-btn-a>
          <list-btn-a
            :filename="'icon-done.svg'"
            :altText="'Done'"
            :widthNum="'30'"
            :heightNum="'18'"
            :sizeClass="'is-large'"
            @click="submitEditWord"
          ></list-btn-a>
        </div>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import ListBtnA from "./ListBtnA.vue";
import { ref, Ref, inject, onMounted, defineComponent } from "vue";
import apiController from "../helper/apiController";
const $globalProps: any = inject("$globalProps");
const $word: Ref<Array<WordType> | null> | undefined = inject("$word");

defineComponent({
  name: "ListBtnA",
  components: {
    ListBtnA,
  },
});

// Ref
const modal: Ref<HTMLDialogElement | null> = ref(null);

// Type
interface editWordInfoType {
  [key: string]: string;
}

const modalList: Array<string> = [
  "word",
  "japanese",
  "meaning",
  "example",
  "note",
];

// HTMLCollection of textareas
let textareas: HTMLCollectionOf<HTMLTextAreaElement> | undefined = undefined;
onMounted(() => {
  textareas = modal.value?.getElementsByTagName("textarea");
  reflectTargetInfo();
});

/**
 * @description reflect edit target word info into textareas
 * @returns {void}
 */
const reflectTargetInfo = () => {
  if (!textareas || !$word?.value) {
    return;
  }
  const target = $word.value[$globalProps.$modalMode.index];
  for (let i = 0; i < textareas.length; i++) {
    textareas[i].value = Object.values(target)[i];
  }
};

/**
 * @description detect if overlay is clicked
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
 * @description close modal
 * @returns {void}
 */
const closeModal = () => {
  $globalProps.$modalMode.type = false;
  $globalProps.$isSelectMode = false;
};

/**
 * @description return new word info
 * @returns {object} wordInfo
 */
const returnEditWordInfo = (): Array<string> | undefined => {
  if (!textareas?.length) {
    return;
  }
  const wordInfo = Array.from(textareas).map((el) => el.value);

  return wordInfo;
};

/**
 * @description submit new word info to server-side
 * @returns {Promise}
 */
const submitEditWord = async () => {
  const enteredWordInfo: Array<string> | undefined = returnEditWordInfo();
  if (!enteredWordInfo) {
    return;
  }
  let editWordInfo: editWordInfoType = {};
  for (let i = 0; i < modalList.length; i++) {
    editWordInfo[modalList[i]] = enteredWordInfo[i];
  }

  if (!$word) {
    alert("Error: Couldn't get API!");
    return;
  }
  $word.value = await apiController.editWord(
    editWordInfo,
    $globalProps.$modalMode.index
  );

  if (!textareas?.length) {
    return;
  }
  for (const el of textareas) {
    el.value = "";
  }

  $globalProps.$modalMode.type = false;
  $globalProps.$isSelectMode = false;
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
    text-align: center;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px 0;
    margin-bottom: 24px;

    > li {
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
    }
  }

  &__btnWrap {
    display: inline-flex;
    justify-content: center;
    gap: 0 32px;
  }
}
</style>
