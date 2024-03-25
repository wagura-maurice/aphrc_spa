<!-- src/views/Login.vue -->
<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div class="max-w-md w-full mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900">Login</h2>
        <div class="bg-white p-8 mt-6 mb-4 rounded-lg shadow-md">
            <LoginForm @onLogin="handleLogin" />
        </div>
      </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'RegisterPage',
  components: {
    LoginForm,
  },
  setup() {
    const router = useRouter();
    
    const handleLogin = async () => {
      // Perform registration logic...
      
      // If registration is successful
      router.push({ name: 'createBlog' });
    };
    
    return {
      handleLogin
    };
  },
};
</script>

<style scoped>
/* You can add view-specific styles here. With Tailwind, most styling is done in the template. */
</style>
