<!-- src/components/AppFooter.vue -->
<template>
    <footer class="bg-gray-800 text-white text-center p-4 mt-auto">
      <div class="container mx-auto">
        <p>© {{ currentYear }} APHRC. All rights reserved.</p>
        <div class="flex justify-center space-x-4 mt-2">
          <!-- Social media links with icons -->
          <a href="https://twitter.com" target="_blank" class="hover:text-gray-400">
            <i class="fab fa-twitter"></i><span class="sr-only">Twitter</span>
          </a>
          <a href="https://facebook.com" target="_blank" class="hover:text-gray-400">
            <i class="fab fa-facebook-f"></i><span class="sr-only">Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" class="hover:text-gray-400">
            <i class="fab fa-instagram"></i><span class="sr-only">Instagram</span>
          </a>
          <!-- Add more social links as needed -->
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
/* Scoped styles for AppFooter */
/* Ensure you have the proper icon classes sizes if needed */
.fa-twitter,
.fa-facebook-f,
.fa-instagram {
  font-size: 1.5em; /* Adjust size as necessary */
}
</style>
