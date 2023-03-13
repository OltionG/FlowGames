<template>
      <div class="footer">
        <div class="home-about-foot">
          <div class="columns" style="flex-direction: column;">
            <div style="margin: 2%;display: flex; flex-direction: row; justify-content: space-evenly;">
              <a href="main.html" class="logo" aria-label="homepage">flow.</a>            
              <ul class="nav_list" style="margin-top: -5px;">
                <li class="nav_list-item"><router-link class="nav_link" to="/" >Home</router-link></li>
                    <li class="nav_list-item"><router-link class="nav_link" to="/about">About Us</router-link></li>
                    <li class="nav_list-item"><router-link class="nav_link" to="/games">Games</router-link></li>
                    <li class="nav_list-item"><router-link class="nav_link" to="/games">News</router-link></li>
                    <li class="nav_list-item"><router-link class="nav_link" to="/contacts">Contact Us</router-link></li>
                    <li class="nav_list-item"><router-link class="nav_link" to="/dashboard" v-if="isAdmin">Dashboard</router-link></li>
              </ul>
                <a target="_blank" href="https://www.facebook.com/Flow-Entertainment-100628881531882/?modal=admin_todo_tour%22%3E"><img class="ftimg" src="@/assets/facebook.png" height="30" width="30" alt="Facebook.png"></a>
                <a target="_blank" href="https://www.instagram.com/flow.entertainment.games/%22%3E"><img class="ftimg" src="@/assets/instagram.png" height="30" width="30" alt="Instagram.png"></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCk1H9Uwr8k82EouBomBjosA?view_as=subscriber%22%3E"><img src="@/assets/youtube.png" height="30" width="30" alt="Youtube.png"></a>
            </div>
            <hr>
            <div style="margin: 2%;display: flex; flex-direction: row; justify-content: space-evenly; align-items: center;">
            <div style="font-size: 11px;">
              <h2>Our Company</h2>
              <p>Flow Entertainment aims to create entertainment for you, from you, and with you.</p>
            </div>
            <hr style="height: 50px; margin: 2%;">
            <div style="font-size: 10px; opacity: 80%;">© 2021 Flow Entertainment, Inc, All Rights Reserved.</div>
          </div>
           </div>
          </div>
        </div>
</template>

<style>
.footer {
  background-image: linear-gradient(cornflowerblue, rgb(113, 113, 219));
  border-top: solid 5px white; 
}

.home-about-foot {
  color: white;
  padding: px 0;
  max-width: 750px;
  margin: 0 auto; 
}

.columns {
  display: flex; 
  text-align: center;
}

.img-columns{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}

.icon{
  padding: 5% 1% 1% 1%;
  width: 200px;
  margin: 1% auto;
  text-align: center;
  transition: opacity 250ms ease-in-out;
  transition: transform .2s;
  border-radius: 13px;
  border: 4px solid rgb(127, 214, 243);
}

.linkicon{
  padding: 5% 1% 1% 1%;
  width: 200px;
  margin: 1% auto;
  text-align: center;
  transition: opacity 250ms ease-in-out;
  transition: transform .2s;
  border-radius: 13px;
}
.linkicon:hover{
  background-color: lightgray;
  color: white;
  transform: scale(1.1);
}
.linkicon:hover img{
  opacity: 70%;
}
.icon:hover{
  background-color: rgb(127, 214, 243);
  color: white;
  transform: scale(1.1);
}
.icon:hover img{
  opacity: 70%;
}
.col + .col {
  margin-left: 1.5em; 
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
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>