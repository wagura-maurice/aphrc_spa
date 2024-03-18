<!-- src/components/LoginForm.vue -->
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-xs">
        <form @submit.prevent="handleLogin" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="credentials.email">
            <p class="text-red-500 text-xs italic" v-if="errors.email">{{ errors.email }}</p>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" v-model="credentials.password">
            <p class="text-red-500 text-xs italic" v-if="errors.password">{{ errors.password }}</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
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
      const { login, errors } = useAuth();
      const credentials = ref({
        email: '',
        password: '',
      });
  
      const handleLogin = async () => {
        await login(credentials.value.email, credentials.value.password);
      };
  
      return {
        credentials,
        errors,
        handleLogin,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS is utility-first, most styling is achieved through class attributes. Add any additional styles here if needed. */
  </style>
  