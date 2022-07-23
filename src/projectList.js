const ProjectList = (() => {
    let projects = [];

    const addProject = (project) => {
        projects.push(project);
    }

    const removeProject = (project) => {
        const index = projects.findIndex((currProject) => currProject.getProjectName() === project.getProjectName());
        projects.splice(index, 1);
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

    return { addProject, removeProject, outputProjects }
})();

export { ProjectList };