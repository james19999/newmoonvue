<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <div class="grid   md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 gap-4 mt-2 p-6">
         <div class="rounded-md  border-inherit border-1 border-gray-300 bg-gray-100 " v-if="useProductStor.productcard.length>0" >
            <Card v-for="item in useProductStor.productcard" :key="item.id"  :items="item" />
        </div>
        <RouterLink to="/" class="text-black text-center text-lg flex justify-center flex-col hover:text-red-900" v-else>Merci de bien vouloir ajouter des articles à votre devis</RouterLink>
         <div>
            <DevisForm/>
         </div>
     </div>
     <Footer/>
      
</template>

   
<script setup>
  import DevisForm from '@/components/DevisForm.vue';
  import Footer from '@/components/Footer.vue';
  import Card from '@/components/Card.vue';
  import { useProductStore } from '@/stores/products';
import { RouterLink } from 'vue-router';
   const useProductStor =useProductStore();
</script>