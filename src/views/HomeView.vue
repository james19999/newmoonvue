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
      <div class="flex justify-center font-sans text-xl antialiased font-medium leading-snug tracking-normal underline text-blue-gray-900">Offres spéciales</div>

      <h1 v-if="!useProductStor.isload" class="font-bold text-center">Chargement...</h1>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4" v-else>
        <!-- component -->
        <ProductCard v-for="item in useProductStor.limit" :key="item.id" :items="item" />
      </div>
    </div>

    <div
      class="grid py-10 lg :grid-cols-2 md:gap-2 sm:gap-4 lg:gap-2 sm:grid-cols-1 md:grid-cols-2"
    >
      <div class="h-20 rounded-lg">
        <img
          class="w-full transition-transform transform rounded-lg hover:scale-105"
          src="../assets/S3.jpeg"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <img
          class="w-full transition-transform transform rounded-lg hover:scale-105"
          src="../assets/D.jpeg"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <div class="grid gap-3 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 " v-if="products.length>0">
      <ProductCard v-for="item in displayedItems" :key="item.id" :items="item" />
      <button type="button" class="pb-3 " v-if="canLoadMore" @click="loadMore">Charger plus d'articles</button>
     <!-- <p v-else  class="pb-3 text-center">Plus aucun élément à charger.</p> -->
    </div>
  </main>
  <Footer />
</template>

<script setup>
import { computed, onMounted ,ref } from 'vue'
import { useProductStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
const useProductStor = useProductStore()
const {products} = storeToRefs(useProductStore())

const itemsToShow = ref(2);
const increment = ref(2);
// Compute displayed items based on itemsToShow
// eslint-disable-next-line vue/return-in-computed-property
const displayedItems = computed(() => {
    if(products.value.length > 0){

      return products.value.slice(0, itemsToShow.value);
    }else{
      return []
    }
});

// Compute whether there are more items to load
const canLoadMore = computed(() => {
  return itemsToShow.value < products.value.length;
});

// Function to load more items
function loadMore() {
  itemsToShow.value += increment.value;
}

onMounted( async () => {
  console.log('product')
   
   await useProductStor.getLimitProduct()
   await useProductStor.getAllProduct()
  })
import Slider from '../components/Slider.vue'
import ContainerRigth from '../components/ContainerRigth.vue'
import Footer from '@/components/Footer.vue'
import ProductCard from '@/components/ProductCard.vue'
</script>



