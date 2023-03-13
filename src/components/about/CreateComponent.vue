<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create About</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="about.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Position</label>
          <input
            type="text"
            class="form-control"
            v-model="about.position"
            required
          />
        </div>

        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            v-model="about.description"
            required
          />
        </div>
        <div class="form-group">
          <label>Image</label>
          <input
            type="text"
            class="form-control"
            v-model="about.image"
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
        position: "",
        description: "",
        image: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-about";

      axios
        .post(apiURL, this.about)
        .then(() => {
          this.$router.push("/aboutview");
          this.about = {
            name: "",
            position: "",
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
