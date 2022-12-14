<template>
  <dialog class="modal" ref="modal" open>
    <div class="modal__inner">
      <div class="modal__content">
        <p class="modal__text">Do you really remove?</p>
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
            :filename="'icon-remove.svg'"
            :altText="'Remove a word'"
            :widthNum="'24'"
            :heightNum="'24'"
            :sizeClass="'is-large'"
            @click="submitRemoveWord"
          ></list-btn-a>
        </div>
      </div>
    </div>
  </dialog>
</template>
<script setup lang="ts">
// import axios from "axios";
import ListBtnA from "./ListBtnA.vue";
import { ref, Ref, defineComponent, inject } from "vue";
const $globalProps: any = inject("$globalProps");

defineComponent({
  name: "ListBtnA",
  components: {
    ListBtnA,
  },
});

// Ref
const modal: Ref<HTMLDialogElement | null> = ref(null);

/**
 * @description close modal
 * @returns {void}
 */
const closeModal = () => {
  $globalProps.$modalMode.type = false;
};

/**
 * @description submit new word info to server-side
 * @returns {Promise}
 */
const submitRemoveWord = async () => {
  alert($globalProps.$modalMode.index);

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
  display: flex;
  justify-content: center;
  align-items: center;
  &::backdrop {
    backdrop-filter: blur(5px);
  }

  &__inner {
    width: min(600px, 90%);
    margin: 0 auto;
  }
  &__content {
    padding: $distance-01;
    background-color: $color-brighter;
    color: #fff;
    box-shadow: 0 0 16px $color-darker;
    text-align: center;
  }

  &__text {
    font-size: $fontSize-03;
    color: #fff;
    text-align: center;
    margin-bottom: 40px;
  }

  &__btnWrap {
    display: inline-flex;
    justify-content: center;
    gap: 0 32px;
  }
}
</style>
