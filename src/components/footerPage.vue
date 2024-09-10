<template>
  <footer>
    <div class="circle__wrapper">
      <div class="orb-bot"></div>
    </div>
    <div class="footer"></div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".circle__wrapper .orb-bot", {
    width: "150vw",
    height: "150vw",
    scrollTrigger: {
      trigger: ".circle__wrapper",
      start: "65% 80%", // Commence quand le haut de l'élément touche le centre de la fenêtre
      end: "65% 20%",
      scrub: true,
      markers: true,
    },
    onComplete: () => {
      gsap.to(".circle__wrapper", {
        // overflow: "hidden",
      });
    },
  });
});
</script>

<style lang="scss" scoped>
footer {
  overflow: hidden;
}

.circle__wrapper {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150vh;
  display: flex;
  position: sticky;
}
.orb-bot {
  position: relative;
  width: 20vw;
  height: 20vw;
  border-radius: 100rem 100rem 0 0;
  background-color: $pink3;
  will-change: width, height;
  transition: all 1s;
}
.footer {
  position: relative;
  height: 50vh;
  background-color: #000;
}
</style>
