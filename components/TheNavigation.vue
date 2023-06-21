<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <nav class="nav sticky top-0 z-50  space-x-1 p-4 shadow-md flex items-center">
    <h2 class="logo">UGNE SILEIKYTE</h2>
    <div class="nav-links ml-auto">
      <NuxtLink to="/" class="n-link-base">
        Home
      </NuxtLink>
      <NuxtLink to="/projects" class="n-link-base">
        Projects
      </NuxtLink>
      <NuxtLink to="/about" class="n-link-base">
        About
      </NuxtLink>
      <NuxtLink to="/contact" class="n-link-base">
        Contact
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  padding: 30px;
  text-align: left;
  display: inline-block; /* Added display property */
}

.nav {
  background-color: white;
  text-align: right;
  padding: 30px;
}

.n-link-base {
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  padding: 20px;
  color: #171717;
}
.n-link-base:hover {
  color: grey;
}
</style>
