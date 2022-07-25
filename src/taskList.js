import { Task } from "./tasks";

const TaskList = (() => {
    let tasks = [];

    const getTasks = () => {
        return tasks;
    }

    const addTask = (task) => {
        tasks.push(task);
    }

    const removeTask = (taskName) => {
        tasks  = tasks.filter( (currTask) => currTask.getTitle() !== taskName);
        // outputTasks();
    }

    const outputTasks = () => {
        let i = 0;
        if (tasks.length === 0) {
            console.log("There are 0 tasks");
            return;
        }
        for (let i = 0; i < tasks.length; i++) {
        // console.log("Tasks: ")
        // for (const task of tasks) {
            console.log(`${i}) ${tasks[i].getTitle()}, ${tasks[i].getDescription()}, ${tasks[i].getDueDate()}, ${tasks[i].getProject().getProjectName()}`)
            // console.log(`${i}) ${task.getTitle()}, ${task.getDescription()}, ${task.getDueDate()}, ${task.getProject().getProjectName()}`)
            // i++;
        }
    }

    return { addTask, removeTask, outputTasks, getTasks }
})();

export { TaskList };