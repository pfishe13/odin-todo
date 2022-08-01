import { Project } from "./project";

const ProjectList = (() => {
    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const addProject = (project) => {
        // console.log(`Adding new project: ${project.getProjectName()}`);
        projects.push(project);
        updateProjectStorage();
    }

    const removeProject = (project) => {
        const index = projects.findIndex((currProject) => currProject.getProjectName() === project.getProjectName());
        projects.splice(index, 1);
    }

    const findProjectColor = (projectName) => {
        const project = projects.find( currProject => currProject.getProjectName() === projectName);
        return project.getProjectColor();
    }

    const findProjectGivenName = (projectSearchName) => {
        const project = projects.find( currProject => currProject.getProjectName() == projectSearchName);
        console.log(`Returning this project: ${project.getProjectName()}`);
        return project;
    }

    const updateProjectStorage = () => {
        let storedArray = [];
        for (const project of projects) {
            let thisProject = {
                name: project.getProjectName(),
                color: project.getProjectColor()
            }
            storedArray.push(thisProject);
        }
        // console.log(storedArray);
        window.localStorage.setItem("storedProjectList", JSON.stringify(storedArray));
    }

    const outputProjects = () => {
        let i = 0;
        if (projects.length === 0) {
            console.log("There are 0 projects");
            return;
        }
        console.log("Projects: ")
        for (const project of projects) {
            console.log(`${i}) ${project.getProjectName()}`);
            i++;
        }
    }

    return { projects, addProject, removeProject, outputProjects, getProjects, findProjectColor, findProjectGivenName }
})();

export { ProjectList };