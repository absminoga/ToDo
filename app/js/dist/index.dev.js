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
    };

    window.onresize = function () {
      return _this.movementMenu();
    };

    setInterval(this.getDate, 0);
    this.removedTask = null;
    this.dateToday = new Date();
  } // -------------------- Creatur New Task - JS-HTML
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


  _createClass(ToDoList, [{
    key: "creatureNewItem",
    value: function creatureNewItem(itemsArray) {
      var todos;

      if (localStorage.getItem('items')) {
        todos = JSON.parse(localStorage.getItem('items'));
        console.log(localStorage);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            var listItem = document.createElement('div');
            listItem.classList.add('task_card');
            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.classList.add('task_counter');
            var textDescription = document.createElement('div');
            textDescription.classList.add('block_text_description');
            var inputTitle = document.createElement('textarea');
            inputTitle.setAttribute('type', 'text');
            inputTitle.classList.add('input_title');
            inputTitle.setAttribute('disabled', '');
            inputTitle.innerText = item.titleTask;
            var inputDescription = document.createElement('textarea');
            inputDescription.setAttribute('type', 'text');
            inputDescription.classList.add('input_description');
            inputDescription.setAttribute('disabled', '');
            inputDescription.innerText = item.descriptionTask;
            var dateCompletion = document.createElement('div');
            dateCompletion.classList.add('date_completion');
            var dateFieldContainer = document.createElement('div');
            dateFieldContainer.classList.add('date_field_container');
            var dateField = document.createElement('span');
            dateField.classList.add('date_field');
            var inputDate = document.querySelector('.date_field');

            if (!inputDate.textContent) {
              dateField.innerText = "Without date";
              dateField.classList.add('without_date');
              dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
            } else {
              dateField.innerText = item.dateTask;
              dateField.classList.add('fulfillment_date');
              dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
            }

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
            listItem.appendChild(buttonItem);
            buttonItem.appendChild(buttonEdit);
            buttonItem.appendChild(buttonDelete);
            return listItem;
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
      } else {
        todos = [];
      }
    } // -------------------- Creatur Expired Task - JS-HTML

  }, {
    key: "creatureExpiredItem",
    value: function creatureExpiredItem(itemsArray) {
      var todos;

      if (localStorage.getItem('items')) {
        todos = JSON.parse(localStorage.getItem('items'));
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = todos[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;
            var listItem = document.createElement('div');
            listItem.classList.add('task_card');
            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('disabled', '');
            checkbox.classList.add('task_counter');
            checkbox.style.display = 'none';
            var textDescription = document.createElement('div');
            textDescription.classList.add('block_text_description');
            var inputTitle = document.createElement('textarea');
            inputTitle.setAttribute('type', 'text');
            inputTitle.classList.add('input_title');
            inputTitle.setAttribute('disabled', '');
            inputTitle.innerText = item.titleTask;
            var inputDescription = document.createElement('textarea');
            inputDescription.setAttribute('type', 'text');
            inputDescription.classList.add('input_description');
            inputDescription.setAttribute('disabled', '');
            inputDescription.innerText = item.descriptionTask;
            ;
            var dateCompletion = document.createElement('div');
            dateCompletion.classList.add('date_completion');
            var dateFieldContainer = document.createElement('div');
            dateFieldContainer.classList.add('date_field_container');
            var dateField = document.createElement('span');
            dateField.classList.add('date_field');
            var inputDate = document.querySelector('.date_field');
            dateField.innerText = item.dateTask;
            dateField.classList.add('fulfillment_date');
            dateFieldContainer.style.background = 'rgba(255, 255, 255, 0.5);';
            var buttonItem = document.createElement('div');
            buttonItem.classList.add('button_item');
            var buttonEdit = document.createElement('button');
            buttonEdit.classList.add('edit');
            buttonEdit.setAttribute('disabled', '');
            buttonEdit.innerText = 'edit';
            buttonEdit.style.display = 'none';
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
            listItem.appendChild(buttonItem);
            buttonItem.appendChild(buttonEdit);
            buttonItem.appendChild(buttonDelete);
            return listItem;
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
      } else {
        todos = [];
      }
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
    }
  }, {
    key: "addCalendar",
    value: function addCalendar() {
      var _this2 = this;

      var calendar = document.querySelector('.clendar_container');
      setTimeout(function () {
        calendar.classList.remove('calendar_card');

        _this2.inputTitle.setAttribute('disabled', '');

        _this2.inputTitle.style.background = 'rgba(255, 255, 255, .5)';

        _this2.inputTask.setAttribute('disabled', '');

        _this2.inputTask.style.background = 'rgba(255, 255, 255, .5)';
        _this2.calendarBtn.style.background = 'rgba(255, 255, 255, .5)';

        _this2.addButton.setAttribute('disabled', '');

        _this2.addButton.style.background = 'rgba(199, 3, 3, 0.7)';
      }, 100);
    } // ------------------ Events when clicking on hemp tasks --------------------

  }, {
    key: "buttonTaskEvents",
    value: function buttonTaskEvents(listItem) {
      var _this3 = this;

      var editButton = listItem.querySelector('button.edit');

      editButton.onclick = function () {
        return _this3.changeTask(listItem);
      };

      var deleteButton = listItem.querySelector('button.delete');

      deleteButton.onclick = function () {
        _this3.deleteTask(listItem);

        _this3.itemСounter();
      };

      var checkboxOut = listItem.querySelector('input[type=checkbox]');

      checkboxOut.onclick = function () {
        _this3.completedTask(listItem);

        _this3.itemСounter();
      };
    } // -------------- Event classes -----------

  }, {
    key: "addTask",
    value: function addTask() {
      var inputDate = document.querySelector('.date_field');
      var dateTask = new Date(inputDate.textContent);

      if (this.inputTask.value && this.inputTitle.value) {
        if (inputDate.textContent == '') {
          //---------------------------------------local
          var localTask = {
            titleTask: this.inputTitle.value,
            descriptionTask: this.inputTask.value,
            dateTask: "Without date"
          }; // Добавление елементов в Local

          var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
          itemsArray.push(localTask);
          localStorage.setItem('items', JSON.stringify(itemsArray));
          var listItem = this.creatureNewItem(itemsArray);
          this.incompletedTask.appendChild(listItem);
          this.buttonTaskEvents(listItem);
          this.inputTitle.value = '';
          this.inputTask.value = '';
          this.inputDate.textContent = '';
          this.charCounter.textContent = '0';
          this.itemСounter();
        } else if (this.dateToday > dateTask) {
          //---------------------------------------local
          var _localTask = {
            titleTask: this.inputTitle.value,
            descriptionTask: this.inputTask.value,
            dateTask: inputDate.textContent
          }; // Добавление елементов в Local

          var _itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

          _itemsArray.push(_localTask);

          localStorage.setItem('items', JSON.stringify(_itemsArray));

          var _listItem = this.creatureNewItem(_itemsArray);

          this.expiredTask.appendChild(_listItem);
          this.buttonTaskEvents(_listItem);
          this.inputTitle.value = '';
          this.inputTask.value = '';
          this.inputDate.textContent = '';
          this.charCounter.textContent = '0';
          this.itemСounter();
        } else {
          //---------------------------------------local
          var _localTask2 = {
            titleTask: this.inputTitle.value,
            descriptionTask: this.inputTask.value,
            dateTask: inputDate.textContent
          }; // Добавление елементов в Local

          var _itemsArray2 = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

          _itemsArray2.push(_localTask2);

          localStorage.setItem('items', JSON.stringify(_itemsArray2));

          var _listItem2 = this.creatureNewItem(_itemsArray2);

          this.incompletedTask.appendChild(_listItem2);
          this.buttonTaskEvents(_listItem2);
          this.inputTitle.value = '';
          this.inputTask.value = '';
          this.inputDate.textContent = '';
          this.charCounter.textContent = '0';
          this.itemСounter();
        }
      }
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(listItem) {
      var ul = listItem.parentNode;
      ul.removeChild(listItem);
    }
  }, {
    key: "changeTask",
    value: function changeTask(listItem) {
      var changeTitle = listItem.querySelector('.input_title');
      var changeDescription = listItem.querySelector('.input_description');
      var changeDate = listItem.querySelector('.date_field');
      var containsClass = listItem.classList.contains('changes');
      var editButton = listItem.querySelector('button.edit');

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
  }, {
    key: "completedTask",
    value: function completedTask(listItem) {
      var _this4 = this;

      var ulCompleted = document.querySelector('.completed_tasks');
      this.removedTask = listItem;
      listItem.classList.add('completed');
      listItem.remove();
      ulCompleted.appendChild(listItem);
      var checkboxIn = listItem.querySelector('input[type=checkbox]');

      checkboxIn.onclick = function () {
        _this4.uncompletedTask(listItem);

        _this4.itemСounter();
      };
    }
  }, {
    key: "uncompletedTask",
    value: function uncompletedTask(listItem) {
      var _this5 = this;

      var ulInCompleted = document.querySelector('.incompleted_tasks');
      this.removedTask = listItem;
      listItem.classList.remove('completed');
      listItem.remove();
      ulInCompleted.appendChild(listItem);
      var checkboxIn = listItem.querySelector('input[type=checkbox]');

      checkboxIn.onclick = function () {
        _this5.completedTask(listItem);

        _this5.itemСounter();
      };
    }
  }, {
    key: "expiredTask",
    value: function expiredTask(listItem) {
      var ulInCompleted = document.querySelector('.incompleted_tasks');
      this.expiredTask = listItem;
      listItem.classList.remove('completed');
      listItem.remove();
      ulInCompleted.appendChild(listItem);
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
      datePosition.innerText = addZero(d.getDate()) + ", " + month[d.getMonth()] + ", " + d.getFullYear();
      timePosition.innerText = addZero(d.getHours()) + ":" + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds());

      function addZero(num) {
        var str = num.toString();
        return str.length == 1 ? "0" + str : str;
      }

      ;
    }
  }, {
    key: "getTaskDate",
    value: function getTaskDate() {
      var _this6 = this;

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
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        var _loop3 = function _loop3() {
          var element = _step3.value;

          element.onclick = function () {
            _this6.inputDate.innerHTML = element.innerHTML + ', ' + month_name[month] + ', ' + year;
            var calendar = document.querySelector('.clendar_container');
            setTimeout(function () {
              calendar.classList.add('calendar_card');
            }, 200);

            _this6.inputTitle.removeAttribute('disabled', '');

            _this6.inputTitle.style.background = 'rgba(255, 255, 255, 1)';

            _this6.inputTask.removeAttribute('disabled', '');

            _this6.inputTask.style.background = 'rgba(255, 255, 255, 1)';
            _this6.calendarBtn.style.background = 'rgba(255, 255, 255, 1)';

            _this6.addButton.removeAttribute('disabled', '');

            _this6.addButton.style.background = 'rgba(255, 255, 255, 1)';
          };
        };

        for (var _iterator3 = taskDate[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          _loop3();
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
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = tdFields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var tdField = _step4.value;

            if (tdField.innerHTML == new Date().getDate()) {
              tdField.classList.add('today_day_field');
            }
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
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          var _loop = function _loop() {
            var element = _step5.value;

            element.onclick = function () {
              inputDate.innerHTML = element.innerHTML + ', ' + month_name[month] + ', ' + year;
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
              addButton.style.background = 'rgba(255, 255, 255, 1)';
            };
          };

          for (var _iterator5 = taskDate[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            _loop();
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

        for (var _i = 1; _i <= days; _i++) {
          var _tdFields = document.querySelectorAll('.date_fields');

          var _iteratorNormalCompletion6 = true;
          var _didIteratorError6 = false;
          var _iteratorError6 = undefined;

          try {
            for (var _iterator6 = _tdFields[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
              var _tdField = _step6.value;

              if (_tdField.innerHTML == new Date().getDate()) {
                _tdField.classList.add('today_day_field');
              }
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
        document.querySelector('.calendar_month_year').innerHTML = month_name[month] + ' ' + year;
        document.querySelector('.calendar_dates table').remove();
        document.querySelector('.calendar_dates').appendChild(calendar);
        var taskDate = document.querySelectorAll('.date_fields');
        var inputDate = document.querySelector('.date_field');
        var inputTitle = document.getElementById('new_title');
        var inputTask = document.getElementById('new_task');
        var calendarBtn = document.querySelector('.date_field_container');
        var addButton = document.querySelector('.add_btn');
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          var _loop2 = function _loop2() {
            var element = _step7.value;

            element.onclick = function () {
              inputDate.innerHTML = element.innerHTML + ', ' + month_name[month] + ', ' + year;
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
              addButton.style.background = 'rgba(255, 255, 255, 1)';
            };
          };

          for (var _iterator7 = taskDate[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            _loop2();
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

        for (var _i2 = 1; _i2 <= days; _i2++) {
          var _tdFields2 = document.querySelectorAll('.date_fields');

          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = _tdFields2[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var _tdField2 = _step8.value;

              if (_tdField2.innerHTML == new Date().getDate()) {
                _tdField2.classList.add('today_day_field');
              }
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                _iterator8["return"]();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }
        }
      }
    } // ----------------Adapting a menu with a screen size less than 640 px ---------

  }, {
    key: "movementMenu",
    value: function movementMenu() {
      var _this7 = this;

      if (document.documentElement.clientWidth <= 640) {
        var menuBackBtn = document.querySelector('.fa-arrow-circle-left');
        this.sectionTabs.forEach(function (div) {
          div.addEventListener('click', function () {
            _this7.windowsContainer.classList.add('menu_movement');
          });
          console.log('Go to Dashboard');
        });

        menuBackBtn.onclick = function () {
          _this7.windowsContainer.classList.remove('menu_movement');

          console.log('Back to Menu');
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
});