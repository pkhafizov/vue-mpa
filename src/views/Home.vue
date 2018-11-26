<template>
  <div id="home">
    <Header nameModule="main" />
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Posts</h1>
        <div class="container">
          <div class="row pt-2">
            <input class="btn btn-primary" type="button" value="get posts" @click="fetchPosts()">
          </div>
          <div class="row pt-2">
            <table class="table table-light">
              <tbody>
                <tr v-for="post in posts" :key="post.id">
                  <td>{{ post.title }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapActions
  } from "vuex";
  // @ is an alias to /src
  import Header from "@/components/Header.vue";

  export default {
    name: "home",
    components: {
      Header
    },
    computed: {
      posts: function () {
        return this.$store.state.posts;
      }
    },
    methods: {
      ...mapActions(["getPosts"]),
      fetchPosts() {
        this.getPosts();
      }
    }
  };
</script>