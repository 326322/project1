function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.textContent = taskInput.value;

        // Add a delete button to each task
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}
