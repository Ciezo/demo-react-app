### About this demo-react-app

The purpose of this application is to be quickly familiar with `React.js` using the `create-react-app` command. 
I want to be comfortable understanding the different layers of `React.js` as a frontend framework <i>(some call this as a frontend library, but I choose to see this as a frontend framework)</i>. 
Furthermore, this application allows us to see about SPAs and MPAs.

<b>The goal of this is to be familiar with `components`, `props`, and `hooks`.</b>

<b>Lastly, I want to implement here <a href="https://reactpatterns.js.org/docs/component-injection/#:~:text=Passing%20(or%20inject)%20a%20component,component%20it's%20called%20Component%20Injection.">Component Injection</a></b>

### Important terminologies 

<b>Single Page Applications (SPAs)</b> is website application concept where a user is interacting with an application that is dynamically rewriting the content as they use the UI elements (components). 

In SPAs, it is an experience where a user does not have to reload the application to render new contents, rather the application 
itself is constantly rendering the required components depending on the user events. 

> A single-page application is a website that loads a single document and overwrites the existing page with new data from a web server rather than reloading pages individually from scratch. As a result, page content updates in real time based on user actions with quick transitions and without refreshing. 
> <a href="https://business.adobe.com/blog/basics/learn-the-benefits-of-single-page-apps-spa#what-is-a-single-page-application">(Adobe: What is a Single Page Application?)</a>


<b>Multi Page Applications (MPAs)</b> these are also called multi-page experiences where the user is being redirected to new contents 
via URLs. Morover, this is different in SPAs as contents in MPAs based applications have to fetch new resources from a web-server.

In simple terms, MPAs based applications require multiple HTML files.

> MPAs consist of multiple HTML pages, each representing a different section or functionality of the application.
> How They Work:
> Each page is a separate HTML file.
> User interactions trigger full page reloads as they navigate between different sections.
>The server handles rendering and serving different pages.

<hr>

### SPAs vs MPAs 

| SPAs                                                                       | MPAs                                     |
| -----------                                                                | -----------                              |
| When a user enters an SPA, the server loads the whole page initially.      | Each page is a separate HTML file.       |
| User interactions (events) such as button clicking, form submissions, and links trigger AJAX request| User interactions trigger full page reloads as they navigate between different sections.
| SPA apps update the page content without reloading the entire page.        | The server handles rendering and serving different pages. |
| Faster experience without page reloads | Might have slower experience as it requires full page reloads |
| Fast and smooth user experience. Local caching for offline functionality.  Ideal for highly interactive apps. | Better SEO (each page has its own URL).  Simpler architecture for content-heavy sites. - Easier maintenance. |
| Initial load time can be slower and SEO challenges. | Slower user experience due to full page reloads. and Less interactivity. |


### Integrating Multi-Page-Experience in React.js

We can simply use the React router if we want to integrate a multi-page experience for the user.

Create React App doesn't prescribe a specific routing solution, but React Router is the most popular one.

To add it, run:

<code>npm install --save react-router-dom</code>