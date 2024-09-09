<template>
  <div>
    <headerPage></headerPage>
    <RouterView />
    <LoaderPage></LoaderPage>
  </div>
</template>

<script setup>
import HeaderPage from "./components/headerPage.vue";
import LoaderPage from "./components/loaderPage.vue";
</script>

<style lang="scss" scoped></style>
