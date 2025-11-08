import tasks from "./tasks.js";
import {saveTasks} from "./storage.js";

export const addTask=(textinput)=>{
    const newTask= {
        textinput,
        completed: false,
        index:tasks.length +1,
    }
    tasks.push(newTask)
    saveTasks();
    return tasks;
}