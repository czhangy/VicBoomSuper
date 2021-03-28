<template>
  <div id="videos">
    Videos
    <div class="selection">hi</div>
    <div class="player">
      <video width="320" height="240" controls>
        <source src="../assets/videos/test.mp4" />
        Video not found
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "Videos",
};
</script>

<style lang="scss" scoped>
.videos {
  display: flex;
  flex-direction: row;

  .selection {
    height: 100%;
    width: 50%;
    background-color: $primary;
  }

  .player {
    height: 100vh;
    width: 50vw;
    background-color: $primary-light;
  }
}
</style>