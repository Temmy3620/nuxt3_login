<template>
    <div class="mt-15">
    
        <v-card
            class="mx-auto"
            max-width="344"
            title="User Registration"
        >
            <v-form @submit.prevent="handleRegistre">
                <v-container>
                    
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        color="primary"
                        label="Name"
                        variant="underlined"
                    ></v-text-field>


                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        color="primary"
                        label="Email"
                        variant="underlined"
                    ></v-text-field>

                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        color="primary"
                        label="Password"
                        placeholder="Enter your password"
                        variant="underlined"
                    ></v-text-field>

                    <!--<v-checkbox
                        v-model="state.terms"
                        color="secondary"
                        label="I agree to site terms and conditions"
                    ></v-checkbox>
                    -->
                    
                </v-container>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>

                <div class="d-flex align-end flex-column">
                    <v-btn type="submit" color="success">
                        Complete Registration

                        <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>
                    <v-btn 
                        color="blue" 
                        @click="authStore.logout">
                        login

                        <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>
                </div>

                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>


  
<script setup lang="ts">
    import { useAuthStore } from '~/store/auth';
    import { nameRules, emailRules, passwordRules } from '../../composables/validationRules'

    const { name, email, password, handleRegistre, errorMessage } = useRegistre()

    const authStore = useAuthStore();

  
</script>