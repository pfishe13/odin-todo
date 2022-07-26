import { Sidebar } from "./sidebar";
import { Task } from "./tasks";
import { TaskList } from "./taskList";
import { Project } from "./project";
import { ProjectList } from "./projectList";
import { MainContent } from "./mainContent";

// ProjectList.outputProjects();
const noProject = Project('No Project', 'white');
const School = Project('School', 'blue');
// console.log(School);

const Work = Project("Work", "white");

ProjectList.addProject(noProject);
ProjectList.addProject(School);
ProjectList.addProject(Work);

// ProjectList.outputProjects();

const newTask = Task("Do the dishes", "Clean all the dishes in the sink and dry them", "IDK", School, true);
const newTask2 = Task("Anthony", "Bishop", "IDK", School, true);
const newTask3 = Task("Mike", "Burrington", "Date", Work, true);


TaskList.addTask(newTask);
TaskList.addTask(newTask2);
TaskList.addTask(newTask3);


Sidebar.displaySidebar();
MainContent.loadInitialTasks();

