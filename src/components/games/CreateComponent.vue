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
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="game.description"
              required
            />
          </div>

          <div class="form-group">
            <label>Images</label>
            <input
              type="text"
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
          description: "",
          image: "",
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
              description: "",
              image: "",
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  