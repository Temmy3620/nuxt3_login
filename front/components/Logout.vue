<template>

    <v-btn 
    density="compact"
    color="grey"
    @click="logout"
    >logout</v-btn>

</template>
<script setup lang="ts">
    import { useAuthStore } from '~/store/auth';
    const router = useRouter();

    const authStore = useAuthStore();

    function logout(){
        const accessToken = useCookie('accessToken', { secure: true, sameSite: 'strict' });
        accessToken.value = '';  // クッキーからアクセストークンを削除
        authStore.setLoginStatus(false);
        router.push('/auth/login');
    }
    

</script>