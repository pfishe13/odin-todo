const ProjectList = (() => {
    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const addProject = (project) => {
        projects.push(project);
        updateProjectStorage();
    }

    const removeProject = (project) => {
        const index = projects.findIndex((currProject) => currProject.getProjectName() === project.getProjectName());
        projects.splice(index, 1);
        updateProjectStorage();
    }

    const findProjectColor = (projectName) => {
        const project = projects.find( currProject => currProject.getProjectName() === projectName);
        return project.getProjectColor();
    }

    const findProjectGivenName = (projectSearchName) => {
        const project = projects.find( currProject => currProject.getProjectName() == projectSearchName);
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
        window.localStorage.setItem("storedProjectList", JSON.stringify(storedArray));
    }

    return { projects, addProject, removeProject, getProjects, findProjectColor, findProjectGivenName }
})();

export { ProjectList };