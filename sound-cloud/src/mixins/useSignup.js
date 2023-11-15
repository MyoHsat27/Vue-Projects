import { ref } from 'vue'
import {projectAuth} from "@/firebase/config";

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
  error.value = null
  isPending.value = true

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    isPending.value = false
    await res.user.updateProfile({ displayName })
    error.value = null

    return res
  }
  catch(err) {
    isPending.value = false
    error.value = err.message
  }
}

const useSignup = () => {
  return { error, signup, isPending }
}

export default useSignup