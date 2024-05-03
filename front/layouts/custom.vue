<template>
    <v-row justify="start" v-if="authStore.loggedIn == true">
        <v-col cols="10">
            <v-sheet elevation="6">
                <v-tabs
                bg-color="grey"
                next-icon="mdi-arrow-right-bold-box-outline"
                prev-icon="mdi-arrow-left-bold-box-outline"
                >
                
                    <NuxtLink to="/dash/vuetify">
                        <v-tab
                        class="text-white"
                        >
                            radio
                        </v-tab>
                    </NuxtLink>
                
                    <NuxtLink to="/dash/todo">
                        <v-tab
                        class="text-white"
                        >
                            todo
                        </v-tab>
                    </NuxtLink>
            
                    <NuxtLink to="/dash/price">
                        <v-tab
                        class="text-white"
                        >
                            memory
                        </v-tab>
                    </NuxtLink>
                                
                    <NuxtLink to="/dash/test">
                        <v-tab
                        class="text-white"
                        >
                            dialog
                        </v-tab>
                    </NuxtLink>
                
                    <NuxtLink to="/dash/componentTest">
                        <v-tab
                        class="text-white"
                        >
                            select
                        </v-tab>
                    </NuxtLink>
            
                    <NuxtLink to="/dash/componentTest3">
                        <v-tab
                        class="text-white"
                        >
                            language
                        </v-tab>
                    </NuxtLink>
                
                    <NuxtLink to="/dash/users">
                        <v-tab
                        class="text-white"
                        >
                            users
                        </v-tab>
                    </NuxtLink>

                    <NuxtLink to="/dash/componentTest2">
                        <v-tab
                        class="text-white"
                        >
                            tab
                        </v-tab>
                    </NuxtLink>
            
                </v-tabs>
            </v-sheet>
        </v-col>
        <v-col cols="2" class="d-flex align-end flex-column ms-auto">
            <Logout />
            <a>{{ authStore.UserInfo.name }}</a>
        </v-col>
    </v-row> 
    
    <div>

        <slot />
    </div>
</template>
<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';

  const authStore = useAuthStore();
  console.log(authStore.loggedIn);


</script>


  