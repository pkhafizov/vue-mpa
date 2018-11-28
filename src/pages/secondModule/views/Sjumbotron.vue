<template>
  <div>
    <div class="row pt2">
      <div class="jumbotron container">
        <h1 class="display-4">Second Jumbotron</h1>
        <p class="lead">This is a second jumbotron.</p>
        <input class="btn btn-primary" type="button" value="get albums" @click="fetchAlbums()">
      </div>
    </div>
    <div class="row pt2">
      <table class="table">
        <tbody>
          <tr v-for="album in albums" :key="album.id">
            <td scope="row">{{ album.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    nameModule: {
      type: String,
      required: true,
      validator(value) {
        return ["main", "firstModule", "secondModule"].includes(value);
      }
    }
  },
  computed: {
    albums: function() {
      return this.$store.state.albums;
    }
  },
  methods: {
    ...mapActions(["getAlbums"]),
    fetchAlbums() {
      this.getAlbums();
    }
  }
};
</script>

<style scoped>
</style>