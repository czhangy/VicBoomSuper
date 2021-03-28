<template>
  <!-- Navbar on top of each view -->
  <Navbar />
  <!-- Get current view -->
  <router-view />
</template>

<script>
// Get Navbar
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
/* Get Spartan font */
@import url("https://fonts.googleapis.com/css2?family=Spartan&display=swap");

/* Root formatting */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

/* Establish font */
#app {
  font-family: Spartan, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
