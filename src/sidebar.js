import { ProjectList } from "./projectList"
import { Project } from "./project";

const Sidebar = (() => {
    const displaySidebar = () => {
        clearSidebar();
        displayProjectButtons();
    }

    const clearSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        while(sidebar.firstChild) {
            sidebar.removeChild(sidebar.firstChild);
        }
    }

    const displayProjectButtons = () => {
        const sidebar = document.getElementById("sidebar");
        const projectButton = document.createElement('button');
            projectButton.textContent = `All Tasks`;
            sidebar.appendChild(projectButton);
        for (const project of ProjectList.projects) {
            const projectButton = document.createElement('button');
            projectButton.textContent = `${project.getProjectName()}`;
            projectButton.style.color = `${project.getProjectColor()}`
            // projectButton.addEventListener('click', displayTasks); // left off here, need to create a new file for mainContent display and implement displayTasks
            sidebar.appendChild(projectButton);
        }
        newProjectButton();
    }

    const newProjectButton = () => {
        const sidebar = document.getElementById("sidebar");
        const newProjectButton = document.createElement('button');
        newProjectButton.textContent = `Create Project`;
        newProjectButton.addEventListener('click', openProjectForm)
        sidebar.appendChild(newProjectButton);
    }

    const openProjectForm = () => {
        const form = document.getElementById("project-form");
        form.style.display = "block";

        const submitFormButton = document.getElementById("project-submit");
        submitFormButton.addEventListener('click', processProjectForm);

        const closeFormButton = document.querySelector(".cancel");
        closeFormButton.addEventListener('click', closeProjectForm);
    }

    const closeProjectForm = () => {
        const form = document.getElementById("project-form");
        form.style.display = "none";
    }

    const processProjectForm = (e) => {
        e.preventDefault();

        let projectName = document.getElementById("project-name").value;
        let projectColor = document.getElementById("project-color").value;

        const newProject = Project(projectName, projectColor);
        console.log(newProject.getProjectColor());
        ProjectList.addProject(newProject);

        closeProjectForm();
        clearSidebar();
        displayProjectButtons();
    }

    return { displaySidebar };
})();


export { Sidebar };