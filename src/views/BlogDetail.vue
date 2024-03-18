<!-- src/views/BlogDetail.vue -->

<template>
    <div class="container mx-auto px-4 py-8">
      <div v-if="loading" class="text-center">
        <p>Loading post...</p>
      </div>
      <div v-else-if="error" class="text-red-500">
        <p>Error loading the post: {{ error.message }}</p>
      </div>
      <div v-else-if="post" class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <div class="mb-6 text-gray-700">
          <span>Posted on {{ new Date(post.created_at).toLocaleDateString() }}</span>
        </div>
        <div class="prose lg:prose-xl">
          <p v-html="post.content"></p>
        </div>
      </div>
      <div v-else>
        <p>Post not found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useBlogPost } from '@/composables/useBlogPost';
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'BlogDetail',
    setup() {
      const router = useRouter();
      const { id } = router.currentRoute.value.params;
      const { post, loading, error, fetchPost } = useBlogPost();
      const postId = ref(id);
  
      onMounted(() => {
        fetchPost(postId.value);
      });
  
      return { post, loading, error };
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS provides utility classes, so most styling is done in the template. Add any component-specific styles here. */
  </style>
  