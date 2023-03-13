<script setup>
import NavBar from '../components/NavBar.vue';

</script>

<template>
  <NavBar/>
    <main style="  background: linear-gradient(-45deg, #e73c7e, #23a6d5, #23d5ab, #ee7752);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;">
    <div class="ob">
      <section class="home-intro-abt">
        <img src="@/assets/logo.png" alt="Logo.png">
        <h1>A continuous stream of entertainment</h1>
      </section>
    </div>
    <div style="background-color:whitesmoke; min-height: 15px; opacity: 70%;"></div> 
      <div class="about" style=" letter-spacing: 1px; line-height: 2;">
      <div class="home-about-abt">
        <h2>About us</h2>
        <div class="columns">
            <p>
                The people working behind the scenes trying to make something you might enjoy. Learn a bit about their personalities, roles, and the vital importance they all have to the company.
            </p>
        </div>
       </div>

       <div class="img-columns">
        <div id="whitediv" style="text-align: center; max-width: 300px;  letter-spacing: 1px; line-height: 2; margin-bottom: 5%;">
          <img src="@/assets/bardhi.jpeg" alt="" style="width: 250px; height: 250px; border-radius: 100%; margin-top: 5%;">
          <h2 style="margin-top: 5%;">Fatbardh Fetoshi</h2>
          <h5>Sales and Marketing/PR Management</h5>
          <hr id="whitehr">
          The more business oriented of the three, their childhood friend assists them by taking care of marketing, sales and PR management. He has a way 
          with words and people which makes him a wonderful asset to the team. A joy to be around, you are bound to have a few laughs whenever you get to
          see and hear him cracking a few jokes.
        </div>
        <div id="blackdiv" style="text-align: center; max-width: 300px; letter-spacing: 1px; line-height: 2; margin-bottom: 5%;">
          <img src="@/assets/Olti.jpg" alt="" style="width: 250px; height: 250px; border-radius: 100%; margin-top: 5%;">
          <h2 style="margin-top: 5%;">Oltion Gashi</h2>
          <h5>Founder / CEO / Lead Designer</h5>
          <hr id="blackhr">
          Olti started following his career as a programmer at a young age. He has been working on a personal project for
          about 2 years now and he is excited to see the community reaction. He is the founder of the company and an essential
        part of it, inspiring everyone around him to do their best, and reminding them to have fun!
        </div>
        <div id="whitediv" style="text-align: center; max-width: 300px;  letter-spacing: 1px; line-height: 2; margin-bottom: 5%;">
          <img src="@/assets/lorik.jpeg" alt="" style="width: 250px; height: 250px; border-radius: 100%; margin-top: 5%;">
          <h2 style="margin-top: 5%;">Lorik Popaj</h2>
          <h5>CEO / Assistand Designer</h5>
          <hr id="whitehr">
          Lorik has been Olti's parter throughout his entire life. He started getting into programming about 2 years ago,
          and decided to also pursue his career with his friend. Although he may have only started recently, his determination
          and quick learning has helped the company plenty, and are looked up to by the entire staff.
        </div>

    </div>
   </div>

      <div class="footer">
        <div class="home-about-foot">
          <div class="columns" style="flex-direction: column;">
            <div style="margin: 2%;display: flex; flex-direction: row; justify-content: space-evenly;">
              <a href="main.html" class="logo" aria-label="homepage">flow.</a>            
              <ul class="nav_list" style="margin-top: -5px;">
                <li class="nav_list-item"><a href="main.html" class="nav_link">Home</a></li>
                <li class="nav_list-item"><a href="about.html" class="nav_link">About</a></li>
                <li class="nav_list-item"><a href="gallery.html" class="nav_link">Gallery</a></li>
                <li class="nav_list-item"><a href="community.html" class="nav_link">Community</a></li>
                <li class="nav_list-item"><a href="contacts.html" class="nav_link">Contacts</a></li>
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
    </main>
</template>
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

body {
  margin: 0;
  font-family: "Poppins", sans-serif; 
  animation: transitionIn 0.75s;
  overflow: overlay;
}

/*Stili per Logo*/
.logo {
  font-weight: 900;
  font-size: 16px;
  color: var(--text);/*Var e merr vleren nga rrenja, ne kete rast header, ku i kemi deklaruar me heret*/
  text-decoration: none; 
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
  font-size: 12px; 
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

.imgfilter {
    filter: invert(88%) sepia(41%) saturate(473%) hue-rotate(165deg) brightness(97%) contrast(86%);
}
/*Vetite e perbashketa te background ne fillim te faqes*/
.home-intro, .home-intro-abt, .home-intro-gal, .home-intro-com, .home-intro-con {
  padding: 50vh 0;
  background: url(@/assets/giphy.gif);
  background-size:100% 100%;
  color: white;
  text-align: center; 
}
/*Ndryshimet unike te pjeses ne fillim te faqes*/
.home-intro-abt {
  background: url(@/assets/bg.png);
  background-size: cover;
}

.home-intro-gal {
  background: url(@/assets/bg3.png);
  background-size: cover;
}

.home-intro-com {
  background: url(@/assets/bg4.png);
  background-size: cover;
}

.home-intro-con {
  background: url(@/assets/bg5.png);
  background-size: cover;
}

.abt-intro{
  flex-direction: column;
  margin: 5%;
  width: 80%;
  text-align: center;
}

main {
  background: linear-gradient(-45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
.home-about {
  padding: 64px 0 64px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.about {
  width: 70%;
  background-color: white;
  border-radius: 13px 13px;
  display: flex;
  flex-wrap: wrap;
  margin: 5% auto;
  justify-content: center;
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

.home-about-abt, .home-about-gal, .home-about-com, .home-about-con {
  padding: 64px 0;
  max-width: 900px;
  margin: 0 auto;
  text-align: center; 
}

.slideshowimg{
  position: absolute;
  opacity: 1;
  transition: opacity 0.5s ease-in;
  width: 400px;
  height: 400px;
  box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);;
  border-radius: 13px;
  margin-top: 5%;

}

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

.radios{
  width: 20px;
  height: 20px;
  margin: -7% 0.5% 0;
}

#whitediv{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border: solid 3px black;
  border-radius: 13px;
  transition: transform .3s;
  transition: background 0.3s ease-in;
}

#whitediv:hover{
  background-color: black;
  color: white;
  border: 0px;
  transform: scale(1.1);
}

#blackdiv{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 13px;
  transition: transform .3s;
  transition: background 0.3s ease-in;
}
#blackhr{
  width: 50%;
  border-width: 0;
  height: 4px;
  background-color: white;
}

#blackdiv:hover #blackhr{
  background-color: black;
}

#whitehr{
  width: 50%;
  border-width: 0;
  height: 4px;
  background-color: black;
}

#whitediv:hover #whitehr{
  background-color: white;
}

#blackdiv:hover{
  background-color: white;
  color: black;
  border: solid 3px black;
  transform: scale(1.1);
}

@keyframes transitionIn {
  from {
    opacity: 0;
    transform: rotateX(-10deg); }
  to {
    opacity: 1;
    transform: rotateX(0); } 
}

/*# sourceMappingURL=main.css.map */

@import url("https://fonts.googleapis.com/css?family=Heebo:800");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }

.parent {
  width: 681px;
  height: 384px;
  margin: 50px auto;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 16px;
  -webkit-box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75); }

svg {
  position: absolute;
  z-index: 1;
  width: 681px;
  height: 384px; }

button {
  position: absolute;
  z-index: 50;
  width: 40px;
  overflow: hidden;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  -webkit-box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 88px 5px rgba(0, 0, 0, 0.75); }
  button:focus {
    outline-width: 0; }
</style>
