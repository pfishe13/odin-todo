
const Task = (title, description, dueDate, project, completed) => {
    let taskTitle = title;
    let taskDescription = description;
    let taskDueDate = dueDate;
    let taskProject = project;
    let taskCompleted = Boolean(completed);
    const getTitle = () => taskTitle;
    const getDescription = () => taskDescription;
    const getDueDate = () => taskDueDate;
    const getProject = () => taskProject;
    const getCompletion = () => taskCompleted;
    const toggleTaskCompletion = () => {
        taskCompleted = !taskCompleted;
    }

    return { getTitle, getDescription, getDueDate, getProject, getCompletion, toggleTaskCompletion };
}

export { Task };