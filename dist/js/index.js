
class ToDoList{
    constructor (){
        this.addButton = document.querySelector('.add_btn');
        this.inputTask = document.getElementById('new_task');
        this.incompletedTask = document.querySelector('.incompleted_tasks');
        this.addButton.onclick = () => this.addTask();
        setInterval(this.getDate, 0);
        this.removedTask = null;
    }
    creatureNewItem(task){
        let listItem = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        let label = document.createElement('label');
        label.innerText = task;
        let input = document.createElement('input');
        input.setAttribute('type', 'text'); 
        input.setAttribute('disabled', ''); 
        let buttonItem = document.createElement('div');
        buttonItem.classList.add('button_item');
        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit');
        buttonEdit.innerText = 'edit';
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete');
        buttonDelete.innerText = 'delete';
        
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(input);
        listItem.appendChild(buttonItem)
        buttonItem.appendChild(buttonEdit);
        buttonItem.appendChild(buttonDelete);
        
        return listItem;
    };
    
    buttonTaskEvents(listItem){ 
        let editButton = listItem.querySelector('button.edit');
        editButton.onclick = () => this.changeTask(listItem);
    
        let deleteButton = listItem.querySelector('button.delete');
        deleteButton.onclick = () => this.deleteTask(listItem); 
    
        let checkboxOut = listItem.querySelector('input[type=checkbox]');
        checkboxOut.onclick = () => this.completedTask(listItem);
    }
    
    addTask(listItem){
        if(this.inputTask.value){
            let listItem = this.creatureNewItem(this.inputTask.value);
            this.incompletedTask.appendChild(listItem);
            this.buttonTaskEvents (listItem); 
            this.inputTask.value = ''; 
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
        datePosition.innerText = (d.getDate()+ ", " + month[d.getMonth()] + ", " + d.getFullYear());
        timePosition.innerText = (d.getHours() + ":" +  d.getMinutes() + ":" + d.getSeconds());
    }
    }
    let todolist = new ToDoList();