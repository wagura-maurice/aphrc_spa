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
      <div v-else-if="posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg shadow overflow-hidden">
          <!-- Placeholder Image -->
          <img :src="getPlaceholderImage(post.imageUrl)" alt="Blog Post" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ post.title }}</h3>
            <p class="text-gray-600">{{ getExcerpt(post.content) }}</p>
            <router-link :to="`/blog/${post.id}`" class="text-blue-500 hover:text-blue-600 mt-4 inline-block">Read More</router-link>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="mt-8 text-center">
        <button
          v-if="previousPage"
          @click="fetchPosts(previousPage)"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          Previous
        </button>
        <button
          v-if="nextPage"
          @click="fetchPosts(nextPage)"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
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
      const nextPage = ref(null);
      const previousPage = ref(null);
  
      const fetchPosts = async (url) => {
        loading.value = true;
        try {
          const response = await apiClient.get(url);
          posts.value = response.data.results;
          nextPage.value = response.data.next;
          previousPage.value = response.data.previous;
        } catch (e) {
          error.value = e;
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(() => {
        fetchPosts('/post/catalogs/');
      });
  
      const getPlaceholderImage = (imageUrl) => {
        return imageUrl || 'https://via.placeholder.com/400x300.png?text=No+Image+Available';
      };
  
      const getExcerpt = (content) => {
        return content.substring(0, 200) + '...'; // Adjust the number as needed
      };
  
      return { posts, loading, error, nextPage, previousPage, fetchPosts, getPlaceholderImage, getExcerpt };
    },
  };
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
  
  