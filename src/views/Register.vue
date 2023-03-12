<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><input type="text" placeholder="Name" v-model="fname"/></p>
    <p><button @click="register">Submit</button></p>
</template>

<script setup>
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import router from "@/router";
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";

const db = getFirestore();
const usersRef = collection(db, "users");
const email = ref("");
const password = ref("");
const fname = ref("");
const auth = getAuth();
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) =>{
        return setDoc(doc(usersRef, data.user.uid),{
            name: fname.value
        });
    }).then(() => {
        router.push('/dashboard')
    }).catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
};
</script>