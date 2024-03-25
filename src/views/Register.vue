<!-- src/views/Register.vue -->
<template>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
    <div class="max-w-md w-full mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-900">Register</h2>
        <div class="bg-white p-8 mt-6 mb-4 rounded-lg shadow-md">
            <RegistrationForm @register="handleRegister" />
        </div>
    </div>
    </div>
</template>
  
<script>
import { useRouter } from 'vue-router';
import RegistrationForm from '@/components/RegistrationForm.vue';

export default {
  name: 'RegisterPage',
  components: {
    RegistrationForm,
  },
  setup() {
    const router = useRouter();
    
    const handleRegister = async () => {
      // Perform registration logic...
      
      // If registration is successful
      router.push({ name: 'login' }); // or router.push('/login');
    };
    
    return {
      handleRegister
    };
  },
};
</script>
  
<style scoped>
    /* Additional scoped styles if needed */
</style>

direct them to login page on succufu registration