import {ref} from "vue";
import {auth} from "@/firebase/config";
import {createUserWithEmailAndPassword} from 'firebase/auth'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password) => {
    isPending.value = true
    error.value = null

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error("Could not complete signup")
        }
        error.value = null
        isPending.value = false
    } catch(err) {
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
    return {error, isPending, signup}
}

export default useSignup