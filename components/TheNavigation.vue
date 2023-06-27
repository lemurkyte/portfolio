<script setup>

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

</script>

<template>
  <nav class="nav sticky top-0 z-50  space-x-1 p-4 shadow-md flex items-center">
    <NuxtLink to="/">
      <h2 class="logo">UGNE SILEIKYTE</h2>
    </NuxtLink>
    <div class="nav-links ml-auto ms-auto">
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
    <button class="hamburger" name="navigation" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>

  <div class="mobileB" :class="{ 'openB': isMenuOpen }">
    <NuxtLink to="/" class="n-link-base">
      Home
    </NuxtLink>
    <hr class="solid">
    <NuxtLink to="/projects" class="n-link-base">
      Projects
    </NuxtLink>
    <hr class="solid">
    <NuxtLink to="/about" class="n-link-base">
      About
    </NuxtLink>
    <hr class="solid">
    <NuxtLink to="/contact" class="n-link-base">
      Contact
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo {
  padding: 30px;
  text-align: left;
  display: inline-block;
}

.nav {
  background-color: white;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 30px;
  height: 2px;
  background-color: #171717;
  margin-bottom: 5px;
}

.nav-links {
  display: flex;
  align-items: center;
  margin-left: auto;
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

.mobileB {
  display: none;
  background-color: white;
  min-height: 280px;
  width: 100%;
  z-index: 9;
  box-shadow: 0 9px 9px -9px gray;

}

.mobileB .n-link-base {
  display: block;
  background-color: white;
  z-index: 9;
}

.openB {
  display: block;
}

.open .hamburger span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.open .hamburger span:nth-child(2) {
  opacity: 0;
}

.open .hamburger span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: white;
    padding: 20px;
  }

  .open .nav-links {
    display: flex;
  }
}

hr.solid {
  border-top: 1px solid #D1C0A8;
}</style>
