<!-- src/views/PasswordReset.vue -->
<template>
    <div class="max-w-lg mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h2 class="text-2xl font-semibold mb-4">Reset Password</h2>
      <PasswordResetForm @reset="handleReset" />
    </div>
  </template>
  
  <script>
  import PasswordResetForm from '@/components/PasswordResetForm.vue';
  
  export default {
    name: 'PasswordReset',
    components: {
      PasswordResetForm,
    },
    methods: {
      handleReset() {
        // Handle password reset completion, such as redirecting to login page
        console.log('Password reset completed.');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
  