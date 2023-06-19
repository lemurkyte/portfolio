---
title: Novicell
description: Portfolio website during internship at Novicell
img: novicell.png
imgAlt: “Novicell-logo“
tags: [UX, UI, HTML, CSS]
date: 2022-08-23
---

# Novicell

I debuted in Novicell by creating a portfolio website. I reckon it was double efficient, since 
1. I kept delaying on creating one and it's just so helphul to keep track of your proffesional life + increase opportunity for your future employees to notice you and 
2. It was a good practise to brush up on my rusty knowledge about Vue.js and Nuxt and learn new things.

`<div v-for="project in filteredProjects" :key="project.slug"> ` 

I used a v-for directive to iterate over the filteredProjects array and create a `<div>` element for each project. The `:key` attribute binds the project.slug as the unique identifier for each element. 

`<NuxtLink class="underline" :to="project._path">`: This is a Vue.js component provided by Nuxt.js. It represents a link to another page in the application. The `:to` attribute sets the target path of the link based on project._path.

`<img :src="img/${project.img}" :alt="project.img" class="card-image">`: This line dynamically sets the src attribute of the `<img>` element based on the project.img property. The `:alt` attribute sets the alternative text for the image. The class="card-image" sets the class name to "card-image" for styling purposes.

`<h2 class="card-title">{{ project.title }}</h2>`: This line displays the project.title property as the content of an `<h2>` element. The class="card-title" sets the class name to "card-title" for styling purposes.

`<p class="description">{{ project.description }}</p>`: This line displays the project.description property as the content of a `<p>` element. The class="description" sets the class name to "description" for styling purposes.

`<div class="tags-wrapper">...</div>: This <div> `element is a container for tags specific to each project. It is similar to the tags container mentioned earlier.

`<p>{{ new Date(project.date).toLocaleDateString() }}</p>`: This line displays the project.date property as a formatted date using the toLocaleDateString method of the JavaScript Date object. The result is shown inside a `<p>` element.

In summary, the code represents a template for rendering a list of projects with associated tags. It utilizes Vue.js directives for iterating over arrays, handling events, and dynamically displaying data.


<pre style="background-color: #2e3440">
  <code data-language="javascript">
    &lt;div class=&quot;col-12&quot;&gt;
      &lt;div class=&quot;tags-wrapper&quot;&gt;
        &lt;span
          v-for=&quot;tag in allTags&quot;
          :key=&quot;tag&quot;
          class=&quot;tag&quot;
          @click=&quot;filterByTag(tag)&quot;
        &gt;
          {{ tag }}
        &lt;/span&gt;
      &lt;/div&gt;
      &lt;div class=&quot;project-list-wrapper&quot;&gt;
        &lt;div
          class=&quot;card-wrapper col-md-3 col-sm-6 col-xs-12 col-lg-3&quot;
          v-for=&quot;project in filteredProjects&quot;
          :key=&quot;project.slug&quot;
        &gt;
          &lt;div&gt;
            &lt;NuxtLink class=&quot;underline&quot; :to=&quot;project._path&quot;&gt;
              &lt;img :src=&quot;`img/${project.img}`&quot; :alt=&quot;project.img&quot; class=&quot;card-image&quot;&gt;
              &lt;div class=&quot;card-content&quot;&gt;
                &lt;h2 class=&quot;card-title&quot;&gt;{{ project.title }}&lt;/h2&gt;
                &lt;p class=&quot;description&quot;&gt;{{ project.description }}&lt;/p&gt;
                &lt;div class=&quot;tags-wrapper&quot;&gt;
                  &lt;span v-for=&quot;tag in project.tags&quot; :key=&quot;tag&quot; class=&quot;tag&quot;&gt;{{ tag }}&lt;/span&gt;
                &lt;/div&gt;
                &lt;p&gt;{{ new Date(project.date).toLocaleDateString() }}&lt;/p&gt;
              &lt;/div&gt;
            &lt;/NuxtLink&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  </code>
</pre>

![Screenshot of week board in Drools](/img/drools_week_board.png)

## Designing iternal system Drools interface
On the 2nd week of my internship I got a task to implement a new interface on one of the pages of Drools - Week Board. A workflow was with an ease, because designers already had other pages designed and components created.

Design was made in Figma, which was the first time for me using it. I have plenty of experience using Adobe XD, therefore a new (to me) collaborative interface design tool wasn't difficult to adapt to, because the principle of it is alike compared to XD Design.

### Workflow

I got an outdated design, which I had to improve by implementing a new interface. It required to have a week number, status of employees:
- [x] Illness
- [x] Out of ofice
- [x] Working from home
- [x] Info

to to be desplayed on each week day by the initials of the name. 

## Implementing new Drools interface

The last part of my internship was to get my hands on Drupal project. Here I had to actually implement a designed I created to the frontend of Drools website.

<style scoped> 
    code {
    background: rgba(0,0,0,.05);
    border-radius: 2px;
    font-size: 18px;
    padding: 3px 5px;
    color: #8B949E;
    }

    pre {
    background-color: #24292e;
    border-radius: 8px;
    overflow-x: scroll;
    overflow-y: hidden;
    color: #8B949E;
    
}
::-webkit-scrollbar-thumb {
    background-clip: content-box;
    background-color: #d6dee1;
    border: 6px solid transparent;
    border-radius: 20px;
}
pre code .line {
    display: block;
    min-height: 1rem;
}

</style>