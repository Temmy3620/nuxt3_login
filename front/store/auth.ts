import { defineStore } from 'pinia';
import { ref } from 'vue';

interface AuthState {
  loggedIn: boolean;
  UserInfo: Ref<string | null>;
}
/**
 * リロード時ログイン済みかどうかを判定する
 */
const isDefaultLoggedIn = () => {
  const accessToken = useCookie('accessToken', { secure: true, sameSite: 'strict' });
  return accessToken.value !== null && accessToken.value !== '' && accessToken.value !== undefined;
}


const getUserinfo = () => {
  const accessToken = useCookie('accessToken', { secure: true, sameSite: 'strict' });
  return accessToken;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    loggedIn: isDefaultLoggedIn(),
    UserInfo: getUserinfo(),
  }),
  actions: {
    setLoginStatus(status: boolean) : void{
      this.loggedIn = status;
    },
    logout(){
      const router = useRouter();
      const accessToken = useCookie('accessToken', { secure: true, sameSite: 'strict' });
      accessToken.value = '';
      this.loggedIn = false;
      router.push('/auth/login');
    }
  },
});