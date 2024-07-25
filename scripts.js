document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
    }

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete')) {
            event.target.parentElement.remove();
        } else if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
            event.target.closest('li').classList.toggle('completed');
        }
    });
});
