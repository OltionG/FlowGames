<template>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="game in games" :key="game._id">
              <td>{{ game.name }}</td>
              <td>{{ game.description }}</td>
              <td>{{ game.image }}</td>
              <td>
                <router-link
                  :to="{ name: 'gameedit', params: { id: game._id } }"
                  class="btn btn-success"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deletegame(game._id)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        games: [],
      };
    },
    created() {
      let apiURL = "http://localhost:4000/api";
      axios
        .get(apiURL)
        .then((res) => {
          this.games = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      deletegame(id) {
        let apiURL = `http://localhost:4000/api/delete-game/${id}`;
        let indexOfArrayItem = this.games.findIndex((i) => i._id === id);
  
        if (window.confirm("Do you really want to delete?")) {
          axios
            .delete(apiURL)
            .then(() => {
              this.games.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    },
  };
  </script>
  
  <style>
  .btn-success {
    margin-right: 10px;
  }
  </style>
  