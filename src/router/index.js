// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import the components used in routes
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Profile from '@/views/Profile.vue';
import BlogDetail from '@/views/BlogDetail.vue';
import CreateBlog from '@/views/CreateBlog.vue';
import PasswordReset from '@/views/PasswordReset.vue';
import About from '@/views/About.vue';

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
    path: '/password-reset',
    name: 'passwordReset',
    component: PasswordReset,
    meta: { guestOnly: true },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('userToken'); // Adjust as needed

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else if (to.meta.guestOnly && isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export function logout() {
  localStorage.removeItem('userToken'); // Remove user token from local storage
  // Optionally perform other cleanup actions, like clearing the user state

  router.push({ name: 'login' }); // Redirect the user to the login page
}

export default router;
