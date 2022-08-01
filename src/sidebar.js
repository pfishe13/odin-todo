import { ProjectList } from "./projectList"
import { Project } from "./project";
import { MainContent } from "./mainContent";

const Sidebar = (() => {
    const displaySidebar = () => {
        displayProjectButtons();
    }

    const displayProjectButtons = () => {
        const sidebar = document.getElementById("project-buttons");
        const projectButton = document.createElement('h3');
            projectButton.innerHTML = `<span class="project-icon material-symbols-outlined">
            folder
            </span>All Tasks`;
            // projectButton.textContent = `All Tasks`;
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
        const projectButton = document.createElement('h3');
        projectButton.innerHTML = `<span class="project-icon material-symbols-outlined">
            folder
            </span>${project.getProjectName()}`;
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

        blurBackground();

        const submitFormButton = document.getElementById("project-submit");
        submitFormButton.addEventListener('click', processProjectForm);

        const closeFormButton = document.querySelector(".cancel");
        closeFormButton.addEventListener('click', closeProjectForm);
    }

    const closeProjectForm = () => {
        const form = document.getElementById("project-form");
        form.style.display = "none";
        blurBackground();
    }

    // This should be moved to different file since it gets called in the mainContent file as well
    const blurBackground = () => {
        const body = document.querySelector('.blur');
        body.classList.toggle("blurred");
    }

    const processProjectForm = (e) => {
        e.preventDefault();

        let projectName = document.getElementById("project-name").value;
        // let projectColor = document.getElementById("project-color").value;
        let projectColor = document.querySelector('input[name="project-color"]:checked').value;

        const newProject = Project(projectName, projectColor);
        console.log(newProject.getProjectColor());
        ProjectList.addProject(newProject);

        closeProjectForm();
        resetFormValues();
        createProjectButton(newProject);
    }

    const resetFormValues = () => {
        document.getElementById("project-name").value = "";
        document.getElementById('radio-white').checked = true;
    }

    return { displaySidebar, blurBackground };
})();


export { Sidebar };