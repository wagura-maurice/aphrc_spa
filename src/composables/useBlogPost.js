// src/composables/useBlogPost.js
import { ref } from 'vue';
import { fetchBlogPostById } from '@/api/index.js';

export function useBlogPost() {
  const post = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchPost = async (postId) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetchBlogPostById(postId);
      post.value = response.data;
    } catch (e) {
      error.value = e;
      console.error("Failed to fetch the blog post:", e);
    } finally {
      loading.value = false;
    }
  };

  return { post, loading, error, fetchPost };
}
