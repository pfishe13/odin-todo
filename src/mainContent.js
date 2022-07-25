import { Project } from "./project";
import { ProjectList } from "./projectList";
import { TaskList } from "./taskList";
import { Task } from "./tasks";

const MainContent = (() => {
    const loadInitialTasks = () => {    
        for (const task of TaskList.tasks) {
            displayTask(task);
        }
        newTaskButton();
    }

    const displayProjectTasks = (e) => {
        clearMainContent();
        if (e.target.id === 'all') {
            loadInitialTasks();
            return;
        }
        const projectName = e.target.id.replace('-', /\s+/g);
        const projectTasks = TaskList.tasks.filter( (task) => {
            return (task.getProject().getProjectName().toString() === projectName);
        });
        for (const task of projectTasks) {
            displayTask(task);
        }
    }

    const clearMainContent = () => {
        const mainContainer = document.getElementById("main-content");
        while (mainContainer.lastChild) {
            mainContainer.lastChild.remove();
        }
    }

    const displayTask = (task) => {
        const mainContainer = document.getElementById("main-content");
        const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            taskCard.innerHTML = `
                <div class="card-left-side">
                    <h2>${task.getTitle()}</h2>
                    <h3>${task.getDescription()}</h3>
                <div class="card-right-side">
                    <h3>${task.getDueDate()}</h3>
                    <h3>${task.getProject().getProjectName()}</h3>
                </div>
            `;
            mainContainer.appendChild(taskCard);
    }

    const newTaskButton = () => {
        const formButton = document.getElementById("open-task-form");
        formButton.addEventListener('click', openTaskForm)
    }

    const openTaskForm = () => {
        const projectDropDown = document.createElement("select");
        projectDropDown.name = "";
        projectDropDown.id = "";

        for (const project of ProjectList.projects) {
            let option = document.createElement("option");
            option.value = project;
            option.text = `${project.getProjectName()}`;
            projectDropDown.appendChild(option);
        }

        let dropDownLabel = document.createElement("label");
        dropDownLabel.textContent = "Choose Project";
        

        document.querySelector(".form-inputs").appendChild(dropDownLabel).appendChild(projectDropDown);

        const form = document.getElementById("task-form");
        form.style.display = "block";

        const submitFormButton = document.getElementById("task-submit");
        submitFormButton.addEventListener('click', processTaskForm);

        const closeFormButton = document.querySelector(".task-cancel");
        closeFormButton.addEventListener('click', closeTaskForm);
    }

    const closeTaskForm = () => {
        const form = document.getElementById("task-form");
        form.style.display = "none";

        document.querySelector(".form-inputs").lastChild.remove();
    }

    const processTaskForm = (e) => {
        e.preventDefault();

        let taskName = document.getElementById("task-name").value;
        let taskDescription = document.getElementById("task-description").value;
        let taskDueDate = document.getElementById("task-date").value;
        let taskProject = document.getElementById("task-project").value;

        const newTask = Task(taskName, taskDescription, taskDueDate, taskProject, false);
        TaskList.addTask(newTask);

        displayTask(newTask);
        closeTaskForm();
        TaskList.outputTasks();
    }

    return { loadInitialTasks, displayProjectTasks };
})();


export { MainContent };
