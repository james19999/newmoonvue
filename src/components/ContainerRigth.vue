<template>
    <swiper
      :effect="'cube'"
      :grabCursor="true"
      :cubeEffect="{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }"
      :pagination="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        >
        <img class="object-cover w-full h-full transition-transform transform rounded-lg hover:scale-105" src="https://s3u.tmimgcdn.com/u28753765/df732153da92da0385316bfef7d0489e.jpg" alt="" srcset="">
        
          </swiper-slide
      ><swiper-slide
        >
        <img class="object-cover w-full h-full transition-transform transform rounded-lg hover:scale-105" src="https://s3u.tmimgcdn.com/u28753765/df732153da92da0385316bfef7d0489e.jpg" alt="" srcset="">

        </swiper-slide
      ><swiper-slide
        >
        <img class="object-cover w-full h-full transition-transform transform rounded-lg hover:scale-105" src="https://s3u.tmimgcdn.com/u28753765/df732153da92da0385316bfef7d0489e.jpg" alt="" srcset="">

          
          </swiper-slide
      ><swiper-slide
        >
        <img class="object-cover w-full h-full transition-transform transform rounded-lg hover:scale-105" src="https://s3u.tmimgcdn.com/u28753765/df732153da92da0385316bfef7d0489e.jpg" alt="" srcset="">
        
    </swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/effect-cube';
  
  
  
    // import required modules
    import { EffectCube} from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [EffectCube],
        };
      },
    };
  </script>
  