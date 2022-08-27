import ToDoList from "./ToDoList.js";
export default class ListCompleted extends ToDoList {

    sortList(data) {
        return data.sort()
    }
    reverseList(data) {
        return data.reverse()
    }

}