<!-- src/components/AppFooter.vue -->
<template>
    <footer class="bg-gray-800 text-white text-center p-4 mt-auto">
      <div class="container mx-auto">
        <p>© 2024 APHRC. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-2">
          <a href="https://twitter.com" target="_blank" class="hover:text-gray-400">Twitter</a>
          <a href="https://facebook.com" target="_blank" class="hover:text-gray-400">Facebook</a>
          <a href="https://instagram.com" target="_blank" class="hover:text-gray-400">Instagram</a>
          <!-- Add more social links as needed -->
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
  }
  </script>
  
  <style scoped>
  /* Scoped styles for AppFooter */
  </style>
  