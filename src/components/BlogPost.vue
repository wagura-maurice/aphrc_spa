<!-- src/components/BlogPost.vue -->
<template>
    <div class="container mx-auto px-4 py-8">
        <article class="max-w-4xl mx-auto">
            <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
            <div class="flex items-center mb-6">
                <div class="flex items-center mr-4">
                    <!-- Fallback for avatar if not provided -->
                    <img class="w-10 h-10 rounded-full mr-3" :src="post.owner.avatar || 'https://via.placeholder.com/150?text=User+Avatar'" alt="Avatar">
                    <div>
                        <p class="text-sm font-semibold">{{ post.owner.username }}</p>
                        <p class="text-xs text-gray-600">{{ post.date }}</p>
                    </div>
                </div>
                <div class="text-sm text-gray-600">
                    <span>Category: </span><span class="text-indigo-600">{{ post.category.name }}</span>
                </div>
            </div>
            <!-- Fallback for blog post cover image if not provided -->
            <img :src="post.imageUrl || 'https://via.placeholder.com/600x400?text=Blog+Post+Cover'" alt="Blog Post Cover" class="w-full rounded-lg mb-8">
            <div class="prose lg:prose-xl">
                <p v-html="post.content"></p>
            </div>
        </article>
    </div>
</template>

<script>
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useBlogPost } from '@/composables/useBlogPost';

    export default {
        name: 'BlogPost',
        setup() {
            const router = useRouter();
            const { post, loading, error, fetchPost } = useBlogPost();
            
            onMounted(() => {
                const postId = router.currentRoute.value.params.id;
                fetchPost(postId);
            });
            
            return { post, loading, error };
        },
    }
</script>

<style scoped>
/* Your styles here */
</style>
