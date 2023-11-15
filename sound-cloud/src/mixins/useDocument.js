import {ref} from "vue";
import {projectFirestore} from "@/firebase/config";

const useDocument = (collection, id) => {
    const error = ref(null)
    const isPending = ref(false)
    // register the firebase document reference
    let docRef = projectFirestore.collection(collection).doc(id)

    const deleteDoc = async () => {
        isPending.value = true
        error.value = null
        try {
            const res = await docRef.delete()
            isPending.value = false
            error.value = null
            return res
        } catch (err) {
            console.log(err.message)
            isPending.value = false
            error.value = "Could not delete the document"
        }
    }

    const updateDoc = async (song) => {
        isPending.value = true
        error.value = null
        try {
            const res = docRef.update(song)
            isPending.value = false
            error.value = null
            return res
        } catch (err) {
            console.log(err.message)
            isPending.value = false
            error.value = "Could not add the song"
        }
    }

    return {error, isPending, deleteDoc, updateDoc}
}

export default useDocument