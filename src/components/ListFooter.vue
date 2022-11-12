<template>
  <footer class="list-footer">
    <button class="list-footer__btn">
      <img src="@/assets/img/icon-add.svg" alt="" width="16" height="20" />
    </button>
    <button class="list-footer__btn">
      <img src="@/assets/img/icon-edit.svg" alt="" width="19" height="19" />
    </button>
    <button class="list-footer__btn">
      <img src="@/assets/img/icon-delete.svg" alt="" width="19" height="20" />
    </button>
  </footer>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
.list-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 16px;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 32px;
}
.list-footer__btn {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-01;
  box-shadow: $shadow;
  border-radius: 50%;
}
</style>
