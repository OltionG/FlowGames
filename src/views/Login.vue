<template>
  
<div class="container">
			<div class="wrap-login">
				<div id="logo" class="login-pic">
					<img src="@/assets/img-01.png" alt="IMG">
				</div>

				<div id="form" class="login-form">
					<span class="title" style="color: #3db1c0;">
						Member Login
					</span>
					<span id="error">
					</span>
                    <div class="wrap-input">
						<input id="email" class="input" type="text" name="email" placeholder="Email" v-model="email">
						<span class="focus-input"></span>
						<span class="symbol-input">
							<img src="@/assets/username.png" style="width: 30px; height:30px; opacity:80%; margin-left:-5%;">
						</span>
					</div>
					<div class="wrap-input validate-input">
						<input id="password" class="input" type="password" name="pass" placeholder="Password" v-model="password">
						<span class="focus-input"></span>
						<span class="symbol-input">
							<img src="@/assets/password.png" style="width: 30px; height:30px; opacity:80%; margin-left:-5%;">
						</span>
					</div>
          <p v-if="errMsg">{{ errMsg }}</p>
					<div class="container-btn">
						<button @click="login">Login</button>
					</div>
      </div>
			</div>
		</div>
</template>

<script setup>
import {ref} from "vue";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import router from "@/router";
const email = ref("");
const password = ref("");
const errMsg = ref()
const login = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) =>{
        console.log("Succesfuly signed in!");
        router.push('/dashboard')
    }).catch((error) => {
        console.log(error.code);
        switch(error.code){
          case "auth/invalid-email":
            errMsg.value = "Invalid email";
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found";
            break;
          case "auth/wrong-password":
            errMsg.value = "Invalid password";
            break;
          default:
            errMsg.value = "Email or password was incorrect";
            break;
        }
    });
};
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

body{
  overflow: overlay;
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


input {
	outline: none;
	border: none;
}

button {
	outline: none !important;
	border: none;
	background: transparent;
}

button:hover {
	cursor: pointer;
}


.txt1 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #999999;
}

.txt2 {
  font-family: Poppins-Regular;
  font-size: 13px;
  line-height: 1.5;
  color: #666666;
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
  width: 960px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 177px 130px 33px 95px;
}

.login-pic {
  width: 316px;
}

.login-pic img {
  max-width: 100%;
}

.login-form {
  width: 290px;
}

.title {
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 54px;
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

.symbol-input {
  font-size: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  color: #666666;
  transition: all 0.4s;
}

.input:focus + .focus-input + .symbol-input {
  padding-left: 28px;
  border: 2px solid ;
  filter: invert(88%) sepia(41%) saturate(473%) hue-rotate(165deg) brightness(97%) contrast(86%);
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
</style>