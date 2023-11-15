import { ref } from 'vue'
import { projectAuth, googleAuthProvider } from '@/firebase/config'

const errorGoogle = ref(null)

const googleLogin = async () => {
    errorGoogle.value = null

    try {
        const res = await projectAuth.signInWithPopup(googleAuthProvider)
        if (res) {
            const userInfo = res.user
            errorGoogle.value = null
            return userInfo
        }
    }
    catch(err) {
        console.log(err.message)
        errorGoogle.value = err.message
    }
}

const useGoogleLogin = () => {
    return { errorGoogle, googleLogin }
}

export default useGoogleLogin