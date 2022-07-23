import { Task } from "./tasks";
import { TaskList } from "./taskList";
import { Project } from "./project";
import { ProjectList } from "./projectList";

ProjectList.outputProjects();

const School = Project('School', 'blue');
console.log(School);

ProjectList.addProject(School);

ProjectList.outputProjects();


const newTask = Task("Parker", "Fisher", "IDK", School, true);
const newTask2 = Task("Anthony", "Bishop", "IDK", School, true);


TaskList.addTask(newTask);
TaskList.outputTasks();

TaskList.addTask(newTask2);
TaskList.outputTasks();

