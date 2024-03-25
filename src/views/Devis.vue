<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <div class="grid gap-4 p-6 mt-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2">
         <div class="bg-gray-100 border-gray-300 rounded-md border-inherit border-1 " v-if="useProductStor.productcard.length>0" >
            <Card v-for="item in useProductStor.productcard" :key="item.id"  :items="item" />
        </div>
        <RouterLink to="/" class="flex flex-col justify-center text-lg text-center text-black hover:text-red-900" v-else>Merci de bien vouloir ajouter des articles à votre devis</RouterLink>
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
  import { useProductStore  } from '@/stores/products';
import { RouterLink } from 'vue-router';
   const useProductStor =useProductStore();
   

</script>