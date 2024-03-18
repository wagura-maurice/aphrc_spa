// src/composables/useAuth.js
import { computed } from 'vue';
import { useStore } from 'vuex';

export function useAuth() {
    const store = useStore();

    const isAuthenticated = computed(() => store.getters.isAuthenticated);
    const user = computed(() => store.getters.getUser);

    const login = async (email, password) => {
        await store.dispatch('login', { email, password });
    };

    const logout = async () => {
        await store.dispatch('logout');
    };

    const register = async (userData) => {
        await store.dispatch('register', userData);
    };

    const requestPasswordReset = async (email) => {
        await store.dispatch('requestPasswordReset', email);
    };

    const setPasswordReset = async (resetData) => {
        await store.dispatch('setPasswordReset', resetData);
    };

    const refreshToken = async () => {
        await store.dispatch('refreshToken');
    };

    const verifyAccount = async (verificationData) => {
        await store.dispatch('verifyAccount', verificationData);
    };

    return {
        isAuthenticated,
        user,
        login,
        logout,
        register,
        requestPasswordReset,
        setPasswordReset,
        refreshToken,
        verifyAccount,
    };
}
