<template>
    <NavBar />
    <div class="ob"></div>
    <div class="container">
		<div style=" letter-spacing: 1px; line-height: 2;" class="wrap-login">
		<h2>Dashboard</h2>
        <nav class="main_nav">
            <ul class="nav_list">
                <li class="nav_list-item"><router-link class="nav_link" to="/games">Games</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue"
import { collection, doc, setDoc, getFirestore } from "firebase/firestore";
import { ref } from "vue";

const db = getFirestore();
const usersRef = collection(db, "users");
</script>
<style>


html::-webkit-scrollbar{
  width: .65rem;
}

html::-webkit-scrollbar-track{
  background: transparent;
}

html::-webkit-scrollbar-thumb{
  background: rgb(255, 255, 255);
  border-radius: 5rem;
}


* {
	margin: 0px; 
	padding: 0px; 
	box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css?family=Heebo:800");

body{
  overflow: overlay;
  font-family: "Poppins", sans-serif;
}

@keyframes gradient {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
}


button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}

.container{
  width: 100%;  
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.wrap-login {
  margin-top: -15%;
  width: 960px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  padding: 50px 150px 100px;
}

.wrap-input {
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}

.input {
  font-family: Poppins-Medium;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
}


/*------------------------------------------------------------------
[ Focus ]*/
.focus-input {
  display: block;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: midnightblue;
}

.input:focus + .focus-input {
  -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
  animation: anim-shadow 0.5s ease-in-out forwards;
}

@-webkit-keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
}

@keyframes anim-shadow {
  to {
    box-shadow: 0px 0px 70px 25px;
    opacity: 0;
  }
}

/*------------------------------------------------------------------
[ Button ]*/
.container-btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}

.btn {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #3db1c0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  transition: all 0.4s;
}

.btn:hover {
  background: white;
  color: #3db1c0;
  border: 3px solid #3db1c0;
}

@media (max-width: 992px) {
  .wrap-login {
    padding: 177px 90px 33px 85px;
  }

  .login-pic {
    width: 35%;
  }

  .login-form {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .wrap-login {
    padding: 100px 80px 33px 80px;
  }

  .login-pic {
    display: none;
  }

  .login-form {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .wrap-login {
    padding: 100px 15px 33px 15px;
  }
}

.centered {
  text-align: center;
  margin: 2% auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
}
.centered a {
  text-decoration: none;
}

.not-valid{
  text-align: center;
  align-items: center;
  margin-bottom: 3%;
  font-family: Montserrat-Bold;
  font-size: 12px;
  color: red;
}
#fullyvalid{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Montserrat-Bold;
}

#fullyvalid img{
  padding: 5%;
  width: 300px;
  height: 300px;
}

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
</style>