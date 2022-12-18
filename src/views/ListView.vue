<template>
  <div class="list-lyt">
    <hdg-Level02
      :hdg="'Word List'"
      :text="`${returnWordTotal} Words Registered`"
    ></hdg-Level02>
    <div class="list-setting">
      <ul class="list-setting__mode">
        <li>
          <button
            :class="{ 'is-current': modeNormal }"
            @click="
              {
                modeNormal = true;
              }
            "
          >
            Normal
          </button>
        </li>
        <li>
          <button
            :class="{ 'is-current': !modeNormal }"
            @click="
              {
                modeNormal = false;
              }
            "
          >
            Panel
          </button>
        </li>
      </ul>
    </div>

    <list-contents :mode="modeNormal"></list-contents>
  </div>
  <list-footer :mode="modeNormal"></list-footer>
  <thunderB></thunderB>
</template>

<script setup lang="ts">
import { defineComponent, inject, ref, Ref, computed } from "vue";
import ListContents from "../components/ListContents.vue";
import HdgLevel02 from "../components/HdgLevel02.vue";
import ListFooter from "../components/ListFooter.vue";
import ThunderB from "../components/symbol/ThunderB.vue";
const $word: Ref<Array<WordType> | null> | undefined = inject("$word");

defineComponent({
  name: "ThunderB",
  components: {
    ThunderB,
  },
});
defineComponent({
  name: "ListContents",
  components: {
    ListContents,
  },
});
defineComponent({
  name: "ListFooter",
  components: {
    ListFooter,
  },
});
defineComponent({
  name: "HdgLevel02",
  components: {
    HdgLevel02,
  },
});

const returnWordTotal = computed(() => {
  return $word?.value?.length;
});

let modeNormal: Ref<boolean> = ref(true);
</script>

<style lang="scss" scoped>
.list-lyt {
  padding: $distance-01 0 100px;
}

.list-setting {
  text-align: right;
  margin-bottom: $distance-03;

  .hdg-02 + & {
    margin-top: calc(-1 * $distance-03);
  }

  &__mode {
    display: inline-flex;
    gap: 0 8px;

    > li > button {
      position: relative;
      padding: 8px 0;
      font-weight: 500;
      color: $color-04;

      &::before {
        position: absolute;
        content: "";
        width: 20px;
        height: 36px;
        background-image: url("/src/assets/img/bg-thunder.svg");
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }

      &.is-current {
        color: #fff;

        &::before {
          background-image: url("/src/assets/img/bg-thunder-current.svg");
        }
      }
    }
  }
}
</style>
