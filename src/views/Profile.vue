<!-- src/views/Profile.vue -->
<template>
    <div class="container mx-auto p-6">
      <div class="max-w-4xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-2xl font-semibold mb-6">User Profile</h2>
        <div v-if="profile">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <div class="text-gray-600">{{ profile.username }}</div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <div class="text-gray-600">{{ profile.email }}</div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
            <div class="text-gray-600">{{ profile.first_name }} {{ profile.middle_name }} {{ profile.last_name }}</div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Account Status</label>
            <div class="text-gray-600">{{ profile.is_active ? 'Active' : 'Inactive' }}</div>
          </div>
          <!-- Add more fields as necessary -->
        </div>
        <div v-else>
          <p>Loading profile...</p>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import apiClient from '@/api/index.js'; // Ensure this points correctly to your API setup

export default {
    name: 'UserProfile',
    setup() {
        const profile = ref(null);

        onMounted(async () => {
            try {
                const accessToken = localStorage.getItem('accessToken');
                if (!accessToken) {
                    throw new Error('No access token found.');
                }
                const response = await apiClient.get('/auth/profile/', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });
                profile.value = response.data;
            } catch (error) {
                console.error("Failed to fetch profile:", error);
                // Handle error, e.g., redirect to login
            }
        });

        return { profile };
    },
};
</script>

<style scoped>
/* Additional scoped styles if needed */
</style>
