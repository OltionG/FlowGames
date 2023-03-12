import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaDQ1fRNbQfvtkv94rNmafwzEgfUuA58U",
  authDomain: "flowgames-83344.firebaseapp.com",
  projectId: "flowgames-83344",
  storageBucket: "flowgames-83344.appspot.com",
  messagingSenderId: "796802298126",
  appId: "1:796802298126:web:ba6ff47866085e64daa75f",
  measurementId: "G-BKLVS8LNMP"
};

initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)

app.mount('#app')
