document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    
    let li = document.createElement("li");
    li.innerHTML = `<span onclick="toggleTask(this)">${taskText}</span>
                    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;

    taskList.appendChild(li);
    saveTasks();
    
    taskInput.value = "";
}

function toggleTask(task) {
    task.classList.toggle("completed");
    saveTasks();
}

function deleteTask(task) {
    task.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let taskList = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", taskList);
}

function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
}
