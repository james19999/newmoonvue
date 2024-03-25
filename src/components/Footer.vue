<!-- eslint-disable vue/multi-word-component-names -->
<template>
   <div>
    <footer class="bg-[#00008b] py-12">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <!-- Column 1 -->
            <div class="md:col-span-1 lg:col-span-1">
                <h3 class="text-lg font-semibold leading-6 text-white">À propos</h3>
                <p class="mt-2 text-base leading-6 text-gray-400">Your description goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laboriosam!</p>
            </div>

            <!-- Column 2 -->
            <div class="md:col-span-1 lg:col-span-1">
                <h3 class="text-lg font-semibold leading-6 text-white">Lien rapide</h3>
                <ul class="mt-4">
                    <li>
                        <RouterLink to="/" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">Accueil</RouterLink>

                    </li>
                    <li>
                        <RouterLink to="About" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">À propos</RouterLink>

                    </li>
                    <li>
                        <RouterLink to="Devis" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">Devis</RouterLink>

                    </li>
                    <li>
                        <RouterLink to="Contact" class="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-[#FF3131] hover:text-white">Contact</RouterLink>
                      

                    </li>
                </ul>
            </div>

            <!-- Column 3 -->
            <div class="md:col-span-1 lg:col-span-1">
                <h3 class="text-lg font-semibold leading-6 text-white">Contact</h3>
                <p class="mt-2 text-base leading-6 text-gray-400">13 Lot les prés de brive<br> 33670 la sauve<br> contact@newmoon.com <br> +33 623 39 65 21</p>
            </div>
        </div>
    </div>
</footer>
   </div>
</template>

<script setup>

</script>