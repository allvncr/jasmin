<template>
  <div class="loader">
    <div class="orb">
      <span class="orb-text">Jasmin</span>
    </div>
    <div class="loading"></div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { onMounted } from "vue";

onMounted(() => {
  const tl = gsap.timeline();

  // Animation du trait (barre de chargement)
  tl.to(".loading", {
    width: "100%",
    duration: 2,
    ease: "power4.inOut",
  })

    // Ensuite, animation de la boule (orb)
    .to(
      ".orb",
      {
        width: "200px",
        height: "200px",
        padding: "40px",
        duration: 1.2,
        ease: "power4.inOut", // Effet de rebond
      },
      "+=0"
    )

    .to(
      ".orb-text",
      {
        opacity: 1, // Le texte devient visible
        duration: 0.5, // Apparition rapide
      },
      "-=0.5"
    )
    .to(".orb", {
      width: "200vw", // On dépasse 100% pour bien remplir tout l'écran
      height: "200vw", // Idem pour la hauteur
      borderRadius: "50%", // Reste un cercle
      duration: 0.75, // Durée de l'animation
      ease: "linear",
    })
    .to(
      ".loader",
      {
        display: "none",
        zIndex: -1,
      },
      "-=0.5"
    );
});
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: $pink3;
  display: flex;
  align-items: flex-end;
}

.orb {
  width: 0; /* La boule commence à 0 */
  height: 0; /* La boule commence à 0 */
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  font-size: 42px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 50% 50%;
  font-weight: 300;
}

.orb-text {
  opacity: 0; /* Le texte commence invisible */
  color: $pink3;
  font-size: 42px;
  font-weight: 300;
}

.loading {
  height: 1.5rem;
  width: 0%;
  background-color: #000;
}
</style>
