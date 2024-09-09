<template>
  <header class="container">
    <ul>
      <li>
        <router-link to="/">Accueil</router-link>
      </li>
      <li>
        <router-link to="/boutique">Boutique</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>

    <router-link to="/" class="logo">
      <butterflyIcon class="butterfly"></butterflyIcon>
      <span>Jasmin</span>
    </router-link>

    <div class="actions">
      <userIcon class="icon"></userIcon>
      <cartIcon class="icon"></cartIcon>
    </div>
  </header>
</template>

<script setup>
import butterflyIcon from "./icons/butterflyIcon.vue";
import cartIcon from "./icons/cartIcon.vue";
import userIcon from "./icons/userIcon.vue";
</script>

<style lang="scss" scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  color: #000;
}

ul {
  list-style: none;
  display: flex;
  gap: 16px;

  li {
    font-size: 24px;
    font-weight: 600;
  }
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  span {
    font-size: 28px;
    text-transform: uppercase;
  }

  .butterfly {
    width: 24px;
    margin-right: 4px;
    fill: #000;
  }
}

.actions {
  display: flex;
  gap: 16px;

  .icon {
    fill: $red;
  }
}
</style>
