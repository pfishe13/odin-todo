import { Sidebar } from "./sidebar";
import { Task } from "./tasks";
import { TaskList } from "./taskList";
import { Project } from "./project";
import { ProjectList } from "./projectList";
import { MainContent } from "./mainContent";

ProjectList.outputProjects();

const School = Project('School', 'blue');
console.log(School);

const Work = Project("Work", "white");

ProjectList.addProject(School);
ProjectList.addProject(Work);

ProjectList.outputProjects();

const newTask = Task("Parker", "Fisher", "IDK", School, true);
const newTask2 = Task("Anthony", "Bishop", "IDK", School, true);


TaskList.addTask(newTask);
TaskList.outputTasks();

TaskList.addTask(newTask2);
TaskList.outputTasks();

Sidebar.displaySidebar();
MainContent.loadInitialTasks();

