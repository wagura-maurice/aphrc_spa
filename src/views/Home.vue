<!-- src/views/Home.vue -->
<template>
    <div class="max-w-6xl mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div class="text-center py-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-4">Welcome to My Blog</h1>
        <p class="text-xl text-gray-600">Explore the latest posts and more!</p>
      </div>
  
      <!-- Blog Posts Section -->
      <div v-if="loading" class="text-center">
        <p>Loading posts...</p>
      </div>
      <div v-else-if="error" class="text-red-500 text-center">
        <p>Failed to load posts: {{ error.message }}</p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg shadow overflow-hidden">
          <img :src="post.imageUrl" alt="Blog Post" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
            <p class="text-gray-600">{{ post.excerpt }}</p>
            <router-link :to="`/blog/${post.id}`" class="text-blue-500 hover:text-blue-600 mt-4 inline-block">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import apiClient from '@/api/index.js';
  
  export default {
    name: 'HomePage',
    setup() {
      const posts = ref([]);
      const loading = ref(false);
      const error = ref(null);
  
      onMounted(async () => {
        loading.value = true;
        try {
          const response = await apiClient.get('/posts/catalogs');
          posts.value = response.data;
        } catch (e) {
          error.value = e;
        } finally {
          loading.value = false;
        }
      });
  
      return { posts, loading, error };
    },
  };
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
