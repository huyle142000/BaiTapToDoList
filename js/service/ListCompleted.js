import ToDoList from "./ToDoList.js";
export default class ListCompleted extends ToDoList {

    sortList(data) {
        data.sort(function (a, b) {
            let nameA = a.valueForm.toLowerCase(), nameB = b.valueForm.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
        })
        return data
    }
    reverseList(data) {
        data?.sort((a, b) => (a.valueForm.toLowerCase() > b.valueForm.toLowerCase() ? -1 : 1))
        return data;
    }
}