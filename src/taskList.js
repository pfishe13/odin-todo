const TaskList = (() => {
    let tasks = [];

    const getTasks = () => {
        return tasks;
    }

    const addTask = (task) => {
        tasks.push(task);
        updateTaskStorage();
    }

    const removeTask = (taskName) => {
        tasks  = tasks.filter( (currTask) => currTask.getTitle() !== taskName);
        updateTaskStorage();
    }

    const toggleCompletion = (taskName) => {
        const taskToToggleComplete = tasks.find( (currTask) => currTask.getTitle() === taskName);
        taskToToggleComplete.toggleTaskCompletion();
        updateTaskStorage();
    }

    const updateTaskStorage = () => {
        let storedArray = [];
        for (const task of tasks) {
            let thisTask = {
                title: task.getTitle(),
                desc: task.getDescription(),
                dueDate: task.getDueDate(),
                project: {
                    name: task.getProject().getProjectName(),
                    color: task.getProject().getProjectColor()
                },
                completion: task.getCompletion()
            }
            storedArray.push(thisTask);
        }
        window.localStorage.setItem("storedTaskList", JSON.stringify(storedArray));

    }

    const deleteTasksGivenProject = (project) => {
        tasks = tasks.filter( (task) => task.getProject() !== project);
        updateTaskStorage();
    }


    return { addTask, removeTask, getTasks, toggleCompletion, deleteTasksGivenProject }
})();

export { TaskList };