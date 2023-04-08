<template>
  <div class="lyt-swiper">
    <swiper :slides-per-view="4" :space-between="50" :breakpoints="breakpoints">
      <swiper-slide v-for="(item, i) in $word" :key="item.word">
        <panel-card-b :data="item" :selfIndex="i"></panel-card-b>
      </swiper-slide>

      ...
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { defineComponent, inject, Ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
import PanelCardB from "../components/PanelCardB.vue";
const $word = inject("$word") as Ref<Array<WordType>>;

defineComponent({
  name: "SwiperArea",
  components: {
    Swiper,
  },
});
defineComponent({
  name: "SwiperSlide",
  components: {
    SwiperSlide,
  },
});
defineComponent({
  name: "PanelCardB",
  components: {
    PanelCardB,
  },
});

const breakpoints = {
  // win>=320px
  320: {
    slidesPerView: 2,
    spaceBetween: 32,
  },
  // win>=769px
  769: {
    slidesPerView: 3,
    spaceBetween: 46,
  },
  // win>=1201px
  1201: {
    slidesPerView: 4,
    spaceBetween: 72,
  },
  // win>=1501px
  1501: {
    slidesPerView: 4.5,
    spaceBetween: 72,
  },
};
</script>

<style scoped lang="scss">
.lyt-swiper {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.swiper {
  overflow: visible;
  padding: 0 80px 40px;
  cursor: grab;
}
</style>
