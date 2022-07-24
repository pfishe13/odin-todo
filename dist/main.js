(()=>{"use strict";const e=(()=>{let e=[];return{projects:e,addProject:t=>{console.log(`Adding new project: ${t.getProjectName()}`),e.push(t)},removeProject:t=>{const o=e.findIndex((e=>e.getProjectName()===t.getProjectName()));e.splice(o,1)},outputProjects:()=>{let t=0;if(0!==e.length){console.log("Projects: ");for(const o of e)console.log(`${t}) ${o.getProjectName()}`),t++}else console.log("There are 0 projects")}}})(),t=(e,t)=>{let o=e,n=t;return{getProjectName:()=>o,getProjectColor:()=>n}},o=(()=>{const o=()=>{const e=document.getElementById("sidebar");for(;e.firstChild;)e.removeChild(e.firstChild)},n=()=>{const t=document.getElementById("sidebar"),o=document.createElement("button");o.textContent="All Tasks",t.appendChild(o);for(const o of e.projects){const e=document.createElement("button");e.textContent=`${o.getProjectName()}`,e.style.color=`${o.getProjectColor()}`,t.appendChild(e)}c()},c=()=>{const e=document.getElementById("sidebar"),t=document.createElement("button");t.textContent="Create Project",t.addEventListener("click",s),e.appendChild(t)},s=()=>{document.getElementById("project-form").style.display="block",document.getElementById("project-submit").addEventListener("click",r),document.querySelector(".cancel").addEventListener("click",l)},l=()=>{document.getElementById("project-form").style.display="none"},r=c=>{c.preventDefault();let s=document.getElementById("project-name").value,r=document.getElementById("project-color").value;const d=t(s,r);console.log(d.getProjectColor()),e.addProject(d),l(),o(),n()};return{displaySidebar:()=>{o(),n()}}})(),n=(e,t,o,n,c)=>{let s=e,l=t,r=o,d=n,a=Boolean(c);return{getTitle:()=>s,getDescription:()=>l,getDueDate:()=>r,getProject:()=>d,getCompletion:()=>a,toggleTaskCompletion:()=>{a=!a}}},c=(()=>{let e=[];return{addTask:t=>{e.push(t)},removeTask:t=>{const o=e.findIndex((e=>e.getTitle()===t.getTitle()));e.splice(o,1)},outputTasks:()=>{let t=0;if(0!==e.length){console.log("Tasks: ");for(const o of e)console.log(`${t}) ${o.getTitle()}, ${o.getDescription()}`),t++}else console.log("There are 0 tasks")},tasks:e}})(),s=(()=>{const e=e=>{const t=document.getElementById("main-content"),o=document.createElement("div");o.classList.add("task-card"),o.innerHTML=`\n                <h2>${e.getTitle()}</h2>\n                <h3>${e.getDescription()}</h3>\n            `,t.appendChild(o)};return{loadInitialTasks:()=>{for(const t of c.tasks)e(t)}}})();e.outputProjects();const l=t("School","blue");console.log(l);const r=t("Work","white");e.addProject(l),e.addProject(r),e.outputProjects();const d=n("Parker","Fisher","IDK",l,!0),a=n("Anthony","Bishop","IDK",l,!0);c.addTask(d),c.outputTasks(),c.addTask(a),c.outputTasks(),o.displaySidebar(),s.loadInitialTasks()})();