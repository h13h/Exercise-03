document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input value
    const newTask = document.getElementById('new-task').value;

    if (newTask.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"> ${newTask}`;

        // Append to the existing task list
        document.getElementById('tasks').appendChild(li);

        // Clear the input field
        document.getElementById('new-task').value = '';
    }
});
