
<script setup>
  const projects = await queryContent('/projects')
    .where({ _partial: false })
    .find();

  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  let selectedTag = null;

  function filterByTag(tag) {
    if (selectedTag === tag) {
      selectedTag = null; // Deselect the tag if it's already selected
    } else {
      selectedTag = tag;
    }
  }

  const filteredProjects = computed(() => {
    if (!selectedTag) {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(selectedTag));
  });
  
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="tags-wrapper">
          <span
            v-for="tag in allTags"
            :key="tag"
            class="tag"
            @click="filterByTag(tag)"
          >
            {{ tag }}
          </span>
        </div>
        <div class="project-list-wrapper">
          <div
            class="card-wrapper col-md-3 col-sm-6 col-xs-12 col-lg-3"
            v-for="project in filteredProjects"
            :key="project.slug"
          >
            <div>
              <NuxtLink class="underline" :to="project._path">
                <img :src="`img/${project.img}`" :alt="project.img" class="card-image">
                <div class="card-content">
                  <h2 class="card-title">{{ project.title }}</h2>
                  <p class="description">{{ project.description }}</p>
                  <div class="tags-wrapper">
                    <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                  </div>
                  <p>{{ new Date(project.date).toLocaleDateString() }}</p>
                </div>
              </NuxtLink>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-list-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 30px;
  padding: 30px 0;
}

.card-content {
  padding: 30px;
}

h2.card-title {
  font-size: 26px;
  text-decoration: none;
  word-break: break-word;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
}
.description {
  word-wrap: break-word;
  hyphens: manual;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
  min-height: 100%;
}

.tags-wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.underline {
  text-decoration: none;
}

.tag {
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  background-color: #D1C0A8;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}

.tag:hover {
  background-color: #000;
}

.card-wrapper {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-wrapper:hover,
.card-wrapper:focus,
.card-wrapper:active {
    transform: scale(1.1);
}
</style>
