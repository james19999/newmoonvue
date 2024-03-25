<template>
  <div class="w-full p-3 mx-auto bg-white rounded shadow-md">
    <h2 class="mb-4 text-2xl font-semibold text-center">Contactez nous</h2>

    <form >
      <div class="mt-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nom</label>
        <input type="text" v-model="useContactStor.contacts.name" id="email" name="name" class="w-full p-2 mt-1 border rounded-md" />
      </div>

      <div class="mt-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
        <input type="email" v-model="useContactStor.contacts.email" id="email" name="email" class="w-full p-2 mt-1 border rounded-md" />
      </div>

      <!-- Mot de passe -->
      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea class="w-full p-2 mt-1 border rounded-md" v-model="useContactStor.contacts.msg" name="msg" id="" cols="2" rows="2"></textarea>
      </div>

      <!-- Bouton d'inscription -->
      <div class="mt-6">
        <button
          type="submit"
          class="w-full p-3 text-white bg-[#00008b] rounded-md hover:bg-[#FF3131]"
           @click.prevent="useContactStor.Contactsave(useContactStor.contacts)"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
 import { useContactStore } from '@/stores/contact'
const useContactStor = useContactStore();

</script>
