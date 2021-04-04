<template>
  <div id="videos">
    <div class="player">
      <video controls>
        <source src="../assets/videos/test.mp4" />
        Video not found
      </video>
    </div>
    <!-- <div class="carousel">
      <Carousel />
    </div> -->
  </div>
</template>

<script>
// Get slider
import Carousel from "../components/Videos/Carousel";

export default {
  name: "Videos",
  components: {
    Carousel,
  },
  data() {
    return {
      videos: ["temp", "temp", "temp"],
    };
  },
};
</script>

<style lang="scss" scoped>
#videos {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $accent;

  .player {
    // Sizing
    width: 100%;
    height: 100%;
    // Positn children
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 4px solid white;

    video {
      // Border decoration
      box-shadow: 0px 0px 30px $accent-dark;
      height: 70%;
    }
  }
  .carousel {
    width: 100%;
  }
}
</style>