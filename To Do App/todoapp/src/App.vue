<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink class="navlink" to="/">Feladatok</RouterLink>
        <RouterLink class="navlink" to="/newtask">Új feladat</RouterLink>
      </nav>

  </header>

  <RouterView />
</template>

<style scoped>

.navlink {
  background-color:rgb(99, 195, 250);
  border: solid black 1px;
  box-shadow: 8px 8px 10px lightslategrey;
  color: var(--color-text);
  margin: 10px;
  padding: 7px;
  border-radius: 10%;
}

nav {
  font-size: 25px;
  text-align: center;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}


</style>
