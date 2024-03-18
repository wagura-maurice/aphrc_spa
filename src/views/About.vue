<!-- src/views/About.vue -->
<template>
    <div class="max-w-6xl mx-auto px-4 py-8">
      <div class="text-center py-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
        <p class="text-xl text-gray-600">Learn more about our team and mission.</p>
      </div>
  
      <!-- Add your content for the About page here -->
      <div class="bg-white rounded-lg shadow overflow-hidden p-6">
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus sit amet ligula finibus pharetra. Nam dapibus malesuada massa, nec placerat sapien finibus sit amet.</p>
      </div>
      
      <div class="bg-white rounded-lg shadow overflow-hidden p-6 mt-6">
        <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
        <!-- Add information about your team members here -->
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div class="bg-gray-100 rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-2">John Doe</h3>
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div class="bg-gray-100 rounded-lg p-4">
              <h3 class="text-lg font-semibold mb-2">Jane Smith</h3>
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <!-- Add more team members as needed -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
  };
  </script>
  
  <style scoped>
  /* Add scoped styles here if needed */
  </style>
  