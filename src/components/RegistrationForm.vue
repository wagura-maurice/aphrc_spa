<!-- src/components/RegistrationForm.vue -->
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md">
        <form @submit.prevent="handleRegister" class="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <!-- Name field -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" v-model="registrationData.name">
            <p class="text-red-500 text-xs italic" v-if="errors.name">{{ errors.name }}</p>
          </div>
          <!-- Email field -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="registrationData.email">
            <p class="text-red-500 text-xs italic" v-if="errors.email">{{ errors.email }}</p>
          </div>
          <!-- Password field -->
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" v-model="registrationData.password">
            <p class="text-red-500 text-xs italic" v-if="errors.password">{{ errors.password }}</p>
          </div>
          <!-- Submit button -->
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register
            </button>
          </div>
          <!-- Non-field errors display -->
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
      const { register, errors } = useAuth();
      const registrationData = ref({
        name: '',
        email: '',
        password: '',
      });
  
      const handleRegister = async () => {
        await register(registrationData.value);
      };
  
      return {
        registrationData,
        errors,
        handleRegister,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS is utility-first, most styling is achieved through class attributes in the template. */
  </style>
  