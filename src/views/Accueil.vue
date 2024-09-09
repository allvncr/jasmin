<template>
  <div class="container">
    <div class="carousel">
      <div class="text">
        <span>Jasmin <br /></span>
        <span>saison</span>
      </div>
      <img src="../assets/images/iStock-1159802579.jpg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  height: calc(100vh - 75px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    line-height: 1;
    font-size: 17vw;
    color: $red;
    z-index: 1;

    & span:nth-child(1) {
      position: relative;
      right: -15px;
      // text-transform: uppercase;
    }
  }

  img {
    position: relative;
    width: 50%;
    height: 100%;
    object-fit: cover;
    right: 15px;
  }
}
</style>
