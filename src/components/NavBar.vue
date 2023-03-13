<template>
  <header>
  <img class="mainlogo" src="@/assets/logo.png" style="width: 130px;">
  <nav class="main_nav">  
    <ul class="nav_list">
      <li class="nav_list-item"><router-link class="nav_link" to="/" >Home</router-link></li>
      <li class="nav_list-item"><router-link class="nav_link" to="/about">About Us</router-link></li>
      <li class="nav_list-item"><router-link class="nav_link" to="/games">Games</router-link></li>
      <li class="nav_list-item"><router-link class="nav_link" to="/games">News</router-link></li>
      <li class="nav_list-item"><router-link class="nav_link" to="/contacts">Contact Us</router-link></li>
      <li class="nav_list-item"><router-link class="nav_link" to="/dashboard" v-if="isAdmin">Dashboard</router-link></li>
    </ul>
  </nav>
  <nav>
    <div v-if="isLoggedIn">    
      <ul class="nav_list">
        <li class="nav_list-item" v-if="!isLoggedin"><p class="nav_link nav_link--btn" v-if="isLoggedIn">{{ currentUserName }}</p></li>
        <li class="nav_list-item" v-if="!isLoggedin"><button style="width: fit-content;" class="nav_link nav_link--btn nav_link--btn--highlight" @click="handleSignOut" v-if="isLoggedIn">Log Out</button></li>
      </ul>
    </div>
    <div v-else>    
      <ul class="nav_list">
        <li class="nav_list-item" v-if="!isLoggedin"><router-link class="nav_link nav_link--btn" to="/register">Register</router-link></li>
        <li class="nav_list-item" v-if="!isLoggedin"><router-link class="nav_link nav_link--btn nav_link--btn--highlight" to="/login">Login</router-link></li>
      </ul>
    </div>     
  </nav>
</header>
</template>

<style scoped>
header {
  --text: #f4f4f4;/*Deklarojme vlera per ti perdorur me vone*/
  --text-inverse: #333;
  --background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  transition: background 250ms ease-in;
  background: var(--background);
  color: var(--text); 
}

/*Nav-List*/
.nav_list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;}
/*Stili per butonat me linqe ne faqet e tjera*/
.nav_link {
  --spacing: 16px;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding: calc(var(--spacing) / 2) var(--spacing);
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 12.5px; 
}
/*Stili per butonat pasi te behen hover*/
.nav_link:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: var(--spacing);
  right: var(--spacing);
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transition: transform 150ms ease-in-out; 
}

.nav_link:hover::after {
  transform: scaleX(1); 
}
/*Stili per butonat Login dhe Join*/
.nav_link--btn {
  border: 1.5px solid currentColor;
  border-radius: 2em;
  margin-left: 1em;
  transition: background 250ms ease-in-out;
  letter-spacing: 1px;
  padding: 0.75em 1.5em; 
}

.nav_link--btn:hover {
  background: var(--text);
  color: var(--text-inverse);
  border-color: var(--text); 
}
/*Heq underline nga butonat Join dhe Login*/
.nav_link--btn::after {
  display: none; 
}
/*Stili unik per Join*/
.nav_link--btn--highlight {
  background: #23a6d5;
  border-color: #23a6d5;
  color: white; 
}

.nav_link--btn--highlight:hover {
  background: var(--text);
  border-color: var(--text); 
}
/*Ndryshimet per screen-fit kur faqja zvogelohet*/
@media screen and (max-width:900px){
  .nav_link--btn {
    margin: 5%;
  }

  .nav_list{
    margin-left: 10px;
  }
}
/*Kjo klase i shtohet Header-it kur behet intersect me pjesen tjeter te faqes, duke i ndryshuar dizajnin*/
.nav-scrolled {
  --text: #333;
  --text-inverse: #f4f4f4;
  --background: #f4f4f4;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2); 
}
</style>
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
  const header = document.querySelector("header");
const mainlogo = document.querySelector(".mainlogo")
const sectionOne = document.querySelector(".ob");

const sectionOneOptions = {
  rootMargin: "-700px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      mainlogo.classList.add("imgfilter");
    } else {
      header.classList.remove("nav-scrolled");
      mainlogo.classList.remove("imgfilter");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

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
    location.reload();
  });
};

</script>


