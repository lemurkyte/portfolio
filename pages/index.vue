<script setup>
import VueCursor from '@/components/VueCursor.vue';
</script>

<template>
  <div class="hero-image">
    <div class="hero-text">
      <div class="text-wrap">
        <h1>RESPONSIBLE INNOVATION & UX</h1>
        <p>I help my clients innovate with care and build responsible products to be proud of.</p>
        <div>
          <a href="/contact"><button class="button">Get in touch</button></a>
        </div>
      </div>
    </div>
    <div class="hero-image-right">
      <img
  sizes="(min-width: 50em) 50em, 100vw"
  srcset="https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_256/v1686654357/Portfolio/girl_t2flqz.jpg 256w,
          https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_512/v1686654357/Portfolio/girl_t2flqz.jpg 512w,
          https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_768/v1686654357/Portfolio/girl_t2flqz.jpg 768w,
          https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_1024/v1686654357/Portfolio/girl_t2flqz.jpg 1024w,
          https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_1280/v1686654357/Portfolio/girl_t2flqz.jpg 1280w,
          https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_1024/v1686654357/Portfolio/girl_t2flqz.jpg 1024w,
          https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_1710/v1686654357/Portfolio/girl_t2flqz.jpg 1710w,
          https://res.cloudinary.com/dgawamzxe/image/upload/f_auto/q_auto/c_scale,w_2048/v1686654357/Portfolio/girl_t2flqz.jpg 2048w,
          "
  src="https://res.cloudinary.com/dgawamzxe/image/upload/v1686654357/Portfolio/girl_t2flqz.jpg"
  alt="Ugne-Sileikyte" />
    </div>
  </div>

  <div class="centered-paragraph">
    <h2>Find out more about me</h2>
    <div class="paragraph">
      With a blend of creativity and technical expertise,
      I specialize in crafting visually stunning and functional fgtrdigital experiences. <br><br> My journey in the world of
      design started when I discovered my love for both <strong>coding</strong> and <strong>aesthetics.</strong>
      Whether it's designing user-friendly interfaces, developing responsive websites, or creating eye-catching
      graphics,
      I thrive on delivering innovative solutions that leave a lasting impact. <br><br>
      If you're looking for a dedicated professional who can bring your ideas to life and create a <strong>memorable online
      presence</strong>, I would love to connect with you. Let's collaborate and make your vision a reality!
    </div>
  </div>
  <Services />
  <Clients />

</template>

<style scoped>

body,
html {
  height: 100%;
}

.section-header h2 {
  font-size: 36px;
  text-align: center;
  font-weight: 500;
  position: relative;
}

.text-wrap {
  display: grid;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.button {
  width: 150px;
  color: #333447;
  background: transparent;
  border-radius: 5px;
  border: solid 1px #333447;
  padding: 10px;
  margin-top: 20px;
  font-weight: 400;
}

.button:hover {
  width: 150px;
  color: white;
  background-color: #333447;
  border-radius: 6px;
  padding: 10px;
  border: none;
  margin-top: 20px;
  font-weight: 400;
}

button a {
  text-decoration: none;
}

.hero-image {
  display: flex;
  height: 35%;
  background-color: #D1C0A8;
  justify-content: space-between;
}

.hero-text {
  justify-content: center;
  display: grid;
  color: white;
  width: 50%;
}

.hero-image-right {
  width: 50%;
  overflow: hidden;
  background-size: contain;

}

.image {
  width: 100%;
}

.centered-paragraph {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  height: 600px;
  padding: 80px 0 40px 0;
}

.centered-paragraph h2 {
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
}

.centered-paragraph .paragraph {
  /*display: flex;*/
  text-align: justify;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  width: 1000px;
  column-count: 2;
  column-gap: 50px;
 
}
</style>
