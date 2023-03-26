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
          <btn-a
            :filename="'icon-close.svg'"
            :altText="'Cancel'"
            :widthNum="'20'"
            :heightNum="'20'"
            :sizeClass="'is-medium'"
            @click="closeModal"
          ></btn-a>
          <btn-a
            :filename="'icon-done.svg'"
            :altText="'Done'"
            :widthNum="'30'"
            :heightNum="'18'"
            :sizeClass="'is-medium'"
            @click="startEditProcess"
          ></btn-a>
        </div>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import { putWord } from "../helper/apiController";
import BtnA from "./BtnA.vue";
import { ref, Ref, inject, onMounted, defineComponent } from "vue";
const $globalProps: any = inject("$globalProps");
const $word = inject("$word") as Ref<Array<WordType>>;

defineComponent({
  name: "BtnA",
  components: {
    BtnA,
  },
});

// Ref
const modal: Ref<HTMLDialogElement | null> = ref(null);

const modalList: Array<string> = [
  "word",
  "japanese",
  "meaning",
  "example",
  "note",
  "state",
];

// HTMLCollection of textareas
let textareas: HTMLCollectionOf<HTMLTextAreaElement> | undefined = undefined;

/**
 * reflect edit target word info into textareas
 * @returns {void}
 */
const reflectTargetInfo = () => {
  if (!textareas) {
    return;
  }
  for (let i = 0; i < textareas.length; i++) {
    const editTarget = $word.value[$globalProps.$modalMode.index];
    textareas[i].value = Object.values(editTarget)[i];
  }
};

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
 * close modal
 * @returns {void}
 */
const closeModal = () => {
  $globalProps.$modalMode.type = false;
  $globalProps.$isSelectMode = false;
};

/**
 * return new word info
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
 * submit new word info to server-side
 * @returns {Promise}
 */
const startEditProcess = async () => {
  const enteredWordInfo: Array<string> | undefined = returnEditWordInfo();
  if (!enteredWordInfo) {
    alert("Error: Couldn't get API!");
    return;
  }

  let editWordInfo: any = {};
  for (let i = 0; i < modalList.length; i++) {
    editWordInfo[modalList[i]] = enteredWordInfo[i];
  }

  $word.value[$globalProps.$modalMode.index] = editWordInfo;
  putWord($word.value);

  if (!textareas?.length) {
    return;
  }
  for (const el of textareas) {
    el.value = "";
  }

  $globalProps.$modalMode.type = false;
  $globalProps.$isSelectMode = false;
};

/**
 * onMounted
 */
onMounted(() => {
  textareas = modal.value?.getElementsByTagName("textarea");
  reflectTargetInfo();
});
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
    display: inline-flex;
    justify-content: center;
    gap: 0 32px;
  }
}
</style>
