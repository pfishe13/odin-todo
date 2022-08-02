import { Project } from "./project";
import { ProjectList } from "./projectList";
import { Sidebar } from "./sidebar";
import { TaskList } from "./taskList";
import { Task } from "./tasks";

const MainContent = (() => {
    const loadInitialTasks = () => {  
        createTaskHeader("All Tasks");
        const taskArray = TaskList.getTasks();
        for (const task of taskArray) {
            displayTask(task);
        }
        newTaskButton();
    }

    const createTaskHeader = (headerTitle) => {
        const headerDivText = document.createElement('h2');
        headerDivText.textContent = headerTitle;
        if (headerTitle !== "All Tasks")
            headerDivText.style.color = `${ProjectList.findProjectColor(headerTitle)}`;
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('project-name-container');
        headerDiv.appendChild(headerDivText);

        if (headerTitle !== "All Tasks" && headerTitle !== "No Project") {
            const deleteProjectButton = document.createElement("span");
            deleteProjectButton.classList.add("delete-task", "material-symbols-outlined");
            deleteProjectButton.id = `${headerTitle.replace(" ","-")}`;
            deleteProjectButton.innerHTML = `delete`;

            deleteProjectButton.addEventListener('click', deleteProject);

            headerDiv.appendChild(deleteProjectButton);
        }

        

        document.getElementById("main-content").appendChild(headerDiv);


    }

    const displayProjectTasks = (e) => {
        clearMainContent();
        const taskArray = TaskList.getTasks();
        if (e.target.id === 'all') {
            loadInitialTasks();
            return;
        }

        const projectName = e.target.id.replace('-', " ");
        // const projectName = e.target.id;
        createTaskHeader(projectName);
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
                    <h3>Project: <span style="color: ${task.getProject().getProjectColor()}">${task.getProject().getProjectName()}</span> | Due: ${task.getDueDate()}</h3>
                    <div>
                        <span id="${idFlag}-complete" class="complete-task material-symbols-outlined">
                            done
                        </span>
                        <!--<span id="${idFlag}-edit" class="edit-task material-symbols-outlined">
                            edit_note
                        </span> -->
                        <span id="${idFlag}-delete" class="delete-task material-symbols-outlined">
                            delete
                        </span>
                    </div>
                </div>
            `;

            if (task.getCompletion() === true) {
                taskCard.classList.add("completed");
            }

            mainContainer.appendChild(taskCard);

            const completeButton = document.getElementById(`${idFlag}-complete`);
            completeButton.addEventListener('click', toggleTaskCompletion);

            // const editButton = document.getElementById(`${idFlag}-edit`);
            // editButton.addEventListener('click', editTask);

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
            // console.log(project.getProjectName());
            option.value = project.getProjectName();
            option.text = `${project.getProjectName()}`;
            if (option.value === "No Project") {
                option.text = "No Project Selected";
                option.hidden = true;
            }
            projectDropDown.appendChild(option);
        }


        let dropDownLabel = document.createElement("label");
        dropDownLabel.textContent = "Choose Project";
        const dropDownDiv = document.createElement('div');
        dropDownDiv.appendChild(dropDownLabel);
        dropDownDiv.appendChild(projectDropDown);
        const formDiv = document.querySelector(".task-form-inputs");
        formDiv.appendChild(dropDownDiv);

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

        resetFormValues();
        document.querySelector(".task-form-inputs").lastChild.remove();
        Sidebar.blurBackground();
    }

    const processTaskForm = (e) => {
        e.preventDefault();

        let taskName = document.getElementById("task-name").value;
        if (taskName === "") {
            return;
        }

        // get task form values
        let taskDescription = document.getElementById("task-description").value;
        let taskDueDate = document.getElementById("task-date").value;
        let taskProjectName = document.getElementById("task-project").value;
        let taskProject = ProjectList.getProjects().find(project => project.getProjectName() === taskProjectName);
        const newTask = Task(taskName, taskDescription, taskDueDate, taskProject, false);
        TaskList.addTask(newTask);

        displayTask(newTask);
        resetFormValues();
        closeTaskForm();
    }

    const resetFormValues = () => {
        document.getElementById("task-name").value = "";
        document.getElementById("task-description").value = "";
        document.getElementById("task-date").value = "";
        document.getElementById("task-project").value = "";
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

    const toggleTaskCompletion = (e) => {
        // console.log(e.target.id);
        const taskName = (e.target.id).split("-");
        taskName.pop();
        const taskNameString = taskName.join(" ");
        TaskList.toggleCompletion(taskNameString);
        clearMainContent();
        loadInitialTasks();

    }

    const deleteProject = (e) => {
        console.log(e.target.id);
        TaskList.deleteTasksGivenProject(ProjectList.findProjectGivenName(e.target.id.replace("-"," ")));
        ProjectList.removeProject(ProjectList.findProjectGivenName(e.target.id.replace("-"," ")));
        clearMainContent();
        loadInitialTasks();
        Sidebar.displaySidebar();
    }

    return { loadInitialTasks, displayProjectTasks };
})();


export { MainContent };
