<script setup>

  useHead({
  title: "Portfolio website - Ugne Sileikyte",
  
          htmlAttrs: {
            lang: 'en'
          },
        
  meta: [
    {
      name: "description",
      content: "Find more about me",
      description: "Projects, services"
    },
    
  ],
  link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
});
</script>

<template>
       <VueCursor></VueCursor>
  <TheNavigation />

    <NuxtLayout>
      <NuxtPage /> 
    </NuxtLayout> 

  <TheFooter />
</template>

<style>
@import '@/assets/simple-grid.css';

/*.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
  animation: shake 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  animation: shake 0.3s;
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
}
*/
</style>
