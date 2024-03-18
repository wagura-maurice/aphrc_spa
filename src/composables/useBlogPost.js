// src/composables/useBlogPost.js
import { computed } from 'vue';
import { useStore } from 'vuex';

export function useBlogPost() {
  const store = useStore();

  const post = computed(() => store.state.currentPost);
  const loading = computed(() => store.state.postLoading);
  const error = computed(() => store.state.postError);

  const fetchPost = async (postId) => {
    await store.dispatch('fetchPost', postId);
  };

  return { post, loading, error, fetchPost };
}
