"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var ToDoList=function(){function t(){var e=this;_classCallCheck(this,t),this.addButton=document.querySelector(".add_btn"),this.inputTitle=document.getElementById("new_title"),this.inputTask=document.getElementById("new_task"),this.inputDate=document.querySelector(".date_field"),this.incompletedTask=document.querySelector(".incompleted_tasks"),this.completedTasks=document.querySelector(".completed_tasks"),this.expiredTask=document.querySelector(".expired_tasks"),this.charCounter=document.querySelector(".char-counter"),this.textCounter=document.querySelector(".text-counter"),this.textArea=document.getElementById("new_title"),this.taskCounter=document.querySelectorAll(".task_counter"),this.calendarBtn=document.querySelector(".date_field_container"),this.addButton.onclick=function(){return e.addTask()},this.calendarBtn.onclick=function(){return e.addCalendar()},this.textArea.oninput=function(){return e.changeTitle()},window.onload=function(){return e.getTaskDate()},setInterval(this.getDate,0),this.removedTask=null,this.dateToday=new Date}return _createClass(t,[{key:"creatureNewItem",value:function(e,t){var n=document.createElement("div");n.classList.add("task_card");var a=document.createElement("input");a.setAttribute("type","checkbox"),a.classList.add("task_counter");var r=document.createElement("div");r.classList.add("block_text_description");var i=document.createElement("textarea");i.setAttribute("type","text"),i.classList.add("input_title"),i.setAttribute("disabled",""),i.innerText=e;var d=document.createElement("textarea");d.setAttribute("type","text"),d.classList.add("input_description"),d.setAttribute("disabled",""),d.innerText=t;var l=document.createElement("div");l.classList.add("date_completion");var c=document.createElement("div");c.classList.add("date_field_container");var o=document.createElement("span");o.classList.add("date_field");var u=document.querySelector(".date_field");u.textContent?(o.innerText=u.textContent,o.classList.add("fulfillment_date")):(o.innerText="Without date",o.classList.add("without_date")),c.style.background="rgba(255, 255, 255, 0.5);";var s=document.createElement("div");s.classList.add("button_item");var m=document.createElement("button");m.classList.add("edit"),m.innerText="edit";var p=document.createElement("button");return p.classList.add("delete","task_counter"),p.innerText="delete",n.appendChild(a),n.appendChild(r),r.appendChild(i),r.appendChild(d),r.appendChild(l),l.appendChild(c),c.appendChild(o),n.appendChild(s),s.appendChild(m),s.appendChild(p),n}},{key:"creatureExpiredItem",value:function(e,t){var n=document.createElement("div");n.classList.add("task_card");var a=document.createElement("input");a.setAttribute("type","checkbox"),a.setAttribute("disabled",""),a.classList.add("task_counter"),a.style.display="none";var r=document.createElement("div");r.classList.add("block_text_description");var i=document.createElement("textarea");i.setAttribute("type","text"),i.classList.add("input_title"),i.setAttribute("disabled",""),i.innerText=e;var d=document.createElement("textarea");d.setAttribute("type","text"),d.classList.add("input_description"),d.setAttribute("disabled",""),d.innerText=t;var l=document.createElement("div");l.classList.add("date_completion");var c=document.createElement("div");c.classList.add("date_field_container");var o=document.createElement("span");o.classList.add("date_field");var u=document.querySelector(".date_field");o.innerText=u.textContent,o.classList.add("fulfillment_date"),c.style.background="rgba(255, 255, 255, 0.5);";var s=document.createElement("div");s.classList.add("button_item");var m=document.createElement("button");m.classList.add("edit"),m.setAttribute("disabled",""),m.innerText="edit",m.style.display="none";var p=document.createElement("button");return p.classList.add("delete","task_counter"),p.innerText="delete",n.appendChild(a),n.appendChild(r),r.appendChild(i),r.appendChild(d),r.appendChild(l),l.appendChild(c),c.appendChild(o),n.appendChild(s),s.appendChild(m),s.appendChild(p),n}},{key:"changeTitle",value:function(){this.charCounter.textContent=this.textArea.value.length,30<this.textArea.value.length?(this.textArea.setAttribute("id","warning"),this.addButton.setAttribute("disabled",""),this.textCounter.classList.add("warning"),this.addButton.classList.add("btn_warning")):(this.textArea.setAttribute("id","new_title"),this.addButton.removeAttribute("disabled",""),this.textCounter.classList.remove("warning"),this.addButton.classList.remove("btn_warning"))}},{key:"addCalendar",value:function(){var e=this,t=document.querySelector(".clendar_container");setTimeout(function(){t.classList.remove("calendar_card"),e.inputTitle.setAttribute("disabled",""),e.inputTitle.style.background="rgba(255, 255, 255, .5)",e.inputTask.setAttribute("disabled",""),e.inputTask.style.background="rgba(255, 255, 255, .5)",e.calendarBtn.style.background="rgba(255, 255, 255, .5)"},100)}},{key:"buttonTaskEvents",value:function(e){var t=this;e.querySelector("button.edit").onclick=function(){return t.changeTask(e)},e.querySelector("button.delete").onclick=function(){t.deleteTask(e),t.itemСounter()},e.querySelector("input[type=checkbox]").onclick=function(){t.completedTask(e),t.itemСounter()}}},{key:"addTask",value:function(){var e=document.querySelector(".date_field"),t=new Date(e.textContent);if(this.inputTask.value&&this.inputTitle.value)if(""==e.textContent){var n=this.creatureNewItem(this.inputTitle.value,this.inputTask.value,this.inputDate.value);this.incompletedTask.appendChild(n),this.buttonTaskEvents(n),this.inputTitle.value="",this.inputTask.value="",this.inputDate.textContent="",this.charCounter.textContent="0",this.itemСounter()}else if(this.dateToday>t){var a=this.creatureExpiredItem(this.inputTitle.value,this.inputTask.value,this.inputDate.value);this.expiredTask.appendChild(a),this.buttonTaskEvents(a),this.inputTitle.value="",this.inputTask.value="",this.inputDate.textContent="",this.charCounter.textContent="0",this.itemСounter()}else{var r=this.creatureNewItem(this.inputTitle.value,this.inputTask.value,this.inputDate.value);this.incompletedTask.appendChild(r),this.buttonTaskEvents(r),this.inputTitle.value="",this.inputTask.value="",this.inputDate.textContent="",this.charCounter.textContent="0",this.itemСounter()}}},{key:"deleteTask",value:function(e){e.parentNode.removeChild(e)}},{key:"changeTask",value:function(e){var t=e.querySelector(".input_title"),n=e.querySelector(".input_description"),a=e.querySelector(".date_field"),r=e.classList.contains("changes"),i=e.querySelector("button.edit");r?(i.innerText="edit",t.setAttribute("disabled",""),t.classList.remove("bg_field"),n.setAttribute("disabled",""),n.classList.remove("bg_field"),a.setAttribute("disabled","")):(i.innerText="save",t.removeAttribute("disabled",""),t.classList.add("bg_field"),n.removeAttribute("disabled",""),n.classList.add("bg_field"),a.removeAttribute("disabled","")),e.classList.toggle("changes")}},{key:"completedTask",value:function(e){var t=this,n=document.querySelector(".completed_tasks");(this.removedTask=e).classList.add("completed"),e.remove(),n.appendChild(e),e.querySelector("input[type=checkbox]").onclick=function(){t.uncompletedTask(e),t.itemСounter()}}},{key:"uncompletedTask",value:function(e){var t=this,n=document.querySelector(".incompleted_tasks");(this.removedTask=e).classList.remove("completed"),e.remove(),n.appendChild(e),e.querySelector("input[type=checkbox]").onclick=function(){t.completedTask(e),t.itemСounter()}}},{key:"expiredTask",value:function(e){var t=document.querySelector(".incompleted_tasks");(this.expiredTask=e).classList.remove("completed"),e.remove(),t.appendChild(e)}},{key:"itemСounter",value:function(){var e=document.querySelector(".incompleted_tasks");document.querySelector(".incomplet_task_counter").textContent=e.childNodes.length-1;var t=document.querySelector(".completed_tasks");document.querySelector(".complet_task_counter").textContent=t.childNodes.length-1;var n=document.querySelector(".expired_tasks");document.querySelector(".expire_task_counter").textContent=n.childNodes.length-1}},{key:"getDate",value:function(){var e=new Date,t=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),n=document.querySelector(".container_date"),a=document.querySelector(".container_time");function r(e){var t=e.toString();return 1==t.length?"0"+t:t}n.innerText=r(e.getDate())+", "+t[e.getMonth()]+", "+e.getFullYear(),a.innerText=r(e.getHours())+":"+r(e.getMinutes())+":"+r(e.getSeconds())}},{key:"getTaskDate",value:function(){var n=this,e=new Date,a=["January","February","March","April","May","June","July","August","September","October","November","December"],L=e.getMonth(),C=e.getFullYear(),t=new Date("1 "+a[L]+" "+C).toDateString().substring(0,3),p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],r=p.indexOf(t),i=new Date(C,L+1,0).getDate(),d=q(r,i),l=document.querySelector(".fa-arrow-right"),c=document.querySelector(".fa-arrow-left");document.querySelector(".calendar_month_year").innerHTML=a[L]+" "+C,document.querySelector(".calendar_dates").appendChild(d);var o=document.querySelectorAll(".date_fields"),u=!0,s=!1,m=void 0;try{for(var v,h=function(){var t=v.value;t.onclick=function(){n.inputDate.innerHTML=t.innerHTML+", "+a[L]+", "+C;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),n.inputTitle.removeAttribute("disabled",""),n.inputTitle.style.background="rgba(255, 255, 255, 1)",n.inputTask.removeAttribute("disabled",""),n.inputTask.style.background="rgba(255, 255, 255, 1)",n.calendarBtn.style.background="rgba(255, 255, 255, 1)"}},y=o[Symbol.iterator]();!(u=(v=y.next()).done);u=!0)h()}catch(e){s=!0,m=e}finally{try{u||null==y.return||y.return()}finally{if(s)throw m}}function q(e,t){for(var n,a=document.createElement("table"),r=document.createElement("tr"),i=0;i<=6;i++){var d=document.createElement("td");d.innerHTML=p[i],r.classList.add("row_fields"),r.appendChild(d)}for(a.appendChild(r),r=document.createElement("tr"),n=0;n<=6&&n!=e;n++){var l=document.createElement("td");l.innerHTML=" ",r.appendChild(l)}for(var c=1;n<=6;n++){var o=document.createElement("td");o.classList.add("date_fields"),o.innerHTML=c,c++,r.appendChild(o)}a.appendChild(r);for(var u=3;u<=7;u++){r=document.createElement("tr");for(var s=0;s<=6;s++){if(t<c)return a.appendChild(r),a;var m=document.createElement("td");m.classList.add("date_fields"),m.innerHTML=c,c++,r.appendChild(m)}a.appendChild(r)}return a}l.addEventListener("click",function(e){11<++L&&(L=0,C++);var n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date("1 "+n[L]+" "+C).toDateString().substring(0,3),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t),r=new Date(C,L+1,0).getDate(),i=q(a,r);q(a,r),document.querySelector(".calendar_month_year").innerHTML=n[L]+" "+C,document.querySelector(".calendar_dates table").remove(),document.querySelector(".calendar_dates").appendChild(i);var d=document.querySelectorAll(".date_fields"),l=document.querySelector(".date_field"),c=document.getElementById("new_title"),o=document.getElementById("new_task"),u=document.querySelector(".date_field_container"),s=!0,m=!1,p=void 0;try{for(var v,h=function(){var t=v.value;t.onclick=function(){l.innerHTML=t.innerHTML+", "+n[L]+", "+C;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),c.removeAttribute("disabled",""),c.style.background="rgba(255, 255, 255, 1)",o.removeAttribute("disabled",""),o.style.background="rgba(255, 255, 255, 1)",u.style.background="rgba(255, 255, 255, 1)"}},y=d[Symbol.iterator]();!(s=(v=y.next()).done);s=!0)h()}catch(e){m=!0,p=e}finally{try{s||null==y.return||y.return()}finally{if(m)throw p}}for(var b=1;b<=r;b++){var f=document.querySelectorAll(".date_fields"),_=!0,k=!1,T=void 0;try{for(var g,S=f[Symbol.iterator]();!(_=(g=S.next()).done);_=!0){var x=g.value;x.innerHTML==(new Date).getDate()&&x.classList.add("today_day_field")}}catch(e){k=!0,T=e}finally{try{_||null==S.return||S.return()}finally{if(k)throw T}}}}),c.addEventListener("click",function(e){--L<0&&(L=11,C--);var n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date("1 "+n[L]+" "+C).toDateString().substring(0,3),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t),r=new Date(C,L+1,0).getDate(),i=q(a,r);document.querySelector(".calendar_month_year").innerHTML=n[L]+" "+C,document.querySelector(".calendar_dates table").remove(),document.querySelector(".calendar_dates").appendChild(i);var d=document.querySelectorAll(".date_fields"),l=document.querySelector(".date_field"),c=document.getElementById("new_title"),o=document.getElementById("new_task"),u=document.querySelector(".date_field_container"),s=!0,m=!1,p=void 0;try{for(var v,h=function(){var t=v.value;t.onclick=function(){l.innerHTML=t.innerHTML+", "+n[L]+", "+C;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),c.removeAttribute("disabled",""),c.style.background="rgba(255, 255, 255, 1)",o.removeAttribute("disabled",""),o.style.background="rgba(255, 255, 255, 1)",u.style.background="rgba(255, 255, 255, 1)"}},y=d[Symbol.iterator]();!(s=(v=y.next()).done);s=!0)h()}catch(e){m=!0,p=e}finally{try{s||null==y.return||y.return()}finally{if(m)throw p}}for(var b=1;b<=r;b++){var f=document.querySelectorAll(".date_fields"),_=!0,k=!1,T=void 0;try{for(var g,S=f[Symbol.iterator]();!(_=(g=S.next()).done);_=!0){var x=g.value;x.innerHTML==(new Date).getDate()&&x.classList.add("today_day_field")}}catch(e){k=!0,T=e}finally{try{_||null==S.return||S.return()}finally{if(k)throw T}}}});for(var b=1;b<=i;b++){var f=document.querySelectorAll(".date_fields"),_=!0,k=!1,T=void 0;try{for(var g,S=f[Symbol.iterator]();!(_=(g=S.next()).done);_=!0){var x=g.value;x.innerHTML==(new Date).getDate()&&x.classList.add("today_day_field")}}catch(e){k=!0,T=e}finally{try{_||null==S.return||S.return()}finally{if(k)throw T}}}}}]),t}(),todolist=new ToDoList,jsTriggers=document.querySelectorAll(".js-tab-trigger"),jsContents=document.querySelectorAll(".js-tab-content");jsTriggers.forEach(function(r){r.addEventListener("click",function(){var e=this.getAttribute("data-tab"),t=document.querySelector('.js-tab-content[data-tab="'+e+'"]'),n=document.querySelector(".js-tab-trigger.active"),a=document.querySelector(".js-tab-content.active");n.classList.remove("active"),r.classList.add("active"),a.classList.remove("active"),t.classList.add("active")})});