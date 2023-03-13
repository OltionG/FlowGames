<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="about in abouts" :key="about._id">
            <td>{{ about.name }}</td>
            <td>{{ about.position }}</td>
            <td>{{ about.description }}</td>
            <td>{{ about.image }}</td>
            <td>
              <router-link
                :to="{ name: 'aboutedit', params: { id: about._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteabout(about._id)"
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
      abouts: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.abouts = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteabout(id) {
      let apiURL = `http://localhost:4000/api/delete-about/${id}`;
      let indexOfArrayItem = this.abouts.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.abouts.splice(indexOfArrayItem, 1);
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
