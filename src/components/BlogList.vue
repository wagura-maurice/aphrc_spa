<!-- src/components/BlogList.vue -->
<template>
    <div class="container mx-auto px-4" v-if="!loading">
        <div class="flex flex-wrap -mx-4">
            <div
            class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
            v-for="post in posts.results"
            :key="post.id">
                <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img :src="post.imageUrl || 'https://via.placeholder.com/600x400'" alt="Blog Post" class="w-full">
                    <div class="p-5">
                        <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
                        <p class="text-gray-700 mb-4">{{ post.excerpt }}</p>
                        <router-link :to="`/blog/${post.id}`" class="text-indigo-500 hover:text-indigo-600 transition-colors duration-300">Read More →</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-between my-8">
            <button @click="fetchPosts(posts.previous)" :disabled="!posts.previous" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Previous
            </button>
            <button @click="fetchPosts(posts.next)" :disabled="!posts.next" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Next
            </button>
        </div>
    </div>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error.message }}</p>
</template>

<script>
import { useBlogPosts } from '@/composables/useBlogPosts';
import { onMounted } from 'vue';

export default {
    setup() {
        const { posts, loading, error, fetchPosts } = useBlogPosts();
        
        onMounted(() => {
            fetchPosts();
        });
        
        return { posts, loading, error, fetchPosts };
    },
};
</script>
