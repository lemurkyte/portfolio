<script setup>
</script>

<template>
    
    <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="tags-wrapper">
    
    <div>
        <div class="section-header">
            <h2>Services</h2>
        </div>

        <div class="project-list-wrapper">
          <div
            class="card-wrapper col-25">
                <img src="@/public/img/cms.png" alt="cms-icon">
                <p class="heading">WordPress Websites</p>
                <p>Creating WordPress sites from templates</p>
            </div>

            <div class="card-wrapper col-25">
                <img src="@/public/img/idea.png" alt="graphic-design-icon">
                <p class="heading">Graphic Design</p>
                <p>Printing material, logos, website prototype.</p>
            </div>

            <div  class="card-wrapper col-25">
                <img src="@/public/img/seo.png" alt="seo-icon">
                <p class="heading">SEO</p>
                <p>Google search optimization for your WordPress site</p>
            </div>

            <div  class="card-wrapper col-25">
                <img src="@/public/img/digital-marketing.png" alt="digital-marketing-icon">
                <p class="heading">Digital Marketing</p>
                <p>Web banners, management of social media, video graphics, analytics</p>
            </div>

        </div>
    </div>
</div>
</div>
    </div>
</div>
</template>

<style scoped>


.container {
    max-width: 100rem;
    padding: 40px 0 40px 0;
}
.project-list-wrapper {
  display: flex;
  grid-gap: 3%;
}

.card-wrapper {
  border: 1px solid #D1C0A8;
  cursor: pointer;
}

.card-wrapper p {
  word-wrap: break-word;
  hyphens: manual;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.card-wrapper .heading {
    font-weight: 800;
}

.section-header h2 {
    text-align: center;
    font-weight: 500;
    position: relative;
    padding-bottom: 40px;
}

.card-wrapper{
    padding: 20px 80px;
    border: 1px solid #D1C0A8;
}

.card-wrapper {
    padding: 10px;
}

.card-wrapper img {
    text-align: left;
    vertical-align: middle;
    width: 20%;
    padding: 10px 0;
}

@media (min-width: 768px) {
.col-25 {
    width: 100%;
}
}
</style>