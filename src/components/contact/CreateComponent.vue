<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Create game</h3>
        <form @submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="game.name"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              v-model="game.email"
              required
            />
          </div>
  
          <div class="form-group">
            <label>Phone</label>
            <input
              type="text"
              class="form-control"
              v-model="game.phone"
              required
            />
          </div>
          <div class="form-group">
            <label>Images</label>
            <input
              type="img"
              class="form-control"
              v-model="game.image"
              required
            />
          </div>
  
          <div class="form-group">
            <button class="btn btn-danger btn-block">Create</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        game: {
          name: "",
          email: "",
          phone: "",
          image: ""
        },
      };
    },
    methods: {
      handleSubmitForm() {
        let apiURL = "http://localhost:4000/api/create-game";
  
        axios
          .post(apiURL, this.game)
          .then(() => {
            this.$router.push("/games");
            this.game = {
              name: "",
              email: "",
              phone: "",
              image: ""
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  