<template>
     <div class="relative flex items-center min-h-screen p-5 overflow-hidden min-w-screen lg:p-10">
    <div class="relative w-full max-w-6xl p-10 mx-auto text-gray-800 bg-white rounded shadow lg:p-20 md:text-left">
        <div class="items-center -mx-10 md:flex">
            <div class="w-full mb-10 lg:px-10 md:px-0 sm:px-0 md:mb-0">
                <div class="relative">
                    <img :src=" `${imageUrl}` + useProductStor.products.img" class="relative z-10 w-full rounded-lg "  alt="">
                    <div class="absolute z-0 border-2 border-gray-800 top-10 bottom-10 left-10 right-10"></div>
                </div>
            </div>
            <div class="w-full px-10 md:w-1/2">
                <div class="mb-10">
                    <h1 class="mb-5 text-2xl font-bold uppercase"> {{ useProductStor.products.name }}<br></h1>
                    <p class="text-sm">{{ useProductStor.products.description }} <a href="#" class="inline-block text-xs leading-none text-gray-900 border-b border-gray-900 opacity-50 hover:opacity-100"> <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <!-- <div class="inline-block mr-5 align-bottom">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="text-5xl font-bold leading-none align-baseline">59</span>
                        <span class="text-2xl leading-none align-baseline">.99</span>
                    </div> -->
                    <div class="inline-block align-bottom">
                        <button  @click.prevent="useProductStor.AddProductToCard(useProductStor.products.id,useProductStor.products.name,useProductStor.products.description,useProductStor.products.img)" class="px-10 py-2 font-semibold text-white bg-[#00008b]  rounded-full opacity-75 hover:opacity-100 hover:text-white"><i class="mr-2 -ml-2 mdi mdi-cart"></i>Ajouter au devis</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
 <Footer/>
</template>
<script setup>

   import Footer  from '../components/Footer.vue'
import { onMounted} from 'vue'
   import { useProductStore } from '@/stores/products';
   import imageUrl from '../helper/imageUrl';
   const useProductStor =useProductStore();

 const props=  defineProps({
      id:{type:String,required:true},
   });
   onMounted(() => {
    useProductStor.ShowProduct(parseInt(props.id));
   })

  
</script>