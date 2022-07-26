(()=>{"use strict";const e=(()=>{let e=[];return{projects:e,addProject:t=>{console.log(`Adding new project: ${t.getProjectName()}`),e.push(t)},removeProject:t=>{const o=e.findIndex((e=>e.getProjectName()===t.getProjectName()));e.splice(o,1)},outputProjects:()=>{let t=0;if(0!==e.length){console.log("Projects: ");for(const o of e)console.log(`${t}) ${o.getProjectName()}`),t++}else console.log("There are 0 projects")},getProjects:()=>e}})(),t=(e,t)=>{let o=e,n=t;return{getProjectName:()=>o,getProjectColor:()=>n}},o=(()=>{let e=[];return{addTask:t=>{e.push(t)},removeTask:t=>{e=e.filter((e=>e.getTitle()!==t))},outputTasks:()=>{if(0!==e.length)for(let t=0;t<e.length;t++)console.log(`${t}) ${e[t].getTitle()}, ${e[t].getDescription()}, ${e[t].getDueDate()}, ${e[t].getProject().getProjectName()}`);else console.log("There are 0 tasks")},getTasks:()=>e}})(),n=(e,t,o,n,c)=>{let l=e,d=t,s=o,a=n,r=Boolean(c);return{getTitle:()=>l,getDescription:()=>d,getDueDate:()=>s,getProject:()=>a,getCompletion:()=>r,toggleTaskCompletion:()=>{r=!r}}},c=(()=>{const t=()=>{c("All Tasks");const e=o.getTasks();for(const t of e)s(t);a()},c=e=>{const t=document.createElement("h2");t.textContent=e;const o=document.createElement("div");o.classList.add("project-name-container"),o.appendChild(t),document.getElementById("main-content").appendChild(o)},d=()=>{const e=document.getElementById("main-content");for(;e.lastChild;)e.lastChild.remove()},s=e=>{const t=e.getTitle().replace(/\s+/g,"-"),o=document.getElementById("main-content"),n=document.createElement("div");n.classList.add("task-card"),n.innerHTML=`\n                <div class="card-left-side">\n                    <div>\n                        <h2>${e.getTitle()}</h2>\n                        <h3>${e.getDescription()}</h3>\n                    </div>\n                    \n                </div>\n                <div class="card-right-side">\n                    <h3>Project: ${e.getProject().getProjectName()} | Due: ${e.getDueDate()}</h3>\n                    <div>\n                        <span id="${t}-complete" class="complete-task material-symbols-outlined">\n                            done\n                        </span>\n                        <span id="${t}-edit" class="edit-task material-symbols-outlined">\n                            edit_note\n                        </span>\n                        <span id="${t}-delete" class="delete-task material-symbols-outlined">\n                            delete\n                        </span>\n                    </div>\n                </div>\n            `,o.appendChild(n),document.getElementById(`${t}-complete`).addEventListener("click",p),document.getElementById(`${t}-edit`).addEventListener("click",g),document.getElementById(`${t}-delete`).addEventListener("click",u)},a=()=>{document.getElementById("open-task-form").addEventListener("click",r)},r=()=>{l.blurBackground();const t=document.createElement("select");t.name="",t.id="task-project";for(const o of e.projects){let e=document.createElement("option");e.value=o.getProjectName(),e.text=`${o.getProjectName()}`,"No Project"===e.value&&(e.text="No Project Selected",e.hidden=!0),t.appendChild(e)}let o=document.createElement("label");o.textContent="Choose Project";const n=document.createElement("div");n.appendChild(o),n.appendChild(t),document.querySelector(".task-form-inputs").appendChild(n),document.getElementById("task-form").style.display="block",document.getElementById("task-submit").addEventListener("click",m),document.querySelector(".task-cancel").addEventListener("click",i)},i=()=>{document.getElementById("task-form").style.display="none",document.querySelector(".task-form-inputs").lastChild.remove(),l.blurBackground()},m=t=>{t.preventDefault();let c=document.getElementById("task-name").value;if(""===c)return;let l=document.getElementById("task-description").value,d=document.getElementById("task-date").value,a=document.getElementById("task-project").value;console.log(a);let r=e.getProjects().find((e=>e.getProjectName()===a));const m=n(c,l,d,r,!1);o.addTask(m),s(m),i()},u=e=>{d();const n=e.target.id.split("-");n.pop();const c=n.join(" ");o.removeTask(c),t()},g=e=>{console.log(e.target.id)},p=e=>{console.log(e.target.id)};return{loadInitialTasks:t,displayProjectTasks:e=>{d();const n=o.getTasks();if("all"===e.target.id)return void t();const l=e.target.id.replace("-",/\s+/g);c(l);const a=n.filter((e=>e.getProject().getProjectName().toString()===l));for(const e of a)s(e)}}})(),l=(()=>{const o=e=>{const t=document.getElementById("project-buttons"),o=document.createElement("h3");o.innerHTML=`<span class="project-icon material-symbols-outlined">\n            folder\n            </span>${e.getProjectName()}`,o.style.color=`${e.getProjectColor()}`,o.id=`${e.getProjectName().replace(/\s+/g,"-")}`,o.addEventListener("click",c.displayProjectTasks),t.appendChild(o)},n=()=>{document.getElementById("open-project-form").addEventListener("click",l)},l=()=>{document.getElementById("project-form").style.display="block",s(),document.getElementById("project-submit").addEventListener("click",a),document.querySelector(".cancel").addEventListener("click",d)},d=()=>{document.getElementById("project-form").style.display="none",s()},s=()=>{document.querySelector(".blur").classList.toggle("blurred")},a=n=>{n.preventDefault();let c=document.getElementById("project-name").value,l=document.querySelector('input[name="project-color"]:checked').value;const s=t(c,l);console.log(s.getProjectColor()),e.addProject(s),d(),o(s)};return{displaySidebar:()=>{(()=>{const t=document.getElementById("project-buttons"),l=document.createElement("h3");l.innerHTML='<span class="project-icon material-symbols-outlined">\n            folder\n            </span>All Tasks',l.id="all",l.addEventListener("click",c.displayProjectTasks),t.appendChild(l);for(const t of e.projects)o(t);n()})()},blurBackground:s}})(),d=t("No Project","white"),s=t("School","blue"),a=t("Work","white");e.addProject(d),e.addProject(s),e.addProject(a),e.outputProjects();const r=n("Do the dishes","Clean all the dishes in the sink and dry them","IDK",s,!0),i=n("Anthony","Bishop","IDK",s,!0),m=n("Mike","Burrington","Date",a,!0);o.addTask(r),o.addTask(i),o.addTask(m),l.displaySidebar(),c.loadInitialTasks()})();