<template>

    <v-btn 
    density="compact"
    color="grey"
    @click="authStore.logout"
    >logout</v-btn>

</template>
<script setup lang="ts">
    import { useAuthStore } from '~/store/auth';

    const authStore = useAuthStore();

    

</script>