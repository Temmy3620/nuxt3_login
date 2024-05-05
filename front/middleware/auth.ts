import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();


export default defineNuxtRouteMiddleware(async () => {
    if (!authStore.loggedIn) {
    return navigateTo('/auth/login');
  }
})