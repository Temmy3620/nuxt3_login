import { defineStore } from 'pinia';
import { ref } from 'vue';


interface AuthState {
    loggedIn: boolean;
}

/**
 * リロード時ログイン済みかどうかを判定する
 */
const isDefaultLoggedIn = () => {
    const accessToken = useCookie('accessToken', { secure: true, sameSite: 'strict' });
    return accessToken.value !== null && accessToken.value !== '' && accessToken.value !== undefined;
}

export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
      loggedIn: isDefaultLoggedIn(),
    }),
    actions: {
      setLoginStatus(status: boolean) : void{
        this.loggedIn = status;
      }
    },
});