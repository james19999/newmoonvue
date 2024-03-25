<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="grid gap-4 p-6 mt-2 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2">
        <div class="bg-gray-100 border-gray-300 rounded-md border-inherit border-1 " >
            <iframe  class=" max-sm:max-w-max" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22626.755498713796!2d-0.5433077046637107!3d44.85528237117491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5528b283806183%3A0x53f4d5ca9c9d6329!2sCenon!5e0!3m2!1sen!2sfr!4v1709627747517!5m2!1sen!2sfr" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
        <div>
           <ContactForm/>
        </div>
    </div>
    <Footer/>
     
</template>

  
<script setup>
 import ContactForm from '@/components/ContactForm.vue';
 import Footer from '@/components/Footer.vue';

</script>