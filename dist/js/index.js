//  --------- Class Add task -------------- 
class ToDoList {
    constructor() {
        this.windowsContainer = document.querySelector('.container');
        this.sectionTabs = document.querySelectorAll('.section_two_tabs')
        this.addButton = document.querySelector('.add_btn');
        this.inputTitle = document.getElementById('new_title');
        this.inputTask = document.getElementById('new_task');
        this.inputDate = document.querySelector('.date_field');
        this.incompletedTask = document.querySelector('.incompleted_tasks');
        this.completedTasks = document.querySelector('.completed_tasks');
        this.expiredTask = document.querySelector('.expired_tasks');
        this.charCounter = document.querySelector('.char-counter');
        this.textCounter = document.querySelector('.text-counter');
        this.textArea = document.getElementById('new_title');
        this.textDescription = document.getElementById('new_task');
        this.textDate = document.querySelector('.date_field_container');

        this.taskCounter = document.querySelectorAll('.task_counter');
        this.calendarBtn = document.querySelector('.date_field_container');
        
        this.addButton.onclick = () => this.addTask();
        this.calendarBtn.onclick = () => this.addCalendar();
       
        this.textArea.oninput = () => this.changeTitle();

        window.onload = () => {
            this.getTaskDate();
            this.movementMenu();
            this.itemСounter();
            this.creatureLocalItem();
        };
        window.onresize = () => this.movementMenu();

        setInterval(this.getDate, 0);
        this.removedTask = null;
        this.index;
        this.dateToday = new Date();
    }

    // -------------- Event classes -----------
    addTask() {
        let inputDate = document.querySelector('.date_field');
        if (this.inputTitle.value == '' || this.textDescription.value == '' || this.inputDate.textContent == '') {
            this.taskValidation();
        } else {
            //-------------------------    Сreate an array for Local Storage --------------------
            this.createLocalStorage();
            let listItem = this.creatureNewItem(this.inputTitle.value, this.inputTask.value, inputDate.textContent);
            this.incompletedTask.appendChild(listItem);
            this.buttonTaskEvents(listItem);
            this.inputTitle.value = '';
            this.textArea.classList.remove('error_Title');
            this.inputTask.value = '';
            this.inputDate.textContent = '';
            this.charCounter.textContent = '0';
            this.itemСounter();
        }
    }
    // -------------------- Creatur New Task - JS-HTML
    creatureNewItem(title, task, date) {
        let listItem = document.createElement('div');
        listItem.classList.add('task_card');

        let squaredOne = document.createElement('div');
        squaredOne.classList.add('squaredOne');

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('task_counter');

        let textDescription = document.createElement('div');
        textDescription.classList.add('block_text_description');

        let inputTitle = document.createElement('textarea');
        inputTitle.classList.add('input_title');
        inputTitle.setAttribute('disabled', '');
        inputTitle.textContent = title;

        let inputDescription = document.createElement('textarea');
        inputDescription.setAttribute('type', 'text');
        inputDescription.classList.add('input_description');
        inputDescription.setAttribute('disabled', '');
        inputDescription.textContent = task;

        let dateCompletion = document.createElement('div');
        dateCompletion.classList.add('date_completion');

        let dateFieldContainer = document.createElement('div');
        dateFieldContainer.classList.add('date_field_container');

        let dateField = document.createElement('span');
        dateField.classList.add('date_field');
        dateField.innerText = date;
        dateField.classList.add('fulfillment_date');
        dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';

        let calendarLogo = document.createElement('i');
        calendarLogo.classList.add('fas', 'fa-calendar-alt');

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
        dateCompletion.appendChild(dateFieldContainer);
        dateFieldContainer.appendChild(dateField);
        dateFieldContainer.appendChild(calendarLogo);
        listItem.appendChild(buttonItem)
        buttonItem.appendChild(buttonEdit);
        buttonItem.appendChild(buttonDelete);
        return listItem;
    }

    // ------------------ Events when clicking on hemp tasks --------------------
    buttonTaskEvents(listItem) {

        let editButton = listItem.querySelector('button.edit');
        editButton.onclick = () => this.changeTask(listItem);

        let deleteButton = listItem.querySelector('button.delete');
        deleteButton.onclick = () => {
            this.deleteTask(listItem);
            this.itemСounter();
        };

        let checkbox = listItem.querySelector('input[type=checkbox]');
        let inputDate = document.querySelector('.date_field');
        let dateTask = new Date(inputDate.textContent); 
        checkbox.onclick = () => {
            this.completedTask(listItem, dateTask);
            this.itemСounter();
        }
    }
    // --------------------  Control change the name of the task ---------
    changeTitle() {
        this.charCounter.textContent = this.textArea.value.length;
        if (this.textArea.value.length > 30) {
            this.textArea.setAttribute("id", "warning");
            this.addButton.setAttribute('disabled', '');
            
            this.textCounter.classList.add('warning');
            this.addButton.classList.add('btn_warning');
        } else {
            this.textArea.setAttribute("id", "new_title");
            this.addButton.removeAttribute('disabled', '');
            this.textCounter.classList.remove('warning');
            this.addButton.classList.remove('btn_warning');
        }
        if (this.textArea.value.length > 0) {
            this.textArea.classList.remove('error_Title');
        }
    }

    addCalendar() {
        let calendar = document.querySelector('.clendar_container');
        setTimeout(() => {
            calendar.classList.remove('calendar_card');
            this.inputTitle.setAttribute('disabled', '');
            this.inputTitle.style.background = 'rgba(255, 255, 255, .5)';
            this.inputTask.setAttribute('disabled', '');
            this.inputTask.style.background = 'rgba(255, 255, 255, .5)';
            this.calendarBtn.style.background = 'rgba(255, 255, 255, .5)';
            this.addButton.setAttribute('disabled', '');
            this.addButton.style.background = 'rgba(199, 3, 3, 0.7)';
        }, 100);
    }

    //--------------- Delete tasks --------------------------
    deleteTask(listItem) {
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
        this.deletedLocalStorage();
    }

    //--------------- Change incomplet tasks --------------------------
    changeTask(listItem) {
        let changeTitle = listItem.querySelector('.input_title');
        let changeDescription = listItem.querySelector('.input_description');
        let changeDate = listItem.querySelector('.date_field');
        let containsClass = listItem.classList.contains('changes');
        let editButton = listItem.querySelector('button.edit');
        let deleteButton = listItem.querySelector('button.delete');
        let checkbox = listItem.querySelector('input[type=checkbox]');
        if (containsClass) {
            editButton.innerText = "edit";
            editButton.classList.remove('edit_change')
            changeTitle.setAttribute('disabled', '');
            changeTitle.classList.remove('bg_field');
            changeDescription.setAttribute('disabled', '');
            changeDescription.classList.remove('bg_field');
            changeDate.setAttribute('disabled', '');
            checkbox.removeAttribute('disabled', '');
            deleteButton.removeAttribute('disabled', '');
        } else {
            editButton.innerText = "save";
            editButton.classList.add('edit_change')
            changeTitle.removeAttribute('disabled', '');
            changeTitle.classList.add('bg_field');
            changeDescription.removeAttribute('disabled', '');
            changeDescription.classList.add('bg_field');
            changeDate.removeAttribute('disabled', '');
            checkbox.setAttribute('disabled', '');
            deleteButton.setAttribute('disabled', '');
        }
        listItem.classList.toggle('changes');
    }

    completedTask(listItem, dateTask) {
        if (this.dateToday <= dateTask) { 
            console.log(dateTask);     
            let ulCompleted = document.querySelector('.completed_tasks');
            this.removedTask = listItem;
            listItem.classList.add('completed');
            listItem.remove();
            ulCompleted.appendChild(listItem);
            this.itemСounter();
            this.hidingItems(listItem);
            this.deletedLocalStorage();  
        } else {
            let ulExpired = document.querySelector('.expired_tasks');
            console.log(dateTask);
            this.removedTask = listItem;
            listItem.remove()
            ulExpired.appendChild(listItem);
            this.itemСounter();
            this.hidingItems(listItem);
            this.deletedLocalStorage();
        }
    }

    hidingItems(listItem) {
        let checkboxIn = listItem.querySelector('input[type=checkbox]');
        checkboxIn.style.display = 'none';
        let btnEdit = listItem.querySelector(".edit")
        btnEdit.style.display = 'none';
    }

    // ------------------------   Create Local Storage ------------------------
    createLocalStorage() {
        let inputDate = document.querySelector('.date_field');
        this.index++
        let localTask = {
            count: this.index,
            titleTask: this.inputTitle.value,
            descriptionTask: this.inputTask.value,
            dateTask: inputDate.textContent
        }
        // ------------------------    Adding Items to Local Storage ------------------------
        let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
        itemsArray.push(localTask);
        localStorage.setItem('items', JSON.stringify(itemsArray));
    }

    // -------------------- Creatur New Task - localStorage ------------------
    creatureLocalItem() {
        let localStorageName = 'items';
        let toDoList = [];
        let toDoListJson = JSON.stringify(toDoList);

        if (!localStorage.getItem(localStorageName)) {
            localStorage.setItem(localStorageName, toDoListJson);
            this.index = 0;
        } else {
            toDoListJson = localStorage.getItem(localStorageName);
            toDoList = JSON.parse(toDoListJson);
            this.index = toDoList.length - 1;

            for (let item of toDoList) {
                let listItem = this.creatureNewItem(item.titleTask, item.titleTask, item.dateTask, item.count);
                this.incompletedTask.appendChild(listItem);
                this.buttonTaskEvents(listItem);
                this.itemСounter();
            }
        }
    }

    deletedLocalStorage() {
        let items = JSON.parse(localStorage.getItem('items'));
        let item = items.count;
        items.splice(item, 1);
        localStorage.setItem('items', JSON.stringify(items));
    }

    // ------------------ Validation of task input fields ------------
    taskValidation() {
        if (!this.inputTitle.value) {
            this.textArea.classList.add('error_Title');
        };
        if (!this.textDescription.value) {
            this.textDescription.classList.add('error_Description');
        };
        if (this.inputDate.textContent.length < 1) {
            this.textDate.classList.add('error_Date');
        };
        this.textDescription.oninput = () => {
            if (this.textDescription.value.length > 0) {
                this.textDescription.classList.remove('error_Description');
            }
        };
    }

    // ------------ Task counter ---------------
    itemСounter() {
        let incompletetTask = document.querySelector('.incompleted_tasks');
        let incompledCounter = document.querySelector('.incomplet_task_counter');
        incompledCounter.textContent = incompletetTask.childNodes.length - 1;

        let completedTask = document.querySelector('.completed_tasks');
        let compledCounter = document.querySelector('.complet_task_counter');
        compledCounter.textContent = completedTask.childNodes.length - 1;

        let expiredTask = document.querySelector('.expired_tasks');
        let expiredCounter = document.querySelector('.expire_task_counter');
        expiredCounter.textContent = expiredTask.childNodes.length - 1;
    }

    // -------- Date related classes ----------
    getDate() {
        let d = new Date();
        let month = new Array("January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December");
        let datePosition = document.querySelector('.container_date');
        let timePosition = document.querySelector('.container_time');
        datePosition.innerText = (month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear());
        timePosition.innerText = (addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()));
        function addZero(num) {
            let str = num.toString();
            return str.length == 1 ? "0" + str : str;
        };
        return datePosition.innerText;
    }
    // ---------- Add calendar -------------
    getTaskDate() {
        let d = new Date();
        let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = d.getMonth();
        let year = d.getFullYear();
        let first_date = 1 + ' ' + month_name[month] + ' ' + year;  // Определяем первый день текущего месяца
        let tmp = new Date(first_date).toDateString(); // Возвращаем дату в формате: Wed Jul 28 1993
        let first_day = tmp.substring(0, 3); // Обрезаем строку : Wed Jul 28 1993 - до третего символа: Wed
        let day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day_number = day_name.indexOf(first_day); // Возвращаем индекс первого дня недели
        let days = new Date(year, month + 1, 0).getDate(); // Узнаем сколько дней в текущем месяце. "0" - пишем для перевода на последний день месяца 
        let calendar = getCalendar(day_number, days);
        let next_mth_element = document.querySelector('.fa-arrow-right');
        let prev_mth_element = document.querySelector('.fa-arrow-left');
        document.querySelector('.calendar_month_year').innerHTML = month_name[month] + ' ' + year;
        document.querySelector('.calendar_dates').appendChild(calendar);

        let taskDate = document.querySelectorAll('.date_fields');
        for (let element of taskDate) {
            element.onclick = () => {
                this.inputDate.innerHTML = month_name[month] + ' ' + element.innerHTML + ', ' + year;

                let calendar = document.querySelector('.clendar_container');
                setTimeout(() => {
                    calendar.classList.add('calendar_card');
                }, 200);
                this.inputTitle.removeAttribute('disabled', '');
                this.inputTitle.style.background = 'rgba(255, 255, 255, 1)';
                this.inputTask.removeAttribute('disabled', '');
                this.inputTask.style.background = 'rgba(255, 255, 255, 1)';
                this.calendarBtn.style.background = 'rgba(255, 255, 255, 1)';
                this.addButton.removeAttribute('disabled', '');
                this.addButton.style.background = 'rgb(101, 118, 218)';
                this.textDate.classList.remove('error_Date');
            }
        }

        next_mth_element.addEventListener('click', goToNextMonth);
        prev_mth_element.addEventListener('click', goToPrevMonth);

        function getCalendar(day_number, days) {
            let table = document.createElement('table');
            let tr = document.createElement('tr');

            //Создаем первую строку таблицы 
            for (let c = 0; c <= 6; c++) {
                let td = document.createElement('td');
                td.innerHTML = day_name[c];
                tr.classList.add("row_fields");
                tr.appendChild(td);
            }
            table.appendChild(tr);
            // Создаем вторую строку таблицы - пустые елементы
            tr = document.createElement('tr');
            let c;
            for (c = 0; c <= 6; c++) {
                if (c == day_number) {
                    break;
                }
                let td = document.createElement('td');
                td.innerHTML = " ";
                tr.appendChild(td);
            }

            let count = 1;
            for (; c <= 6; c++) {
                let td = document.createElement('td');
                td.classList.add("date_fields");
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);

            for (let r = 3; r <= 7; r++) {
                tr = document.createElement('tr');
                for (let c = 0; c <= 6; c++) {
                    if (count > days) {
                        table.appendChild(tr);
                        return table;
                    }
                    let td = document.createElement('td');
                    td.classList.add("date_fields");
                    td.innerHTML = count;
                    count++;
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            return table;
        };
        // Дабовляем класс для сегоднешнего дня
        for (let i = 1; i <= days; i++) {
            let tdFields = document.querySelectorAll('.date_fields');
            for (let tdField of tdFields) {
                if (tdField.innerHTML == new Date().getDate()) {
                    tdField.classList.add('today_day_field');
                }
            }
        }

        function goToNextMonth(e) {
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
            let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let first_date = 1 + ' ' + month_name[month] + ' ' + year;  // Определяем первый день текущего месяца
            let tmp = new Date(first_date).toDateString(); // Возвращаем дату в формате: Wed Jul 28 1993
            let first_day = tmp.substring(0, 3); // Обрезаем строку : Wed Jul 28 1993 - до третего символа: Wed
            let day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let day_number = day_name.indexOf(first_day); // Возвращаем индекс дня недели
            let days = new Date(year, month + 1, 0).getDate();
            let calendar = getCalendar(day_number, days);
            let textDate = document.querySelector('.date_field_container');
            getCalendar(day_number, days);
            document.querySelector('.calendar_month_year').innerHTML = month_name[month] + ' ' + year;
            document.querySelector('.calendar_dates table').remove();
            document.querySelector('.calendar_dates').appendChild(calendar);

            let taskDate = document.querySelectorAll('.date_fields');
            let inputDate = document.querySelector('.date_field');
            let inputTitle = document.getElementById('new_title');
            let inputTask = document.getElementById('new_task');
            let calendarBtn = document.querySelector('.date_field_container');
            let addButton = document.querySelector('.add_btn');

            for (let element of taskDate) {
                element.onclick = () => {
                    inputDate.innerHTML = month_name[month] + ' ' + element.innerHTML + ', ' + year;

                    let calendar = document.querySelector('.clendar_container');
                    setTimeout(() => {
                        calendar.classList.add('calendar_card');
                    }, 200);
                    inputTitle.removeAttribute('disabled', '');
                    inputTitle.style.background = 'rgba(255, 255, 255, 1)';
                    inputTask.removeAttribute('disabled', '');
                    inputTask.style.background = 'rgba(255, 255, 255, 1)';
                    calendarBtn.style.background = 'rgba(255, 255, 255, 1)';
                    addButton.removeAttribute('disabled', '');
                    addButton.style.background = 'rgb(101, 118, 218)';
                    textDate.classList.remove('error_Date');
                }
            }

            for (let i = 1; i <= days; i++) {
                let tdFields = document.querySelectorAll('.date_fields');
                for (let tdField of tdFields) {
                    if (tdField.innerHTML == new Date().getDate()) {
                        tdField.classList.add('today_day_field');
                    }
                }
            }
        };
        function goToPrevMonth(e) {
            month--;
            if (month < 0) {
                month = 11;
                year--;
            }
            let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let first_date = 1 + ' ' + month_name[month] + ' ' + year;  // Определяем первый день текущего месяца
            let tmp = new Date(first_date).toDateString(); // Возвращаем дату в формате: Wed Jul 28 1993
            let first_day = tmp.substring(0, 3); // Обрезаем строку : Wed Jul 28 1993 - до третего символа: Wed
            let day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let day_number = day_name.indexOf(first_day); // Возвращаем индекс дня недели
            let days = new Date(year, month + 1, 0).getDate();
            let calendar = getCalendar(day_number, days);
            let textDate = document.querySelector('.date_field_container');
            document.querySelector('.calendar_month_year').innerHTML = month_name[month] + ' ' + year;
            document.querySelector('.calendar_dates table').remove();
            document.querySelector('.calendar_dates').appendChild(calendar);

            let taskDate = document.querySelectorAll('.date_fields');
            let inputDate = document.querySelector('.date_field');
            let inputTitle = document.getElementById('new_title');
            let inputTask = document.getElementById('new_task');
            let calendarBtn = document.querySelector('.date_field_container');
            let addButton = document.querySelector('.add_btn');
            for (let element of taskDate) {
                element.onclick = () => {
                    inputDate.innerHTML = month_name[month] + ' ' + element.innerHTML + ', ' + year;

                    let calendar = document.querySelector('.clendar_container');
                    setTimeout(() => {
                        calendar.classList.add('calendar_card');
                    }, 200);
                    inputTitle.removeAttribute('disabled', '');
                    inputTitle.style.background = 'rgba(255, 255, 255, 1)';
                    inputTask.removeAttribute('disabled', '');
                    inputTask.style.background = 'rgba(255, 255, 255, 1)';
                    calendarBtn.style.background = 'rgba(255, 255, 255, 1)';
                    addButton.removeAttribute('disabled', '');
                    addButton.style.background = 'rgb(101, 118, 218)';
                    textDate.classList.remove('error_Date');
                }
            }
            for (let i = 1; i <= days; i++) {
                let tdFields = document.querySelectorAll('.date_fields');
                for (let tdField of tdFields) {
                    if (tdField.innerHTML == new Date().getDate()) {
                        tdField.classList.add('today_day_field');
                    }
                }
            }
        }
    }

    // ----------------Adapting a menu with a screen size less than 640 px ---------
    movementMenu() {
        if (document.documentElement.clientWidth <= 640) {
            let menuBackBtn = document.querySelector('.fa-arrow-circle-left');
            this.sectionTabs.forEach(div => {
                div.addEventListener('click', () => {
                    this.windowsContainer.classList.add('menu_movement');
                });
            });
            menuBackBtn.onclick = () => {
                this.windowsContainer.classList.remove('menu_movement');
            };
        };
        this.windowsContainer.classList.remove('menu_movement');
    }
};
let todolist = new ToDoList();

// ------------------------- Tab ----------------------
let jsTriggers = document.querySelectorAll('.js-tab-trigger');
let jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
        let id = this.getAttribute('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');
        activeTrigger.classList.remove('active');
        trigger.classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active');
    });
});
// ---------------------- Background image Slider -------------
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll(".carousel"), function (el) {
        var img = el.querySelectorAll("img"),
            len = img.length,
            i = len - 1,
            p = el.dataset.pause || 5E3;
        !function g() {
            img[i].classList.remove("show");
            i = ++i % len;
            img[i].classList.add("show");
            window.setTimeout(g, p)
        }()
    })
});