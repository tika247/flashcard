<template>
  <dialog class="modal" ref="modal">
    <div class="modal__inner">
      <button type="submit" class="modal__btn" @click="submitInfo">send</button>
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

  &__inner {
    width: min(1200px, 90%);
    margin: 0 auto;
    padding: $distance-03;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &__btn {
    text-align: center;
  }
}
</style>
