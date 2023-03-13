<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update About</h3>
      <form @submit.prevent="handleUpdateForm">
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
            v-model="about.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            v-model="about.phone"
            required
          />
        </div>
        <div class="form-group">
          <label>Images</label>
          <input
            type="text"
            class="form-control"
            v-model="about.image"
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
      about: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-about/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.about = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-about/${this.$route.params.id}`;

      axios
        .put(apiURL, this.about)
        .then((res) => {
          console.log(res);
          this.$router.push("/aboutview");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
