<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <div class="container mx-auto  py-1    ">
    <ul class="divide-y divide-gray-200 p-3 ">
        <!-- Article 1 -->
        <li class="py-4 flex items-center justify-between">
            <div class="flex items-center">
                <img
                        :src=" `${imageUrl}` + items.img"
                        alt="ui/ux review check"
                        class="w-full h-11 mr-2  shadow-md rounded-lg"
                    />
                
                <div class="flex flex-col">
                    <span class="text-lg font-semibold">{{ items.name }}</span>
                    <span class="text-gray-500">{{ items.desc }}</span>
                </div>
            </div>
            <div class="flex items-center">
                <button @click.prevent="useProductStor.Decrement(items.id)" class="text-gray-500 mr-2 focus:outline-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                    </svg>
                </button>
                <span class="text-gray-700 mx-2">{{ items.qty }}</span>
                <button @click.prevent="useProductStor.Increment(items.id)" class="text-gray-500 mr-2 focus:outline-none">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20l8-8-8-8"></path>
                    </svg>
                </button>
                <button  @click.prevent="useProductStor.Delete(items.id)" class="text-red-500 hover:text-red-600 focus:outline-none focus:text-red-600">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </li>
        <!-- Article 2 -->
        <!-- Autres articles... -->
    </ul>

</div>

</template>

<script setup>
import imageUrl from '../helper/imageUrl'
import { useProductStore } from '@/stores/products';
   const useProductStor =useProductStore();
defineProps({
     items:{
        type:Object,
        required:true
     }
})

</script>