"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var ToDoList=function(){function t(){var e=this;_classCallCheck(this,t),this.windowsContainer=document.querySelector(".container"),this.sectionTabs=document.querySelectorAll(".section_two_tabs"),this.addButton=document.querySelector(".add_btn"),this.inputTitle=document.getElementById("new_title"),this.inputTask=document.getElementById("new_task"),this.inputDate=document.querySelector(".date_field"),this.incompletedTask=document.querySelector(".incompleted_tasks"),this.completedTasks=document.querySelector(".completed_tasks"),this.expiredTask=document.querySelector(".expired_tasks"),this.charCounter=document.querySelector(".char-counter"),this.textCounter=document.querySelector(".text-counter"),this.textArea=document.getElementById("new_title"),this.taskCounter=document.querySelectorAll(".task_counter"),this.calendarBtn=document.querySelector(".date_field_container"),this.addButton.onclick=function(){return e.addTask()},this.calendarBtn.onclick=function(){return e.addCalendar()},this.textArea.oninput=function(){return e.changeTitle()},window.onload=function(){e.getTaskDate(),e.movementMenu()},window.onresize=function(){return e.movementMenu()},setInterval(this.getDate,0),this.removedTask=null,this.dateToday=new Date}return _createClass(t,[{key:"creatureNewItem",value:function(){var e;if(localStorage.getItem("items")){e=JSON.parse(localStorage.getItem("items")),console.log(localStorage);var t=!0,n=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var d=r.value,o=document.createElement("div");o.classList.add("task_card");var l=document.createElement("input");l.setAttribute("type","checkbox"),l.classList.add("task_counter");var s=document.createElement("div");s.classList.add("block_text_description");var c=document.createElement("textarea");c.setAttribute("type","text"),c.classList.add("input_title"),c.setAttribute("disabled",""),c.innerText=d.titleTask;var u=document.createElement("textarea");u.setAttribute("type","text"),u.classList.add("input_description"),u.setAttribute("disabled",""),u.innerText=d.descriptionTask;var m=document.createElement("div");m.classList.add("date_completion");var v=document.createElement("div");v.classList.add("date_field_container");var y=document.createElement("span");y.classList.add("date_field"),document.querySelector(".date_field").textContent?(y.innerText=d.dateTask,y.classList.add("fulfillment_date")):(y.innerText="Without date",y.classList.add("without_date")),v.style.background="rgba(255, 255, 255, 0.5);";var p=document.createElement("div");p.classList.add("button_item");var h=document.createElement("button");h.classList.add("edit"),h.innerText="edit";var b=document.createElement("button");return b.classList.add("delete","task_counter"),b.innerText="delete",o.appendChild(l),o.appendChild(s),s.appendChild(c),s.appendChild(u),s.appendChild(m),m.appendChild(v),v.appendChild(y),o.appendChild(p),p.appendChild(h),p.appendChild(b),o}}catch(e){n=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}else e=[]}},{key:"creatureExpiredItem",value:function(){var e;if(localStorage.getItem("items")){e=JSON.parse(localStorage.getItem("items"));var t=!0,n=!1,a=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var d=r.value,o=document.createElement("div");o.classList.add("task_card");var l=document.createElement("input");l.setAttribute("type","checkbox"),l.setAttribute("disabled",""),l.classList.add("task_counter"),l.style.display="none";var s=document.createElement("div");s.classList.add("block_text_description");var c=document.createElement("textarea");c.setAttribute("type","text"),c.classList.add("input_title"),c.setAttribute("disabled",""),c.innerText=d.titleTask;var u=document.createElement("textarea");u.setAttribute("type","text"),u.classList.add("input_description"),u.setAttribute("disabled",""),u.innerText=d.descriptionTask;var m=document.createElement("div");m.classList.add("date_completion");var v=document.createElement("div");v.classList.add("date_field_container");var y=document.createElement("span");y.classList.add("date_field");document.querySelector(".date_field");y.innerText=d.dateTask,y.classList.add("fulfillment_date"),v.style.background="rgba(255, 255, 255, 0.5);";var p=document.createElement("div");p.classList.add("button_item");var h=document.createElement("button");h.classList.add("edit"),h.setAttribute("disabled",""),h.innerText="edit",h.style.display="none";var b=document.createElement("button");return b.classList.add("delete","task_counter"),b.innerText="delete",o.appendChild(l),o.appendChild(s),s.appendChild(c),s.appendChild(u),s.appendChild(m),m.appendChild(v),v.appendChild(y),o.appendChild(p),p.appendChild(h),p.appendChild(b),o}}catch(e){n=!0,a=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}else e=[]}},{key:"changeTitle",value:function(){this.charCounter.textContent=this.textArea.value.length,30<this.textArea.value.length?(this.textArea.setAttribute("id","warning"),this.addButton.setAttribute("disabled",""),this.textCounter.classList.add("warning"),this.addButton.classList.add("btn_warning")):(this.textArea.setAttribute("id","new_title"),this.addButton.removeAttribute("disabled",""),this.textCounter.classList.remove("warning"),this.addButton.classList.remove("btn_warning"))}},{key:"addCalendar",value:function(){var e=this,t=document.querySelector(".clendar_container");setTimeout(function(){t.classList.remove("calendar_card"),e.inputTitle.setAttribute("disabled",""),e.inputTitle.style.background="rgba(255, 255, 255, .5)",e.inputTask.setAttribute("disabled",""),e.inputTask.style.background="rgba(255, 255, 255, .5)",e.calendarBtn.style.background="rgba(255, 255, 255, .5)",e.addButton.setAttribute("disabled",""),e.addButton.style.background="rgba(199, 3, 3, 0.7)"},100)}},{key:"buttonTaskEvents",value:function(e){var t=this;e.querySelector("button.edit").onclick=function(){return t.changeTask(e)},e.querySelector("button.delete").onclick=function(){t.deleteTask(e),t.itemСounter()},e.querySelector("input[type=checkbox]").onclick=function(){t.completedTask(e),t.itemСounter()}}},{key:"addTask",value:function(){var e=document.querySelector(".date_field"),t=new Date(e.textContent);if(this.inputTask.value&&this.inputTitle.value)if(""==e.textContent){var n={titleTask:this.inputTitle.value,descriptionTask:this.inputTask.value,dateTask:"Without date"},a=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];a.push(n),localStorage.setItem("items",JSON.stringify(a));var r=this.creatureNewItem(a);this.incompletedTask.appendChild(r),this.buttonTaskEvents(r),this.inputTitle.value="",this.inputTask.value="",this.inputDate.textContent="",this.charCounter.textContent="0",this.itemСounter()}else if(this.dateToday>t){var i={titleTask:this.inputTitle.value,descriptionTask:this.inputTask.value,dateTask:e.textContent},d=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];d.push(i),localStorage.setItem("items",JSON.stringify(d));var o=this.creatureNewItem(d);this.expiredTask.appendChild(o),this.buttonTaskEvents(o),this.inputTitle.value="",this.inputTask.value="",this.inputDate.textContent="",this.charCounter.textContent="0",this.itemСounter()}else{var l={titleTask:this.inputTitle.value,descriptionTask:this.inputTask.value,dateTask:e.textContent},s=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];s.push(l),localStorage.setItem("items",JSON.stringify(s));var c=this.creatureNewItem(s);this.incompletedTask.appendChild(c),this.buttonTaskEvents(c),this.inputTitle.value="",this.inputTask.value="",this.inputDate.textContent="",this.charCounter.textContent="0",this.itemСounter()}}},{key:"deleteTask",value:function(e){e.parentNode.removeChild(e)}},{key:"changeTask",value:function(e){var t=e.querySelector(".input_title"),n=e.querySelector(".input_description"),a=e.querySelector(".date_field"),r=e.classList.contains("changes"),i=e.querySelector("button.edit");r?(i.innerText="edit",t.setAttribute("disabled",""),t.classList.remove("bg_field"),n.setAttribute("disabled",""),n.classList.remove("bg_field"),a.setAttribute("disabled","")):(i.innerText="save",t.removeAttribute("disabled",""),t.classList.add("bg_field"),n.removeAttribute("disabled",""),n.classList.add("bg_field"),a.removeAttribute("disabled","")),e.classList.toggle("changes")}},{key:"completedTask",value:function(e){var t=this,n=document.querySelector(".completed_tasks");(this.removedTask=e).classList.add("completed"),e.remove(),n.appendChild(e),e.querySelector("input[type=checkbox]").onclick=function(){t.uncompletedTask(e),t.itemСounter()}}},{key:"uncompletedTask",value:function(e){var t=this,n=document.querySelector(".incompleted_tasks");(this.removedTask=e).classList.remove("completed"),e.remove(),n.appendChild(e),e.querySelector("input[type=checkbox]").onclick=function(){t.completedTask(e),t.itemСounter()}}},{key:"expiredTask",value:function(e){var t=document.querySelector(".incompleted_tasks");(this.expiredTask=e).classList.remove("completed"),e.remove(),t.appendChild(e)}},{key:"itemСounter",value:function(){var e=document.querySelector(".incompleted_tasks");document.querySelector(".incomplet_task_counter").textContent=e.childNodes.length-1;var t=document.querySelector(".completed_tasks");document.querySelector(".complet_task_counter").textContent=t.childNodes.length-1;var n=document.querySelector(".expired_tasks");document.querySelector(".expire_task_counter").textContent=n.childNodes.length-1}},{key:"getDate",value:function(){var e=new Date,t=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),n=document.querySelector(".container_date"),a=document.querySelector(".container_time");function r(e){var t=e.toString();return 1==t.length?"0"+t:t}n.innerText=r(e.getDate())+", "+t[e.getMonth()]+", "+e.getFullYear(),a.innerText=r(e.getHours())+":"+r(e.getMinutes())+":"+r(e.getSeconds())}},{key:"getTaskDate",value:function(){var n=this,e=new Date,a=["January","February","March","April","May","June","July","August","September","October","November","December"],x=e.getMonth(),q=e.getFullYear(),t=new Date("1 "+a[x]+" "+q).toDateString().substring(0,3),v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=v.indexOf(t),i=new Date(q,x+1,0).getDate(),d=w(r,i),o=document.querySelector(".fa-arrow-right"),l=document.querySelector(".fa-arrow-left");document.querySelector(".calendar_month_year").innerHTML=a[x]+" "+q,document.querySelector(".calendar_dates").appendChild(d);var s=document.querySelectorAll(".date_fields"),c=!0,u=!1,m=void 0;try{for(var y,p=function(){var t=y.value;t.onclick=function(){n.inputDate.innerHTML=t.innerHTML+", "+a[x]+", "+q;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),n.inputTitle.removeAttribute("disabled",""),n.inputTitle.style.background="rgba(255, 255, 255, 1)",n.inputTask.removeAttribute("disabled",""),n.inputTask.style.background="rgba(255, 255, 255, 1)",n.calendarBtn.style.background="rgba(255, 255, 255, 1)",n.addButton.removeAttribute("disabled",""),n.addButton.style.background="rgba(255, 255, 255, 1)"}},h=s[Symbol.iterator]();!(c=(y=h.next()).done);c=!0)p()}catch(e){u=!0,m=e}finally{try{c||null==h.return||h.return()}finally{if(u)throw m}}function w(e,t){for(var n,a=document.createElement("table"),r=document.createElement("tr"),i=0;i<=6;i++){var d=document.createElement("td");d.innerHTML=v[i],r.classList.add("row_fields"),r.appendChild(d)}for(a.appendChild(r),r=document.createElement("tr"),n=0;n<=6&&n!=e;n++){var o=document.createElement("td");o.innerHTML=" ",r.appendChild(o)}for(var l=1;n<=6;n++){var s=document.createElement("td");s.classList.add("date_fields"),s.innerHTML=l,l++,r.appendChild(s)}a.appendChild(r);for(var c=3;c<=7;c++){r=document.createElement("tr");for(var u=0;u<=6;u++){if(t<l)return a.appendChild(r),a;var m=document.createElement("td");m.classList.add("date_fields"),m.innerHTML=l,l++,r.appendChild(m)}a.appendChild(r)}return a}o.addEventListener("click",function(e){11<++x&&(x=0,q++);var n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date("1 "+n[x]+" "+q).toDateString().substring(0,3),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t),r=new Date(q,x+1,0).getDate(),i=w(a,r);w(a,r),document.querySelector(".calendar_month_year").innerHTML=n[x]+" "+q,document.querySelector(".calendar_dates table").remove(),document.querySelector(".calendar_dates").appendChild(i);var d=document.querySelectorAll(".date_fields"),o=document.querySelector(".date_field"),l=document.getElementById("new_title"),s=document.getElementById("new_task"),c=document.querySelector(".date_field_container"),u=document.querySelector(".add_btn"),m=!0,v=!1,y=void 0;try{for(var p,h=function(){var t=p.value;t.onclick=function(){o.innerHTML=t.innerHTML+", "+n[x]+", "+q;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),l.removeAttribute("disabled",""),l.style.background="rgba(255, 255, 255, 1)",s.removeAttribute("disabled",""),s.style.background="rgba(255, 255, 255, 1)",c.style.background="rgba(255, 255, 255, 1)",u.removeAttribute("disabled",""),u.style.background="rgba(255, 255, 255, 1)"}},b=d[Symbol.iterator]();!(m=(p=b.next()).done);m=!0)h()}catch(e){v=!0,y=e}finally{try{m||null==b.return||b.return()}finally{if(v)throw y}}for(var f=1;f<=r;f++){var g=document.querySelectorAll(".date_fields"),k=!0,_=!1,T=void 0;try{for(var S,L=g[Symbol.iterator]();!(k=(S=L.next()).done);k=!0){var C=S.value;C.innerHTML==(new Date).getDate()&&C.classList.add("today_day_field")}}catch(e){_=!0,T=e}finally{try{k||null==L.return||L.return()}finally{if(_)throw T}}}}),l.addEventListener("click",function(e){--x<0&&(x=11,q--);var n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date("1 "+n[x]+" "+q).toDateString().substring(0,3),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t),r=new Date(q,x+1,0).getDate(),i=w(a,r);document.querySelector(".calendar_month_year").innerHTML=n[x]+" "+q,document.querySelector(".calendar_dates table").remove(),document.querySelector(".calendar_dates").appendChild(i);var d=document.querySelectorAll(".date_fields"),o=document.querySelector(".date_field"),l=document.getElementById("new_title"),s=document.getElementById("new_task"),c=document.querySelector(".date_field_container"),u=document.querySelector(".add_btn"),m=!0,v=!1,y=void 0;try{for(var p,h=function(){var t=p.value;t.onclick=function(){o.innerHTML=t.innerHTML+", "+n[x]+", "+q;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),l.removeAttribute("disabled",""),l.style.background="rgba(255, 255, 255, 1)",s.removeAttribute("disabled",""),s.style.background="rgba(255, 255, 255, 1)",c.style.background="rgba(255, 255, 255, 1)",u.removeAttribute("disabled",""),u.style.background="rgba(255, 255, 255, 1)"}},b=d[Symbol.iterator]();!(m=(p=b.next()).done);m=!0)h()}catch(e){v=!0,y=e}finally{try{m||null==b.return||b.return()}finally{if(v)throw y}}for(var f=1;f<=r;f++){var g=document.querySelectorAll(".date_fields"),k=!0,_=!1,T=void 0;try{for(var S,L=g[Symbol.iterator]();!(k=(S=L.next()).done);k=!0){var C=S.value;C.innerHTML==(new Date).getDate()&&C.classList.add("today_day_field")}}catch(e){_=!0,T=e}finally{try{k||null==L.return||L.return()}finally{if(_)throw T}}}});for(var b=1;b<=i;b++){var f=document.querySelectorAll(".date_fields"),g=!0,k=!1,_=void 0;try{for(var T,S=f[Symbol.iterator]();!(g=(T=S.next()).done);g=!0){var L=T.value;L.innerHTML==(new Date).getDate()&&L.classList.add("today_day_field")}}catch(e){k=!0,_=e}finally{try{g||null==S.return||S.return()}finally{if(k)throw _}}}}},{key:"movementMenu",value:function(){var t=this;if(document.documentElement.clientWidth<=640){var e=document.querySelector(".fa-arrow-circle-left");this.sectionTabs.forEach(function(e){e.addEventListener("click",function(){t.windowsContainer.classList.add("menu_movement")}),console.log("Go to Dashboard")}),e.onclick=function(){t.windowsContainer.classList.remove("menu_movement"),console.log("Back to Menu")}}this.windowsContainer.classList.remove("menu_movement")}}]),t}(),todolist=new ToDoList,jsTriggers=document.querySelectorAll(".js-tab-trigger"),jsContents=document.querySelectorAll(".js-tab-content");jsTriggers.forEach(function(r){r.addEventListener("click",function(){var e=this.getAttribute("data-tab"),t=document.querySelector('.js-tab-content[data-tab="'+e+'"]'),n=document.querySelector(".js-tab-trigger.active"),a=document.querySelector(".js-tab-content.active");n.classList.remove("active"),r.classList.add("active"),a.classList.remove("active"),t.classList.add("active")})});