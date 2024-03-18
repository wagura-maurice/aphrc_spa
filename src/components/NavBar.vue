<!-- src/components/NavBar.vue -->
<template>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-lg font-semibold">
          <router-link to="/" class="hover:text-gray-300">MyApp</router-link>
        </div>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="hover:text-gray-300">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-gray-300">About</router-link>
          </li>
          <li>
            <router-link to="/login" class="hover:text-gray-300">Login</router-link>
          </li>
          <!-- Add more navigation links here -->
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>
  
  <style scoped>
  /* Scoped styles for NavBar */
  </style>
  