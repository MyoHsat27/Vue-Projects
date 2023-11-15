import {projectStorage} from "@/firebase/config";
import {ref} from "vue";
import getUser from "@/mixins/getUser";

const {user} = getUser()

const useStorage = (path) => {
    const error = ref(null)
    const url = ref(null)
    const filePath = ref(null)
    const isPending = ref(false)

    const uploadImage =  async (file) => {
        isPending.value = true
        filePath.value = `${path}/${user.value.uid}/${file.name}`
        const storageRef = projectStorage.ref(filePath.value)
        try {
            error.value = null
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
            isPending.value = false
        } catch (err) {
            error.value = "Could not upload the Image"
            isPending.value = false
        }
    }

    const deleteImage = async (path) => {
        isPending.value = true
        const storageRef =  projectStorage.ref(path)
        try {
            error.value = null
            await storageRef.delete()
        } catch(err) {
            isPending.value = false
            error.value = "Could not delete the Image"
        }
    }

    const uploadSong = async (file) => {
        isPending.value = true
        filePath.value = `${path}/${user.value.uid}/${file.name}`
        const storageRef = projectStorage.ref(filePath.value)
        try {
            error.value = null
            const res = await storageRef.put(file)
            url.value = await res.ref.getDownloadURL()
            isPending.value = false
        } catch (err) {
            error.value = "Could not upload the song"
            isPending.value = false
        }
    }

    const deleteStorageSong = async (path) => {
        isPending.value = true
        const storageRef =  projectStorage.ref(path)
        try {
            error.value = null
            await storageRef.delete()
        } catch(err) {
            isPending.value = false
            error.value = "Could not delete the song"
        }
    }


    return {error, url, filePath,  uploadImage, isPending, deleteImage, uploadSong, deleteStorageSong}
}

export default useStorage