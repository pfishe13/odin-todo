import { Sidebar } from "./sidebar";
import { Task } from "./tasks";
import { TaskList } from "./taskList";
import { Project } from "./project";
import { ProjectList } from "./projectList";
import { MainContent } from "./mainContent";


// Get projects from local storage
let defaultProjectList = [{name: "No Project", color: "#ffffff"}];
let storedProjects = localStorage.getItem("storedProjectList");
storedProjects = JSON.parse(storedProjects || JSON.stringify(defaultProjectList));
for (const storedProject of storedProjects) {
        const newProject = Project(storedProject.name, storedProject.color);
        ProjectList.addProject(newProject);
}


// Get tasks from local storage
let defaultTaskList = [];
let storedTasks = localStorage.getItem("storedTaskList");
storedTasks = JSON.parse(storedTasks || JSON.stringify(defaultTaskList));
for (const storedTask of storedTasks) {
    const projectFound = ProjectList.findProjectGivenName(storedTask.project.name);
    const newTask = Task(storedTask.title, storedTask.desc, storedTask.dueDate, projectFound, storedTask.completion);
    TaskList.addTask(newTask);
}

Sidebar.displaySidebar();
MainContent.loadInitialTasks();

