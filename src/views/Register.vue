<!-- src/views/Register.vue -->
<template>
    <div class="max-w-lg mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h2 class="text-2xl font-semibold mb-4">Register</h2>
      <RegistrationForm @register="handleRegister" />
    </div>
  </template>
  
  <script>
  import RegistrationForm from '@/components/RegistrationForm.vue';
  
  export default {
    name: 'RegisterPage',
    components: {
      RegistrationForm,
    },
    methods: {
      handleRegister() {
        // Handle registration completion, such as redirecting to login page
        console.log('Registration completed.');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>

