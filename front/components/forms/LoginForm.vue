<template>
    <v-alert v-if="errorMessage" type="error" class="mb-3">{{ errorMessage }}</v-alert>
    <v-sheet width="300" class="mx-auto" style="background-color: white;">
      <h2 class="text-center">ログイン</h2>
      <v-form @submit.prevent="handleLogin" class="mt-3">
        <v-text-field
          v-model="email"
          type="email"
          :rules="emailRules"
          label="メールアドレス"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          :rules="passwordRules"
          label="パスワード"
        ></v-text-field>
        <v-btn type="submit" block class="mt-2" color="grey">ログイン</v-btn>
      </v-form>
    </v-sheet>
</template>

<script setup lang="ts">
  import { useLogin } from '../../composables/useLogin'
  import { emailRules, passwordRules } from '../../composables/validationRules'
  
  const { email, password, handleLogin, errorMessage } = useLogin()
  
  /*
  const emailRules = [
    (value) => {
      if (value) return true
      return 'メールアドレスは必須です。'
    },
    (value) => {
      const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
      if (pattern.test(value)) return true
      return '有効なメールアドレスを入力してください。'
    },
  ]

  const passwordRules = [
    (value) => {
      if (value) return true
      return 'パスワードは必須です。'
    },
    (value) => {
      if (value.length >= 8) return true
      return 'パスワードは8文字以上である必要があります。'
    },
  ]
  */
</script>
