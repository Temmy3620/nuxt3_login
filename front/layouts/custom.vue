<template>

    <v-row justify="start" class="ma-2" v-if="authStore.loggedIn == true">
        <v-col cols="auto">
            <NuxtLink to="/vuetify">
                <v-btn density="compact">radio</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/todo">
                <v-btn density="compact">todo</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/price">
                <v-btn density="compact">maney</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/test">
                <v-btn density="compact">dialog</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/componentTest">
                <v-btn density="compact">select</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/componentTest2">
                <v-btn density="compact">tab</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/componentTest3">
                <v-btn density="compact">language</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto">
            <NuxtLink to="/users">
                <v-btn density="compact">users</v-btn>
            </NuxtLink>
        </v-col>

        <v-col cols="auto" class="ms-auto">
            <Logout />
        </v-col>
    </v-row>
    
    <div>
        
        <!-- named slot -->
        <slot />
    </div>
</template>
<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';

  const authStore = useAuthStore();
  console.log(authStore.loggedIn);

</script>


  