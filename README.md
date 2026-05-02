# My Portfolio - MERN

Name: Personal Portfolio (MERN)

Summary: A simple, responsive personal portfolio built with a React frontend and an Express/MongoDB backend. The frontend shows a hero, about, projects, skills, and contact sections; the backend provides a contact API that stores submissions in MongoDB.
Tech Stack

Frontend: React, Tailwind CSS, PostCSS
Backend: Node.js, Express
Database: MongoDB (Mongoose models)
Deployment: Vercel (frontend/build) and a Node host or similar for the backend
Key Features

Hero, About, Projects, Skills, Contact: Reusable React components for each section.
Contact API: POST endpoint that saves messages to the Contact model.
Build Output: Production-ready build in the build folder with static assets.
Responsive UI: Tailwind-powered styles for mobile and desktop.
What's in the repo

Backend: Express server (server.js), route(s) in routes/contact.js, and model in models/Contact.js.
Frontend: React source in src/ (components: About.jsx, Contact.jsx, Hero.jsx, Navbar.jsx, Projects.jsx, Skills.jsx, Footer.jsx) and production build/.
