import { Project } from "./project";
import { ProjectList } from "./projectList";
import { Sidebar } from "./sidebar";
import { TaskList } from "./taskList";
import { Task } from "./tasks";

const MainContent = (() => {
    const loadInitialTasks = () => {    
        const taskArray = TaskList.getTasks();
        for (const task of taskArray) {
            displayTask(task);
        }
        newTaskButton();
    }

    const displayProjectTasks = (e) => {
        clearMainContent();
        const taskArray = TaskList.getTasks();
        if (e.target.id === 'all') {
            loadInitialTasks();
            return;
        }
        const projectName = e.target.id.replace('-', /\s+/g);
        const projectTasks = taskArray.filter( (task) => {
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
        const idFlag = task.getTitle().replace(/\s+/g, '-');
        // console.log(idFlag);
        const mainContainer = document.getElementById("main-content");
        const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");
            taskCard.innerHTML = `
                <div class="card-left-side">
                    <div>
                        <h2>${task.getTitle()}</h2>
                        <h3>${task.getDescription()}</h3>
                    </div>
                    
                </div>
                <div class="card-right-side">
                    <h3>Project: ${task.getProject().getProjectName()} | Due: ${task.getDueDate()}</h3>
                    <div>
                        <span id="${idFlag}-complete" class="complete-task material-symbols-outlined">
                            done
                        </span>
                        <span id="${idFlag}-edit" class="edit-task material-symbols-outlined">
                            edit_note
                        </span>
                        <span id="${idFlag}-delete" class="delete-task material-symbols-outlined">
                            delete
                        </span>
                    </div>
                </div>
            `;
            mainContainer.appendChild(taskCard);

            const completeButton = document.getElementById(`${idFlag}-complete`);
            completeButton.addEventListener('click', completeTask);

            const editButton = document.getElementById(`${idFlag}-edit`);
            editButton.addEventListener('click', editTask);

            const deleteButton = document.getElementById(`${idFlag}-delete`);
            deleteButton.addEventListener('click', deleteTask);
    }

    const newTaskButton = () => {
        const formButton = document.getElementById("open-task-form");
        formButton.addEventListener('click', openTaskForm)
    }

    const openTaskForm = () => {
        Sidebar.blurBackground();

        const projectDropDown = document.createElement("select");
        projectDropDown.name = "";
        projectDropDown.id = "task-project";

        for (const project of ProjectList.projects) {
            let option = document.createElement("option");
            console.log(project.getProjectName());
            option.value = project.getProjectName();
            option.text = `${project.getProjectName()}`;
            projectDropDown.appendChild(option);
        }

        let dropDownLabel = document.createElement("label");
        dropDownLabel.textContent = "Choose Project";
        const dropDownDiv = document.createElement('div');
        dropDownDiv.appendChild(dropDownLabel);
        dropDownDiv.appendChild(projectDropDown);
        document.querySelector(".form-inputs").appendChild(dropDownDiv);


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
        Sidebar.blurBackground();
    }

    const processTaskForm = (e) => {
        e.preventDefault();

        let taskName = document.getElementById("task-name").value;
        let taskDescription = document.getElementById("task-description").value;
        let taskDueDate = document.getElementById("task-date").value;
        let taskProjectName = document.getElementById("task-project").value;
        const taskProject = ProjectList.getProjects().find(project => project.getProjectName() === taskProjectName);

        const newTask = Task(taskName, taskDescription, taskDueDate, taskProject, false);
        TaskList.addTask(newTask);

        displayTask(newTask);
        closeTaskForm();
    }

    const deleteTask = (e) => {
        clearMainContent();
        const taskName = (e.target.id).split("-");
        taskName.pop();
        const taskNameString = taskName.join(" ");
        TaskList.removeTask(taskNameString);
        loadInitialTasks();
    }

    const editTask = (e) => {
        console.log(e.target.id);
    }

    const completeTask = (e) => {
        console.log(e.target.id);
    }

    return { loadInitialTasks, displayProjectTasks };
})();


export { MainContent };
