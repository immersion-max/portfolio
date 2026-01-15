// actions.js

//dynamically add skills
const skills = [  "HTML", "CSS", "JavaScript", "Python", "Github", "Github Desktop", "Bootstrap", "PyGame",
                "React", "Node.js", "Express", "MySQL", "MATLAB", "Java", "Data Structures",
                "Azure", "Bitvise", "Ubuntu","Socket.io", "Microsoft Office", "Vite", "Object Oriented Programming" ];

document.getElementById('skills-tools-list').innerHTML = skills.map(skill => `<div class="skill">${skill}</div>`).join('');

//classes too
//dynamically add work experience
const jobs = [
    {
        title: "Intro to Computer Science Teaching Assistant",
        dates: "Fall 2025 - Present",
        description:    `As one of two TAs in lab sessions, I assisted 15 students with their Python based work in Jupyter labs. 
                        I used communication and analytical skills to explain theory, debug code, and provide feedback on readable syntax.`
    }
    
];

document.getElementById('work-accordion').innerHTML = jobs.map(job => `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${job.title}</h5>
            <p><i>${job.dates}</i></p>
            <p class="card-text">${job.description}</p>
        </div>
    </div>`).join('');

//dynamically add projects
const projects = [
    {
        title: "Asteroids Game - Python",
        description: `In a three person team, developed an object oriented Asteroids game using Python and the PyGame library.
                      Implemented core game mechanics including ship movement, lazer generation, asteroid generation, 
                      collision detection, time-keeping, several levels of varying difficulties, and a scoring system.
                      Communicated with members and establish a detailed top-down structural proposal, allocate work, 
                      and establish completion timeframes.`
    },
    {
        title: "Employee Database Modification - Full-Stack",
        description:    `Cloned an existing repo to modify a React, Node.js, and Express full-stack web application to add new features to an employee database.
                         This included employee creation, display in a table, and various ordering filters`
    },
    {
        title: "Personal Portfolio Website - Front-End",
        description: `Designed a personal portfolio website using HTML, CSS, and JavaScript to showcase my skills,
                      work experience, and projects. Implemented responsive design principles to ensure optimal viewing across devices.
                      Utilized Bootstrap framework for styling professionalism and consistency (accordions, cards, background images) 
                      as well as customized classes to create a professional feel. Version control was implemented using Github desktop and 
                      it was deployed using GitHub Pages.`
    },
    {
        title: "Chat Application - Full-Stack",
        description:    `Cloned an existing repo to modify a React, Node.js, and Express full-stack web application to add new features to a chat application.
                         This included logging present clients, recording messages, saving messages in back-end txt file when VM was turned off,
                         user message posting, stocket.io functionality to allow for real-time sending/receiving, and stats about who has posted how many times.
                         Version control was implemented using Github desktop and it was deployed using an Azure VM controlled with Bitvise SSH.`
    },
    {
        title: "Everyone's It Tag - Full-Stack",
        description:    `In a a three person team, developed and deployed a React, Node.js, Express, and Socket.io full-stack web game.
                         Concept: Each player has a sprite following the mouse and they can tag people by pressing space bar when they 
                         overlap. When they’re tagged they’re frozen until their tagger gets tagged. Communicated with memebers constantly to ensure
                         smooth integration of our self-assigned components. Github desktop was used for version control and it was deployed using 
                         an Azure VM controlled with Bitvise SSH.`
    },
    {
        title: "Kubernetes Research Presentation",
        description:    `Researched the foundations of functionality and architecture of kubernetes container manager system 
                         and its applications in industry. Created and delivered a 10 minute timed presentation for a class 
                         of 10 students and a professor.`
    },
    {
        title: "Friends Social Media Application - Full-Stack",
        description:    `Designed and deployed a vite scaffolded React, Node.js, Express, Socket.io, and MySQL (Azure Service) full-stack social media web application.
                         Functionality included login/logout, registration, password/username validation/uniqueness, user search, friend requests, real-time messaging,
                         real-time chat/friend request notifications, creating/editing/deleteing shared events and bios, and writing private notes on friends profiles. 
                         The back-end and API utilized the CRUD principles to interact with the MySQL database.
                         Version control was implemented using Github desktop and it was deployed using an Azure VM controlled with Bitvise SSH. The creation of this application 
                         included the sanctioned and responsible use of AI assisted development to increase efficiency but not hinder understanding/learning.`
    }
];


document.getElementById('projects-list').innerHTML = projects.map(project => `
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${projects.indexOf(project)}" aria-expanded="true" aria-controls="collapse${projects.indexOf(project)}">
                ${project.title}
            </button>
        </h2>
        <div id="collapse${projects.indexOf(project)}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
                ${project.description}
            </div>
        </div>
    </div>`).join('');
        
