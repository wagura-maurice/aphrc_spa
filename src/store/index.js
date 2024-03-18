// src/store/index.js
import { createStore } from 'vuex'; // Import createStore from 'vuex' instead of Vue
import apiClient from '@/api/index.js';

export default createStore({
    state: {
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        currentPost: null,
        blogPosts: [],
        postsLoading: false,
        postError: null,
    },
    mutations: {
        setTokens(state, { accessToken, refreshToken }) {
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
        },
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        clearAuthData(state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.user = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
        },
        setCurrentPost(state, post) {
            state.currentPost = post;
        },
        setBlogPosts(state, posts) {
            state.blogPosts = posts;
        },
        setPostsLoading(state, loading) {
            state.postsLoading = loading;
        },
        setPostError(state, error) {
            state.postError = error;
        }
    },
    actions: {
        async login(_, loginData) {
            const response = await apiClient.post('auth/sign-in/', loginData);

            console.log(response.data);
        },
        /* async login({ dispatch }, { email, password }) {
            const response = await apiClient.post('auth/sign-in/', { email, password });
            dispatch('setTokens', { accessToken: response.data.access, refreshToken: response.data.refresh });
            dispatch('setUser', response.data.user);
        }, */
        async logout({ dispatch }) {
            dispatch('clearAuthData');
        },
        async register(_, registrationData) {
            await apiClient.post('auth/sign-up/', registrationData);
        },
        async requestPasswordReset(_, email) {
            await apiClient.post('auth/password-reset/', { email });
        },
        async setPasswordReset(_, resetData) {
            await apiClient.post('auth/password-reset-confirm/', resetData);
        },
        async refreshToken({ state }) {
            const response = await apiClient.post('auth/token/refresh/', { refresh: state.refreshToken });
            this.commit('setTokens', { accessToken: response.data.access, refreshToken: response.data.refresh });
        },
        async verifyAccount(_, verificationData) {
            await apiClient.post('auth/verify-account/', verificationData);
        },
        async fetchPost({ commit }, postId) {
            commit('setPostsLoading', true);
            commit('setPostError', null);
            try {
                const response = await apiClient.get(`/posts/${postId}`);
                commit('setCurrentPost', response.data);
            } finally {
                commit('setPostsLoading', false);
            }
        },
        async fetchBlogPosts({ commit }, pageUrl = '/posts') {
            commit('setPostsLoading', true);
            commit('setPostError', null);
            try {
                const response = await apiClient.get(pageUrl);
                commit('setBlogPosts', response.data);
            } finally {
                commit('setPostsLoading', false);
            }
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.accessToken;
        },
        getUser(state) {
            return state.user;
        },
        currentPost: (state) => state.currentPost,
        blogPosts: (state) => state.blogPosts,
        postsLoading: (state) => state.postsLoading,
        postError: (state) => state.postError,
    },
});
