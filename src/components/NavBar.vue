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
        <li v-if="!isLoggedIn">
          <router-link to="/login" class="hover:text-gray-300">Login</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/register" class="hover:text-gray-300">Register</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/create-blog" class="hover:text-gray-300">Create Blog</router-link>
        </li>
        <li v-if="isLoggedIn">
          <span class="hover:text-gray-300" @click="logout">Logout</span>
        </li>
        <!-- Add more navigation links here -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isLoggedIn() {
      // Assuming you have a variable or state to determine if the user is logged in
      return !!localStorage.getItem('userToken'); // Adjust as needed
    }
  }
}
</script>

<style scoped>
/* Scoped styles for NavBar */
</style>

