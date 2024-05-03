export const nameRules = [
  (value) => {
    if (value) return true
    return '名前は必須です。'
  },
  (value) => {
    if (value.length <= 80) return true
      return '名前は8文字以内である必要があります。'
  },
]

export const emailRules = [
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

export const passwordRules = [
  (value) => {
      if (value) return true
      return 'パスワードは必須です。'
  },
  (value) => {
      if (value.length >= 8) return true
      return 'パスワードは8文字以上である必要があります。'
  },
]