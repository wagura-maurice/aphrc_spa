<!-- src/components/PasswordResetForm.vue -->
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md">
        <form @submit.prevent="handlePasswordReset" class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email Address
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" v-model="email">
            <p class="text-red-500 text-xs italic" v-if="errors.email">{{ errors.email }}</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Send Reset Link
            </button>
          </div>
          <p class="text-red-500 text-xs italic mt-4" v-if="errors.non_field_errors">{{ errors.non_field_errors }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAuth } from '@/composables/useAuth';
  
  export default {
    setup() {
      const { requestPasswordReset, errors } = useAuth();
      const email = ref('');
  
      const handlePasswordReset = async () => {
        await requestPasswordReset(email.value);
      };
  
      return {
        email,
        errors,
        handlePasswordReset,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS is utility-first, so most styling is done through class attributes in the template. */
  </style>
  