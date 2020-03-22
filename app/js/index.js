// Tab
let jsTriggers = document.querySelectorAll('.js-tab-trigger');
let jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
       let id = this.getAttribute('data-tab'),
           content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
           activeTrigger = document.querySelector('.js-tab-trigger.active'),
           activeContent = document.querySelector('.js-tab-content.active');
       
       activeTrigger.classList.remove('active');
       trigger.classList.add('active');
       
       activeContent.classList.remove('active');
       content.classList.add('active');
    });
 });
<<<<<<< HEAD
//  Calendar
function Calendar3(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = D.getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        m = document.querySelector('#'+id+' option[value="' + D.getMonth() + '"]'),
        g = document.querySelector('#'+id+' input');
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<tdclass="date_fields">';
    }else{
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today date_field">' + i;
      }else{
        if (  // список официальных праздников
            (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
            (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новий Рік
            ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новий Рік
            (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Різдво
            (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // 8 Березня
            (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // 1 травня
            (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) // День Перемоги
           ) {
          calendar += '<td class="holiday date_fields">' + i;
        }else{
          calendar += '<td class="date_fields">' + i;
        }
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    g.value = D.getFullYear();
    m.selected = true;
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar3("calendar3",new Date().getFullYear(),new Date().getMonth());
    document.querySelector('#calendar3').onchange = function Kalendar3() {
      Calendar3("calendar3",document.querySelector('#calendar3 input').value,parseFloat(document.querySelector('#calendar3 select').options[document.querySelector('#calendar3 select').selectedIndex].value));
    }
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> parent of c09fb1ef... Add new calendar
=======
>>>>>>> parent of c09fb1ef... Add new calendar
=======
>>>>>>> parent of 7ca1e8d3... add calendar
// Add task
class ToDoList{
    constructor (){
        this.addButton = document.querySelector('.add_btn');
        this.inputTitle = document.getElementById('new_title');
        this.inputTask = document.getElementById('new_task');
        this.inputDate = document.querySelector('.date_field');
        this.incompletedTask = document.querySelector('.incompleted_tasks');
        this.charCounter = document.querySelector('.char-counter');
        this.textCounter = document.querySelector('.text-counter');
        this.textArea = document.getElementById('new_title');
        this.taskCounter = document.querySelectorAll('.task_counter');
<<<<<<< HEAD
        this.calendarBtn = document.querySelector('.calendar_btn');
<<<<<<< HEAD
<<<<<<< HEAD
        // this.taskDate = document.querySelectorAll('.date_fields');
=======
        this.taskDate = document.querySelectorAll('.date_fields')
>>>>>>> parent of c09fb1ef... Add new calendar
=======
        this.taskDate = document.querySelectorAll('.date_fields')
>>>>>>> parent of c09fb1ef... Add new calendar

    
        this.addButton.onclick = () =>  this.addTask();
        this.calendarBtn.onclick = () =>  this.addCalendar();
<<<<<<< HEAD
<<<<<<< HEAD
        // this.taskDate.onclick = () =>  this.inputDate();
=======
        this.taskDate.onclick = () =>  this.inputDate();
>>>>>>> parent of c09fb1ef... Add new calendar
=======
        this.taskDate.onclick = () =>  this.inputDate();
>>>>>>> parent of c09fb1ef... Add new calendar
=======
    
        this.addButton.onclick = () =>  this.addTask();
>>>>>>> parent of 7ca1e8d3... add calendar
        this.textArea.oninput = () => this.changeTitle();
        setInterval(this.getDate, 0);
        this.removedTask = null;    
        
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        // this.taskDate.forEach(e => {
        //     e.addEventListener('click', date => {
                
        //     });
        // });     
=======
        console.log(this.taskDate);
        
>>>>>>> parent of c09fb1ef... Add new calendar
=======
        console.log(this.taskDate);
=======
        console.log(this.taskCounter);
>>>>>>> parent of 7ca1e8d3... add calendar
        
>>>>>>> parent of c09fb1ef... Add new calendar
    }
    creatureNewItem(title, task, date){
        let listItem = document.createElement('div');
        listItem.classList.add('task_card');

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('task_counter');
        
        let textDescription = document.createElement('div');
        textDescription.classList.add('block_text_description');
        
        let inputTitle = document.createElement('textarea');
        inputTitle.setAttribute('type', 'text'); 
        inputTitle.classList.add('input_title');
        inputTitle.setAttribute('disabled', ''); 
        inputTitle.innerText = title;
        
        let inputDescription = document.createElement('textarea');
        inputDescription.setAttribute('type', 'text'); 
        inputDescription.classList.add('input_description');
        inputDescription.setAttribute('disabled', ''); 
        inputDescription.innerText = task;

        let dateCompletion = document.createElement('div');
        dateCompletion.classList.add('date_completion');

        let dateField = document.createElement('textarea');
        dateField.setAttribute('type', 'number'); 
        dateField.classList.add('date_field');
        dateField.setAttribute('disabled', '');
        dateField.innerText = date;

        let calendar = document.createElement('div');
        calendar.classList.add('calendar');

        let calendarBtn = document.createElement('button');
        calendarBtn.classList.add('calendar_btn');
        calendarBtn.innerText = 'change date';

        let buttonItem = document.createElement('div');
        buttonItem.classList.add('button_item');

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit');
        buttonEdit.innerText = 'edit';

        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete', 'task_counter');
        buttonDelete.innerText = 'delete';
        
        listItem.appendChild(checkbox);
        listItem.appendChild(textDescription);
        textDescription.appendChild(inputTitle);
        textDescription.appendChild(inputDescription);
        textDescription.appendChild(dateCompletion);
        dateCompletion.appendChild(dateField);
        dateCompletion.appendChild(calendar);
        dateCompletion.appendChild(calendarBtn);
        listItem.appendChild(buttonItem)
        buttonItem.appendChild(buttonEdit);
        buttonItem.appendChild(buttonDelete);
        
        return listItem;   
    }
    
    changeTitle(){
        this.charCounter.textContent = this.textArea.value.length;
        if (this.textArea.value.length > 30) {
            this.textArea.setAttribute("id", "warning");
            this.addButton.setAttribute('disabled', '');
            this.textCounter.classList.add('warning');
            this.addButton.classList.add('btn_warning');
          } else{   
            this.textArea.setAttribute("id", "new_title");
            this.addButton.removeAttribute('disabled', '');
            this.textCounter.classList.remove('warning');
            this.addButton.classList.remove('btn_warning');
          }
    }

    changeСounterTask(){
       console.log('changeСounterTask');
       
    }

    buttonTaskEvents(listItem){ 
        let editButton = listItem.querySelector('button.edit');
        editButton.onclick = () => this.changeTask(listItem);
    
        let deleteButton = listItem.querySelector('button.delete');
        deleteButton.onclick = () => this.deleteTask(listItem); 

        let checkboxOut = listItem.querySelector('input[type=checkbox]');
        checkboxOut.onclick = () => this.completedTask(listItem);

    }
    
    addTask(){
        if(this.inputTask.value && this.inputTitle.value && this.inputDate.value){
            let listItem = this.creatureNewItem(this.inputTitle.value, this.inputTask.value, this.inputDate.value);
            this.incompletedTask.appendChild(listItem);
            this.buttonTaskEvents(listItem); 
            this.inputTitle.value = ''; 
            this.inputTask.value = ''; 
            this.inputDate.value = '';
            this.charCounter.textContent = '1';

        } 
    }
     
    deleteTask(listItem){
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    }
      
    changeTask(listItem){
        let changeTitle = listItem.querySelector('.input_title');
        let changeDescription = listItem.querySelector('.input_description');
        let changeDate = listItem.querySelector('.date_field');
        let containsClass = listItem.classList.contains('changes');
        let editButton = listItem.querySelector('button.edit');
        if(containsClass){
             editButton.innerText = "edit";
             changeTitle.setAttribute('disabled', '');
             changeDescription.setAttribute('disabled', '');
             changeDate.setAttribute('disabled', '');
                
         } else{
            editButton.innerText = "save";
            changeTitle.removeAttribute('disabled', '');
            changeDescription.removeAttribute('disabled', '');
            changeDate.removeAttribute('disabled', '');
         }
         listItem.classList.toggle('changes');
    }
     
    completedTask(listItem){
        let ulCompleted = document.querySelector('.completed_tasks');
        this.removedTask = listItem;
        listItem.classList.add('completed');
        listItem.remove();
        ulCompleted.appendChild(listItem);
         
        let checkboxIn = listItem.querySelector('input[type=checkbox]');
         checkboxIn.onclick = () => this.uncompletedTask(listItem);
        }
    
     uncompletedTask(listItem){
        let ulInCompleted = document.querySelector('.incompleted_tasks');
        this.removedTask = listItem;
        listItem.classList.remove('completed');
        listItem.remove()   
        ulInCompleted.appendChild(listItem); 
    
        let checkboxIn = listItem.querySelector('input[type=checkbox]');
         checkboxIn.onclick = () => this.completedTask(listItem);
    }

    // -------- DATE ----------
    getDate(){
        let d = new Date();
        let month = new Array("January","February","March","April","May","June",
      "July","August","September","October","November","December");
        let datePosition = document.querySelector('.container_date');
        let timePosition = document.querySelector('.container_time');
        datePosition.innerText = (addZero(d.getDate()) + ", " + month[d.getMonth()] + ", " + d.getFullYear());
        timePosition.innerText = (addZero(d.getHours()) + ":" +  addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()));
        function addZero(num) {
            let str = num.toString();
            return str.length == 1? "0" + str : str;
         };
    }
    };

    let todolist = new ToDoList();

    