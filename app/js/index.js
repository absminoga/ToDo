
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
        this.taskCounter = document.querySelectorAll('.task_counter');
        this.calendarBtn = document.querySelector('.date_field_container');


        this.addButton.onclick = () => this.addTask();
        this.calendarBtn.onclick = () => this.addCalendar();
        this.textArea.oninput = () => this.changeTitle();

        window.onload = () => {
            this.getTaskDate();
            this.movementMenu()
        };
        window.onresize = () => this.movementMenu();


        setInterval(this.getDate, 0);
        this.removedTask = null;
        this.dateToday = new Date();
    }
    // -------------------- Creatur New Task - JS-HTML
    // creatureNewItem(title, task) {
    //     let listItem = document.createElement('div');
    //     listItem.classList.add('task_card');

    //     let checkbox = document.createElement('input');
    //     checkbox.setAttribute('type', 'checkbox');
    //     checkbox.classList.add('task_counter');

    //     let textDescription = document.createElement('div');
    //     textDescription.classList.add('block_text_description');

    //     let inputTitle = document.createElement('textarea');
    //     inputTitle.setAttribute('type', 'text');
    //     inputTitle.classList.add('input_title');
    //     inputTitle.setAttribute('disabled', '');
    //     inputTitle.innerText = title;

    //     let inputDescription = document.createElement('textarea');
    //     inputDescription.setAttribute('type', 'text');
    //     inputDescription.classList.add('input_description');
    //     inputDescription.setAttribute('disabled', '');
    //     inputDescription.innerText = task;

    //     let dateCompletion = document.createElement('div');
    //     dateCompletion.classList.add('date_completion');

    //     let dateFieldContainer = document.createElement('div');
    //     dateFieldContainer.classList.add('date_field_container');

    //     let dateField = document.createElement('span');
    //     dateField.classList.add('date_field');
    //     let inputDate = document.querySelector('.date_field');
    //     if (!inputDate.textContent) {
    //         dateField.innerText = "Without date";
    //         dateField.classList.add('without_date');
    //         dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
    //     } else {
    //         dateField.innerText = inputDate.textContent;
    //         dateField.classList.add('fulfillment_date');
    //         dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
    //     }

    //     let buttonItem = document.createElement('div');
    //     buttonItem.classList.add('button_item');

    //     let buttonEdit = document.createElement('button');
    //     buttonEdit.classList.add('edit');
    //     buttonEdit.innerText = 'edit';

    //     let buttonDelete = document.createElement('button');
    //     buttonDelete.classList.add('delete', 'task_counter');
    //     buttonDelete.innerText = 'delete';

    //     listItem.appendChild(checkbox);
    //     listItem.appendChild(textDescription);
    //     textDescription.appendChild(inputTitle);
    //     textDescription.appendChild(inputDescription);
    //     textDescription.appendChild(dateCompletion);
    //     dateCompletion.appendChild(dateFieldContainer);
    //     dateFieldContainer.appendChild(dateField);
    //     listItem.appendChild(buttonItem)
    //     buttonItem.appendChild(buttonEdit);
    //     buttonItem.appendChild(buttonDelete);

    //     return listItem;
    // }

    // -------------------- Creatur New Task - localStorage ------------------
    creatureNewItem(itemsArray) {
        let todos;
        if (localStorage.getItem('items')) {
            todos = JSON.parse(localStorage.getItem('items'))
            console.log(localStorage);
            
            for (let item of todos) {
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
                inputTitle.innerText = item.titleTask;

                let inputDescription = document.createElement('textarea');
                inputDescription.setAttribute('type', 'text');
                inputDescription.classList.add('input_description');
                inputDescription.setAttribute('disabled', '');
                inputDescription.innerText = item.descriptionTask;

                let dateCompletion = document.createElement('div');
                dateCompletion.classList.add('date_completion');

                let dateFieldContainer = document.createElement('div');
                dateFieldContainer.classList.add('date_field_container');

                let dateField = document.createElement('span');
                dateField.classList.add('date_field');
                let inputDate = document.querySelector('.date_field');
                if (!inputDate.textContent) {
                    dateField.innerText = "Without date";
                    dateField.classList.add('without_date');
                    dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
                } else {
                    dateField.innerText = item.dateTask;
                    dateField.classList.add('fulfillment_date');
                    dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
                }

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
                listItem.appendChild(buttonItem)
                buttonItem.appendChild(buttonEdit);
                buttonItem.appendChild(buttonDelete);

                return listItem;
            }
        } else {
            todos = []
        }


    }
    // -------------------- Creatur Expired Task - JS-HTML
    creatureExpiredItem(itemsArray) {
        let todos;
        if (localStorage.getItem('items')) {
            todos = JSON.parse(localStorage.getItem('items'))
            for (let item of todos) {
                let listItem = document.createElement('div');
                listItem.classList.add('task_card');

                let checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('disabled', '');
                checkbox.classList.add('task_counter');
                checkbox.style.display = 'none';

                let textDescription = document.createElement('div');
                textDescription.classList.add('block_text_description');

                let inputTitle = document.createElement('textarea');
                inputTitle.setAttribute('type', 'text');
                inputTitle.classList.add('input_title');
                inputTitle.setAttribute('disabled', '');
                inputTitle.innerText = item.titleTask;

                let inputDescription = document.createElement('textarea');
                inputDescription.setAttribute('type', 'text');
                inputDescription.classList.add('input_description');
                inputDescription.setAttribute('disabled', '');
                inputDescription.innerText = item.descriptionTask;;

                let dateCompletion = document.createElement('div');
                dateCompletion.classList.add('date_completion');

                let dateFieldContainer = document.createElement('div');
                dateFieldContainer.classList.add('date_field_container');

                let dateField = document.createElement('span');
                dateField.classList.add('date_field');
                let inputDate = document.querySelector('.date_field');

                dateField.innerText = item.dateTask;
                dateField.classList.add('fulfillment_date');
                dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';

                let buttonItem = document.createElement('div');
                buttonItem.classList.add('button_item');

                let buttonEdit = document.createElement('button');
                buttonEdit.classList.add('edit');
                buttonEdit.setAttribute('disabled', '');
                buttonEdit.innerText = 'edit';
                buttonEdit.style.display = 'none';


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
                listItem.appendChild(buttonItem)
                buttonItem.appendChild(buttonEdit);
                buttonItem.appendChild(buttonDelete);

                return listItem;
            }
        } else {
            todos = []
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

    // ------------------ Events when clicking on hemp tasks --------------------
    buttonTaskEvents(listItem) {
        let editButton = listItem.querySelector('button.edit');
        editButton.onclick = () => this.changeTask(listItem);
        

        let deleteButton = listItem.querySelector('button.delete');
        deleteButton.onclick = () => {
            this.deleteTask(listItem);
            this.itemСounter();
        };

        let checkboxOut = listItem.querySelector('input[type=checkbox]');
        checkboxOut.onclick = () => {
            this.completedTask(listItem);
            this.itemСounter();
        }

    }

    // -------------- Event classes -----------
    addTask() {
        let inputDate = document.querySelector('.date_field');
        let dateTask = new Date(inputDate.textContent);
        if (this.inputTask.value && this.inputTitle.value) {
            if (inputDate.textContent == '') {

                //---------------------------------------local
                let localTask = {
                    titleTask: this.inputTitle.value,
                    descriptionTask: this.inputTask.value,
                    dateTask: "Without date"
                };

                // Добавление елементов в Local
                let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
                itemsArray.push(localTask);
                localStorage.setItem('items', JSON.stringify(itemsArray));

                let listItem = this.creatureNewItem(itemsArray);

                this.incompletedTask.appendChild(listItem);
                this.buttonTaskEvents(listItem);
                this.inputTitle.value = '';
                this.inputTask.value = '';
                this.inputDate.textContent = '';
                this.charCounter.textContent = '0';
                this.itemСounter();
            } else if (this.dateToday > dateTask) {

                //---------------------------------------local
                let localTask = {
                    titleTask: this.inputTitle.value,
                    descriptionTask: this.inputTask.value,
                    dateTask: inputDate.textContent
                };
                // Добавление елементов в Local
                let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
                itemsArray.push(localTask);
                localStorage.setItem('items', JSON.stringify(itemsArray));
                let listItem = this.creatureNewItem(itemsArray);

                this.expiredTask.appendChild(listItem);
                this.buttonTaskEvents(listItem);
                this.inputTitle.value = '';
                this.inputTask.value = '';
                this.inputDate.textContent = '';
                this.charCounter.textContent = '0';
                this.itemСounter();
            } else {
                //---------------------------------------local
                let localTask = {
                    titleTask: this.inputTitle.value,
                    descriptionTask: this.inputTask.value,
                    dateTask: inputDate.textContent
                };
                // Добавление елементов в Local
                let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
                itemsArray.push(localTask);
                localStorage.setItem('items', JSON.stringify(itemsArray));

                let listItem = this.creatureNewItem(itemsArray);

                this.incompletedTask.appendChild(listItem);
                this.buttonTaskEvents(listItem);
                this.inputTitle.value = '';
                this.inputTask.value = '';
                this.inputDate.textContent = '';
                this.charCounter.textContent = '0';
                this.itemСounter();
            }
        }
    }

    deleteTask(listItem) {
        let ul = listItem.parentNode;
        ul.removeChild(listItem);
    }

    changeTask(listItem) {
        let changeTitle = listItem.querySelector('.input_title');
        let changeDescription = listItem.querySelector('.input_description');
        let changeDate = listItem.querySelector('.date_field');
        let containsClass = listItem.classList.contains('changes');
        let editButton = listItem.querySelector('button.edit');
        if (containsClass) {
            editButton.innerText = "edit";
            changeTitle.setAttribute('disabled', '');
            changeTitle.classList.remove('bg_field');
            changeDescription.setAttribute('disabled', '');
            changeDescription.classList.remove('bg_field');
            changeDate.setAttribute('disabled', '');
        } else {
            editButton.innerText = "save";
            changeTitle.removeAttribute('disabled', '');
            changeTitle.classList.add('bg_field');
            changeDescription.removeAttribute('disabled', '');
            changeDescription.classList.add('bg_field');
            changeDate.removeAttribute('disabled', '');
        }
        listItem.classList.toggle('changes');
    }

    completedTask(listItem) {
        let ulCompleted = document.querySelector('.completed_tasks');
        this.removedTask = listItem;
        listItem.classList.add('completed');
        listItem.remove();
        ulCompleted.appendChild(listItem);

        let checkboxIn = listItem.querySelector('input[type=checkbox]');
        checkboxIn.onclick = () => {
            this.uncompletedTask(listItem);
            this.itemСounter();
        }
    }

    uncompletedTask(listItem) {
        let ulInCompleted = document.querySelector('.incompleted_tasks');
        this.removedTask = listItem;
        listItem.classList.remove('completed');
        listItem.remove()
        ulInCompleted.appendChild(listItem);

        let checkboxIn = listItem.querySelector('input[type=checkbox]');
        checkboxIn.onclick = () => {
            this.completedTask(listItem);
            this.itemСounter();
        }
    }

    expiredTask(listItem) {
        let ulInCompleted = document.querySelector('.incompleted_tasks');
        this.expiredTask = listItem;
        listItem.classList.remove('completed');
        listItem.remove()
        ulInCompleted.appendChild(listItem);
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
        datePosition.innerText = (addZero(d.getDate()) + ", " + month[d.getMonth()] + ", " + d.getFullYear());
        timePosition.innerText = (addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()));
        function addZero(num) {
            let str = num.toString();
            return str.length == 1 ? "0" + str : str;
        };
    }
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
                this.inputDate.innerHTML = element.innerHTML + ', ' + month_name[month] + ', ' + year;
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
                this.addButton.style.background = 'rgba(255, 255, 255, 1)';
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
                    inputDate.innerHTML = element.innerHTML + ', ' + month_name[month] + ', ' + year;
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
                    addButton.style.background = 'rgba(255, 255, 255, 1)';
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
                    inputDate.innerHTML = element.innerHTML + ', ' + month_name[month] + ', ' + year;
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
                    addButton.style.background = 'rgba(255, 255, 255, 1)';
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
                console.log('Go to Dashboard');
            });
            menuBackBtn.onclick = () => {
                this.windowsContainer.classList.remove('menu_movement');
                console.log('Back to Menu');
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
