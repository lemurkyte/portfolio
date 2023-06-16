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

![Screenshot of hero section in Bachelorette.dk website](/img/eliteit.png)
| Syntax | Description |
| ------ | ----------- |
| Header | Title       |

- [x] Video Production
- [x] Content Management Systems (CMS)
- [x] Microsoft Power BI
- [x] Digital Marketing
- [x] Search Engine Optimization (SEO)
- [x] TypeScript
- [x] AngularJS
- [x] User Experience (UX)
- [x] Information Graphics
- [x] User Interface Design
- [x] Adobe XD
- [x] Graphic Design
## Data structure and restructure
The data structure was one of the first challenges I faced. To understand the issues, we need a quick overview of the data. First off we have a list of cinemas and a list of movies. Each movie will have a list of showtimes, queried by date. So we can fetch all showtimes for a movie on a specific date. The showtimes is an array of arrays, where they are grouped by cinema. It makes sense, right? And then there is a similar structure for the cinemas, where you can get all showtimes for that cinema on a particular date, grouped by movies. So the structure is an array of cinemas and under each cinema, there's a showtime object that contains an array of showtime objects. Mind the "movie_version_id", this is a reference to if it’s a 2D, 3D, or something else.I wanted to group the showtimes by version. So I wrote a small function to restructure and re-arrange the array: Even though I try to minimize the 3rd party libraries, I am using lodash. Why isn't this javascript just like this? phew. Well, it's easy to understand, showtimes are grouped by movie_version_id, which is the version. So all 2d movies will be grouped under the same version label. Perfect.


## NO API end point

The biggest challenge, issue, and flaw in this app is how I handle what happens when a user presses a showtime and wants to select seats and buy a ticket.Kino.dk, the website, has some deeper integrations to the different ticket systems, which makes it feel like a part of kino.dk.There are no API endpoints for this part, so the only option I had was to open a webview on kino.dk targeting the selected showtime.
This is by no means the best implementation, but the only current option I had.

My plan for Kino.dk was to extract the ticket system logic out to an external service and then I could hook both Kino.dk and the app to that service and provide a true native app experience.Without having thought this through, there could still be some issues. I could make the deeper integration with the app and ticket systems/middle layer, so the users can select a number of tickets, select seats, etc, but how did I handle the payment?I had to use the cinema’s/ticket systems payment gateway since we are selling tickets on behalf of the tickets system or cinema. So it is not Kino.dk’s money, but the cinemas’.

It would require Kino to have its own payment gateway that will distribute the money to the cinemas. I am not sure it will happen. If you got any good ideas on how to solve this, I would love to hear from you! Another twist with the webview was that I had to fetch cookie and session data and pass it to the webview to make sure the user was logged in.
The webview is just an in-app browser that will show the mobile website. The user will get validated/logged in with the right cookies. These cookies or strings are available to me through the authentication endpoint.
What happens behind the scenes when the user login, is that some strings (cookies) are returned from the API and saved on the phone through AsyncStorage.These strings will be passed as cookies to the webview, to validate the user and log him in, so he doesn't have to add fill out redundant data. Luckily there's a react-native library (react-native-cookies) to make this easier.
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