import ToDoList from "./ToDoList.js";
export default class ListToDo extends ToDoList {

    sortList(data) {
        data?.sort((a, b) => (a.valueForm.toLowerCase() < b.valueForm.toLowerCase() ? -1 : 1))
       
        return data
        
    }
    reverseList(data) {
        data?.sort((a, b) => (a.valueForm.toLowerCase() > b.valueForm.toLowerCase() ? -1 : 1))
        return data;
    }

}