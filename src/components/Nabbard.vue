<!-- eslint-disable vue/multi-word-component-names -->
<template>
   

   <header >
        <nav class="bg-[#00008b]">
            <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="w-20 h-10" src="../assets/B.jpeg" alt="Logo">
                        </div>
                        <div class="hidden md:block">
                            <div class="flex items-baseline ml-10 space-x-4">
                                <RouterLink to="/" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">Accueil</RouterLink>
                                <RouterLink to="About" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">À propos</RouterLink>
                                <RouterLink to="Devis" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">Devis</RouterLink>
                                <RouterLink to="Contact" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">Contact</RouterLink>
                            </div>
                        </div>
                        
                    </div>
                    <div class="flex -mr-2 md:hidden">
                        <button type="button"  @click="toggleMobileMenu" class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Ouvrir le menu</span>
                            <!-- Icon when menu is closed. -->
                            <!-- Heroicon name: outline/menu -->
                            <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <!-- Icon when menu is open. -->
                            <!-- Heroicon name: outline/x -->
                            <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        
            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="md:hidden" v-show="isMobileMenuOpen" @click="toggleMobileMenu" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <RouterLink to="/" class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-white hover:text-white">Accueil</RouterLink>
                    <RouterLink to="About" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-white hover:text-white">À propos</RouterLink>
                    <RouterLink to="Devis" class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-white hover:text-white">Devis</RouterLink>
                    <RouterLink to="Contact" class="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-white hover:text-white">Contact</RouterLink>
                </div>
            </div>
        </nav>
        
     </header>





       
</template>
  
  <script setup>
      import  {ref} from 'vue';
//       import { useProductStore } from '@/stores/products';
//    const useProductStor =useProductStore();
 
     const isMobileMenuOpen =ref(false);
   function  toggleMobileMenu() {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    }
  </script>
  
  <style scoped>
  /* Tailwind CSS classes */
  </style>
  