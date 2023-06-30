---
title: Novicell
description: Portfolio website during internship at Novicell
img: novicell.png
imgAlt: “Novicell-logo“
tags: ["UI", "HTML", "CSS", "JS", "VUE", "NUXT", "FIGMA"]
date: 2022-08-23
---

# Novicell
<br>During my 4-week internship at Novicell, I debuted by creating a portfolio website. I believe this endeavor proved to be doubly efficient as it helped me overcome my procrastination in creating one, while also serving as a valuable tool for maintaining a comprehensive record of my professional accomplishments. Additionally, it enhanced the visibility of my profile, increasing the likelihood of being noticed by potential employers.
<br><br>
Moreover, the process of developing the website provided an excellent opportunity to refresh my knowledge of <strong>Vue.js</strong> and <strong>Nuxt</strong>, as well as acquire more knowledge of <strong>JavaScript</strong>. It served as a valuable practice session to brush up on my existing proficiency in these technologies, which had become somewhat rusty over time.
<br><br>
Overall, the experience of creating my portfolio website at Novicell was not only highly productive, but it also facilitated professional growth and skill development. I am grateful for the opportunity to engage with these technologies and eagerly anticipate applying the lessons learned in future endeavors.
<br><br>

## Portfolio functionality
### Displaying projects
<pre style="background-color: #2e3440">
  <code data-language="javascript">
    &lt;div class=&quot;col-12&quot;&gt;
      &lt;div class=&quot;tags-wrapper&quot;&gt;
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



I used a `v-for` directive to iterate over the filteredProjects array and create a `<div>` element for each project. The `:key` attribute binds the project.slug as the unique identifier for each element. <br><br>
`<img :src="img/${project.img}" :alt="project.img" class="card-image">`: This line dynamically sets the src attribute of the `<img>` element based on the project.img property. <br><br>
`<h2 class="card-title">{{ project.title }}</h2>`: This line displays the project.title property as the content of an `<h2>` element.<br><br>

`<p>{{ new Date(project.date).toLocaleDateString() }}</p>`: This line displays the project.date property as a formatted date using the toLocaleDateString method of the JavaScript Date object. The result is shown inside a `<p>` element.
<br><br>
In summary, the code represents a template for rendering a list of projects with associated tags. It utilizes Vue.js directives for iterating over arrays, handling events, and dynamically displaying data.
<br><br>
### Hamburger menu on load


To close the menu when a NuxtLink is clicked and the page loads I use the onMounted hook to attach a click event listener to each NuxtLink element with the class "n-link-base". When a NuxtLink is clicked, the isMenuOpen value is set to false, thereby closing the menu.

<pre style="background-color: #2e3440">
  <code data-language="javascript">
    onMounted(() =&gt; {
      const menuLinks = document.querySelectorAll('.n-link-base')

      menuLinks.forEach(link =&gt; {
        link.addEventListener('click', () =&gt; {
          isMenuOpen.value = false
        })
      })
    })
  </code>
</pre>
<br><br>
## Lighthouse
I successfully improved my portfolio website by leveraging the power of the <strong>Lighthouse</strong> tool. Addressing the performance aspect, I focused on optimizing my images to ensure responsiveness. To achieve this, I utilized the capabilities of Cloudinary, a platform that allowed me to seamlessly generate and deliver responsive images on my website. With these enhancements, my portfolio now offers a faster and more user-friendly experience, showcasing my work in the best possible way.
![Screenshot of Lighthouse results](/img/lighthouse_result.png)
<br>

## Mobile responsiveness
I ensured that my portfolio website is fully responsive and optimized for mobile devices, allowing it to seamlessly adapt and work effectively on phones.
I achieved the responsiveness of my portfolio website by incorporating <strong>media queries</strong>  into its design. By utilizing media queries, I implemented specific CSS rules that adapt the layout and styling of the website based on the screen size and device being used. This approach allowed me to create a fluid and visually appealing user experience, ensuring that my portfolio website looks and functions seamlessly across different devices, including smartphones, tablets, and desktops. 
![Screenshot of mobile version](/img/mobile_responsive-01.png)
<br><br>

## Deploying
I successfully deployed my website using <strong>Netlify</strong>, a reliable hosting platform. To implement a fully functional contact form, I made use of Netlify forms. This powerful feature allowed me to receive form submissions directly without the need for complex APIs or SMTP configurations. Additionally, I integrated <strong>Zapier</strong> into the workflow, which now automatically sends the form submissions to my Gmail account. With this seamless setup, I can easily stay updated and respond promptly to any inquiries or messages received through the contact form on my website.
<br><br>

## Designing iternal system's interface

Another project I did was creating a user interface of a week board for one of Novicell's internal systems, called Drools.
During the second week of my internship, I was assigned the task of implementing a new interface for the Week Board page in Drools. Thankfully, the workflow was smooth due to the fact that the designers had already created designs and components for other pages.<br><br>

The design for the interface was created using <strong>Figma</strong>, which was a new experience for me. However, since I have ample experience using Adobe XD, adapting to this new collaborative interface design tool wasn't difficult. The principles of Figma are similar to XD Design, making the transition relatively seamless.
<br><br>
Original weekboard interface:
![Screenshot of week board in Drools](/img/drools_week_board.png)
<br>
My implemented UI:
![Screenshot of week board in Drools](/img/Drools-Weekboard.png)
<br>
To reduce cognitive load, I opted for an icon + label combination when displaying the phone number for the PHP department. Additionally, I included the starting and finishing dates of the week to assist international employees who may find it challenging to remember.<br><br> To further enhance the user experience, I decided to highlight the current day of the week by adding a border around it. Furthermore, I ensured that the foreground and background colors met WCAG (Web Content Accessibility Guidelines) compatibility standards, and it successfully passed the required tests.
<br><br>

## Reflections
The collaborative and nurturing environment at Novicell allowed me to grow both personally and professionally. It has been an unforgettable experience that has further fueled my passion for this field. Additionally, the internship gave me the opportunity to challange myself by designing and developing a beautiful portfolio website (I invite you all to explore my portfolio further, where you can discover the projects I have worked on). I look forward to applying what I have learned and continuing my journey in the exciting world of development.  <br><br>
<style scoped> 

    a {
        text-decoration: none;
    }

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