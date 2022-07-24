import { TaskList } from "./taskList";

const MainContent = (() => {
    const loadInitialTasks = () => {    
        for (const task of TaskList.tasks) {
            displayTask(task);
        }
    }

    const displayTask = (task) => {
        const mainContainer = document.getElementById("main-content");
        const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            taskCard.innerHTML = `
                <h2>${task.getTitle()}</h2>
                <h3>${task.getDescription()}</h3>
            `;
            mainContainer.appendChild(taskCard);
    }

    return { loadInitialTasks };
})();


export { MainContent };



// const getTitle = () => taskTitle;
//     const getDescription = () => taskDescription;
//     const getDueDate = () => taskDueDate;
//     const getProject = () => taskProject;
//     const getCompletion = () => taskCompleted;
//     const toggleTaskCompletion = () => {
//         taskCompleted = !taskCompleted;
//     }