import { ref } from 'vue';
import { useAuthStore } from '~/store/auth';

/**
 * ログイン処理を行う
 * @returns {Object} { email, password, handleLogin }
 */
interface UseRegistreReturnType {
    name: Ref<string>;
    email: Ref<string>;
    password: Ref<string>;
    handleRegistre: () => Promise<void>;
    errorMessage: Ref<string | null>;
}
  
export const useRegistre = (): UseRegistreReturnType => {
    const router = useRouter();
    const accessToken = useCookie('accessToken', { secure: true, sameSite: true });
    const refreshToken = useCookie('refreshToken', { secure: true, sameSite: true });
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const { public: publicConfig } = useRuntimeConfig();
    const authStore = useAuthStore();
    const errorMessage = ref<string | null>(null);

    
    const handleRegistre = async () => {
        
        // バックエンドログイン処理
        const response = await fetch(`http://localhost:8080/api/registre`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value,
            }),
        });

        
        if (!response.ok) {
            if (response.status >=400 && response.status < 500) {
            const errorData = await response.json();
            errorMessage.value = errorData.message;
            } else if (response.status >= 500) {
                router.push('/error');
            } else {
                router.push('/error');
            }
            return;
        }
        
        const data = await response.json();
        
        
        
        authStore.setLoginStatus(true);
        
        accessToken.value = data.access_token;
        refreshToken.value = data.refresh_token;


        router.push('/users');
        
        
    };
  
    return { name, email, password, handleRegistre, errorMessage };
};