(()=>{"use strict";const e=(()=>{let e=[];return{projects:e,addProject:t=>{console.log(`Adding new project: ${t.getProjectName()}`),e.push(t)},removeProject:t=>{const o=e.findIndex((e=>e.getProjectName()===t.getProjectName()));e.splice(o,1)},outputProjects:()=>{let t=0;if(0!==e.length){console.log("Projects: ");for(const o of e)console.log(`${t}) ${o.getProjectName()}`),t++}else console.log("There are 0 projects")}}})(),t=(e,t)=>{let o=e,n=t;return{getProjectName:()=>o,getProjectColor:()=>n}},o=(()=>{let e=[];return{addTask:t=>{e.push(t)},removeTask:t=>{const o=e.findIndex((e=>e.getTitle()===t.getTitle()));e.splice(o,1)},outputTasks:()=>{let t=0;if(0!==e.length){console.log("Tasks: ");for(const o of e)console.log(`${t}) ${o.getTitle()}, ${o.getDescription()}, ${o.getDueDate()}, ${o.getProject().getProjectName()}`),t++}else console.log("There are 0 tasks")},tasks:e}})(),n=(e,t,o,n,c)=>{let l=e,s=t,r=o,a=n,d=Boolean(c);return{getTitle:()=>l,getDescription:()=>s,getDueDate:()=>r,getProject:()=>a,getCompletion:()=>d,toggleTaskCompletion:()=>{d=!d}}},c=(()=>{const t=()=>{for(const e of o.tasks)c(e);l()},c=e=>{const t=document.getElementById("main-content"),o=document.createElement("div");o.classList.add("task-card"),o.innerHTML=`\n                <div class="card-left-side">\n                    <h2>${e.getTitle()}</h2>\n                    <h3>${e.getDescription()}</h3>\n                <div class="card-right-side">\n                    <h3>${e.getDueDate()}</h3>\n                    <h3>${e.getProject().getProjectName()}</h3>\n                </div>\n            `,t.appendChild(o)},l=()=>{document.getElementById("open-task-form").addEventListener("click",s)},s=()=>{const t=document.createElement("select");t.name="",t.id="";for(const o of e.projects){let e=document.createElement("option");e.value=o,e.text=`${o.getProjectName()}`,t.appendChild(e)}let o=document.createElement("label");o.textContent="Choose Project",document.querySelector(".form-inputs").appendChild(o).appendChild(t),document.getElementById("task-form").style.display="block",document.getElementById("task-submit").addEventListener("click",a),document.querySelector(".task-cancel").addEventListener("click",r)},r=()=>{document.getElementById("task-form").style.display="none",document.querySelector(".form-inputs").lastChild.remove()},a=e=>{e.preventDefault();let t=document.getElementById("task-name").value,l=document.getElementById("task-description").value,s=document.getElementById("task-date").value,a=document.getElementById("task-project").value;const d=n(t,l,s,a,!1);o.addTask(d),c(d),r(),o.outputTasks()};return{loadInitialTasks:t,displayProjectTasks:e=>{if((()=>{const e=document.getElementById("main-content");for(;e.lastChild;)e.lastChild.remove()})(),"all"===e.target.id)return void t();const n=e.target.id.replace("-",/\s+/g),l=o.tasks.filter((e=>e.getProject().getProjectName().toString()===n));for(const e of l)c(e)}}})(),l=(()=>{const o=e=>{const t=document.getElementById("project-buttons"),o=document.createElement("h3");o.innerHTML=`<span class="project-icon material-symbols-outlined">\n            folder\n            </span>${e.getProjectName()}`,o.style.color=`${e.getProjectColor()}`,o.id=`${e.getProjectName().replace(/\s+/g,"-")}`,o.addEventListener("click",c.displayProjectTasks),t.appendChild(o)},n=()=>{document.getElementById("open-project-form").addEventListener("click",l)},l=()=>{document.getElementById("project-form").style.display="block",document.getElementById("project-submit").addEventListener("click",r),document.querySelector(".cancel").addEventListener("click",s)},s=()=>{document.getElementById("project-form").style.display="none"},r=n=>{n.preventDefault();let c=document.getElementById("project-name").value,l=document.getElementById("project-color").value;const r=t(c,l);console.log(r.getProjectColor()),e.addProject(r),s(),o(r)};return{displaySidebar:()=>{(()=>{const t=document.getElementById("project-buttons"),l=document.createElement("h3");l.innerHTML='<span class="project-icon material-symbols-outlined">\n            folder\n            </span>All Tasks',l.id="all",l.addEventListener("click",c.displayProjectTasks),t.appendChild(l);for(const t of e.projects)o(t);n()})()}}})();e.outputProjects();const s=t("School","blue");console.log(s);const r=t("Work","white");e.addProject(s),e.addProject(r),e.outputProjects();const a=n("Parker","Fisher","IDK",s,!0),d=n("Anthony","Bishop","IDK",s,!0),i=n("Mike","Burrington","Date",r,!0);o.addTask(a),o.addTask(d),o.addTask(i),l.displaySidebar(),c.loadInitialTasks()})();