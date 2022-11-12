<template>
  <swiper-area
    :slides-per-view="3"
    :space-between="50"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper-area>
</template>
<script setup lang="ts">
import { defineComponent } from "vue";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
import { Word } from "@/@type/type";

const arr: Array<Word> = [
  {
    word: "taunt",
    japanese: "hohogehogehogehogehohogehogehogehogehohogehogehogehoge",
    meaning: "挑発する",
    example: "fugafugafugafuga",
    note: "humuhumuhumu",
  },
];

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

const onSwiper = (swiper: any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style scoped lang="scss"></style>
