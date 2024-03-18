<!-- src/views/Login.vue -->
<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div class="max-w-md w-full mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900">Login</h2>
        <div class="bg-white p-8 mt-6 mb-4 rounded-lg shadow-md">
          <!-- Use the LoginForm component -->
          <login-form></login-form>
        </div>
      </div>
    </div>
</template>

<script>
// Import the LoginForm component
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'LoginPage',
    components: {
        LoginForm,
    },
};
</script>

<style scoped>
/* You can add view-specific styles here. With Tailwind, most styling is done in the template. */
</style>
