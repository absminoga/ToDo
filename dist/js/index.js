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
// Add task
class ToDoList{
    constructor (){
        this.addButton = document.querySelector('.add_btn');
        this.inputTitle = document.getElementById('new_title');
        this.inputTask = document.getElementById('new_task');
        this.inputDate = document.querySelector('.date_field');
        this.incompletedTask = document.querySelector('.incompleted_tasks');
        this.textArea = document.getElementById('new_title');
        this.addButton.onclick = () => this.addTask();
        this.textArea.oninput = ()=> this.changeTitle();
        setInterval(this.getDate, 0);
        this.removedTask = null;
        
    }
    creatureNewItem(title, task, date){
        let listItem = document.createElement('div');
        listItem.classList.add('task_card');

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        
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
        buttonDelete.classList.add('delete');
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
        let charCounter = document.querySelector('.char-counter');
        let textCounter = document.querySelector('.text-counter');
        charCounter.textContent = this.textArea.value.length;
        if (this.textArea.value.length > 30) {
            this.textArea.setAttribute("id", "warning");
            this.addButton.setAttribute('disabled', '');
            textCounter.classList.add('warning');
            this.addButton.classList.add('btn_warning');
          } else{   
            this.textArea.setAttribute("id", "new_title");
            this.addButton.removeAttribute('disabled', '');
            textCounter.classList.remove('warning');
            this.addButton.classList.remove('btn_warning');
          }
    }

    buttonTaskEvents(listItem){ 
        let editButton = listItem.querySelector('button.edit');
        editButton.onclick = () => this.changeTask(listItem);
    
        let deleteButton = listItem.querySelector('button.delete');
        deleteButton.onclick = () => this.deleteTask(listItem); 
    
        let checkboxOut = listItem.querySelector('input[type=checkbox]');
        checkboxOut.onclick = () => this.completedTask(listItem);
    }
    
    addTask(listItem){
        console.log(this.inputDate.value);
        
        if(this.inputTask.value && this.inputTitle.value && this.inputDate.value){
            console.log("Add");
            let listItem = this.creatureNewItem(this.inputTitle.value, this.inputTask.value, this.inputDate.value);
            this.incompletedTask.appendChild(listItem);
            this.buttonTaskEvents (listItem); 
            this.inputTitle.value = ''; 
            this.inputTask.value = ''; 
            this.inputDate.value = '';
        } 
    }
     
    deleteTask(listItem){
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
    }
      
    changeTask(listItem){
        let label = listItem.querySelector('label');
        let input = listItem.querySelector('input[type=text]');
        let containnsClass = listItem.classList.contains('changes');
        let editButton = listItem.querySelector('button.edit');
         if(containnsClass){
             label.innerText = input.value;
             editButton.innerText = "edit";
             input.setAttribute('disabled', '');
                
         } else{
            input.value = label.innerText;
            editButton.innerText = "save";
            input.removeAttribute('disabled', '');
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

    