import { ProjectList } from "./projectList"
import { Project } from "./project";
import { MainContent } from "./mainContent";

const Sidebar = (() => {
    const displaySidebar = () => {
        displayProjectButtons();
    }

    const displayProjectButtons = () => {
        const sidebar = document.getElementById("project-buttons");
        const projectButton = document.createElement('button');
            projectButton.textContent = `All Tasks`;
            projectButton.id = 'all';
            projectButton.addEventListener('click', MainContent.displayProjectTasks);
            sidebar.appendChild(projectButton);
        for (const project of ProjectList.projects) {
            createProjectButton(project);
        }
        newProjectButton();
    }

    const createProjectButton = (project) => {
        const sidebar = document.getElementById("project-buttons");
        const projectButton = document.createElement('button');
        projectButton.textContent = `${project.getProjectName()}`;
        projectButton.style.color = `${project.getProjectColor()}`;
        projectButton.id = `${project.getProjectName().replace(/\s+/g, '-')}`;
        projectButton.addEventListener('click', MainContent.displayProjectTasks); // left off here, need to create a new file for mainContent display and implement displayTasks
        sidebar.appendChild(projectButton);
    }

    const newProjectButton = () => {
        const newProjectButton = document.getElementById("open-project-form")
        newProjectButton.addEventListener('click', openProjectForm)
        // sidebar.appendChild(newProjectButton);
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
        createProjectButton(newProject);
    }

    return { displaySidebar };
})();


export { Sidebar };