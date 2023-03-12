<template>
    <p>Dashboard</p>
    <p><button @click="addUser">Create</button></p>
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