import tasks from "./tasks.js";
import { saveTasks } from "./storage.js";

export const editTask=(index ,newDescription)=>{
    const task=tasks.find((task)=> task.index===index);
    if (task)
        task.textinput=newDescription;
    saveTasks()
}