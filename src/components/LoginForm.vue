<!-- src/components/LoginForm.vue -->
<template>
    <form @submit.prevent="handleLogin" class="space-y-6">
      <div>
        <label class="block text-sm font-bold text-gray-700 mb-2" for="email">
          Email
        </label>
        <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="loginData.email">
      </div>
      <div>
        <label class="block text-sm font-bold text-gray-700 mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" v-model="loginData.password">
      </div>
      <div>
        <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
      </div>
    </form>
</template>
  
<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth'; // Import your useAuth composable

export default {
  setup() {
    const router = useRouter(); // Use useRouter to redirect after login
    const { login } = useAuth(); // Destructure the login method from useAuth
    
    const loginData = ref({
        email: '',
        password: '',
      });
      const errors = reactive({
        email: null,
        password: null,
        non_field_errors: null,
      });

      const handleLogin = async () => {
        const result = await login(loginData.value);
        if (result && !result.error) {
          // No error, login successful
  
          console.log('Login successful:', result.data); // Log the successful login data
  
          // Now you can redirect the user to the login page
          router.push({ name: 'login' });
        } else if (result && result.error) {
            console.log(result);
          // Handle the errors from login
          Object.assign(errors, result.error);
        }
      };

    return {
        loginData,
        errors,
        handleLogin,
    };
  },
};
</script>

<style scoped>
/* Tailwind CSS is utility-first, most styling is achieved through class attributes. Add any additional styles here if needed. */
</style>
