"use strict";

var toDo = null;
var toDoListLength = toDoList.length;
console.log(toDoListLength);

if (toDoListLength >= 1) {
  for (var i = 0; i < toDoListLength; i++) {
    toDo = new ToDo(toDoList[i]);
    createToDo(toDo.getToDo());
  }
}