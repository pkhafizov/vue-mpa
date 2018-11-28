<template>
    <div id="app">
        <Header nameModule="secondModule"/>
        <div class="row">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/Header";
export default {
  name: "app",
  components: { Header }
};
</script>

<style scoped>
</style>