let toDo = null;
let toDoListLength = toDoList.length;
console.log(toDoListLength);    
if(toDoListLength >= 1){
    for (let i = 0; i < toDoListLength; i++){
        toDo = new ToDo(toDoList[i]);
        createToDo(toDo.getToDo());
    }
}