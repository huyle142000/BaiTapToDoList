const QUERY = document.querySelector.bind(document);
const QUERYQUERY = document.querySelectorAll.bind(document);

let inputValue = QUERY('#newTask'); 
let addItem = QUERY('#addItem');
let todo = QUERY('#todo');
let arrayList = [];

document.querySelector('#addItem').addEventListener('click', ()=>{
    addTask(inputValue)
})


let addTask = (inputValue) => {
    arrayList.push(inputValue.value);
    inputValue.value = '';
    showTask(arrayList, todo)

}
let showTask = (data, id) => {
    let content = "";
    data.map((item, index) => {
        content += `
        <li class="d-flex justify-content-between">
        <span>${item}</span>
            <div class="buttons">
                 <i class="fa-solid remove fa-trash-can"></i>
                <i class="fa-regular complete fa-circle-check"></i>
            </div>
        </li>
        `
    });
    id.innerHTML = content;
    // btnCompletes
    if (id == document.querySelector(`#todo`)) {
        let btnCompletes = id.querySelectorAll('.complete');
        for (let i = 0; i < btnCompletes.length; i++) {
            btnCompletes[i].onclick = () => {
                completeTask(i, data, id)
            }
        }
    }
    //BtnRemoves
    let btnRemoves = id.querySelectorAll('.remove');
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

let completed = QUERY('#completed');

let completeTask = (index, data, id) => {
    let b = data.splice(index, 1);
    completeTaskList.push(b);
    showTask(data, id);
    showTask(completeTaskList, completed);
}
//Sort Task
function sortTasks() {
    completeTaskList.sort();
    showTask(completeTaskList, completed);
    arrayList.sort();
    showTask(arrayList, todo);
}
//reverse Task
function reverseTasks() {
    completeTaskList.reverse();
    showTask(completeTaskList, completed);
    arrayList.reverse();
    showTask(arrayList, todo);
}
document.getElementById('two').onclick = sortTasks;
document.getElementById('three').onclick = reverseTasks;

document.getElementById('all').addEventListener('click', ()=>{
    showTask(arrayList, todo);
}) ;
document.getElementById('one').addEventListener('click', ()=>{
    showTask(completeTaskList, completed);
}) ;

