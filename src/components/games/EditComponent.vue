<template>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3 class="text-center">Update game</h3>
        <form @submit.prevent="handleUpdateForm">
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
              type="text"
              class="form-control"
              v-model="game.image"
              required
            />
          </div>
  
          <div class="form-group">
            <button class="btn btn-danger btn-block">Update</button>
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
        game: {},
      };
    },
    created() {
      let apiURL = `http://localhost:4000/api/edit-game/${this.$route.params.id}`;
  
      axios.get(apiURL).then((res) => {
        this.game = res.data;
      });
    },
    methods: {
      handleUpdateForm() {
        let apiURL = `http://localhost:4000/api/update-game/${this.$route.params.id}`;
  
        axios
          .put(apiURL, this.game)
          .then((res) => {
            console.log(res);
            this.$router.push("/games");
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  