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
 
 const date_picker_element = document.querySelector('.date-picker');
 const selected_date_element = document.querySelector('.date-picker .selected-date');
 const dates_element = document.querySelector('.date-picker .dates');
 const mth_element = document.querySelector('.date-picker .dates .month .mth');
 const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
 const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
 const days_element = document.querySelector('.date-picker .dates .days');
 
 const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

 let date = new Date();
 let day = date.getDate();
 let month = date.getMonth();
 let year = date.getFullYear();
 
 let selectedDate = date;
 let selectedDay = day;
 let selectedMonth = month;
 let selectedYear = year;
 
 mth_element.textContent = months[month] + ' ' + year;
 
 selected_date_element.textContent = formatDate(date);
 selected_date_element.dataset.value = selectedDate;
 
 populateDates();
 
 // EVENT LISTENERS
 date_picker_element.addEventListener('click', toggleDatePicker);
 next_mth_element.addEventListener('click', goToNextMonth);
 prev_mth_element.addEventListener('click', goToPrevMonth);
 
 // FUNCTIONS
 function toggleDatePicker (e) {
     if (!checkEventPathForClass(e.path, 'dates')) {
         dates_element.classList.toggle('active');
     }
 }
 
 function goToNextMonth (e) {
     month++;
     if (month > 11) {
         month = 0;
         year++;
     }
     mth_element.textContent = months[month] + ' ' + year;
     populateDates();
 }
 
 function goToPrevMonth (e) {
     month--;
     if (month < 0) {
         month = 11;
         year--;
     }
     mth_element.textContent = months[month] + ' ' + year;
     populateDates();
 }
 
 function populateDates (e) {
     days_element.innerHTML = '';
     let amount_days = 31;
 
     if (month == 1) {
         amount_days = 28;
     }
 
     for (let i = 0; i < amount_days; i++) {
         const day_element = document.createElement('div');
         day_element.classList.add('day');
         day_element.textContent = i + 1;
 
         if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
             day_element.classList.add('selected');
         }
 
         day_element.addEventListener('click', function () {
             selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
             selectedDay = (i + 1);
             selectedMonth = month;
             selectedYear = year;
 
             selected_date_element.textContent = formatDate(selectedDate);
             selected_date_element.dataset.value = selectedDate;
 
             populateDates();
         });
         days_element.appendChild(day_element);
     }
 }
 
 // HELPER FUNCTIONS
 function checkEventPathForClass (path, selector) {
     for (let i = 0; i < path.length; i++) {
         if (path[i].classList && path[i].classList.contains(selector)) {
             return true;
         }
     }
     return false;
 }
 function formatDate (d) {
     let day = d.getDate();
     if (day < 10) {
         day = '0' + day;
     }
     let year = d.getFullYear();
     return day + ', ' + months[month] + ', ' + year;
 };
 
// Add task
class ToDoList{
    constructor (){
        this.addButton = document.querySelector('.add_btn');
        this.inputTitle = document.getElementById('new_title');
        this.inputTask = document.getElementById('new_task');
        this.inputDate = document.querySelector('.selected-date');
        this.datePosition = document.querySelector('.container_date');
        this.incompletedTask = document.querySelector('.incompleted_tasks');
        this.charCounter = document.querySelector('.char-counter');
        this.textCounter = document.querySelector('.text-counter');
        this.textArea = document.getElementById('new_title');
        this.taskCounter = document.querySelectorAll('.task_counter');
        this.calendarBtn = document.querySelector('.calendar_btn');
    
        this.addButton.onclick = () =>  {
            this.addTask();
            this.expiredTask();
        };
        this.calendarBtn.onclick = () =>  this.addCalendar();
        this.textArea.oninput = () => this.changeTitle();
        
        setInterval(this.getDate, 0);
        this.removedTask = null;    
    }
    // -------- DATE ----------
    getDate(){
        let d = new Date();
        let month = new Array("January","February","March","April","May","June",
      "July","August","September","October","November","December");
        let datePosition = document.querySelector('.container_date');
        let  timePosition = document.querySelector('.container_time');
        datePosition.innerHTML = (addZero(d.getDate()) + ", " + month[d.getMonth()] + ", " + d.getFullYear());
        timePosition.innerHTML = (addZero(d.getHours()) + ":" +  addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()));
        function addZero(num) {
            let str = num.toString();
            return str.length == 1? "0" + str : str;
         };
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

        // let calendarBtn = document.createElement('button');
        // calendarBtn.classList.add('calendar_btn');
        // calendarBtn.innerText = 'change date';

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
        // dateCompletion.appendChild(calendarBtn);
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
    addCalendar(){
        let calendar = document.getElementById('calendar3');
       calendar.classList.toggle('calendar_card'); 
    }

    inputDate(){
        console.log("Input date");
        
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
        if(this.inputTask.value && this.inputTitle.value && this.inputDate.innerHTML){
            let listItem = this.creatureNewItem(this.inputTitle.value, this.inputTask.value, this.inputDate.innerHTML);
            this.incompletedTask.appendChild(listItem);
            this.buttonTaskEvents(listItem); 
            this.inputTitle.value = ''; 
            this.inputTask.value = ''; 
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

    expiredTask(){
        console.log( this.inputDate.innerHTML); 
        console.log(this.datePosition.innerHTML);
    }
   
    };

    let todolist = new ToDoList();

    