<template>
    <div class="row">
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" @click="moveMain">Vue-MPA</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                :class="{active: nameModule === 'main'}"
                                @click="moveMain"
                            >Main module</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                :class="{active: nameModule === 'firstModule'}"
                                @click="moveFirstModule"
                            >First module</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                :class="{active: nameModule === 'secondModule'}"
                                @click="moveSecondModule"
                            >Second module</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    nameModule: {
      type: String,
      required: true,
      validator(value) {
        return ["main", "firstModule", "secondModule"].includes(value);
      }
    }
  },
  methods: {
    moveMain() {
      location.assign("/");
    },
    moveFirstModule() {
      location.assign("../firstModule/");
    },
    moveSecondModule() {
      location.assign("../secondModule/");
    }
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}

.nav-link.active {
  text-decoration: underline;
}
</style>