import { ProjectList } from "./projectList"


const Sidebar = (() => {
    const displaySidebar = () => {
        const sidebarElement = document.getElementById("sidebar");
        clearSidebar(sidebarElement);
        displayProjectButtons(sidebarElement);
    }

    const clearSidebar = (sidebar) => {
        while(sidebar.firstChild) {
            console.log("clear");
            sidebar.removeChild(sidebar.firstChild);
        }
    }

    const displayProjectButtons = (sidebar) => {
        const projectButton = document.createElement('button');
            projectButton.textContent = `All Tasks`;
            sidebar.appendChild(projectButton);
        for (const project of ProjectList.projects) {
            const projectButton = document.createElement('button');
            projectButton.textContent = `${project.getProjectName()}`;
            projectButton.addEventListener('click', displayTasks); // left off here, need to create a new file for mainContent display and implement displayTasks
            sidebar.appendChild(projectButton);
        }
    }

    return { displaySidebar };
})();


export { Sidebar };