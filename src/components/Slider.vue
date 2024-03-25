<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <swiper
    :centeredSlides="true"
    :autoplay="{
      delay: 3500,
      disableOnInteraction: false
    }"
    :pagination="{
      clickable: false
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper"
  >

    <swiper-slide>
      <img
        class="object-cover w-full h-full transition-transform transform rounded-md hover:scale-105"
        src="../assets/bc.jpeg"
        alt=""
        srcset=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        class="object-cover w-full h-full transition-transform transform rounded-md hover:scale-105"
        src="../assets/D.jpeg"
        alt=""
        srcset=""
      />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
