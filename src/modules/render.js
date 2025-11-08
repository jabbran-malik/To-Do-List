import tasks from "./tasks.js";
import { deleteTask } from "./delete.js";
import { saveTasks } from "./storage.js";
import { editTask } from "./edit.js";

export const renderTasks = () => {
    const todolist = document.getElementById('todo-list');
    todolist.innerHTML = '';
     
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} />
            <span class="task-text">${task.textinput}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        // Add checkbox functionality
        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
            saveTasks();
        });

        // Add edit functionality
        const taskText = li.querySelector('.task-text');
        const editBtn = li.querySelector('.edit-btn');
        
        editBtn.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'edit-input';
            input.value = task.textinput;
            
            taskText.replaceWith(input);
            input.focus();
            
            input.addEventListener('blur', () => {
                editTask(task.index, input.value);
                renderTasks();
            });
        });

        // Add delete functionality
        li.querySelector('.delete-btn').addEventListener('click', () => {
            deleteTask(task.index);
            renderTasks();
        });

        todolist.appendChild(li);
    });
};