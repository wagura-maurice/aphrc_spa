// src/router/index.js

import Vue from 'vue';
import Router from 'vue-router';

// Import the components used in routes
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Profile from '@/views/Profile.vue';
import BlogDetail from '@/views/BlogDetail.vue';
import CreateBlog from '@/views/CreateBlog.vue';
import PasswordReset from '@/views/PasswordReset.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { guestOnly: true },
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/blog/:id',
    name: 'blogDetail',
    component: BlogDetail,
    props: true,
  },
  {
    path: '/create-blog',
    name: 'createBlog',
    component: CreateBlog,
    meta: { requiresAuth: true },
  },
  {
    path: '/edit-blog/:id',
    name: 'editBlog',
    component: CreateBlog,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/password-reset',
    name: 'passwordReset',
    component: PasswordReset,
    meta: { guestOnly: true },
  }
  // Add other routes here as needed
];

const router = new Router({
  mode: 'history', // Use the HTML5 history mode
  base: process.env.BASE_URL,
  routes,
});

// Navigation guards could be added here if needed
router.beforeEach((to, from, next) => {
  // Example guard for auth-required routes
  const isAuthenticated = !!localStorage.getItem('userToken'); // Update based on your auth logic

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else if (to.matched.some(record => record.meta.guestOnly) && isAuthenticated) {
    next('/');
  } else {
    next(); // Always call next()!
  }
});

export default router;
