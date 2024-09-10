<template>
  <div>
    <headerPage></headerPage>
    <RouterView />
    <FooterPage></FooterPage>
    <LoaderPage></LoaderPage>
  </div>
</template>

<script setup>
import FooterPage from "./components/footerPage.vue";
import HeaderPage from "./components/headerPage.vue";
import LoaderPage from "./components/loaderPage.vue";
</script>

<style lang="scss" scoped></style>
