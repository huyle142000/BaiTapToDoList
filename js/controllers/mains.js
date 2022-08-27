import ListToDo from "../service/ListTodo.js";
import ListCompleted from "../service/ListCompleted.js";
const QUERY = document.querySelector.bind(document);
const QUERYQUERY = document.querySelectorAll.bind(document);

//listTodo
let arrayList = [];

let addItem = document.querySelector("#addItem");
addItem.addEventListener('click', () => {
    let inputValue = QUERY('#newTask').value;
    if (inputValue === null || inputValue.match(/^ *$/) !== null) return;
    let listTodo = new ListToDo('#todo', inputValue);
    let { id } = listTodo;
    arrayList.push(listTodo);
    showTask(arrayList, id);
    //sort
    document.getElementById('two').addEventListener('click', () => {
        let dataSort = listTodo.sortList(arrayList);
        showTask(dataSort, id);

    });
    //reverse
    document.getElementById('three').addEventListener('click', () => {
        let dataReverse = listTodo.reverseList(arrayList);
        console.log(dataReverse)
        showTask(dataReverse, id);
    })
    QUERY('#newTask').value = '';

});

//showTask
let showTask = (data, id) => {
    let content = "";
    data.map((item) => {
        content += `
        <li class="d-flex justify-content-between">
        <span>${item.valueForm}</span>
            <div class="buttons">
                 <i class="fa-solid remove fa-trash-can"></i>
                <i class="fa-regular complete fa-circle-check"></i>
            </div>
        </li>
        `
    });
    document.querySelector(`${id}`).innerHTML = content;

    // btnCompletes
    if (id == `#todo`) {
        let btnCompletes = document.querySelectorAll(`${id} .complete`);
        for (let i = 0; i < btnCompletes.length; i++) {
            btnCompletes[i].onclick = () => {
                completeTask(i, data, id)
            }
        }
    }
    //BtnRemoves
    let btnRemoves = document.querySelectorAll(`${id} .remove`);
    for (let i = 0; i < btnRemoves.length; i++) {
        btnRemoves[i].onclick = () => {
            console.log(data, i, id)
            removeTask(i, data, id)
        }
    }

};

//remove a task
let removeTask = (i, data, id) => {
    data.splice(i, 1);
    showTask(data, id)
}

// Complete the task list
let completeTaskList = [];
let completeTask = (index, data, ids) => {
    let b = data.splice(index, 1);
    let a = { ...b };
    let { id, valueForm } = a[0];
    let listCompleted = new ListCompleted(id, valueForm);
    completeTaskList.push(listCompleted);
    showTask(data, id);
    showTask(completeTaskList, '#completed');

}
