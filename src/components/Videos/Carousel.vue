<template>
  <div class="body">
    <swiper
      :slides-per-view="1"
      :space-between="100"
      :pagination="{ clickable: true }"
      :centered-slides="true"
      :slide-to-clicked-slide="true"
      :allow-touch-move="false"
      :watch-overflow="true"
      autoplay
    >
      <swiper-slide class="swiper-slide"> fuck </swiper-slide>
      <swiper-slide class="swiper-slide"> fuck </swiper-slide>

    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "Carousel",
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.body {
  
}
</style>