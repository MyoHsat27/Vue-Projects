import {ref} from "vue";
import {auth} from "@/firebase/config";
import {signInWithEmailAndPassword} from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    isPending.value = true
    error.value = null

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error("Could not login")
        }
        error.value = null
        isPending.value = false
    } catch(err) {
        error.value = err.message
        isPending.value = false
    }
}

const useLogin = () => {
    return {error, isPending, login}
}

export default useLogin