// src/composables/useBlogPosts.js
import { ref } from 'vue';
import { fetchBlogPosts } from '@/api/index.js';

export function useBlogPosts() {
  const posts = ref({...});
  const loading = ref(false);
  const error = ref(null);

  const fetchPosts = async (pageUrl = null) => {
    loading.value = true;
    try {
      const response = await fetchBlogPosts(pageUrl);
      posts.value = response.data;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  return { posts, loading, error, fetchPosts };
}
