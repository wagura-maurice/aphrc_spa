// src/composables/useBlogPosts.js
import { computed } from 'vue';
import { useStore } from 'vuex';

export function useBlogPosts() {
  const store = useStore();

  // Use Vuex state and getters instead of local refs
  const posts = computed(() => store.getters.blogPosts);
  const loading = computed(() => store.getters.postsLoading);
  const error = computed(() => store.getters.postsError);

  const fetchPosts = async (pageUrl = null) => {
    await store.dispatch('fetchBlogPosts', pageUrl);
  };

  return { posts, loading, error, fetchPosts };
}
