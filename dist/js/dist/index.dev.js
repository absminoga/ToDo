"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//  --------- Class Add task -------------- 
var ToDoList =
/*#__PURE__*/
function () {
  function ToDoList() {
    var _this = this;

    _classCallCheck(this, ToDoList);

    this.windowsContainer = document.querySelector('.container');
    this.sectionTabs = document.querySelectorAll('.section_two_tabs');
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

    this.addButton.onclick = function () {
      return _this.addTask();
    };

    this.calendarBtn.onclick = function () {
      return _this.addCalendar();
    };

    this.textArea.oninput = function () {
      return _this.changeTitle();
    };

    window.onload = function () {
      _this.getTaskDate();

      _this.movementMenu();

      _this.itemСounter();

      _this.creatureLocalItem();
    };

    window.onresize = function () {
      return _this.movementMenu();
    };

    setInterval(this.getDate, 0);
    this.removedTask = null;
    this.index;
    this.dateToday = new Date();
  } // -------------- Event classes -----------


  _createClass(ToDoList, [{
    key: "addTask",
    value: function addTask() {
      var inputDate = document.querySelector('.date_field');

      if (this.inputTitle.value == '' || this.textDescription.value == '' || this.inputDate.textContent == '') {
        this.taskValidation();
      } else {
        //-------------------------    Сreate an array for Local Storage --------------------
        this.createLocalStorage();
        var listItem = this.creatureNewItem(this.inputTitle.value, this.inputTask.value, inputDate.textContent);
        this.incompletedTask.appendChild(listItem);
        this.buttonTaskEvents(listItem);
        this.inputTitle.value = '';
        this.textArea.classList.remove('error_Title');
        this.inputTask.value = '';
        this.inputDate.textContent = '';
        this.charCounter.textContent = '0';
        this.itemСounter();
      }
    } // -------------------- Creatur New Task - JS-HTML

  }, {
    key: "creatureNewItem",
    value: function creatureNewItem(title, task, date) {
      var listItem = document.createElement('div');
      listItem.classList.add('task_card');
      var squaredOne = document.createElement('div');
      squaredOne.classList.add('squaredOne');
      var checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('task_counter');
      var textDescription = document.createElement('div');
      textDescription.classList.add('block_text_description');
      var inputTitle = document.createElement('textarea');
      inputTitle.classList.add('input_title');
      inputTitle.setAttribute('disabled', '');
      inputTitle.textContent = title;
      var inputDescription = document.createElement('textarea');
      inputDescription.setAttribute('type', 'text');
      inputDescription.classList.add('input_description');
      inputDescription.setAttribute('disabled', '');
      inputDescription.textContent = task;
      var dateCompletion = document.createElement('div');
      dateCompletion.classList.add('date_completion');
      var dateFieldContainer = document.createElement('div');
      dateFieldContainer.classList.add('date_field_container');
      var dateField = document.createElement('span');
      dateField.classList.add('date_field');
      dateField.innerText = date;
      dateField.classList.add('fulfillment_date');
      dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
      var calendarLogo = document.createElement('i');
      calendarLogo.classList.add('fas', 'fa-calendar-alt');
      var buttonItem = document.createElement('div');
      buttonItem.classList.add('button_item');
      var buttonEdit = document.createElement('button');
      buttonEdit.classList.add('edit');
      buttonEdit.innerText = 'edit';
      var buttonDelete = document.createElement('button');
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
      listItem.appendChild(buttonItem);
      buttonItem.appendChild(buttonEdit);
      buttonItem.appendChild(buttonDelete);
      return listItem;
    } // ------------------ Events when clicking on hemp tasks --------------------

  }, {
    key: "buttonTaskEvents",
    value: function buttonTaskEvents(listItem) {
      var _this2 = this;

      var editButton = listItem.querySelector('button.edit');

      editButton.onclick = function () {
        return _this2.changeTask(listItem);
      };

      var deleteButton = listItem.querySelector('button.delete');

      deleteButton.onclick = function () {
        _this2.deleteTask(listItem);

        _this2.itemСounter();
      };

      var checkbox = listItem.querySelector('input[type=checkbox]');
      var inputDate = document.querySelector('.date_field');
      var dateTask = new Date(inputDate.textContent);

      checkbox.onclick = function () {
        _this2.completedTask(listItem, dateTask);

        _this2.itemСounter();
      };
    } // --------------------  Control change the name of the task ---------

  }, {
    key: "changeTitle",
    value: function changeTitle() {
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
  }, {
    key: "addCalendar",
    value: function addCalendar() {
      var _this3 = this;

      var calendar = document.querySelector('.clendar_container');
      setTimeout(function () {
        calendar.classList.remove('calendar_card');

        _this3.inputTitle.setAttribute('disabled', '');

        _this3.inputTitle.style.background = 'rgba(255, 255, 255, .5)';

        _this3.inputTask.setAttribute('disabled', '');

        _this3.inputTask.style.background = 'rgba(255, 255, 255, .5)';
        _this3.calendarBtn.style.background = 'rgba(255, 255, 255, .5)';

        _this3.addButton.setAttribute('disabled', '');

        _this3.addButton.style.background = 'rgba(199, 3, 3, 0.7)';
      }, 100);
    } //--------------- Delete tasks --------------------------

  }, {
    key: "deleteTask",
    value: function deleteTask(listItem) {
      var ul = listItem.parentNode;
      ul.removeChild(listItem);
      this.deletedLocalStorage();
    } //--------------- Change incomplet tasks --------------------------

  }, {
    key: "changeTask",
    value: function changeTask(listItem) {
      var changeTitle = listItem.querySelector('.input_title');
      var changeDescription = listItem.querySelector('.input_description');
      var changeDate = listItem.querySelector('.date_field');
      var containsClass = listItem.classList.contains('changes');
      var editButton = listItem.querySelector('button.edit');
      var deleteButton = listItem.querySelector('button.delete');
      var checkbox = listItem.querySelector('input[type=checkbox]');

      if (containsClass) {
        editButton.innerText = "edit";
        editButton.classList.remove('edit_change');
        changeTitle.setAttribute('disabled', '');
        changeTitle.classList.remove('bg_field');
        changeDescription.setAttribute('disabled', '');
        changeDescription.classList.remove('bg_field');
        changeDate.setAttribute('disabled', '');
        checkbox.removeAttribute('disabled', '');
        deleteButton.removeAttribute('disabled', '');
      } else {
        editButton.innerText = "save";
        editButton.classList.add('edit_change');
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
  }, {
    key: "completedTask",
    value: function completedTask(listItem, dateTask) {
      if (this.dateToday <= dateTask) {
        console.log(dateTask);
        var ulCompleted = document.querySelector('.completed_tasks');
        this.removedTask = listItem;
        listItem.classList.add('completed');
        listItem.remove();
        ulCompleted.appendChild(listItem);
        this.itemСounter();
        this.hidingItems(listItem);
        this.deletedLocalStorage();
      } else {
        var ulExpired = document.querySelector('.expired_tasks');
        console.log(dateTask);
        this.removedTask = listItem;
        listItem.remove();
        ulExpired.appendChild(listItem);
        this.itemСounter();
        this.hidingItems(listItem);
        this.deletedLocalStorage();
      }
    }
  }, {
    key: "hidingItems",
    value: function hidingItems(listItem) {
      var checkboxIn = listItem.querySelector('input[type=checkbox]');
      checkboxIn.style.display = 'none';
      var btnEdit = listItem.querySelector(".edit");
      btnEdit.style.display = 'none';
    } // ------------------------   Create Local Storage ------------------------

  }, {
    key: "createLocalStorage",
    value: function createLocalStorage() {
      var inputDate = document.querySelector('.date_field');
      this.index++;
      var localTask = {
        count: this.index,
        titleTask: this.inputTitle.value,
        descriptionTask: this.inputTask.value,
        dateTask: inputDate.textContent
      }; // ------------------------    Adding Items to Local Storage ------------------------

      var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
      itemsArray.push(localTask);
      localStorage.setItem('items', JSON.stringify(itemsArray));
    } // -------------------- Creatur New Task - localStorage ------------------

  }, {
    key: "creatureLocalItem",
    value: function creatureLocalItem() {
      var localStorageName = 'items';
      var toDoList = [];
      var toDoListJson = JSON.stringify(toDoList);

      if (!localStorage.getItem(localStorageName)) {
        localStorage.setItem(localStorageName, toDoListJson);
        this.index = 0;
      } else {
        toDoListJson = localStorage.getItem(localStorageName);
        toDoList = JSON.parse(toDoListJson);
        this.index = toDoList.length - 1;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = toDoList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            var listItem = this.creatureNewItem(item.titleTask, item.titleTask, item.dateTask, item.count);
            this.incompletedTask.appendChild(listItem);
            this.buttonTaskEvents(listItem);
            this.itemСounter();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "deletedLocalStorage",
    value: function deletedLocalStorage() {
      var items = JSON.parse(localStorage.getItem('items'));
      var item = items.count;
      items.splice(item, 1);
      localStorage.setItem('items', JSON.stringify(items));
    } // ------------------ Validation of task input fields ------------

  }, {
    key: "taskValidation",
    value: function taskValidation() {
      var _this4 = this;

      if (!this.inputTitle.value) {
        this.textArea.classList.add('error_Title');
      }

      ;

      if (!this.textDescription.value) {
        this.textDescription.classList.add('error_Description');
      }

      ;

      if (this.inputDate.textContent.length < 1) {
        this.textDate.classList.add('error_Date');
      }

      ;

      this.textDescription.oninput = function () {
        if (_this4.textDescription.value.length > 0) {
          _this4.textDescription.classList.remove('error_Description');
        }
      };
    } // ------------ Task counter ---------------

  }, {
    key: "item\u0421ounter",
    value: function itemOunter() {
      var incompletetTask = document.querySelector('.incompleted_tasks');
      var incompledCounter = document.querySelector('.incomplet_task_counter');
      incompledCounter.textContent = incompletetTask.childNodes.length - 1;
      var completedTask = document.querySelector('.completed_tasks');
      var compledCounter = document.querySelector('.complet_task_counter');
      compledCounter.textContent = completedTask.childNodes.length - 1;
      var expiredTask = document.querySelector('.expired_tasks');
      var expiredCounter = document.querySelector('.expire_task_counter');
      expiredCounter.textContent = expiredTask.childNodes.length - 1;
    } // -------- Date related classes ----------

  }, {
    key: "getDate",
    value: function getDate() {
      var d = new Date();
      var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
      var datePosition = document.querySelector('.container_date');
      var timePosition = document.querySelector('.container_time');
      datePosition.innerText = month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
      timePosition.innerText = addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());

      function addZero(num) {
        var str = num.toString();
        return str.length == 1 ? "0" + str : str;
      }

      ;
      return datePosition.innerText;
    } // ---------- Add calendar -------------

  }, {
    key: "getTaskDate",
    value: function getTaskDate() {
      var _this5 = this;

      var d = new Date();
      var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var month = d.getMonth();
      var year = d.getFullYear();
      var first_date = 1 + ' ' + month_name[month] + ' ' + year; // Определяем первый день текущего месяца

      var tmp = new Date(first_date).toDateString(); // Возвращаем дату в формате: Wed Jul 28 1993

      var first_day = tmp.substring(0, 3); // Обрезаем строку : Wed Jul 28 1993 - до третего символа: Wed

      var day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      var day_number = day_name.indexOf(first_day); // Возвращаем индекс первого дня недели

      var days = new Date(year, month + 1, 0).getDate(); // Узнаем сколько дней в текущем месяце. "0" - пишем для перевода на последний день месяца 

      var calendar = getCalendar(day_number, days);
      var next_mth_element = document.querySelector('.fa-arrow-right');
      var prev_mth_element = document.querySelector('.fa-arrow-left');
      document.querySelector('.calendar_month_year').innerHTML = month_name[month] + ' ' + year;
      document.querySelector('.calendar_dates').appendChild(calendar);
      var taskDate = document.querySelectorAll('.date_fields');
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop3 = function _loop3() {
          var element = _step2.value;

          element.onclick = function () {
            _this5.inputDate.innerHTML = month_name[month] + ' ' + element.innerHTML + ', ' + year;
            var calendar = document.querySelector('.clendar_container');
            setTimeout(function () {
              calendar.classList.add('calendar_card');
            }, 200);

            _this5.inputTitle.removeAttribute('disabled', '');

            _this5.inputTitle.style.background = 'rgba(255, 255, 255, 1)';

            _this5.inputTask.removeAttribute('disabled', '');

            _this5.inputTask.style.background = 'rgba(255, 255, 255, 1)';
            _this5.calendarBtn.style.background = 'rgba(255, 255, 255, 1)';

            _this5.addButton.removeAttribute('disabled', '');

            _this5.addButton.style.background = 'rgb(101, 118, 218)';

            _this5.textDate.classList.remove('error_Date');
          };
        };

        for (var _iterator2 = taskDate[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop3();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      next_mth_element.addEventListener('click', goToNextMonth);
      prev_mth_element.addEventListener('click', goToPrevMonth);

      function getCalendar(day_number, days) {
        var table = document.createElement('table');
        var tr = document.createElement('tr'); //Создаем первую строку таблицы 

        for (var _c = 0; _c <= 6; _c++) {
          var td = document.createElement('td');
          td.innerHTML = day_name[_c];
          tr.classList.add("row_fields");
          tr.appendChild(td);
        }

        table.appendChild(tr); // Создаем вторую строку таблицы - пустые елементы

        tr = document.createElement('tr');
        var c;

        for (c = 0; c <= 6; c++) {
          if (c == day_number) {
            break;
          }

          var _td = document.createElement('td');

          _td.innerHTML = " ";
          tr.appendChild(_td);
        }

        var count = 1;

        for (; c <= 6; c++) {
          var _td2 = document.createElement('td');

          _td2.classList.add("date_fields");

          _td2.innerHTML = count;
          count++;
          tr.appendChild(_td2);
        }

        table.appendChild(tr);

        for (var r = 3; r <= 7; r++) {
          tr = document.createElement('tr');

          for (var _c2 = 0; _c2 <= 6; _c2++) {
            if (count > days) {
              table.appendChild(tr);
              return table;
            }

            var _td3 = document.createElement('td');

            _td3.classList.add("date_fields");

            _td3.innerHTML = count;
            count++;
            tr.appendChild(_td3);
          }

          table.appendChild(tr);
        }

        return table;
      }

      ; // Дабовляем класс для сегоднешнего дня

      for (var i = 1; i <= days; i++) {
        var tdFields = document.querySelectorAll('.date_fields');
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = tdFields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var tdField = _step3.value;

            if (tdField.innerHTML == new Date().getDate()) {
              tdField.classList.add('today_day_field');
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }

      function goToNextMonth(e) {
        month++;

        if (month > 11) {
          month = 0;
          year++;
        }

        var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var first_date = 1 + ' ' + month_name[month] + ' ' + year; // Определяем первый день текущего месяца

        var tmp = new Date(first_date).toDateString(); // Возвращаем дату в формате: Wed Jul 28 1993

        var first_day = tmp.substring(0, 3); // Обрезаем строку : Wed Jul 28 1993 - до третего символа: Wed

        var day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var day_number = day_name.indexOf(first_day); // Возвращаем индекс дня недели

        var days = new Date(year, month + 1, 0).getDate();
        var calendar = getCalendar(day_number, days);
        var textDate = document.querySelector('.date_field_container');
        getCalendar(day_number, days);
        document.querySelector('.calendar_month_year').innerHTML = month_name[month] + ' ' + year;
        document.querySelector('.calendar_dates table').remove();
        document.querySelector('.calendar_dates').appendChild(calendar);
        var taskDate = document.querySelectorAll('.date_fields');
        var inputDate = document.querySelector('.date_field');
        var inputTitle = document.getElementById('new_title');
        var inputTask = document.getElementById('new_task');
        var calendarBtn = document.querySelector('.date_field_container');
        var addButton = document.querySelector('.add_btn');
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          var _loop = function _loop() {
            var element = _step4.value;

            element.onclick = function () {
              inputDate.innerHTML = month_name[month] + ' ' + element.innerHTML + ', ' + year;
              var calendar = document.querySelector('.clendar_container');
              setTimeout(function () {
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
            };
          };

          for (var _iterator4 = taskDate[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            _loop();
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        for (var _i = 1; _i <= days; _i++) {
          var _tdFields = document.querySelectorAll('.date_fields');

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = _tdFields[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var _tdField = _step5.value;

              if (_tdField.innerHTML == new Date().getDate()) {
                _tdField.classList.add('today_day_field');
              }
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                _iterator5["return"]();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }

      ;

      function goToPrevMonth(e) {
        month--;

        if (month < 0) {
          month = 11;
          year--;
        }

        var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var first_date = 1 + ' ' + month_name[month] + ' ' + year; // Определяем первый день текущего месяца

        var tmp = new Date(first_date).toDateString(); // Возвращаем дату в формате: Wed Jul 28 1993

        var first_day = tmp.substring(0, 3); // Обрезаем строку : Wed Jul 28 1993 - до третего символа: Wed

        var day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var day_number = day_name.indexOf(first_day); // Возвращаем индекс дня недели

        var days = new Date(year, month + 1, 0).getDate();
        var calendar = getCalendar(day_number, days);
        var textDate = document.querySelector('.date_field_container');
        document.querySelector('.calendar_month_year').innerHTML = month_name[month] + ' ' + year;
        document.querySelector('.calendar_dates table').remove();
        document.querySelector('.calendar_dates').appendChild(calendar);
        var taskDate = document.querySelectorAll('.date_fields');
        var inputDate = document.querySelector('.date_field');
        var inputTitle = document.getElementById('new_title');
        var inputTask = document.getElementById('new_task');
        var calendarBtn = document.querySelector('.date_field_container');
        var addButton = document.querySelector('.add_btn');
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          var _loop2 = function _loop2() {
            var element = _step6.value;

            element.onclick = function () {
              inputDate.innerHTML = month_name[month] + ' ' + element.innerHTML + ', ' + year;
              var calendar = document.querySelector('.clendar_container');
              setTimeout(function () {
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
            };
          };

          for (var _iterator6 = taskDate[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            _loop2();
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
              _iterator6["return"]();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        for (var _i2 = 1; _i2 <= days; _i2++) {
          var _tdFields2 = document.querySelectorAll('.date_fields');

          var _iteratorNormalCompletion7 = true;
          var _didIteratorError7 = false;
          var _iteratorError7 = undefined;

          try {
            for (var _iterator7 = _tdFields2[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
              var _tdField2 = _step7.value;

              if (_tdField2.innerHTML == new Date().getDate()) {
                _tdField2.classList.add('today_day_field');
              }
            }
          } catch (err) {
            _didIteratorError7 = true;
            _iteratorError7 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                _iterator7["return"]();
              }
            } finally {
              if (_didIteratorError7) {
                throw _iteratorError7;
              }
            }
          }
        }
      }
    } // ----------------Adapting a menu with a screen size less than 640 px ---------

  }, {
    key: "movementMenu",
    value: function movementMenu() {
      var _this6 = this;

      if (document.documentElement.clientWidth <= 640) {
        var menuBackBtn = document.querySelector('.fa-arrow-circle-left');
        this.sectionTabs.forEach(function (div) {
          div.addEventListener('click', function () {
            _this6.windowsContainer.classList.add('menu_movement');
          });
        });

        menuBackBtn.onclick = function () {
          _this6.windowsContainer.classList.remove('menu_movement');
        };
      }

      ;
      this.windowsContainer.classList.remove('menu_movement');
    }
  }]);

  return ToDoList;
}();

;
var todolist = new ToDoList(); // ------------------------- Tab ----------------------

var jsTriggers = document.querySelectorAll('.js-tab-trigger');
var jsContents = document.querySelectorAll('.js-tab-content');
jsTriggers.forEach(function (trigger) {
  trigger.addEventListener('click', function () {
    var id = this.getAttribute('data-tab'),
        content = document.querySelector('.js-tab-content[data-tab="' + id + '"]'),
        activeTrigger = document.querySelector('.js-tab-trigger.active'),
        activeContent = document.querySelector('.js-tab-content.active');
    activeTrigger.classList.remove('active');
    trigger.classList.add('active');
    activeContent.classList.remove('active');
    content.classList.add('active');
  });
}); // ---------------------- Background image Slider -------------

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
      window.setTimeout(g, p);
    }();
  });
});