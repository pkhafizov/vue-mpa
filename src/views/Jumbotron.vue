<template>
    <div>
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-4">Jumbotron</h1>
                <p class="lead">This is a jumbotron.</p>
            </div>
        </div>
    </div>
</template>

<script>
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
  mounted: function() {
    this.$store
      .dispatch("getPosts")
      .then(() => console.log(this.$store.state.posts));
    console.log("jumbotron: ", this.nameModule);
  },
  computed: {
    posts: function() {
      return this.$store.state.posts;
    }
  }
};
</script>

<style scoped>
</style>