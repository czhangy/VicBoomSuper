<template>
  <div id="home">
    <div class="boom">
      <div class="title">vic. <br/> boom. <br/> super.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(black, 0.2), rgba(black, 0.2)),
    url("~@/assets/img/home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow-y: hidden;

  .boom {
    padding: 40vh 10vw;
    color: white;
    text-shadow: 0px 0px 8px rgba(black, 0.6);
    letter-spacing: 1px;

    .title {
      font-size: 2.75em;
      font-weight: 600;
    }
  }
}

// Media queries
@media (max-width: $mobile) {
  #home {
    .boom {
      .title {
        text-align: center;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
