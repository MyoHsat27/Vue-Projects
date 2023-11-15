<template>
  <div class="home">
    <ul>
      <li v-for="book in books" :key="book.id">
        <div class="details">
          <h3 @click="handleDelete(book)">{{ book.title }}</h3>
          <p>By {{ book.author }}</p>
        </div>
        <div :class="[{fav : book.isFav}, {icon : true}]">
          <span class="material-icons"  @click="handleUpdate(book)">favorite</span>
        </div>
      </li>
    </ul>
    <CreateBookForm />
  </div>
</template>

<script>
import { ref } from 'vue'
import CreateBookForm from '@/components/CreateBookForm'

// firebase imports
import getCollection from "@/composables/getCollection";
import {auth, db} from "@/firebase/config";
import {doc, deleteDoc, updateDoc} from "firebase/firestore";

export default {
  name: 'HomeView',
  components: { CreateBookForm },
  setup() {
    const {documents : books} = getCollection('books',['userUid', '==', `${auth.currentUser.uid}`])

    const handleDelete = async (book) => {
      const docRef = doc(db, "books", book.id)
      await deleteDoc(docRef)
    }

    const handleUpdate = async (book) => {
      const docRef = doc(db, "books", book.id)
      await updateDoc(docRef, {
        isFav: !book.isFav
      })
    }


    return { books, handleDelete,handleUpdate }
  }
}
</script>

<style>
.home ul {
  padding: 0;
}
.home li {
  list-style-type: none;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 12px;
  display: flex;
}
.home li .details {
  margin-right: auto;
}
.home li h3 {
  margin: 0;
  margin-bottom: 4px;
}
.home li h3:hover {
  cursor: pointer;
  text-decoration: line-through;
}
.home li p {
  margin: 0;
}
.icon {
  color: #bbbbbb;
  cursor: pointer;
}

.icon.fav {
  color: #b60d0d;
  user-select: none;
}
</style>