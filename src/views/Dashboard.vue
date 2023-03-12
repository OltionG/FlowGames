<template>
    <p>Dashboard</p>
    <p><button @click="addUser">Create</button></p>
    <nav>

<router-link to="/games">Games</router-link>

</nav>
</template>

<script setup>
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { ref } from "vue";

const db = getFirestore();
const usersRef = collection(db, "users");
const addUser = () => {
    setDoc(doc(usersRef, "EG"),{
    name: "Edonis Gashi",
    role: "User"
});
};
</script>