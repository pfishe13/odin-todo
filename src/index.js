import { Sidebar } from "./sidebar";
import { Task } from "./tasks";
import { TaskList } from "./taskList";
import { Project } from "./project";
import { ProjectList } from "./projectList";
import { MainContent } from "./mainContent";



// ProjectList.outputProjects();
// const noProject = Project('No Project', 'white');
// const School = Project('School', '#E74C3C');
// console.log(School);

// const Work = Project("Work", "white");
// localStorage.setItem("work", Work);
// console.log(JSON.parse(localStorage.getItem("work")));
//console.log(Work);
// ProjectList.addProject(noProject);
// ProjectList.addProject(School);
// ProjectList.addProject(Work);

// ProjectList.outputProjects();

// const newTask = Task("Do the dishes", "Clean all the dishes in the sink and dry them", "IDK", School, false);
// const newTask2 = Task("Anthony", "Bishop", "IDK", School, false);
// const newTask3 = Task("Mike", "Burrington", "Date", Work, true);



// TaskList.addTask(newTask);
// TaskList.addTask(newTask2);
// TaskList.addTask(newTask3);

// console.log(typeof(storedProjects));

const noProject = Project('No Project', 'white');
if (ProjectList.projects.length === 0) {
    // ProjectList.addProject(noProject);
}


let defaultProjectList = [];
// defaultProjectList.push(noProject);
let storedProjects = localStorage.getItem("storedProjectList");
storedProjects = JSON.parse(storedProjects || JSON.stringify(defaultProjectList));
// storedProjects = JSON.parse(storedProjects);
// console.log(`Outputtng the stored projects`);
// console.log(storedProjects);
if (storedProjects.length !== 0) {
    for (const storedProject of storedProjects) {
        const newProject = Project(storedProject.name, storedProject.color);
        ProjectList.addProject(newProject);
    }
}



let defaultTaskList = [];
let storedTasks = localStorage.getItem("storedTaskList");
storedTasks = JSON.parse(storedTasks || JSON.stringify(defaultTaskList));
// console.log(storedTasks);
for (const storedTask of storedTasks) {
    // console.log(`Name of the project ${storedTask.project.name}`);
    const projectFound = ProjectList.findProjectGivenName(storedTask.project.name);
    // console.log(`Project found: ${projectFound}`);
    const newTask = Task(storedTask.title, storedTask.desc, storedTask.dueDate, projectFound, storedTask.completion);
    TaskList.addTask(newTask);
}

Sidebar.displaySidebar();
MainContent.loadInitialTasks();

