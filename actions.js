var skills = [  "Python","HTML", "CSS", "JavaScript", "Python", "Github", "Bootstrap", 
                "React", "Node.js", "Express", "MySQL", "MATLAB", "Java",
                "Azure", "Socket.io", "Microsoft Office"];

document.getElementById('skills-tools-list').innerHTML = skills.map(skill => `<div class="skill">${skill}</div>`).join('');