<template>
  <dialog class="modal" ref="modal" @click="clickOverlay">
    <div class="modal__inner">
      <div class="modal__content">
        <ul class="modal__list">
          <li v-for="item in modalList" :key="item">
            <span>{{ item }}</span>
            <textarea :name="item" :id="item"></textarea>
          </li>
        </ul>

        <div class="modal__btnWrap">
          <button type="submit" class="modal__btn" @click="submitInfo">
            add
          </button>
        </div>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref, Ref, inject, watch, nextTick } from "vue";
const $globalProps: any = inject("$globalProps");
const DOC = document.documentElement;

// Ref
const modal: Ref<HTMLDialogElement | null> = ref(null);

const modalList: Array<string> = [
  "word",
  "japanese",
  "meaning",
  "example",
  "note",
];

const switchModal = (isModal: boolean) => {
  isModal ? showModal() : closeModal();
};
const showModal = () => {
  modal.value?.showModal();
  DOC.style.overflow = "hidden";
};
const closeModal = () => {
  modal.value?.close();
  DOC.style.overflow = "visible";
};

const clickOverlay = (e: Event) => {
  if (!(e.target instanceof HTMLElement)) {
    return;
  }
  if (e.target === modal.value) {
    $globalProps.$isModal = false;
  }
};

const submitInfo = () => {
  const params = new URLSearchParams();
  params.append("data", "Some Data!");

  axios
    .post("/", params)
    .then((res) => {
      console.table(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * @description watch - when $globalProps changes
 * @returns {void}
 */
watch(
  $globalProps,
  () => {
    /**
     * nextTick
     * @returns {void}
     */
    nextTick(() => {
      switchModal($globalProps.$isModal);
    });
  },
  { deep: true }
);
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
  &::backdrop {
    backdrop-filter: blur(5px);
  }

  &__inner {
    width: min(900px, 90%);
    margin: 0 auto;
  }
  &__content {
    padding: $distance-03;
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
      transform: scale(1.3);
      background-color: $color-brighter;
    }
  }
}
</style>
