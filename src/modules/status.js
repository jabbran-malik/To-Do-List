import tasks from './tasks.js';
import { saveTasks } from './storage.js';

export const updateStatus = (index, completed) => {
    const task = tasks.find((task) => task.index === index);
    if (task) {
        task.completed = completed;
        saveTasks();
    }
};

export const clearCompleted = () => {
    const uncompleted = tasks.filter((task) => !task.completed);
    // Reindex remaining tasks
    uncompleted.forEach((task, i) => {
        task.index = i + 1;
    });
    tasks.length = 0;
    tasks.push(...uncompleted);
    saveTasks();
};