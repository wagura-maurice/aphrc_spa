// src/composables/useAuth.js
import { computed } from 'vue';
import { useStore } from 'vuex';

export function useAuth() {
    const store = useStore();

    const isAuthenticated = computed(() => store.getters.isAuthenticated);
    const user = computed(() => store.getters.getUser);

    const login = async (loginData) => {
        await store.dispatch('login', loginData);
    };

    const logout = async () => {
        await store.dispatch('logout');
    };

    const register = async (registrationData) => {
        await store.dispatch('register', registrationData);
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
