---
title: Elite IT ApS
description: CMS website hobby project
img: eliteit.png
imgAlt: “elite-it-portfolio“
tags: [UX, UI, HTML, CSS]
date: 2022-08-23
---

# Elite IT 
Frontend Developer and Graphic designer
Ansat som projektassistent, software/web- udvikler og digital marketingassistent. Ansat som projektassistent, software/web- udvikler og digital marketingassistent.

![Screenshot of eliteit.dk website](/img/eliteit.png)
| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |

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
