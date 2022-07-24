// import { Task } from "./tasks";

const TaskList = (() => {
    let tasks = [];

    const addTask = (task) => {
        tasks.push(task);
    }

    const removeTask = (task) => {
        const index = tasks.findIndex((currTask) => currTask.getTitle() === task.getTitle());
        tasks.splice(index, 1);
    }

    const outputTasks = () => {
        let i = 0;
        if (tasks.length === 0) {
            console.log("There are 0 tasks");
            return;
        }
        console.log("Tasks: ")
        for (const task of tasks) {
            console.log(`${i}) ${task.getTitle()}, ${task.getDescription()}, ${task.getDueDate()}, ${task.getProject().getProjectName()}`)
            i++;
        }
    }

    return { addTask, removeTask, outputTasks, tasks }
})();

export { TaskList };