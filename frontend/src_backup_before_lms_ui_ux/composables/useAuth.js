
import { ref } from 'vue'

const user = ref(null)
const loading = ref(true)

export function useAuth() {
    async function fetchUser() {
        loading.value = true
        try {
            const response = await fetch('/api/method/lms.lms.v2_api.get_user_info_v2')
            const data = await response.json()
            user.value = data.message || null
        } catch (e) {
            console.error('Error fetching user:', e)
            user.value = null
        } finally {
            loading.value = false
        }
    }

    async function logout() {
        try {
            await fetch('/api/method/logout')
            window.location.href = '/'
        } catch (e) {
            console.error('Logout error:', e)
        }
    }

    return {
        user,
        loading,
        fetchUser,
        logout
    }
}
