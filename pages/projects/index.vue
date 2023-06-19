<script setup lang="js">
</script>
<!-- ./pages/index.vue -->
<template>
  <section>
        <div>
        <h1 class="text-center">My recent projects</h1>
        <ClientOnly>
        <ProjectList />
        </ClientOnly>
      </div>
  </section>
</template>

<style scoped>
section {
 padding-top: 50px;
 }
h1, h2, p {
    padding-bottom: 30px;
}
</style>