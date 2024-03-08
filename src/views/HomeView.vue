<template>
  <main class="sm:p-2 lg:p-5 md:p-5">
    <div class="grid grid-cols-1 gap-4 m-3 md:grid-cols-3">
      <div class="md:col-span-2">
        <div class="container mx-auto bg-gray-400 rounded-md lg:h-96 sm:h-5/6 md:h-5/6">
          <Slider />
        </div>
      </div>
      <div>
        <div class="container mx-auto rounded-lg lg:h-96 sm:h-5/6 md:h-5/6">
          <ContainerRigth />
        </div>
      </div>
    </div>

    <div class="grid gap-6 p-6 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 sm:p-2 lg:p-5 md:p-5">
      <div class="h-24 bg-white rounded-md shadow-md hover:bg-gray-200 w-50">d</div>
      <div class="h-24 bg-white rounded-md shadow-md hover:bg-gray-200 w-50">d</div>
      <div class="h-24 bg-white rounded-md shadow-md hover:bg-gray-200 w-50">d</div>
      <div class="h-24 bg-white rounded-md shadow-md hover:bg-gray-200 w-50">d</div>
    </div>
    <div class="pt-6 divide-y-2 divide-slate-400/25">
      <div class="flex justify-center underline decoration-blue-500 decoration-2">OFFRES</div>

      <h1 v-if="!useProductStor.isload" class="text-center font-bold">Chargement...</h1>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4" v-else>
        <!-- component -->
        <ProductCard v-for="item in useProductStor.limit" :key="item.id" :items="item" />
      </div>
    </div>

    <div
      class="grid lg :grid-cols-2 md:gap-2 sm:gap-4 lg:gap-2 py-10 sm:grid-cols-1 md:grid-cols-2"
    >
      <div class="h-20 rounded-lg">
        <img
          class="w-full transition-transform transform rounded-lg hover:scale-105"
          src="../assets/ba.jpeg"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <img
          class="w-full transition-transform transform rounded-lg hover:scale-105"
          src="https://i.graphicmama.com/blog/wp-content/uploads/2019/12/09171927/banner-design-ideas.png"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <div class="grid gap-3 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1">
      <ProductCard v-for="item in useProductStor.products" :key="item.id" :items="item" />
    </div>
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
const useProductStor = useProductStore()
onMounted(() => {
  useProductStor.getLimitProduct()
  useProductStor.getAllProduct()
})
import Slider from '../components/Slider.vue'
import ContainerRigth from '../components/ContainerRigth.vue'
import Footer from '@/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>
