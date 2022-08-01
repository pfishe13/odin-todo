(()=>{"use strict";const e=(()=>{let e=[];return{projects:e,addProject:t=>{e.push(t)},removeProject:t=>{const n=e.findIndex((e=>e.getProjectName()===t.getProjectName()));e.splice(n,1)},outputProjects:()=>{let t=0;if(0!==e.length){console.log("Projects: ");for(const n of e)console.log(`${t}) ${n.getProjectName()}`),t++}else console.log("There are 0 projects")},getProjects:()=>e}})(),t=(e,t)=>{let n=e,o=t;return{getProjectName:()=>n,getProjectColor:()=>o}},n=(()=>{let e=[];return{addTask:t=>{e.push(t)},removeTask:t=>{e=e.filter((e=>e.getTitle()!==t))},outputTasks:()=>{if(0!==e.length)for(let t=0;t<e.length;t++)console.log(`${t}) ${e[t].getTitle()}, ${e[t].getDescription()}, ${e[t].getDueDate()}, ${e[t].getProject().getProjectName()}`);else console.log("There are 0 tasks")},getTasks:()=>e}})(),o=(e,t,n,o,c)=>{let l=e,d=t,a=n,s=o,r=Boolean(c);return{getTitle:()=>l,getDescription:()=>d,getDueDate:()=>a,getProject:()=>s,getCompletion:()=>r,toggleTaskCompletion:()=>{r=!r}}},c=(()=>{const t=()=>{c("All Tasks");const e=n.getTasks();for(const t of e)a(t);s()},c=e=>{const t=document.createElement("h2");t.textContent=e;const n=document.createElement("div");n.classList.add("project-name-container"),n.appendChild(t),document.getElementById("main-content").appendChild(n)},d=()=>{const e=document.getElementById("main-content");for(;e.lastChild;)e.lastChild.remove()},a=e=>{const t=e.getTitle().replace(/\s+/g,"-"),n=document.getElementById("main-content"),o=document.createElement("div");o.classList.add("task-card"),o.innerHTML=`\n                <div class="card-left-side">\n                    <div>\n                        <h2>${e.getTitle()}</h2>\n                        <h3>${e.getDescription()}</h3>\n                    </div>\n                    \n                </div>\n                <div class="card-right-side">\n                    <h3>Project: ${e.getProject().getProjectName()} | Due: ${e.getDueDate()}</h3>\n                    <div>\n                        <span id="${t}-complete" class="complete-task material-symbols-outlined">\n                            done\n                        </span>\n                        <span id="${t}-edit" class="edit-task material-symbols-outlined">\n                            edit_note\n                        </span>\n                        <span id="${t}-delete" class="delete-task material-symbols-outlined">\n                            delete\n                        </span>\n                    </div>\n                </div>\n            `,n.appendChild(o),document.getElementById(`${t}-complete`).addEventListener("click",k),document.getElementById(`${t}-edit`).addEventListener("click",p),document.getElementById(`${t}-delete`).addEventListener("click",g)},s=()=>{document.getElementById("open-task-form").addEventListener("click",r)},r=()=>{l.blurBackground();const t=document.createElement("select");t.name="",t.id="task-project";for(const n of e.projects){let e=document.createElement("option");e.value=n.getProjectName(),e.text=`${n.getProjectName()}`,"No Project"===e.value&&(e.text="No Project Selected",e.hidden=!0),t.appendChild(e)}let n=document.createElement("label");n.textContent="Choose Project";const o=document.createElement("div");o.appendChild(n),o.appendChild(t),document.querySelector(".task-form-inputs").appendChild(o),document.getElementById("task-form").style.display="block",document.getElementById("task-submit").addEventListener("click",m),document.querySelector(".task-cancel").addEventListener("click",i)},i=()=>{document.getElementById("task-form").style.display="none",document.querySelector(".task-form-inputs").lastChild.remove(),l.blurBackground()},m=t=>{t.preventDefault();let c=document.getElementById("task-name").value;if(""===c)return;let l=document.getElementById("task-description").value,d=document.getElementById("task-date").value,s=document.getElementById("task-project").value,r=e.getProjects().find((e=>e.getProjectName()===s));const m=o(c,l,d,r,!1);n.addTask(m),a(m),u(),i()},u=()=>{document.getElementById("task-name").value="",document.getElementById("task-description").value="",document.getElementById("task-date").value="",document.getElementById("task-project").value=""},g=e=>{d();const o=e.target.id.split("-");o.pop();const c=o.join(" ");n.removeTask(c),t()},p=e=>{console.log(e.target.id)},k=e=>{console.log(e.target.id)};return{loadInitialTasks:t,displayProjectTasks:e=>{d();const o=n.getTasks();if("all"===e.target.id)return void t();const l=e.target.id.replace("-"," ");console.log(l),c(l);const s=o.filter((e=>e.getProject().getProjectName().toString()===l));for(const e of s)a(e)}}})(),l=(()=>{const n=e=>{const t=document.getElementById("project-buttons"),n=document.createElement("h3");n.innerHTML=`<span class="project-icon material-symbols-outlined">\n            folder\n            </span>${e.getProjectName()}`,n.style.color=`${e.getProjectColor()}`,n.id=`${e.getProjectName().replace(/\s+/g,"-")}`,n.addEventListener("click",c.displayProjectTasks),t.appendChild(n)},o=()=>{document.getElementById("open-project-form").addEventListener("click",l)},l=()=>{document.getElementById("project-form").style.display="block",a(),document.getElementById("project-submit").addEventListener("click",s),document.querySelector(".cancel").addEventListener("click",d)},d=()=>{document.getElementById("project-form").style.display="none",a()},a=()=>{document.querySelector(".blur").classList.toggle("blurred")},s=o=>{o.preventDefault();let c=document.getElementById("project-name").value,l=document.querySelector('input[name="project-color"]:checked').value;const a=t(c,l);console.log(a.getProjectColor()),e.addProject(a),d(),r(),n(a)},r=()=>{document.getElementById("project-name").value="",document.getElementById("radio-white").checked=!0};return{displaySidebar:()=>{(()=>{const t=document.getElementById("project-buttons"),l=document.createElement("h3");l.innerHTML='<span class="project-icon material-symbols-outlined">\n            folder\n            </span>All Tasks',l.id="all",l.addEventListener("click",c.displayProjectTasks),t.appendChild(l);for(const t of e.projects)n(t);o()})()},blurBackground:a}})(),d=t("No Project","white"),a=t("School","blue"),s=t("Work","white");e.addProject(d),e.addProject(a),e.addProject(s);const r=o("Do the dishes","Clean all the dishes in the sink and dry them","IDK",a,!0),i=o("Anthony","Bishop","IDK",a,!0),m=o("Mike","Burrington","Date",s,!0);n.addTask(r),n.addTask(i),n.addTask(m),l.displaySidebar(),c.loadInitialTasks()})();