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
            :class="{ 'is-current': modePanel }"
            @click="
              {
                modePanel = true;
              }
            "
          >
            Normal
          </button>
        </li>
        <li>
          <button
            :class="{ 'is-current': !modePanel }"
            @click="
              {
                modePanel = false;
              }
            "
          >
            Panel
          </button>
        </li>
      </ul>
    </div>

    <list-contents :mode="modePanel"></list-contents>
  </div>
  <list-footer :mode="modePanel"></list-footer>
  <link-home></link-home>
  <thunderB></thunderB>
</template>

<script setup lang="ts">
import { defineComponent, inject, ref, Ref, computed } from "vue";
import ListContents from "../components/ListContents.vue";
import HdgLevel02 from "../components/HdgLevel02.vue";
import ListFooter from "../components/ListFooter.vue";
import ThunderB from "../components/symbol/ThunderB.vue";
import LinkHome from "../components/LinkHome.vue";
const $word = inject("$word") as Ref<Array<WordType>>;

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
defineComponent({
  name: "LinkHome",
  components: {
    LinkHome,
  },
});

const returnWordTotal = computed(() => {
  return $word.value.length;
});

let modePanel: Ref<boolean> = ref(true);
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
@include sp {
  .list-setting {
    margin-bottom: 16px;
  }
}
</style>
