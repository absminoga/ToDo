"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var ToDoList=function(){function t(){var e=this;_classCallCheck(this,t),this.windowsContainer=document.querySelector(".container"),this.sectionTabs=document.querySelectorAll(".section_two_tabs"),this.addButton=document.querySelector(".add_btn"),this.inputTitle=document.getElementById("new_title"),this.inputTask=document.getElementById("new_task"),this.inputDate=document.querySelector(".date_field"),this.incompletedTask=document.querySelector(".incompleted_tasks"),this.completedTasks=document.querySelector(".completed_tasks"),this.expiredTask=document.querySelector(".expired_tasks"),this.charCounter=document.querySelector(".char-counter"),this.textCounter=document.querySelector(".text-counter"),this.textArea=document.getElementById("new_title"),this.textDescription=document.getElementById("new_task"),this.textDate=document.querySelector(".date_field_container"),this.taskCounter=document.querySelectorAll(".task_counter"),this.calendarBtn=document.querySelector(".date_field_container"),this.textArea.oninput=function(){return e.changeTitle()},this.addButton.onclick=function(){return e.addTask()},this.calendarBtn.onclick=function(){return e.addCalendar()},window.onload=function(){e.getTaskDate(),e.movementMenu(),e.itemСounter(),e.creatureLocalItem()},window.onresize=function(){return e.movementMenu()},setInterval(this.getDate,0),this.removedTask=null,this.index,this.dateToday=new Date}return _createClass(t,[{key:"addTask",value:function(){var e=document.querySelector(".date_field");if(""==this.inputTitle.value||""==this.textDescription.value||""==this.inputDate.textContent)this.taskValidation();else{this.createLocalStorage();var t=this.creatureNewItem(this.inputTitle.value,this.inputTask.value,e.textContent);this.incompletedTask.appendChild(t),this.buttonTaskEvents(t),this.inputTitle.value="",this.textArea.classList.remove("error_Title"),this.inputTask.value="",this.inputDate.textContent="",this.charCounter.textContent="0",this.itemСounter()}}},{key:"creatureNewItem",value:function(e,t,n){var r=document.createElement("div");r.classList.add("task_card");var a=document.createElement("div");a.classList.add("squaredOne");var i=document.createElement("input");i.setAttribute("type","checkbox"),i.setAttribute("value","None"),i.setAttribute("id","squaredOne"),i.setAttribute("name","check"),i.setAttribute("title","Сomplete task");var o=document.createElement("label");o.setAttribute("for","squaredOne"),o.setAttribute("title","Completed task");var l=document.createElement("div");l.classList.add("block_text_description");var d=document.createElement("textarea");d.classList.add("input_title"),d.setAttribute("disabled",""),d.textContent=e;var c=document.createElement("textarea");c.setAttribute("type","text"),c.classList.add("input_description"),c.setAttribute("disabled",""),c.textContent=t;var s=document.createElement("div");s.classList.add("date_completion");var u=document.createElement("div");u.classList.add("date_field_container");var m=document.createElement("span");m.classList.add("date_field");document.querySelector(".date_field");m.innerText=n,m.classList.add("fulfillment_date"),u.style.background="rgba(255, 255, 255, 0.5);";var v=document.createElement("i");v.classList.add("fas","fa-calendar-alt");var y=document.createElement("div");y.classList.add("button_item");var h=document.createElement("button");h.classList.add("edit"),h.innerText="edit";var b=document.createElement("button");return b.classList.add("delete","task_counter"),b.innerText="delete",r.appendChild(a),a.appendChild(i),a.appendChild(o),r.appendChild(l),l.appendChild(d),l.appendChild(c),l.appendChild(s),s.appendChild(u),u.appendChild(m),u.appendChild(v),r.appendChild(y),y.appendChild(h),y.appendChild(b),r}},{key:"buttonTaskEvents",value:function(e){var t=this;e.querySelector("button.edit").onclick=function(){return t.changeTask(e)},e.querySelector("button.delete").onclick=function(){t.deleteTask(e),t.itemСounter()};var n=e.querySelector("input[type=checkbox]"),r=document.querySelector(".date_field"),a=new Date(r.textContent);n.onclick=function(){t.completedTask(e,a),t.itemСounter()}}},{key:"changeTitle",value:function(){this.charCounter.textContent=this.textArea.value.length,console.log(this.textArea.value.length),30<this.textArea.value.length?(this.textArea.setAttribute("id","warning"),this.addButton.setAttribute("disabled",""),this.textCounter.classList.add("warning"),this.addButton.classList.add("btn_warning")):(this.textArea.setAttribute("id","new_title"),this.addButton.removeAttribute("disabled",""),this.textCounter.classList.remove("warning"),this.addButton.classList.remove("btn_warning")),0<this.textArea.value.length&&this.textArea.classList.remove("error_Title")}},{key:"addCalendar",value:function(){var e=this,t=document.querySelector(".clendar_container");setTimeout(function(){t.classList.remove("calendar_card"),e.inputTitle.setAttribute("disabled",""),e.inputTitle.style.background="rgba(255, 255, 255, .5)",e.inputTask.setAttribute("disabled",""),e.inputTask.style.background="rgba(255, 255, 255, .5)",e.calendarBtn.style.background="rgba(255, 255, 255, .5)",e.addButton.setAttribute("disabled",""),e.addButton.style.background="rgba(199, 3, 3, 0.7)"},100)}},{key:"deleteTask",value:function(e){e.parentNode.removeChild(e),this.deletedLocalStorage()}},{key:"changeTask",value:function(e){var t=e.querySelector(".input_title"),n=e.querySelector(".input_description"),r=e.querySelector(".date_field"),a=e.classList.contains("changes"),i=e.querySelector("button.edit"),o=e.querySelector("input[type=checkbox]");a?(i.innerText="edit",t.setAttribute("disabled",""),t.classList.remove("bg_field"),n.setAttribute("disabled",""),n.classList.remove("bg_field"),r.setAttribute("disabled",""),o.removeAttribute("disabled","")):(i.innerText="save",t.removeAttribute("disabled",""),t.classList.add("bg_field"),n.removeAttribute("disabled",""),n.classList.add("bg_field"),r.removeAttribute("disabled",""),o.setAttribute("disabled","")),e.classList.toggle("changes")}},{key:"completedTask",value:function(e){var t=document.querySelector(".fulfillment_date"),n=new Date(t.textContent);if(this.dateToday<=n){var r=document.querySelector(".completed_tasks");(this.removedTask=e).classList.add("completed"),e.remove(),r.appendChild(e),this.itemСounter(),this.hidingItems(e),this.deletedLocalStorage()}else{var a=document.querySelector(".expired_tasks");(this.removedTask=e).remove(),a.appendChild(e),this.itemСounter(),this.hidingItems(e),this.deletedLocalStorage()}}},{key:"hidingItems",value:function(e){e.querySelector("input[type=checkbox]").style.display="none",e.querySelector(".squaredOne").style.display="none",e.querySelector(".edit").style.display="none"}},{key:"createLocalStorage",value:function(){var e=document.querySelector(".date_field");this.index++;var t={count:this.index,titleTask:this.inputTitle.value,descriptionTask:this.inputTask.value,dateTask:e.textContent},n=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];n.push(t),localStorage.setItem("items",JSON.stringify(n))}},{key:"creatureLocalItem",value:function(){var e="items",t=[],n=JSON.stringify(t);if(localStorage.getItem(e)){n=localStorage.getItem(e),t=JSON.parse(n),this.index=t.length-1;var r=!0,a=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var d=o.value,c=this.creatureNewItem(d.titleTask,d.titleTask,d.dateTask,d.count);this.incompletedTask.appendChild(c),this.buttonTaskEvents(c),this.itemСounter()}}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}}else localStorage.setItem(e,n),this.index=0}},{key:"deletedLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("items")),t=e.count;e.splice(t,1),localStorage.setItem("items",JSON.stringify(e))}},{key:"taskValidation",value:function(){var e=this;this.inputTitle.value||this.textArea.classList.add("error_Title"),this.textDescription.value||this.textDescription.classList.add("error_Description"),this.inputDate.textContent.length<1&&this.textDate.classList.add("error_Date"),this.textDescription.oninput=function(){0<e.textDescription.value.length&&e.textDescription.classList.remove("error_Description")}}},{key:"itemСounter",value:function(){var e=document.querySelector(".incompleted_tasks");document.querySelector(".incomplet_task_counter").textContent=e.childNodes.length-1;var t=document.querySelector(".completed_tasks");document.querySelector(".complet_task_counter").textContent=t.childNodes.length-1;var n=document.querySelector(".expired_tasks");document.querySelector(".expire_task_counter").textContent=n.childNodes.length-1}},{key:"getDate",value:function(){var e=new Date,t=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),n=document.querySelector(".container_date"),r=document.querySelector(".container_time");function a(e){var t=e.toString();return 1==t.length?"0"+t:t}return n.innerText=t[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear(),r.innerText=a(e.getHours())+":"+a(e.getMinutes())+":"+a(e.getSeconds()),n.innerText}},{key:"getTaskDate",value:function(){var n=this,e=new Date,r=["January","February","March","April","May","June","July","August","September","October","November","December"],A=e.getMonth(),w=e.getFullYear(),t=new Date("1 "+r[A]+" "+w).toDateString().substring(0,3),v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=v.indexOf(t),i=new Date(w,A+1,0).getDate(),o=C(a,i),l=document.querySelector(".fa-arrow-right"),d=document.querySelector(".fa-arrow-left");document.querySelector(".calendar_month_year").innerHTML=r[A]+" "+w,document.querySelector(".calendar_dates").appendChild(o);var c=document.querySelectorAll(".date_fields"),s=!0,u=!1,m=void 0;try{for(var y,h=function(){var t=y.value;t.onclick=function(){n.inputDate.innerHTML=r[A]+" "+t.innerHTML+", "+w;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),n.inputTitle.removeAttribute("disabled",""),n.inputTitle.style.background="rgba(255, 255, 255, 1)",n.inputTask.removeAttribute("disabled",""),n.inputTask.style.background="rgba(255, 255, 255, 1)",n.calendarBtn.style.background="rgba(255, 255, 255, 1)",n.addButton.removeAttribute("disabled",""),n.addButton.style.background="rgb(101, 118, 218)",n.textDate.classList.remove("error_Date")}},b=c[Symbol.iterator]();!(s=(y=b.next()).done);s=!0)h()}catch(e){u=!0,m=e}finally{try{s||null==b.return||b.return()}finally{if(u)throw m}}function C(e,t){for(var n,r=document.createElement("table"),a=document.createElement("tr"),i=0;i<=6;i++){var o=document.createElement("td");o.innerHTML=v[i],a.classList.add("row_fields"),a.appendChild(o)}for(r.appendChild(a),a=document.createElement("tr"),n=0;n<=6&&n!=e;n++){var l=document.createElement("td");l.innerHTML=" ",a.appendChild(l)}for(var d=1;n<=6;n++){var c=document.createElement("td");c.classList.add("date_fields"),c.innerHTML=d,d++,a.appendChild(c)}r.appendChild(a);for(var s=3;s<=7;s++){a=document.createElement("tr");for(var u=0;u<=6;u++){if(t<d)return r.appendChild(a),r;var m=document.createElement("td");m.classList.add("date_fields"),m.innerHTML=d,d++,a.appendChild(m)}r.appendChild(a)}return r}l.addEventListener("click",function(e){11<++A&&(A=0,w++);var n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date("1 "+n[A]+" "+w).toDateString().substring(0,3),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t),a=new Date(w,A+1,0).getDate(),i=C(r,a),o=document.querySelector(".date_field_container");C(r,a),document.querySelector(".calendar_month_year").innerHTML=n[A]+" "+w,document.querySelector(".calendar_dates table").remove(),document.querySelector(".calendar_dates").appendChild(i);var l=document.querySelectorAll(".date_fields"),d=document.querySelector(".date_field"),c=document.getElementById("new_title"),s=document.getElementById("new_task"),u=document.querySelector(".date_field_container"),m=document.querySelector(".add_btn"),v=!0,y=!1,h=void 0;try{for(var b,f=function(){var t=b.value;t.onclick=function(){d.innerHTML=n[A]+" "+t.innerHTML+", "+w;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),c.removeAttribute("disabled",""),c.style.background="rgba(255, 255, 255, 1)",s.removeAttribute("disabled",""),s.style.background="rgba(255, 255, 255, 1)",u.style.background="rgba(255, 255, 255, 1)",m.removeAttribute("disabled",""),m.style.background="rgb(101, 118, 218)",o.classList.remove("error_Date")}},p=l[Symbol.iterator]();!(v=(b=p.next()).done);v=!0)f()}catch(e){y=!0,h=e}finally{try{v||null==p.return||p.return()}finally{if(y)throw h}}for(var g=1;g<=a;g++){var _=document.querySelectorAll(".date_fields"),S=!0,k=!1,T=void 0;try{for(var L,q=_[Symbol.iterator]();!(S=(L=q.next()).done);S=!0){var x=L.value;x.innerHTML==(new Date).getDate()&&x.classList.add("today_day_field")}}catch(e){k=!0,T=e}finally{try{S||null==q.return||q.return()}finally{if(k)throw T}}}}),d.addEventListener("click",function(e){--A<0&&(A=11,w--);var n=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date("1 "+n[A]+" "+w).toDateString().substring(0,3),r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(t),a=new Date(w,A+1,0).getDate(),i=C(r,a),o=document.querySelector(".date_field_container");document.querySelector(".calendar_month_year").innerHTML=n[A]+" "+w,document.querySelector(".calendar_dates table").remove(),document.querySelector(".calendar_dates").appendChild(i);var l=document.querySelectorAll(".date_fields"),d=document.querySelector(".date_field"),c=document.getElementById("new_title"),s=document.getElementById("new_task"),u=document.querySelector(".date_field_container"),m=document.querySelector(".add_btn"),v=!0,y=!1,h=void 0;try{for(var b,f=function(){var t=b.value;t.onclick=function(){d.innerHTML=n[A]+" "+t.innerHTML+", "+w;var e=document.querySelector(".clendar_container");setTimeout(function(){e.classList.add("calendar_card")},200),c.removeAttribute("disabled",""),c.style.background="rgba(255, 255, 255, 1)",s.removeAttribute("disabled",""),s.style.background="rgba(255, 255, 255, 1)",u.style.background="rgba(255, 255, 255, 1)",m.removeAttribute("disabled",""),m.style.background="rgb(101, 118, 218)",o.classList.remove("error_Date")}},p=l[Symbol.iterator]();!(v=(b=p.next()).done);v=!0)f()}catch(e){y=!0,h=e}finally{try{v||null==p.return||p.return()}finally{if(y)throw h}}for(var g=1;g<=a;g++){var _=document.querySelectorAll(".date_fields"),S=!0,k=!1,T=void 0;try{for(var L,q=_[Symbol.iterator]();!(S=(L=q.next()).done);S=!0){var x=L.value;x.innerHTML==(new Date).getDate()&&x.classList.add("today_day_field")}}catch(e){k=!0,T=e}finally{try{S||null==q.return||q.return()}finally{if(k)throw T}}}});for(var f=1;f<=i;f++){var p=document.querySelectorAll(".date_fields"),g=!0,_=!1,S=void 0;try{for(var k,T=p[Symbol.iterator]();!(g=(k=T.next()).done);g=!0){var L=k.value;L.innerHTML==(new Date).getDate()&&L.classList.add("today_day_field")}}catch(e){_=!0,S=e}finally{try{g||null==T.return||T.return()}finally{if(_)throw S}}}}},{key:"movementMenu",value:function(){var t=this;if(document.documentElement.clientWidth<=640){var e=document.querySelector(".fa-arrow-circle-left");this.sectionTabs.forEach(function(e){e.addEventListener("click",function(){t.windowsContainer.classList.add("menu_movement")})}),e.onclick=function(){t.windowsContainer.classList.remove("menu_movement")}}this.windowsContainer.classList.remove("menu_movement")}}]),t}(),todolist=new ToDoList,jsTriggers=document.querySelectorAll(".js-tab-trigger"),jsContents=document.querySelectorAll(".js-tab-content");jsTriggers.forEach(function(a){a.addEventListener("click",function(){var e=this.getAttribute("data-tab"),t=document.querySelector('.js-tab-content[data-tab="'+e+'"]'),n=document.querySelector(".js-tab-trigger.active"),r=document.querySelector(".js-tab-content.active");n.classList.remove("active"),a.classList.add("active"),r.classList.remove("active"),t.classList.add("active")})}),window.addEventListener("DOMContentLoaded",function(){[].forEach.call(document.querySelectorAll(".carousel"),function(e){var t=e.querySelectorAll("img"),n=t.length,r=n-1,a=e.dataset.pause||5e3;!function e(){t[r].classList.remove("show"),r=++r%n,t[r].classList.add("show"),window.setTimeout(e,a)}()})});