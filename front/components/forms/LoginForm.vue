<template>
    <v-alert v-if="errorMessage" type="error" class="mb-3">{{ errorMessage }}</v-alert>
    <v-sheet width="300" class="mx-auto" style="background-color: white;">
      <h2 class="text-center">login</h2>
      <v-form @submit.prevent="handleLogin" class="mt-3">
        <v-text-field
          v-model="email"
          type="email"
          :rules="emailRules"
          label="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          :rules="passwordRules"
          label="password"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2" color="grey">ログイン</v-btn>
      </v-form>
    </v-sheet>
</template>

<script setup lang="ts">
  import { useLogin } from '../../composables/useLogin'
  import { emailRules, passwordRules } from '../../composables/validationRules'

  const { email, password, handleLogin, errorMessage } = useLogin()
  
  
</script>
