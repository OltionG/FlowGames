<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/dashboard" v-if="isAdmin">Dashboard</router-link>
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Log Out</button>
    <p v-if="isLoggedIn">{{ userInfo }}</p>
    <p v-if="isLoggedIn">{{ currentUserName }}</p>

  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from 'vue-router';
import { doc, getDoc, getFirestore, collection, getDocs } from 'firebase/firestore'

const db = getFirestore();

const router = useRouter();
const isLoggedIn = ref(false);
const isAdmin = ref(false);
const userInfo = ref("");
let auth;
const currentUserName = ref("");

const querySnapshot = await getDocs(collection(db, "users"));


onMounted(() =>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      querySnapshot.forEach((doc) => {
        if(doc.id == user.uid){
          console.log(doc.id, " => ", doc.data().role);
          currentUserName.value = doc.data().name;
          if(doc.data().role == "Admin"){
            isAdmin.value = true;
          }
        }
});

      userInfo.value = user.email;
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});



const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

</script>


