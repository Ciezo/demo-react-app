PHILIPPIANS 4:13 

| Tasks                                                               | Deadline                |
| -----------                                                         | -----------             |
| <s>Write a plan on what this app is supposed to be</s>              | <s>February 29, 2024</s>| 
| <s>Write a proposal for technical and non-technical requirements</s>| <s>March 4, 2024</s>    | 
| <s>Integrate multi-page experience</s>                              | <s>March 8, 2024</s>    | 
| <s>Implement a mock-up JSON server</s>                              | <s>March 8, 2024</s>    |
| <s>Finish configuring the Spring Boot api for inkdown</s>           | <s>March 15, 2024</s>   |
| Integrate Spring Boot Application                                   | March 22, 2024          |



### Checklist: 

- [x] Build the initial application 
- [x] Add custom components
- [x] Conditional rendering for components
- [x] Components nesting
- [x] Write a plan for this app
- [x] Integrate React Router
- [X] Add a footer component
- [x] Add Bootstrap forms to signup and login pages
- [x] Add a Signup page
- [x] Add a Login page
- [x] Add GitHub Code of Conduct page 
- [x] Add contribute page
- [x] Add links to the footer
- [x] Create a component for the "How we collect data page"
- [x] Create page for "How we collect data"
- [x] Define route for "/data-collection" 
- [x] Add hover animation in footer links
- [x] Study React.js Hooks 
- [x] Implement `useState`
- [x] Study form submission and input values
- [x] Study how form input values are passed using <b>useState</b> 
- [x] <b>Refactor the `class` keyword to `className`</b>  
- [x] Refactor my Forms
- [x] Implement form input validations.  
    - [x] Signup form
    - [x] Login form

- <s>[] Set a cookie for the username to name it after the route</s>
- <s>[] Add a route for user's home based on their username</s>
    -  /{username}/home
       Ex: - /cloydvan/home
- [x] Add a redirect home page to user's home once logged-in
- [x] Design the UserHome page 
    - Inspired by keep.google.com
    - [x] Create `UserHomeNavbar` component
    - [x] Create the Sidebar for notes and trash pages
        > It is better to use a custom Sidebar component for this project
        - <s>[] Added `flowbite-react` library to include Sidebar component...</s>
    - [x] Create the UI for notes area
    - [x] Add `state management` and functionality to the `NotesEditor`
    - [x] Create a `NotesCard` component to render and display all notes..

- [] User sessions and management 
    - [] Add Authentication to the entire app using `react-auth-kit`
    <b>Use `fetch()` api to handle user requests and response to integrate my backend app (Spring Boot)</b>
    
        - I decided to use this because I need to learn about parsing json objects manually. Additionally,
        `fetch()` api can work with modern browsers and does not need more dependencies than `axios()` api.

    - [x] Implement Logout function
    - [] <b>Register</b> users using the Spring Boot backend 
        - At (http://localhost:18080/api/v1/auth/register) 

- [x] Design Trash page
- [x] Design Archive page

- [x] JSON Mockup Server
    - [x] Initialize the package for JSON MOCK REST API server
        - [x] Install and run it globally 
    - [x] Create `db.json` 
        - [x] Create endpoints for Users
        - [x] Create endpoints for Notes
        - [x] Create endpoints for NotesArchive
        - [x] Create endpoints for NotesTrash
    - [x] POST REQUESTS to the json-server
        - [x] POST user registrations from `SignupForm.jsx`
        - [x] POST {title, body, author} for Notes from user
        - [x] POST `NotesCard.jsx` {title, body, author} to endpoint: "/notes-archive"
            - Update `NotesCard.jsx` component to include an archive button
        - [x] POST `NotesCard.jsx` {title, body, author} to trash: "/notes-trash"
            - Update `NotesCard.jsx` component to include an trash button
- [x] Update the `NotesCard.jsx` to disappear upon moving to either archive or trash
    - [x] DELETE REQUESTS to the json-server
        - [x] On `UserNotesTrash.jsx` all rendered `NotesCard.jsx` can be deleted upon clicking a delete button
- [x] Display the archived notes card on `UserNotesArchive.jsx`
- [x] Display the trash notes card on `UserNotesTrash.jsx`

- [x] Fix problems with user cookie and paths

- [x] Fix styling, layouts, and positions
    - [x] Fix containers for notes card components
         - The Rows and Columns should be fixed...I think it is better to use a grid line