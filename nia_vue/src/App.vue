<template>
  <div id="app">
    <Header v-if="HeaderShow" />
    <router-view />
    <Footer v-if="FooterShow" />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { mapState, mapMutations } from 'vuex';
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  computed:{
    ...mapState([
      "HeaderShow",
      "FooterShow"
    ])
  },
  beforeMount() {
    this.HeaderSee(),
    this.FooterSee();
  },
  beforeUnmount() {
    this.HeaderSee(),
    this.FooterSee();
  },
  methods:{
    ...mapMutations([
      "HeaderSee",
      "FooterSee"
    ])
  }
};

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
