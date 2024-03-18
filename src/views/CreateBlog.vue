<!-- src/views/CreateBlog.vue -->
<template>
    <div class="max-w-4xl mx-auto pt-8">
      <h2 class="text-2xl font-semibold mb-6">Create New Blog Post</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
          <input type="text" id="title" v-model="form.title" class="mt-1 p-2 w-full border rounded-md" placeholder="Blog title">
        </div>
        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
          <select id="category" v-model="form.category" class="mt-1 p-2 w-full border rounded-md">
            <option disabled value="">Please select one</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
          <textarea id="content" v-model="form.content" rows="6" class="mt-1 p-2 w-full border rounded-md" placeholder="Write your blog content here..."></textarea>
        </div>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Create Post</button>
      </form>
    </div>
  </template>

<script>
import apiClient from '@/api/index.js';

export default {
  name: 'CreateBlog',
  data() {
    return {
      form: {
        title: '',
        category: '',
        content: '',
      },
      categories: [],
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await apiClient.get('/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    },
    async submitForm() {
      try {
        // Assuming the user's ID is stored in the user object within the Vuex store's state
        // and your API expects the owner's user ID to be submitted with the blog post data
        const accessToken = localStorage.getItem('accessToken'); // Retrieve the access token
        if (!accessToken) {
          throw new Error('No access token found. Please log in.');
        }

        // Include the Authorization header
        await apiClient.post('/api/posts', this.form, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });

        // Optionally, after successful post creation
        this.$toast.success("Blog post created successfully");
        this.$router.push('/'); // Redirect to home or to the newly created post
      } catch (error) {
        console.error("Failed to create the blog post:", error);
        this.$toast.error("Failed to create the blog post. Please try again.");
      }
    },
  },
};
</script>

