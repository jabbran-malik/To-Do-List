import './style.css';
import { loadTasks } from './modules/storage.js';
import { renderTasks } from './modules/render.js';
import { addTask } from './modules/add.js';

// Get initial tasks from localStorage
let tasks = loadTasks();

// Render the current task list
renderTasks();

// Add new task on button click
document.getElementById('add-task-btn').addEventListener('click', () => {
    const input = document.getElementById('new-task');
    const description = input.value.trim();

    if (description !== '') {
        addTask(description);
        renderTasks();
        input.value = '';
    }
});

// Add enter key support
document.getElementById('new-task').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const description = e.target.value.trim();
        if (description !== '') {
            addTask(description);
            renderTasks();
            e.target.value = '';
        }
    }
});