function addProject(event) {
    event.preventDefault(); 

    let projectName = document.getElementById("projectName").value;
    let projectLink = document.getElementById("projectLink").value;
    let description = document.getElementById("description").value;

    let projectCard = document.createElement("div");
    projectCard.classList.add("project");
    projectCard.innerHTML = `
        <h2>${projectName}</h2>
        <p>${description}</p>
        <a href="${projectLink}" target="_blank">View Project</a>
    `;

    let projectsSection = document.getElementById("projects");
    projectsSection.appendChild(projectCard);

    document.getElementById("projectName").value = "";
    document.getElementById("projectLink").value = "";
    document.getElementById("description").value = "";
}

let addProjectForm = document.getElementById("addProject").querySelector("form");
addProjectForm.addEventListener("submit", addProject);