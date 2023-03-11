<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Submit</button></p>
</template>

<script setup>
import {ref} from "vue";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import router from "@/router";
const email = ref("");
const password = ref("");
const auth = getAuth();
const register = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) =>{
        console.log("Succesfuly registered!");

        console.log(auth.currentUser);

        router.push('/dashboard')
    }).catch((error) => {
        console.log(error.code);
        alert(error.message);
    });
};
</script>