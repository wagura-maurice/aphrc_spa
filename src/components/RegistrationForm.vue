<!-- src/components/RegistrationForm.vue -->
<template>
        <form @submit.prevent="handleRegister" class="space-y-6">
          <!-- Name field -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2" for="name">
              Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" v-model="registrationData.name">
            <p class="text-red-500 text-xs italic" v-if="errors.name">{{ errors.name }}</p>
          </div>
          <!-- Email field -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2" for="email">
              Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" v-model="registrationData.email">
            <p class="text-red-500 text-xs italic" v-if="errors.email">{{ errors.email }}</p>
          </div>
          <!-- Password field -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" v-model="registrationData.password">
            <p class="text-red-500 text-xs italic" v-if="errors.password">{{ errors.password }}</p>
          </div>
          <!-- Submit button -->
          <div>
            <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register
            </button>
          </div>
          <!-- Non-field errors display -->
          <p class="text-red-500 text-xs italic" v-if="errors.non_field_errors">{{ errors.non_field_errors }}</p>
        </form>
  </template>
  
  <script>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router'; // Import useRouter to programmatically navigate
  import { useAuth } from '@/composables/useAuth';
  
  export default {
    setup() {
      const router = useRouter(); // Use the useRouter composable to get access to the router instance
      const { register } = useAuth();
      const registrationData = ref({
        name: '',
        email: '',
        password: '',
      });
      const errors = reactive({
        name: null,
        email: null,
        password: null,
        non_field_errors: null,
      });
  
      const handleRegister = async () => {
        const result = await register(registrationData.value);
        if (result && !result.error) {
          // No error, registration successful
  
          console.log('Registration successful:', result.data); // Log the successful registration data
  
          // Now you can redirect the user to the login page
          router.push({ name: 'login' });
        } else if (result && result.error) {
            console.log(result);
          // Handle the errors from registration
          Object.assign(errors, result.error);
        }
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
  

  return the data after succfull registration