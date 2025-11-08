import tasks from "./tasks.js";

export const saveTasks=()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));

}


export const loadTasks=()=>{
  const stored=localStorage.getItem('tasks')
  if(stored){
    const parsed=JSON.parse(stored)
    tasks.length=0
    tasks.push(...parsed)
  }
  return tasks;
}
