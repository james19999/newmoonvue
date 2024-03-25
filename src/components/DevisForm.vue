<template>
  <div class="w-full p-3 mx-auto bg-white rounded shadow-md">
    <h2 class="mb-4 text-2xl font-semibold text-center">Demander un devis</h2>

    <form>
      <!-- Nom et Prénom -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="lastName"
            v-model="costumer.name"
            name="lastName"
            class="w-full p-2 mt-1 border rounded-md"
          />
        </div>
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700">Prénom</label>
          <input
            type="text"
            id="firstName"
            v-model="costumer.lastname"
            name="firstName"
            class="w-full p-2 mt-1 border rounded-md"
          />
        </div>
      </div>

      <!-- Adresse email -->
      <div class="mt-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Adresse email</label>
        <input
          type="email"
          id="email"
          v-model="costumer.email"
          name="email"
          class="w-full p-2 mt-1 border rounded-md"
        />
      </div>

      <!-- Mot de passe -->
      <div class="mt-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Téléphone</label>
        <input
          type="text"
          id="password"
          v-model="costumer.phone"
          name="password"
          class="w-full p-2 mt-1 border rounded-md"
        />
      </div>

      <!-- Bouton d'inscription -->
      <div class="mt-6" v-if="useProductStor.productcard.length > 0">
        <button
          type="submit"
          @click.prevent="handleSubmit"
          class="w-full p-3 text-white bg-[#00008b] rounded-md hover:bg-[#FF3131]"
        >
          Envoyer
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'

const toast = useToast()
import { ref } from 'vue'
import { useProductStore } from '@/stores/products'
const useProductStor = useProductStore()
const costumer = ref({
  name: '',
  lastname: '',
  email: '',
  phone: ''
})

function handleSubmit() {
  if (
    costumer.value.name == '' &&
    costumer.value.email == '' &&
    costumer.value.phone == '' &&
    costumer.value.lastname == ''
  ) {
    toast.error('Veuillez  remplir tout les champs')
  } else {
    useProductStor.SaveCart(
      costumer.value.name,
      costumer.value.lastname,
      costumer.value.phone,
      costumer.value.email,
      useProductStor.productcard
    )
    toast.success('Votre demande de devis à éte enregistré avec succés')

    costumer.value.name = ''
    costumer.value.email = ''
    costumer.value.phone = ''
    costumer.value.lastname = ''
  }
}
</script>
