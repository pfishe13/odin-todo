
const Project = (name, color) => {
    let projectName = name;
    let projectDisplayColor = color;

    const getProjectName = () => projectName;
    const getProjectColor = () => projectDisplayColor;


    return { getProjectName, getProjectColor };
}

export { Project };