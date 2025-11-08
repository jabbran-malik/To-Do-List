import tasks from "./tasks.js";
import { saveTasks } from "./storage.js";

export const deleteTask= (index)=>{
  const updated = tasks.filter((task) =>
     task.index !== index);
    updated.forEach((task , i)=>{
        task.index=i+1;

    })

    tasks.length=0;
    tasks.push(...updated)
    saveTasks();
}