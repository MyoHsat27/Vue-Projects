import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'

const useCollection = (collection) => {
  const error = ref(null)
  const isPending = ref(false)
  const playlistId = ref(null)

  // add a new document
  const addDoc = async (doc) => {
    error.value = null
    isPending.value = true

    try {
      const res  = await projectFirestore.collection(collection).add(doc)
      playlistId.value = res.id
      isPending.value = false
    }
    catch(err) {
      isPending.value = false
      error.value = err.message
    }
  }

  return { error, addDoc, isPending, playlistId }

}

export default useCollection